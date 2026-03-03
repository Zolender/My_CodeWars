function fibonacci(max) {
  let sum = 0
  let a = 0
  let b =1
  
  while(b<max){
    if(b%2===0){
      sum+=b
    }
    
   let n = a+b
    a = b
    b = n
  }
  
  
  return sum
}
