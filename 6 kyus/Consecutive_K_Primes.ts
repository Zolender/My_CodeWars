export function consecKprimes(k: number, arr: number[]): number {
  let result = 0
  function counter(item: number): number{
    let count = 0
    while(item%2===0){
      count++
      item = item/2
    }
    
    for(let i=3; i<=Math.sqrt(item); i+=2){
      while(item%i===0){
        count++
        item/=i
      }
    } 
    if(item>1)count++
    return count
  }
  
  for(let j=0; j<arr.length-1; j++){
    if(counter(arr[j])===k && counter(arr[j+1])===k)result++
  }
  return result
}
