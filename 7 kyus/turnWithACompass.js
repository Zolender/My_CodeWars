function direction(facing, turn){
  const lib = ["N", "NE", "E", "SE", "S","SW","W", "NW"];
  
  let steps = turn/45;
  let startIndex = lib.indexOf(facing);
  
  let currentIndex = (startIndex + steps)%8;
  
  currentIndex = currentIndex < 0? currentIndex+8: currentIndex;
  
  return lib[currentIndex];
}