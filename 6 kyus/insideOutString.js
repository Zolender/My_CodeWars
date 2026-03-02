function insideOut(x){
  let result = []
  let strArr = x.split(' ')
  for(let str of strArr){
    if(str.length % 2 === 0){
      let res = str.slice(0,str.length/2).split('').reverse().join('')
                + str.slice(str.length/2).split('').reverse().join('')
      
      result.push(res)
    }else{
      let middle = Math.floor(str.length/2)
      let res = str.slice(0,middle).split('').reverse().join('') + str[middle]
                + str.slice(middle + 1).split('').reverse().join('')
      result.push(res)
    }
  }
  return result.join(' ')
}
