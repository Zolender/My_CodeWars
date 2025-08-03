function rot13(message){
  //transform the message into an array, map, for every letter, change let's change its charcode to +13
  message =message.split("").map(x=>{
    if (/[a-z]/.test(x)) {
      // Lowercase part
      return String.fromCharCode(((x.charCodeAt(0) - 97 + 13) % 26) + 97);
    } else if (/[A-Z]/.test(x)) {
      // Uppercase part 
      return String.fromCharCode(((x.charCodeAt(0) - 65 + 13) % 26) + 65);
    } else {
      return x;
    }
  });
  return message.join('');
}