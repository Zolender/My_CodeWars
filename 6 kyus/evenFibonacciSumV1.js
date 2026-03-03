function fibonacci(max) {
    if(max <=1)return 0
    const seq = [0,1]
      
    for(let i=2; i<max; i++){
       seq.push(seq[i-1]+seq[i-2])
    }
  
  const evenSeq = seq.filter(x=> x%2===0)
  
  return evenSeq.reduce((a,b)=>a+b,0)
}
