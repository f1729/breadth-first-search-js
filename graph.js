function Graph () {
    this.nodes = [];
    this.graph = {};
}

Graph.prototype.addNode = function (node) {
    this.nodes.push(node);
    var title = node.value;
    this.graph[title] = node;
}


Graph.prototype.getNode = function (node) {
    if (this.graph[node.value]) return node;
    return null
}