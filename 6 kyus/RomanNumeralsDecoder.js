function solution (roman) {
const lib={
  M : 1000,
  D : 500,
  C : 100,
  L : 50,
  X : 10,
  V : 5,
  I : 1
}

roman = roman.split('').map(x=>lib[x]);
  let res =0;
  for(let i=0; i<roman.length;i++){
    let current = roman[i], next=roman[i+1];
    if(next){
      if(current >= next){
        res+=current;
      }else{
        res-=current;
      }
    }else{
      res+=current;
    }
  }
   
   
  

	return res;
}
