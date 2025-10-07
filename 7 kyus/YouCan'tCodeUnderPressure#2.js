function Counter() {
   let count = 0;
  //quickly, now!
  this.check = ()=>{
    return count;
  };
  this.increment = ()=>{
    count++
  };

}