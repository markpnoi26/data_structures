class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }

  // the priority is low it goes higher
  // the priority is high it sinks down

  bubbleUp() {
    let index = this.values.length - 1
    const node = this.values[index]
    while (index > 0 && this.values[index].priority <= this.values[Math.floor((index -1)/2)].priority) {
      let parentIndex = Math.floor((index -1)/2)
      let parent = this.values[parentIndex]
      if (node.priority < parent.priority) {
        this.values[parentIndex] = node
        this.values[index] = parent
        index = parentIndex
      }
    }
  }

  dequeue() {
    if (this.values.length > 1) {
      let poppedValue = this.values.pop()
      this.values[0] = poppedValue
      this.bubbleDown(0)
    } else {
      this.values.pop()
    }
  }

  bubbleDown(index) {
    let currentIndex = index
    const element = this.values[currentIndex]
    while (
      currentIndex !== this.values.length - 1 &&
      (
        element.priority > this.values[2*currentIndex + 1].priority ||
        element.priority > this.values[2*currentIndex + 2].priority
      )) {
      let minChild, minChildIdx
      let leftChildIdx = (2*currentIndex + 1);
      let rightChildIdx = (2*currentIndex + 2);
      let leftChild = this.values[leftChildIdx];
      let rightChild = this.values[rightChildIdx];

      if (leftChild < rightChild || rightChild === undefined) {
        minChild = leftChild
        minChildIdx = leftChildIdx
      } else {
        minChild = rightChild
        minChildIdx = rightChildIdx
      }

      if (element <= maxChild) break;
      this.values[currentIndex] = maxChild
      this.values[maxChildIdx] = element
      currentIndex = maxChildIdx
    }
  }



}

class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}
