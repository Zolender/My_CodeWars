export function thirt(n: number): number {
  const knownRem = [1,10,9,12,3,4]
  let sum = 0
  let numArr = n.toString().split('').map(Number).reverse()
  
  for(let i=0; i<numArr.length; i++){
      sum += numArr[i] * knownRem[i % knownRem.length]
    }
  
  if(sum=== n)return n
  
  return thirt(sum)
  
}
