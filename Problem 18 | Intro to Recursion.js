/*
    This lesson is about using recursion and its differences to iterations.
    We will explore runtime, and memory usage
*/
function findFactorialRecursive(number) {
    if (number <= 2) return number
    return number * findFactorialRecursive(number-1)
} // Runtime: O(n), Memory: O(n)

function findFactorialIterative(number) {
    let total = number
    for (let n = number-1; n>1; n--) {
        total *= n
    }
    return total
} // Runtime: O(n), Memory: O(1)

console.log('Recursive Method:', findFactorialRecursive(5))
console.log('Iterative Method:', findFactorialIterative(5))

/*
    In this case it is more efficient to use an iterative approach
    as we don't have to deal with the overhead of a call stack.

    Recursion is a useful tool, but we should use it when necessary
*/