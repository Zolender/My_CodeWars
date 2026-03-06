function mixedFraction(s){
  let [num, denom] = s.split('/').map(Number)
  
  if(denom === 0)throw new Error("We can't handle division by zero around here")
  if(num === 0)return '0'
  
  let isNeg = false
  if((num<0 || denom <0) && !(num<0 && denom<0))isNeg = true
  
  num = Math.abs(num)
  denom = Math.abs(denom)
  
  let integerPart = Math.floor(num/denom)
  let decimalPart = (num%denom)
  
  function GCD(a,b){
    return b===0? a : GCD(b,a%b)
  }
  
  let fractionPart = 0
  
  if(decimalPart!==0){
    let commonDiviser = GCD(decimalPart, denom)
    fractionPart = `${decimalPart/commonDiviser}/${denom/commonDiviser}`
  }
  
  const result = []
  if(isNeg)result.push('-')
  
  if(integerPart !==0 && fractionPart !==0){
      result.push(`${integerPart} ${fractionPart}`)
    }else if(integerPart !==0 && fractionPart === 0){
      result.push(`${integerPart}`)
    }else{
      result.push(fractionPart)
    }
  
  return result.join('')

}
