export function x(n: number): number[][] {
  let result : number[][] = [];
  
  for(let i=0; i<n;i++){
    let subArr : number[] = []
    for(let j=0; j<n;j++){
      subArr.push(0)
    }
    result.push(subArr)
  }
  
  
  for(let i=0; i<result.length; i++){
    for(let j=0; j< result[i].length; j++){
      if(i===j || i+j===n-1){
        result[i][j] = 1
      }
    }
  }
  
  return result;
}
