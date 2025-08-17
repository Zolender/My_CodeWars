let fizzBuzzCustom = function(stringOne='Fizz', stringTwo='Buzz', numOne=3, numTwo=5) {
  let result = [];
  for(let i = 1;i<=100;i++){
    if(i%numOne === 0 && i%numTwo === 0){
      result.push(stringOne+stringTwo);
    }else if(i%numOne === 0){
      result.push(stringOne);
    }else if(i%numTwo === 0){
      result.push(stringTwo);
    }else{
      result.push(i);
    }
  }
  return result;
};