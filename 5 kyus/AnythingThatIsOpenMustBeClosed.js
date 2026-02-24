function isBalanced(s, caps) {
  const openers = {}
  const closers ={}
  
  for(let i = 0; i< caps.length; i+=2){
    const openChar = caps[i]
    const closeChar = caps[i+1]
    openers[openChar] = closeChar
    closers[closeChar] = openChar
  }
  
  const stack = []
  
  for(let char of s){
    const isOpener = char in openers
    const isCloser = char in closers
    
    if(isOpener && isCloser){//meaning if it is '
      if(stack[stack.length-1]===char){
        stack.pop()
      }else{
        stack.push(char)
      }
    }else if(isOpener){
      stack.push(char)
    }else if(isCloser){
      if(stack.length === 0)return false
      let correct_closer = openers[stack[stack.length - 1]]
      if(char === correct_closer){
        stack.pop()
      }else{
        return false
      }
    }
  }
  
  return stack.length === 0
}
