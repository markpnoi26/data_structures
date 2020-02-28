class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let newNode = new Node(val)
    this.length +=1
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    return this
  }

  pop() {
    let oldTail = this.tail
    let currentCount = 1
    let currentNode = this.head
    let target = this.length - 1
    while (currentCount !== target) {
      currentNode = currentNode.next
      currentCount += 1
    }
    currentNode.next = null
    this.tail = currentNode
    this.length = this.length - 1

    return oldTail
  }
}

let newList = new LinkedList()
newList.push(9)
newList.push(10)
newList.push(50)
newList.push(100)
newList.push(3)
console.log(newList.head, newList.tail, newList.length)
newList.pop()
console.log(newList.head, newList.tail, newList.length)
