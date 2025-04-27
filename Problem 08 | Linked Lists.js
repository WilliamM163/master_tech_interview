class Node {
    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(data) {
        this.head = new Node(data)
        this.tail = this.head
        this.length = 1
    }

    prepend(data) {
        const newHead = new Node(data, this.head)
        this.head = newHead
        this.length++
    } // O(1)

    append(data) {
        const newTail = new Node(data)
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
        for (let i = 0; i < index-1; i++) {
            currentNode = currentNode.next
        }
        const nextNode = currentNode.next
        currentNode.next = new Node(data, nextNode)
        this.length++
    }

    remove(index) {
        if (index === 0) {
            const data = this.head.data
            this.head = this.head.next
            this.length--
            return data
        }
        let currentNode = this.head
        for (let i = 0; i < index-1; i++) {
            currentNode = currentNode.next
        }
        currentNode.next = currentNode.next.next
        this.length--
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
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(20)
myLinkedList.append(12)
myLinkedList.append(6)
myLinkedList.append(80)

console.log(myLinkedList.toArray())
myLinkedList.remove(2)
console.log(myLinkedList.toArray())
