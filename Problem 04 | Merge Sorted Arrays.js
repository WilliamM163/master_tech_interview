function mergeSortedArrays(array1, array2) {
    const mergedArray = []
    let [i, j] = [0, 0]

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[i]) {
            mergedArray.push(array1[i++])
        } else {
            mergedArray.push(array2[j++])
        }
    }

    // Adding remaining elements that might be in either array1 or array2
    mergedArray.push(...array1.slice(i), ...array2.slice(j))

    return mergedArray
}

const array1 = [0,3,4,31]
const array2 = [4,6,30]
const mergedArray = mergeSortedArrays(array1, array2)
console.log(array1, array2)
console.log(mergedArray)