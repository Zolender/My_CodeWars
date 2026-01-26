export function duplicateEncode(word: string): string{
  if(!word)return ''
  const obj : {[key: string]: number} = {}
  for(let char of word){
    if(!obj[char.toLowerCase()]){
      obj[char.toLowerCase()]= 1
    }else{
      obj[char.toLowerCase()]++
    }
  }
  
  let stringRes = ''
  for(let char of word){
    if(obj[char.toLowerCase()] > 1){
      stringRes+=')'
    }else{
      stringRes+='('
    }
  }
  return stringRes
}
