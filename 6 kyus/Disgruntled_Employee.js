function off(n) {
    const result = [];
    
    // Find all perfect squares from 1 to n
    for (let i = 1; i * i <= n; i++) {
        result.push(i * i);
    }
    
    return result;
}