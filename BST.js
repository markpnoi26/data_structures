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
      console.log(currentNode)
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
      }
    }
    return this
  }
}

let newBST = new BinarySearchTree()
newBST.insert(10)
newBST.insert(9)
newBST.insert(19)
newBST.insert(21)

console.log(newBST.insert(22))


console.log(newBST)
