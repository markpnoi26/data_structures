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
    return undefined if (!this.tail)
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

  shift() {
    return undefined if (!this.head)
    let oldHead = this.head
    let newHead = oldHead.next
    this.head = newHead
    oldHead.next = null
    let currentCount -= 1
    return oldHead
  }

  unshift(val) {
    return this.push(val) if (!this.head)
    let oldHead = this.head
    this.head = new Node(val)
    this.head.next = oldHead
    this.length += 1
    return this
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
