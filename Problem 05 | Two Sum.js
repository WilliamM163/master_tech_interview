function twoSum(nums, target) {
    const table = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const complement = target - num
        if (table[complement] !== undefined) {
            return [table[complement], i]
        } else {
            table[num] = i
        }
    }
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))