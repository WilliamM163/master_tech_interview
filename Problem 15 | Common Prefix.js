function longestCommonPrefix(strs) {
    let output = ''
    let commonLetter = ''
    for (let i = 0; i < strs[0].length; i++) {
        commonLetter = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if (commonLetter !== strs[i][j]) {
                return output
            }
        }
        output += commonLetter
    }
}

const commonPrefix = longestCommonPrefix(["flower","flow","flight"])
console.log(commonPrefix)