/*
    Depth First Search can be implemented in three different ways
    1) Pre-order
    2) In-order
    3) Post-order
*/

const BinarySearchTree = require('./Problem 13 | Binary Search Trees.js')

const myBST = new BinarySearchTree(53)
const myArray = [36, 76, 52, 72, 1, 78, 16, 34, 97]
for (let num of myArray) {
    myBST.insert(num)
}

function preOrder(binaryTree) {
    if (!binaryTree) {
        return []
    }
    return [
        binaryTree.data,
        ...preOrder(binaryTree.left),
        ...preOrder(binaryTree.right)
    ]
}
const preOrderArray = preOrder(myBST)
console.log(preOrderArray)

function inOrder(binaryTree) {
    if (!binaryTree) {
        return []
    }
    return [
        ...inOrder(binaryTree.left),
        binaryTree.data,
        ...inOrder(binaryTree.right)
    ]
}

const inOrderArray = inOrder(myBST)
console.log(inOrderArray)


function postOrder(binaryTree) {
    if (!binaryTree) {
        return []
    }
    return [
        ...postOrder(binaryTree.left),
        ...postOrder(binaryTree.right),
        binaryTree.data
    ]
}

const postOrderArray = postOrder(myBST)
console.log(postOrderArray)