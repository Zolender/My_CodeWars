function makeChocolates(small, big, goal) {
  let max_poss_big = Math.floor(goal/5)
  let big_to_use = Math.min(big, max_poss_big)
  
  while(big_to_use >=0){
    let gap = goal - (big_to_use * 5)
    if(gap%2===0 && (gap/2)<= small){return gap/2}
    big_to_use--
  }
  
  return -1;
}
