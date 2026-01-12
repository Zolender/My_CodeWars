export function validBraces(braces: string): boolean {
  const stackCount: string[] = []
  const pairOfBraces: {[key: string]: string} = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  
  for(let brace of braces){
    if(brace === '(' || brace === '{'|| brace === '['){
      stackCount.push(brace)
    }else{
      if(stackCount.length ===0 || stackCount[stackCount.length - 1]!==pairOfBraces[brace]){
        return false
      }else{
        stackCount.pop()
      }      
    }
  }
      return stackCount.length === 0
  
}
