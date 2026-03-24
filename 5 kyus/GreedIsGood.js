function score( dice ) {
  let score = 0;
//   let copy_dice = [...dice]
//   let sorted = copy_dice.sort((a,b)=> a-b)
//   let str = sorted.join("")
  
//   for(let i=0; i<dice.length; i++){
//     if(str.includes(`${dice[i]}${dice[i]}${dice[i]}`)){
//       if(dice[i] === 1){
//         score+= 1000;
//       }else{
//         score+= dice[i] * 100
//       }
//       sorted = sorted.map(x => dice[i]===x? 0: x)
//     }
//   }
  
//   sorted.forEach(x=> {
//     if(x===1)score+= 100
//     if(x===5)score+= 50
//   })
  
  let count = [0,0,0,0,0,0,0]
  
  for(let num of dice){
    count[num]++
  }
  
  for(let i=1; i<7; i++){
    if(count[i]>=3){
      if(i=== 1){
        score+= 1000
      }else{
        score+= i* 100
      }
      
      count[i]-=3
    }
  }
  
  score += count[1] * 100
  score += count[5] * 50
  
  
  
  return score
}
