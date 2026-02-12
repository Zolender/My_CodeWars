function onlyOddDigPrimes(n) {
    function isPrime(a){
      if(a<=1)return false
      if(a<=3)return true
      if(a%2===0 || a%3===0)return false
      for(let i=5; i<=Math.sqrt(a); i+=2){
        if(a%i===0)return false
      }
      return true
    }
  
  function loopHelper(start){
    for(let i=start; i>0; i++){
      if(isPrime(i)){
        let numArr = i.toString().split('').map(Number)
        let isOddPrime = true
        for(let dig of numArr){
          if(dig%2===0)isOddPrime = false
        }
        if(isOddPrime)return i
      }
    }
  }
  
  let primeArr = []
  for(let j=3; j<=n; j++){
    if(isPrime(j))primeArr.push(j)
  }
  
  
  
  let oddPrimeArray = primeArr.filter((num)=>{
    let numArr = num.toString().split('').map(Number)
    for(let dig of numArr){
      if(dig%2===0)return false
    }
    return true
  })
  
  let temp = loopHelper(n)
  let result = []
  
  if(oddPrimeArray.length >=1){
    result.push(oddPrimeArray.length)
  }
  
  result.push(oddPrimeArray[oddPrimeArray.length - 1])
  result.push(temp)
  
  return result
  
}
