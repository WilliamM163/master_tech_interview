class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
       return this.data[index]
    }

    push(item) {
       this.data[this.length++] = item
       return this.length
    }

    pop() {
        const lastItem = this.data[--this.length]
        delete this.data[this.length]
        return lastItem
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index);
        return this.pop()
    }

    shiftItems(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1]
        }
    }
}