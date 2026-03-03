export function partsSums(ls: number[]): number[] {
  if(ls.length===0)return [0]
  let total = ls.reduce((a,b)=>a+b)
  
  let result :number[] = new Array(ls.length + 1)
  
  result[0] = total
  
  for(let i=0; i<ls.length; i++){
    total -= ls[i]
    result[i+1] = total
  }
  
  return result
}
