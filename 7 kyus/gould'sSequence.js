function* gould() {
  let n=0;
  while(n){
    const binForm = n.toString(2);
    const count = (binForm.match(/1/g) || []).length;
    yield count;
    n++;
  }
}