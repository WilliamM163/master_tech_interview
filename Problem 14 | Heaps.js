class Node {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class MaxHeap {
    constructor(data) {
        this.heap = []
    }

    push(data) {
        this.heap.push(data)
    }
    pop() {
        return this.heap.unshift()
    }
}