/*
    Binary Search is used to find an item in array
    given the array is already sorted
*/

function binarySearch(array, target) {
    if (array.length === 0) { return }

    const middleIndex = Math.floor(array.length / 2)
    if (array[middleIndex] === target) {
        return middleIndex
    } if (array[middleIndex] < target) {
        return middleIndex+1 + binarySearch(array.slice(middleIndex+1), target)
    } if (array[middleIndex] > target) {
        return binarySearch(array.slice(0, middleIndex), target)
    }
}

const array = [0, 1, 2, 3, 4, 5]
for (let num of array) {
    const index = binarySearch(array, num)
    console.log(`num: ${num}, index: ${index}`)
}