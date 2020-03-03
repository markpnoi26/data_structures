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
    if (!this.head) return undefined
    let oldHead = this.head
    let newHead = oldHead.next
    this.head = newHead
    oldHead.next = null
    let currentCount -= 1
    return oldHead
  }

  unshift(val) {
    if (!this.head) return this.push(val)
    let oldHead = this.head
    this.head = new Node(val)
    this.head.next = oldHead
    this.length += 1
    return this
  }

  get(index) {
    if (this.length === 0 || index < 0) return null
    let count = 0
    let current = this.head
    while (count !== index) {
      if (current.next === undefined) return null
      current = current.next
      count ++
    }
    return current
  }

  set(index, val) {
    if (index < 0 || index > this.length) return false
    let currentNode = this.get(index)
    currentNode.val = val
    return true
  }

  remove(index) {
    if (index < 0 || index > this.length) return null
    let currentNode = get(index)
    let beforeNode = get(index - 1)
    beforeNode.next = currentNode.next
    this.length--
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
