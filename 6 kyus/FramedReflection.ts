export function mirror(text:string):string{
  const reversedTextArray = text.split(' ').map(text=> text.split('').reverse().join(''))
  const yAsterixLen = reversedTextArray.reduce((longest, current)=>longest.length > current.length? longest : current).length + 4
  const reversedAndAsterix = reversedTextArray.map(text=> `* ${text.padEnd(yAsterixLen - 4)} *`)
  const finalArray = ['*'.repeat(yAsterixLen),...reversedAndAsterix,'*'.repeat(yAsterixLen)] 
  return finalArray.join('\n')
}
