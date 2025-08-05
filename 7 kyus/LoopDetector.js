function hasLoop(indices) {
  let mySet = new Set();
  let index=0;
  
  while(index<indices.length){
    if(mySet.has(index))return true;
    mySet.add(index);
    index = indices[index];
  }
  
  return false;
}