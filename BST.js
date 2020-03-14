class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    }

    let currentNode = this.root
    while (true) {
      if (currentNode.value < newNode.value) {
        console.log('pushing to right...')
        if (currentNode.right === null) {
          currentNode.right = newNode
          break
        } else {
          currentNode = currentNode.right
        }
      } else if (currentNode.value > newNode.value) {
        console.log('pushing to left...')
        if (currentNode.left === null) {
          currentNode.left = newNode
          break
        } else {
          currentNode = currentNode.left
        }
      } else {
        return undefined
      }
    }
    return this
  }

  find(value, node=this.root) {
    if (!node) return false
    if (value === node.value) {
      console.log("I found it...")
      console.log(node)
      return true
    }

    if (value > node.value) {
      console.log("finding right...")
      if (node.right === null) return false
      this.find(value, node.right)
    } else if (value < node.value) {
      console.log("finding left...")
      if (node.left === null) return false
      this.find(value, node.left)
    }
  }

  bfs(value) {
    const queue = []
    const visited = []
    if (!this.root) return false
    queue.push(this.root)

    while (queue.length) {
      if (queue[0].value === value) {
        console.log('found it...')
        return queue[0]
      }
      if (queue[0].left) queue.push(queue[0].left)
      if (queue[0].right) queue.push(queue[0].right)
      let shiftedNode = queue.shift()
      visited.push(shiftedNode)
    }

    return false
  }

  dfsPreOrder(node = this.root) {
    let values = []
    let currentNode = node
    if (!currentNode.left) {
      values.push(currentNode.push)

    }
  }


}

let newBST = new BinarySearchTree()
newBST.insert(10)
newBST.insert(9)
newBST.insert(19)
newBST.insert(21)
newBST.insert(22)

console.log(newBST.bfs(22))


// console.log(newBST)
