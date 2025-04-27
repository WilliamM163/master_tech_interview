function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        // bad no good
        return 'poopy bumhole'
    }

    let reversedString = ''
    for (let i = str.length-1; i >= 0; i--) {
        reversedString += str[i]
    }
    return reversedString
}

reverse('Hello')