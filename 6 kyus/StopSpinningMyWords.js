function spinWords(string){
  let arr = string.split(' ').map(x=>x.length>=5?x.split('').reverse().join(""):x).join(' ')
  return arr;
}