export function camelCase(str: string): string {
  return str.length>0?  str.split(' ')
            .map(word=> word[0].toUpperCase()+word.slice(1).toLowerCase())
            .join("") : ""
 
}
