function scramble(str1, str2) {
  //count of chars in str1
    let str1Count = {}
    for(let char of str1){
        if(!str1Count[char]){
        str1Count[char]= 1;
        }else{
        str1Count[char]++;
        }
    }
    
    //same for str2
    let str2Count = {}
    for(let char of str2){
        if(!str2Count[char]){
        str2Count[char]= 1;
        }else{
        str2Count[char]++;
        }
    }
    
    //now we compare the chars count, and return false if there is more count of a char in str2 than in str1
    for(let char of str2){
        if(!str1Count[char]){
        return false
        }else{
        if(str1Count[char] < str2Count[char]){
            return false
        }
        }
    }
    
    return true;
}