/*
    memoizedAddTo80 creates a function that "remembers" previous calculations
    in its internal cache (thanks to closure). When called again with the
    same number, it instantly returns the stored result instead of recalculating.

    Why this pattern is powerful (due to closure):
    - Efficiency: Avoids redundant computations, saving time and resources,
      especially for "expensive" operations.
    - State Preservation: The inner function retains access to the cache
      (the outer function's variable) across multiple calls, effectively
      maintaining state.
    - Reusability: You can create memoized versions of any function without
      modifying the original, just by wrapping it in a similar "memoizer" function.

    Essentially, closure lets the returned function hold onto and utilize the cache,
    making the function smarter and faster over time for repeated inputs.
*/

function memoizedAddTo80() {
    let cache = {}
    return function(n) {
        if (n in cache) {
            return cache[n]
        } else {
            console.log('Expensive Operation') // Not really but pretend it is
            cache[n] = n + 80
            return cache[n]
        }
    }
}

const addTo80 = memoizedAddTo80()
console.log('1st call:', addTo80(5))
console.log('2nd call:', addTo80(5))