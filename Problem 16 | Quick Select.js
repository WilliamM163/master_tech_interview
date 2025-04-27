function quickSelect(array, index) {
    // Base Case
    if (array.length === 1) return array[0]
    else if (array.length === 0) return

    const pivot = array[0]
    const smaller = array.slice(1).filter(item => item < pivot)
    const bigger = array.slice(1).filter(item => item >= pivot)

    if (index < smaller.length) {
        return quickSelect(smaller, index)
    } else if (index === smaller.length) {
        return pivot
    } else {
        const newIndex = index - smaller.length - 1
        return quickSelect(bigger, newIndex)
    }
    
}

const myArray = [ 4, 17, 8, 6, 15, 18, 16, 9, 12, 13 ]

const sortedArray = myArray.toSorted((a,b) => a-b)
console.log(sortedArray)

for (let i = 0; i <= myArray.length-1; i++) {
    console.log(quickSelect(myArray, i))
}