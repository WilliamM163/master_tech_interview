class HashTable {
    constructor(size) {
        this.data = new Array(size)
    } // 0(1)

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i) * i
        }
        hash = hash % this.data.length
        return hash
    } // O(1)

    get(key) {
        const index = this._hash(key)
        const items = this.data[index]
        if (!items) return undefined
        for (let item of items) {
            if (item[0] === key) return item
        }
        return undefined
    } // O(1)

    set(key, value=undefined) {
        const index = this._hash(key)
        if (!this.data[index]) this.data[index] = []
        this.data[index].push([key, value])
    } // O(1)

    keys() {
        const keysArray = []
        for (let i = 0; i < this.data.length; i++) {
            const items = this.data[i]
            if (items) {
                // Pushing all keys in the array of values
                keysArray.push(...items.map(item => item[0]))
            }
        }
        return keysArray
    } // O(n)
}

const myHashTable = new HashTable(20)
console.log(myHashTable.get('grapes'))
myHashTable.set('grapes', 100)
myHashTable.set('apples', 54)
myHashTable.set('oranges', 69)
myHashTable.set('banana', 24)
console.log(myHashTable.keys())
