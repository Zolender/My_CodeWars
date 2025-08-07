function makeLooper(str) {
  let len=str.length;
  //let's create a countindex property
  makeLooper.index = (makeLooper.index || 0)%len;
  let char = str[makeLooper.index];
  makeLooper.index++;
  return char;
}

console.log(makeLooper("eben"))
console.log(makeLooper("eben"))
console.log(makeLooper("eben"))
console.log(makeLooper("eben"))
console.log(makeLooper("eben"))
console.log(makeLooper("eben"))