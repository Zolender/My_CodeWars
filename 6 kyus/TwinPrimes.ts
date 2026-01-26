export const twinPrime = (n: number): number => {
  if(n< 2)return 0
  //a function that would check if a number is prime
  function isPrime(a: number): boolean{
    if (a < 2) return false;
    if (a === 2 || a === 3) return true;
    if(a % 2 === 0 || a % 3 === 0)return false
    for(let i = 5; i<=Math.sqrt(a); i+=2){
      if(a%i===0)return false
    }
    return true
  }
  
  //array of the prime numbers under n
  const primeArr : number[]= []
  for(let j = 1; j<=n+2; j++){
    if(isPrime(j)){
      primeArr.push(j)
    }
  }
  const twinPrimes : number[][] = []
  
  for(let k=1; k<=primeArr.length - 1; k++){
    if((primeArr[k-1]+2) === primeArr[k] && primeArr[k] <= n+1){
      twinPrimes.push([primeArr[k-1], primeArr[k]])
    }
  }
  return twinPrimes.length
}
