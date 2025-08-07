function makeLooper(str) {
  let len=str.length;
  //let's create a countindex property
  makeLooper.index = (makeLooper.index || 0)%len;
  let char = str[makeLooper.index];
  makeLooper.index++;
  return char;
}


function makeLooper2(str){
    let index =0;

    return function(){
        let char = str[index];
        index = (index+1)%str.length;
        return char;
    }
}

const abcLooper = makeLooper2("abc");

console.log(abcLooper()); 
console.log(abcLooper()); 
console.log(abcLooper()); 
console.log(abcLooper()); 
console.log(abcLooper()); 
