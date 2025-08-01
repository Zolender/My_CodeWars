function count(n) {
  if (n === 0 || n === 1) return 1;
  
  let logSum = 0;
  for (let i = 2; i <= n; i++) {
    logSum += Math.log10(i);
  }
  return Math.floor(logSum) + 1;
}

