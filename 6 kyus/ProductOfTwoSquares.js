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