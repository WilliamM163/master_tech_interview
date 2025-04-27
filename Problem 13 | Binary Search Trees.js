class BinarySearchTree {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }

    insert(data) {
        let currentNode = this
        while (true) {
            if (data < currentNode.data) {
                if (currentNode.left) {
                    currentNode = currentNode.left
                } else {
                    currentNode.left = new BinarySearchTree(data)
                    break
                }
            } else {
                if (currentNode.right) {
                    currentNode = currentNode.right
                } else {
                    currentNode.right = new BinarySearchTree(data)
                    break
                }
            }
        }
    }

    search(data) {
        let currentNode = this
        while (true) {
            if (data < currentNode.data) {
                if (currentNode.left) {
                    currentNode = currentNode.left
                } else {
                    return
                }
            } else if (data > currentNode.data) {
                if (currentNode.right) {
                    currentNode = currentNode.right
                } else {
                    return
                }
            } else {
                return currentNode
            }
        }
    }

    static toArray(currentNode) {
        if (currentNode === null) {
            return []
        }
        return [...toArray(currentNode.left), currentNode.data, ...toArray(currentNode.right)]
    }
}

module.exports = BinarySearchTree