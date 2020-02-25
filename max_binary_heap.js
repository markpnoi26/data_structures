class MaxBinaryHeap {
  constructor () {
    this.values = []
  }

  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }

  bubbleUp() {
    let index = this.values.length - 1
    const element = this.values[index]
    while (index > 0 && this.values[index] >= this.values[Math.floor((index -1)/2)]) {
      let parentIndex = Math.floor((index -1)/2)
      let parent = this.values[parentIndex]
      if (element > parent) {
        this.values[parentIndex] = element
        this.values[index] = parent
        index = parentIndex
      }
    }
  }

  extractMax() {
    if (this.values.length > 1) {
      let poppedValue = this.values.pop()
      this.values[0] = poppedValue
      this.bubbleDown(0)
    } else {
      this.values.pop()
    }
  }

  takeOut(element) {
    if (this.values.length > 1) {
      let index = this.values.indexOf(element)
      let poppedValue = this.values.pop()
      this.values[index] = poppedValue
      this.bubbleDown(index)
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
        element < this.values[2*currentIndex + 1] ||
        element < this.values[2*currentIndex + 2]
      )) {
      let maxChild, maxChildIdx
      let leftChildIdx = (2*currentIndex + 1);
      let rightChildIdx = (2*currentIndex + 2);
      let leftChild = this.values[leftChildIdx];
      let rightChild = this.values[rightChildIdx];

      if (leftChild > rightChild || rightChild === undefined) {
        maxChild = leftChild
        maxChildIdx = leftChildIdx
      } else {
        maxChild = rightChild
        maxChildIdx = rightChildIdx
      }

      if (element >= maxChild) break;
      this.values[currentIndex] = maxChild
      this.values[maxChildIdx] = element
      currentIndex = maxChildIdx
    }
  }


}

// run test

let heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(25)
heap.insert(100)
heap.insert(27)
heap.insert(10)
heap.insert(30)
heap.insert(40)
heap.insert(105)
heap.insert(75)


heap.takeOut(100)
console.log(heap.values)
heap.insert(100)
console.log(heap.values)

heap.extractMax()
console.log(heap.values)
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
console.log(heap.values)
