function fibonacciIterative(n) {
    const sequence = [0, 1]
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i-2] + sequence[i-1]) // Adding at index i
    }
    return sequence[n-1]
} // Runtime: O(n), Memory: O(n)

function fibonacciRecursive(n) {
    if (n === 1) return 0
    if (n === 2) return 1
    return fibonacciRecursive(n-2) + fibonacciRecursive(n-1)
} // Runtime: O(n), Memory: O(n)
