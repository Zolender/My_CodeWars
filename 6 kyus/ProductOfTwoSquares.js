function squareProduct(n) {
  let arrays=[];
  let myset = new Set();
  for(let i=1; i<=n;i++){
    for(let j=i; j<=n ;j++){
      if((i**2 * j**2)==n)arrays.push([i,j]);
    }
  }
  
  //now let's just sort all the sub arrays of that arrays and pass the all to a set then return the set and see if it works
//   arrays = arrays.map(x=> x.sort((a,b)=>a-b));
  let result = [];
  
  for(let array of arrays){
    let temp = array.join(',');
    if (!myset.has(temp)){
      myset.add(temp);
      result.push(array);
    }
  }
  
    return result;
}


//let's make it better
function squareProduct2(n){
    let sqrtN = Math.sqrt(n);
    //if the number isn't a perfect square then there won't be any matching values 
    if(sqrtN % 1!==0)return [];
//knowing that i*j = sqrtN, that means i <= sqrt(sqrtN); and therefore, j would just be deduced from both values
    let result= [];
    let a = Math.sqrt(sqrtN)
  for (let i = 1; i <= Math.sqrt(a); i++) {
    if (sqrtN % i === 0) {
      let j = sqrtN/ i;
      result.push([i, j]);
        }
    }
    return result;
}