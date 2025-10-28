function nthSmallest(...arrays) {
    let n = arrays.splice(-1, 1);
    let flattenAndSorted = arrays.flat(Infinity).sort((a,b)=> a-b);
    return flattenAndSorted[n-1];
    // Good luck!
}