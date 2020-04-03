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
        let currNode = this.first
        const arr = []
        while (currNode !== null) {
            arr.push(currNode.val)
            currNode = currNode.next
        }
        console.log(arr)
    }
}


class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


let newStack = new Stack()


newStack.push(5)
newStack.push(10)
newStack.push(11)
newStack.push(12)
newStack.push(50)
newStack.push(3)
newStack.push(1)
newStack.push(0)
newStack.print()
console.log(newStack.pop())
console.log(newStack.pop())
newStack.print()
