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


  dfTrav(vert) {
    if (!vert) return null
    const visited = {}
    let order = []
    order = order.concat(this.dfTravRecursive(vert, visited))
    return order
  }

  dfTravRecursive(vert, visited) {
    visited[vert] = true
    let order = []
    order.push(vert)
    for (let adj of this.adjacencyList[vert]) {
      if (visited[adj] === undefined) {
        order = order.concat(this.dfTravRecursive(adj, visited))
      }
    }
    return order
  }

  dfTravIterate(vert) {
    const visited = {}
    const order = []
    const stack = []
    stack.push(vert)
    while (stack.length > 0) {
      let popped = stack[stack.length-1]
      if (!visited[popped]) {
        visited[popped] = true
        order.push(popped)
        for (let adj of this.adjacencyList[popped]) {
          stack.push(adj)
        }
      } else {
        stack.pop()
      }
    }
    return order
  }


}


// const newGraph = new Graph()

// newGraph.addVertex("Tokyo")
// newGraph.addVertex("Dallas")
// newGraph.addVertex("Aspen")

// newGraph.addEdge('Tokyo', 'Dallas')
// newGraph.addEdge('Dallas', 'Aspen')
// console.log(newGraph.adjacencyList)

// newGraph.removeEdge('Tokyo', 'Dallas')
// console.log(newGraph.adjacencyList)

// newGraph.removeVertex('Aspen')
// console.log(newGraph.adjacencyList)

const dfsGraph = new Graph()
dfsGraph.addVertex("A")
dfsGraph.addVertex("B")
dfsGraph.addVertex("C")
dfsGraph.addVertex("D")
dfsGraph.addVertex("E")
dfsGraph.addVertex("F")
dfsGraph.addVertex("G")

dfsGraph.addEdge("A", "B")
dfsGraph.addEdge("A", "C")
dfsGraph.addEdge("B", "D")
dfsGraph.addEdge("C", "E")
dfsGraph.addEdge("D", "E")
dfsGraph.addEdge("D", "F")
dfsGraph.addEdge("E", "F")
dfsGraph.addEdge("F", "G")
console.log(dfsGraph.adjacencyList)
console.log(dfsGraph.dfTrav("A"))
// console.log(dfsGraph.dfTrav("B"))
console.log(dfsGraph.dfTravIterate("A"))