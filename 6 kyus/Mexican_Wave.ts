export function wave(str: string): Array<string>{
  let arr : string[] = []
  function transformer(str: string, index: number): string{
    let temp = str.split('')
    temp[index] = temp[index].toUpperCase()
    return temp.join('')
  }
  for(let i=0; i<str.length; i++){
    if(str[i]===' ')continue
    arr.push(transformer(str, i))
  }
  
  return arr
}
