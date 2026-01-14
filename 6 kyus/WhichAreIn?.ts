export function inArray(a1: string[], a2: string[]): string[] {
  let r : string[] = [] 
  for(let str1 of a1){
    for(let str2 of a2){
      if(str2.includes(str1)){
        r.push(str1)
        break
      }
    }
  }
  
  return r.sort()
}
