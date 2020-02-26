class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = []
  }

  addEdge(vert1, vert2) {
    this.adjacencyList[vert1].push(vert2)
    this.adjacencyList[vert2].push(vert1)
  }

  removeEdge(vert1, vert2) {
    this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(element => element !== vert2)
    this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(element => element !== vert1)
  }

  removeVertex(vert) {
    for (let el of this.adjacencyList[vert]) {
      this.removeEdge(vert, el)
    }

    delete this.adjacencyList[vert]
  }

}


let newGraph = new Graph()

newGraph.addVertex("Tokyo")
newGraph.addVertex("Dallas")
newGraph.addVertex("Aspen")

newGraph.addEdge('Tokyo', 'Dallas')
newGraph.addEdge('Dallas', 'Aspen')

console.log(newGraph.adjacencyList)

newGraph.removeEdge('Tokyo', 'Dallas')

console.log(newGraph.adjacencyList)

newGraph.removeVertex('Aspen')

console.log(newGraph.adjacencyList)
