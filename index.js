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
for (var i=0; i<data.movies.length; i++) {
    // console.log(data.movies[i].title)
    var movie = data.movies[i].title;
    var movieNode = new Node(movie);
    graph.addNode(movieNode);
    for (var j = 0; j < data.movies[i].cast.length; j++) {
        // console.log(data.movies[i].cast[j]);
        var actorNode = graph.getNode(data.movies[i].cast[j]); 
        if (graph.getNode(actorNode) == null) {
            actorNode = new Node(data.movies[i].cast[j]);
        }
        graph.addNode(actorNode);
        movieNode.addEdge(actorNode);
    }

}

console.log('GRAPH: ', graph);
var nodeStart = graph.setStart('Rachel McAdams');
// var nodeStart = graph.setStart('Kevin Bacon');
var nodeEnd = graph.setEnd('Kevin Bacon');

var queue = [];

nodeStart.searched = true;
queue.push(nodeStart);

while (queue.length > 0) {
    var current = queue.shift();
    // console.log(current.value);
    if (current == nodeEnd) {
        console.log('Found ' + current.value);
        break
    }
    for (var i = 0; i < current.edges.length; i++) {
        // console.log(current.edges);
        if (!current.edges[i].searched) {
            current.edges[i].parent = current;
            current.edges[i].searched = true;
            queue.push(current.edges[i]);
        }
    }

}