function productFib(prod){
  // we generate fib sequences up to the point whereby the product of the two current ones are greater or equal to the provided num
  let f = 0, fSecond = 1
  while(f*fSecond < prod ){
    let temp = f + fSecond
    f = fSecond
    fSecond = temp
  }
  
  let bool = (f*fSecond===prod)
  
  return bool? [f,fSecond, true]
              : [f,fSecond, false]
}
