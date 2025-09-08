function getRootProperty(object, val) {
  //let's create a function that would help traversing the nested objects
  
    function arraySearch(value,target) {
      if(Array.isArray(value)){
        return value.includes(target);
      }
      if(value === null || typeof value !=='object')return false;
      
      for(let key in value){
        if(arraySearch(value[key], target)){
          return true;
        }
      }
      return false;
    }
  
  // now let's make use of this function...
  
  for(let obj in object){
    if(arraySearch(object[obj], val))return obj;
  }
  
  
  
    return null;
}