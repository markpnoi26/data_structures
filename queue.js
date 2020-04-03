class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    shift() {
        if (this.first === null) {
            this.last = null
            return null
        }
        const shiftedItem = this.first
        if (shiftedItem === this.last) {
            this.last = null
        }
        this.first = this.first.next
        shiftedItem.next = null
        this.size--
        return shiftedItem
    }

    push(val) {
        let newNode = new Node(val)
        if (this.first === null && this.last === null) {
            this.first = newNode
            this.last = newNode
            this.size++
        } else {
            this.last.next = newNode
            this.last = newNode
            this.size++
        }
        return this.size
    }

    print() {
        const arr = []
        let node = this.first
        while (node !== null) {
            arr.push(node.value)
            node = node.next
        }
        console.log(arr)
    }
}


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


let myQ = new Queue()

myQ.push(1)
myQ.push(2)
myQ.push(3)
myQ.print()
console.log(myQ.size)
console.log('shifted:', myQ.shift())
myQ.print()
myQ.shift()
myQ.shift()
myQ.shift()
myQ.shift()
myQ.shift()
console.log(myQ.size)
