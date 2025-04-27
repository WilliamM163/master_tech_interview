class Node {
    constructor(data, prev=null, next=null) {
        this.data = data
        this.prev = prev
        this.next = next
    }
}

class DoublyLinkedList {
    constructor(data) {
        this.head = new Node(data)
        this.tail = this.head
        this.length = 1
    }

    prepend(data) {
        const newHead = new Node(data, null, this.head)
        this.head.prev = newHead
        this.head = newHead
        this.length++
    } // O(1)

    append(data) {
        const newTail = new Node(data, this.tail)
        this.tail.next = newTail
        this.tail = newTail
        this.length++
    } // O(1)

    insert(index, data) {
        if (index === 0) {
            this.prepend(data)
            return
        } else if (index === this.length - 1) {
            this.append(data)
            return
        }
        let currentNode = this.head
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        const newNode = new Node(data, currentNode.prev, currentNode)
        currentNode.prev.next = newNode
        this.length++
    }

    toArray() {
        const array = []
        let currentNode = this.head
        for (let i = 0; i < this.length; i++) {
            array.push(currentNode.data)
            currentNode = currentNode.next
        }
        return array
    } // O(n)

    toReversedArray() {
        const array = []
        let currentNode = this.tail
        for (let i = 0; i < this.length; i++) {
            array.push(currentNode.data)
            currentNode = currentNode.prev
        }
        return array
    }
}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(20)
myLinkedList.append(12)
myLinkedList.append(6)
myLinkedList.append(80)

console.log(myLinkedList.toArray())
console.log(myLinkedList.toReversedArray())