export function kprimesStep(k:number, step:number, start:number, nd:number): number[][] {
  let result : number[][] = []
  function counter(item: number): number {
    let count = 0;
    while (item % 2 === 0) {
      count++;
      item = item / 2;
    }

    for (let i = 3; i <= Math.sqrt(item); i += 2) {
      while (item % i === 0) {
        count++;
        item /= i;
      }
    }

    if (item > 1) count++;
    return count;
    }
  
  
  let temp: number[] = [] 
  
  for(let j=start; j<=nd; j++){
    if(counter(j)===k ){
      temp.push(j)
    }
  }
  
  for(let c=0; c<temp.length-1; c++){
    if(temp[c+1] - temp[c] === step){
      result.push([temp[c],temp[c+1]])
    }
  }

  return result
}
