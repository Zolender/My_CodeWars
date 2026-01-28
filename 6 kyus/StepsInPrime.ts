export function step(g:number, m:number, n:number): [number,number]|null {
  function isPrime(n:number): boolean{
    if(n<2)return false
    if(n===2 || n=== 3)return true
    if(n%2===0 || n%3===0)return false
    
    for(let i=5; i<=Math.sqrt(n); i+=2){
      if(n%i===0)return false
    }
    return true
  }
  
  if(m===n)return null
  
  for(let j=m; j<=n-g; j++){
    if(isPrime(j) && isPrime(j+g))return [j, j+g]
  }
  
  return null
}
