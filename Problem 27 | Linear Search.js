function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
}

const array = [6, 12, 1, 34, 4, 9]
const target = 34
const index = linearSearch(array, target)
console.log(index)