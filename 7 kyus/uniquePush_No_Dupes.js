function uniquePush(arr, obj) {
      //for invalid objects
    let keys = Object.keys(obj);
    if(keys.length!==2||keys[0]!=='name'||keys[1]!=='phoneNumber')return false;
    for(let person of arr){
        if(!person.phoneNumber || person.name === obj.name || person.phoneNumber === obj.phoneNumber){
            return false;
        }
    }
    arr.push(obj);
    return true;
}
