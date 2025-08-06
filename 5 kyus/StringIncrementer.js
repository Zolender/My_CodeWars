function incrementString (strng) {
  //case where there's no number at the end of the string
  if(isNaN(strng[strng.length-1]))return strng.concat("1");
  //else
  strng =strng.split('');
    let temp=[];
  for(let i=strng.length-1;i>=0;i--){
    if((!isNaN(strng[i]))){
      temp.unshift(strng[i]);
    }else{
      break;
    }
  }
  
  temp = temp.join('');
  let len = temp.length;
  let fPart = strng.slice(0, strng.length-len).join('');
  let toAdd = (Number(temp)+1).toString();
  //to get back the leading zeros that diseappeared after the conversion
  toAdd = toAdd.padStart(len,'0');
  
  return fPart+toAdd;
  
}