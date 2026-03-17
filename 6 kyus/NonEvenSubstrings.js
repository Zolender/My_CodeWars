function solve(s){
//   const odd_array = []
  let count = 0
  
  function isOdd(char){
    return parseInt(char) % 2!==0;
  }
  
  for(let i = 0; i<s.length; i++){
    let temp="";
    for(let j = i; j<s.length; j++){
      temp+=s[j];
      if(isOdd(temp[temp.length-1])){
        count++
      }
    }
  }
  
  return count
};
