function findFirstRecurringCharacter(array) {
    const hashMap = {}
    for (let item of array) {
        if (hashMap[item]) {
            return item
        } else {
            hashMap[item] = true
        }
    }
    return undefined
}

console.log(findFirstRecurringCharacter([2,5,1,2,3,5]))
console.log(findFirstRecurringCharacter([2,1,1,2,3]))
console.log(findFirstRecurringCharacter([1,2,3,4]))