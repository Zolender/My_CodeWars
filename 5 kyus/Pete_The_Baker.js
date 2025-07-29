function cakes(recipe, available) {
  
  let count=0;
  let again = true;
  // let's first handle the cases where it can't work
  let rInfo = Object.keys(recipe);
  let aInfo = Object.keys(available);
  if(rInfo.length>aInfo.length)return 0;
  for(let ing of rInfo){
    if(!aInfo.includes(ing) || recipe[ing]>available[ing])return 0;
  }
  
  while (again){
    for(let ing of rInfo){
      if(recipe[ing]<=available[ing]){
       available[ing]-= recipe[ing];
      }else{
        again= false;
        break;
      }
    }
    if(again)count++;
  }
  
  
  
  return count;
}