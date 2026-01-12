export function isValidWalk(walk: string[]): boolean{
  if(walk.length !== 10)return false
  
  let counter : {[key: string]: number} = {
    'n': 0,
    's': 0,
    'w': 0,
    'e': 0
  }
  
  for(let direction of walk){
    counter[direction]++
  }
  
  if(counter['n']!==counter['s'] || counter['e']!==counter['w'])return false
  
  return true
}
