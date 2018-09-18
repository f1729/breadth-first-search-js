function Graph () {
    this.nodes = [];
    this.graph = {};
    this.start = null;
    this.end = null;
}

Graph.prototype.addNode = function (node) {
    this.nodes.push(node);
    var title = node.value;
    this.graph[title] = node;
}


Graph.prototype.getNode = function (name) {
    if (this.graph[name]) return this.graph[name];
    return null
}

Graph.prototype.setStart = function (name) {
	this.start = this.graph[name];
	return this.graph[name]
}

Graph.prototype.setEnd = function (name) {
	this.end = this.graph[name];
	return this.graph[name];
}
