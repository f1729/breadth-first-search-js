 console.log('index init js')
 var graph = new Graph();
 var data = {
  "movies": [
  {
    "title": "Diner",
    "cast": [
    "Steve Guttenberg",
    "Daniel Stern",
    "Mickey Rourke",
    "Kevin Bacon",
    "Tim Daly",
    "Ellen Barkin",
    "Paul Reiser",
    "Kathryn Dowling",
    "Michael Tucker",
    "Jessica James",
    "Colette Blonigan",
    "Kelle Kipp",
    "Clement Fowler",
    "Claudia Cron"
    ]
  },
  {
    "title": "Footloose",
    "cast": [
    "Kevin Bacon",
    "Lori Singer",
    "Dianne Wiest",
    "John Lithgow",
    "Sarah Jessica Parker",
    "Chris Penn",
    "Frances Lee McCain",
    "Jim Youngs",
    "John Laughlin",
    "Lynne Marta",
    "Douglas Dirkson"
    ]
  },
  {
    "title": "Flatliners",
    "cast": [
    "Kiefer Sutherland",
    "Julia Roberts",
    "Kevin Bacon",
    "William Baldwin",
    "Oliver Platt",
    "Kimberly Scott",
    "Joshua Rudoy",
    "Benjamin Mouton",
    "Hope Davis",
    "Patricia Belcher",
    "Beth Grant"
    ]
  },
  {
    "title": "Eat Pray Love",
    "cast": [
    "Julia Roberts",
    "Javier Bardem",
    "Billy Crudup",
    "Richard Jenkins",
    "Viola Davis",
    "James Franco",
    "Sophie Thompson",
    "Mike O 'Malley",
    "Christine Hakim",
    "Arlene Tur",
    "Hadi Subiyanto",
    "Gita Reddy",
    "Tuva Novotny",
    "Luca Argentero",
    "Rushita Singh"
    ]
  },
  {
    "title": "Spotlight",
    "cast": [
    "Mark Ruffalo",
    "Michael Keaton",
    "Rachel McAdams",
    "Liev Schreiber",
    "John Slattery",
    "Brian d'Arcy James",
    "Stanley Tucci",
    "Gene Amoroso",
    "Jamey Sheridan",
    "Billy Crudup",
    "Maureen Keiller",
    "Richard Jenkins",
    "Paul Guilfoyle",
    "Len Cariou",
    "Neal Huff",
    "Michael Cyril Creighton",
    "Laurie Heineman",
    "Tim Progosh"
    ]
  }
  ]
}

for (var i = 0; i < data.movies.length; i++) {
  var movie = data.movies[i].title;
  var cast = data.movies[i].cast;
  var movieNode = new Node(movie);
  graph.addNode(movieNode);

  for (var j = 0; j < cast.length; j++) {
    var actor = cast[j];
    var actorNode = graph.getNode(actor);
    if (actorNode == undefined) {
      actorNode = new Node(actor);
    }
    graph.addNode(actorNode);
    movieNode.addEdge(actorNode);
  }
}

console.log('GRAPH: ', graph);
var start = graph.setStart('Rachel McAdams');
// var nodeStart = graph.setStart('Kevin Bacon');
var end = graph.setEnd('Kevin Bacon');

var queue = [];

start.searched = true;
queue.push(start);

while (queue.length > 0) {
  var current = queue.shift();
  console.log(current)
  if (current == end) {
    console.log("Found " + current.value);
    break;
  }
  var edges = current.edges;
  for (var i = 0; i < edges.length; i++) {
    var neighbor = edges[i];
    if (!neighbor.searched) {
      neighbor.searched = true;
      neighbor.parent = current;
      queue.push(neighbor);
    }
  }
}