function colorProbability(color, texture){
//   let prob=0
  let total = (texture === 'bumpy'? 7 : 3)
  
  let lib = {
    red : {bumpy: 4, smooth: 1},
    green : {bumpy: 1, smooth: 1},
    yellow : {bumpy: 2, smooth: 1}
  }
  
  let prob = ((lib[color][texture])/total).toString().slice(0,4)
  return prob
  
}
