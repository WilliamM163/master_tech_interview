function reverseStringRecursively(string) {
    if (string === '') return string
    return string[string.length-1] + reverseStringRecursively(string.slice(0, string.length-1))
} // Runtime: O(n), Memory: O(n)