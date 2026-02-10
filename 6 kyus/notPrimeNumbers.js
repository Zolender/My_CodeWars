function notPrimes(a,b){
  function isPrime(num){
    if(num<2)return false
    if(num<=3)return true
    if(num%2===0 || num%3===0)return false
    for(let i=5; i<=Math.sqrt(num);i+=2){
      if(num%i===0)return false
    }
    return true
  }
  
  
  
  let tempResult = []
  for(let j = a; j<b; j++ ){
    let detector = j.toString().split('').map(Number).map(isPrime).filter(x=>x===false)
    if(detector.length >=1)continue
    tempResult.push(j)
  }
  let result = []
  tempResult.forEach(x=>{
    if(!isPrime(x))result.push(x)
  })
  
  return result
}
