export const findOdd = (xs: number[]): number => {
  let lib : Record<number, number>={}
  for(let x of xs){
    if(lib[x]){
      lib[x]++;
    }else{
      lib[x] = 1
    }
  }
  
  for(let key in lib){
    if(lib[key]%2!==0)return Number(key)
  }
  return 0;
};
