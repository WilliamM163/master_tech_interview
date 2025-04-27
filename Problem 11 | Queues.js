class Queue1 {
    constructor() {
        this.queue = []
    }

    enqueue(data) {
        this.queue.push(data)
    } // O(1)
    dequeue() {
        return this.queue.shift()
    } // O(n)
    peek() {
        return this.queue[0]
    } // O(1)

    toString() {
        return '<- ' + this.queue + ' <-'
    }
}

const queue1 = new Queue1()
queue1.enqueue(0)
queue1.enqueue(1)
queue1.enqueue(2)
queue1.enqueue(3)
console.log(queue1.toString())
console.log(queue1.dequeue())
console.log(queue1.toString())

class Queue2 {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    enqueue(data) {
        if (this.length === 0) {
            this.head = new Node(data)
            this.tail = this.head
        } else {
            this.tail.next = new Node(data)
            this.tail = this.tail.next
        }
        this.length++
    } // O(1)
    dequeue() {
        if (this.length === 0) {
            return undefined
        }
        const data = this.head.data
        this.head = this.head.next
        this.length--
        return data
    } // O(1)
    peek() {
        return this.head.data
    } // O(1)

    toString() {
        const array = []
        let currentNode = this.head
        for (let i = 0; i < this.length; i++) {
            array.push(currentNode.data)
            currentNode = currentNode.next
        }
        return '<- ' + array + ' <-'
    }
}

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

const queue2 = new Queue2()
queue2.enqueue(0)
queue2.enqueue(1)
queue2.enqueue(2)
queue2.enqueue(3)
console.log(queue2.toString())
console.log(queue2.dequeue())
console.log(queue2.toString())