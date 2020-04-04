class WeigthedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertexName) {
        if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = []
    }

    addEdge(vert1, vert2, weight) {
        this.adjacencyList[vert1].push({
            node: vert2,
            weight
        })
        this.adjacencyList[vert2].push({
            node: vert1,
            weight
        })
    }

    // dijkstra's algorithm
    shortestPath(start, target) {
        const visited = {}
        const distances = {}
        const previousNode = {}
        const priorityQ = new PriorityQueue()
        let deQ;

        console.log(this.adjacencyList)

        for (let key in this.adjacencyList) {
            if (start === key) {
                distances[key] =  0
                priorityQ.enQ(key, 0)
            } else {
                distances[key] = Infinity
                priorityQ.enQ(key, Infinity)
            }

            previousNode[key] = null
        }

        
        while (priorityQ.values.length > 0) {
            deQ = priorityQ.deQ()
            if (deQ.val === target) {
                // do something
                // break the loop
                return visited
            }

            if (deQ || distances[deQ] !== Infinty) {
                for (let vertex of this.adjacencyList[deQ.val]) {
                    let nextNode = this.adjacencyList[deQ.val][vertex]
                    console.log(nextNode)
                }
            }

        }

        console.log(distances)
        console.log(priorityQ)
        console.log(previousNode)
    }

}

class PriorityQueue {

    constructor() {
        this.values = []
    }

    enQ(val, priority) {
        this.values.push({ val, priority })
        this.sort()
    }

    deQ() {
        return this.values.shift()
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}


const djGraph = new WeigthedGraph()
djGraph.addVertex("A")
djGraph.addVertex("B")
djGraph.addVertex("C")
djGraph.addVertex("D")
djGraph.addVertex("E")
djGraph.addVertex("F")
djGraph.addVertex("G")

djGraph.addEdge("A", "B", 4)
djGraph.addEdge("A", "C", 2)
djGraph.addEdge("B", "E", 3)
djGraph.addEdge("C", "D", 2)
djGraph.addEdge("C", "F", 4)
djGraph.addEdge("D", "E", 3)
djGraph.addEdge("D", "F", 1)
djGraph.addEdge("E", "F", 1)
djGraph.addEdge("F", "G", 5)

djGraph.shortestPath("A", "G")