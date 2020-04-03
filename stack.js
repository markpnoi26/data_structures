class Stack {
    constructor() {
        this.first = null
        this.size = 0
    }

    pop() {
        if (this.first.next === null) {
            this.size = 0
            return this.first.next
        } 
        let poppedNode = this.first
        this.first = this.first.next

        poppedNode.next = null
        this.size--
        return poppedNode
    }

    push(val) {
        const newNode = new Node(val)
        newNode.next = this.first
        this.first = newNode
        this.size++
    }

    print() {

    }
}


class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}