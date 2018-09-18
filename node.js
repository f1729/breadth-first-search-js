function Node (value) {
    this.value = value;
    this.edges = [];
    this.parent = null;
    this.searched = false;
}

Node.prototype.addEdge = function (child) {
    this.edges.push(child);
    child.edges.push(this);
}
