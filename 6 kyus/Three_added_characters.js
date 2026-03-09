// Average runtime: ?ms

function addedChar(s1, s2){
  let lib1 = {}
  let lib2 = {}
  let str1 = s1.split('')
  let str2 = s2.split('')
  
  for(let s of str1){
    lib1[s] = (lib1[s] + 1 || 1)
  }
  
  for(let s of str2){
    lib2[s] = (lib2[s] + 1 || 1)
  }
  
  
  for(let char of s1){
    lib2[char]--
  }
  
  return Object.keys(lib2).filter(x=> lib2[x] > 0)[0]
}
