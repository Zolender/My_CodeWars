const solution = function(firstArray, secondArray) {
  
  const len= firstArray.length
  
  const squarred_diff = firstArray.map((num, i)=> Math.pow(Math.abs(num-secondArray[i]),2))
  
  return squarred_diff.reduce((a,b)=>a+b) / len
  
}
