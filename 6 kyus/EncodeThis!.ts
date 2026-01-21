export const encryptThis = (str: string): string => {
  if(str.trim() === '')return ''
 function strTransformation(s: string): string{
     if(s === '')return ''
     let firstLetCode = s.charCodeAt(0).toString()
     let sArr = s.split('')
     
      if(s.length > 2){
        let temp = sArr[1]
         sArr[1] = sArr[sArr.length-1]
         sArr[sArr.length-1] = temp
      }

     sArr[0] = firstLetCode   
     return sArr.join('')
   }
  
  str = str.split(' ').map(strTransformation).join(' ')
  
  
  
  return str
}
