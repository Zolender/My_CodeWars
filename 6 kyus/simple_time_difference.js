function solve(arr){
    let minutes_arr = arr.map(str=>{
      const [h, m] = str.split(":").map(Number)
      return h * 60 + m
    })
    
    minutes_arr = minutes_arr.sort((a,b)=> a-b);
    let minSets = new Set(minutes_arr)
    let minutes = [...minSets]
    
    let gap = 0;
  for(let i= 0; i<minutes.length-1; i++){
    let temp = minutes[i+1] - minutes[i]- 1
//     gap = gap > temp? gap: temp
    gap = Math.max(gap, temp)
  }
  
  let wrapGap = (1440 - minutes[minutes.length-1] + minutes[0])-1
  
  gap = Math.max(gap, wrapGap)
  
  let hours = Math.floor(gap/60)
  let re_mins = gap % 60
  
  let result = String(hours).padStart(2,'0') + ':' + String(re_mins).padStart(2, '0')
  
  
  return result
}
