class MyQueue {
    constructor() {
        this.stack = []
    }

    push(data) {
        this.stack.push(data)
    }
    pop() {
        if (this.stack.length === 0) {
            return undefined
        }
        const stack2 = []
        while (this.stack.length > 0) {
            stack2.push(this.stack.pop())
        }
        const data = stack2.pop()
        while (stack2.length > 0) {
            this.stack.push(stack2.pop())
        }
        return data
    }
    peek() {
        if (this.stack.length === 0) {
            return undefined
        }
        const stack2 = []
        while (this.stack.length > 0) {
            stack2.push(this.stack.pop())
        }
        const data = stack2[stack2.length - 1]
        while (stack2.length > 0) {
            this.stack.push(stack2.pop())
        }
        return data
    }
    empty() {
        return this.stack.length === 0
    }
}
