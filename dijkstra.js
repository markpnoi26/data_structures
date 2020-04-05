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
        const shortestPath = []
        const distances = {}
        const previousNode = {}
        const priorityQ = new PriorityQueue()
        let deQ;

        for (let key in this.adjacencyList) {
            if (start === key) {
                distances[key] =  0
                priorityQ.enQ(key, 0)
            } else {
                distances[key] = Infinity
            }

            previousNode[key] = null
        }

        
        while (priorityQ.values.length > 0) {
            // deQueued from priority Queue
            deQ = priorityQ.deQ()
            // check first if target is reached, if it is
            // return the path it took to get there
            if (deQ.val === target) {
                // return distance
                let currNode = target
                while (currNode !== start) {
                    shortestPath.push(currNode)
                    currNode = previousNode[currNode]
                    if (currNode === start) {
                        shortestPath.push(currNode)
                    }
                }
                return shortestPath.reverse()
            }

            // if target node isnt reached yet, check if deQ is defined (will return undefined if priority Queue is empty)
            if (deQ || distances[deQ.val] !== Infinty) {
                // loop through all adjacency list for deQ.val
                // this.adjacencyList["A"] = [{node..}, {node..}]
                for (let el of this.adjacencyList[deQ.val]) {
                    let newWt = el.weight+deQ.priority
                    // (calculate the new possible wt of the next node, by adding the priority(wt) to the node weight)
                    if (newWt < distances[el.node]) {
                        // if the new potential wt is less than distances recorded, update and add that new node to by enqueue
                        // this ensures that the shortest path from that node is enqueued first.
                        distances[el.node] = newWt
                        // update the previous node if it is lesser
                        previousNode[el.node] = deQ.val
                        priorityQ.enQ(el.node, newWt)
                    }
                }
            }
        }

        return ("No short path to target")
        // console.log(priorityQ)
        // console.log(previousNode)
        // console.log(distances)
        // console.log(shortestPath)
        // return shortestPath
    }

}

// not an optimized PriorityQueue, this class works on 
// O(n*log(n))
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

console.log(djGraph.shortestPath("A", "E"))
console.log(djGraph.shortestPath("G", "A"))
console.log(djGraph.shortestPath("B", "A"))