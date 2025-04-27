const BinarySearchTree = require('./Problem 13 | Binary Search Trees.js')
const Queue = require('./Problem 11 | Queues.js')

const myBST = new BinarySearchTree(53)
const myArray = [36, 76, 52, 72, 1, 78, 16, 34, 97]
for (let num of myArray) {
    myBST.insert(num)
}

function breadthFirstSearch(binaryTree) {
    const visiting = new Queue()
    const visited = []
    visiting.enqueue(binaryTree)
    
    while (visiting.length > 0) {
        const node = visiting.dequeue()
        visited.push(node.data)
        if (node.left) { visiting.enqueue(node.left) }
        if (node.right) { visiting.enqueue(node.right) }
    }
    return visited
}

const BFSArray = breadthFirstSearch(myBST)
console.log(JSON.stringify(BFSArray))