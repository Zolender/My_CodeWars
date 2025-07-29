function digitalRoot(n) {
  const isLong = (x)=>x.toString().split('').length > 1;
  while(isLong(n)){
    n = n.toString().split('').map(Number).reduce((a,b)=>a+b);
  }
  return n;
}