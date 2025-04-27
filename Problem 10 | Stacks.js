class Stack1 {
    constructor() {
        this.array = []
    }

    push(data) {
        this.array.push(data)
    } // O(1)
    pop() {
        if (this.array.length === 0) {
            return undefined
        }
        return this.array.pop()
    } // O(1)
    peek() {
        return this.array[this.array.length-1]
    } // O(1)

    toString() {
        return '-> ' + this.array.toReversed()
    }
}

class Stack2 {
    constructor() {
        this.head = null
        this.length = 0
    }

    push(data) {
        this.head = new Node(data, this.head)
        this.length++
    } // O(1)
    pop() {
        if (this.length > 0) {
            const data = this.head.data
            this.head = this.head.next
            this.length--
            return data
        }
        return undefined
    } // O(1)
    peek() {
        if (this.length > 0) {
            const data = this.head.data
            return data
        }
        return undefined
    } // O(1)

    toString() {
        const array = []
        let currentNode = this.head
        for (let i = 0; i < this.length; i++) {
            array.push(currentNode.data)
            currentNode = currentNode.next
        }
        return '-> ' + array
    }
}

class Node {
    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}

const stack1 = new Stack1()
stack1.push(10)
stack1.push(11)
stack1.push(12)
stack1.push(13)
stack1.push(14)
stack1.push(15)
console.log(stack1.toString())
stack1.pop()
console.log(stack1.toString())

const stack2 = new Stack2()
stack2.push(0)
stack2.push(1)
stack2.push(2)
stack2.push(3)
stack2.push(4)
console.log(stack2.toString())