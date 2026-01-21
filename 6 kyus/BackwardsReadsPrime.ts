export function backwardsPrime(start: number, stop: number): number[] {
  // a function to check if a number is prime
  function isPrime(a: number): boolean{
    if(a <= 1)return false
    if(a <= 3) return true;
    if(a % 2 === 0 || a % 3 === 0)return false
    
    const limit = Math.sqrt(a)
    for(let i=5; i<=limit; i+=2){
      if(a % i === 0)return false
    }
    return true
  }
  
  //a function that would take a prime number reverse it and check if it's a palindrome
  function isPal(b: number): boolean{
    let numRev = Number(b.toString().split('').reverse().join(''))
    return b === numRev
    
  }
  
  
  
  let primeArr: number[] = []
  
  for(let j=start; j<=stop; j++){
    if(isPrime(j) && !isPal(j)){
      let reverseNum = Number(j.toString().split('').reverse().join(''))
      if(isPrime(reverseNum)){
        primeArr.push(j)
      }
    }
  }
  return primeArr
}
