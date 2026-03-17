function thanosSort(arr) {
  if(arr.length===0)return 0
  
  function isSorted(list){
    for(let i = 0; i<list.length -1; i++){
      if(list[i] > list[i+1])return false
    }
    return true
  }
  
  if(isSorted(arr))return arr.length
  
  const mid = Math.ceil(arr.length/2)
  const left = arr.slice(0,mid)
  const right = arr.slice(mid+1)
  
  return Math.max(thanosSort(left), thanosSort(right)) 
  
}
