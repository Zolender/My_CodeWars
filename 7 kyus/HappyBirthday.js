function womensAge(n) {
  for(let base =2; base<n;base++){
    if(2*base ===n)return `${n}? That's just 20, in base ${base}!`
    if(2*base + 1===n)return `${n}? That's just 21, in base ${base}!`
  }
  
}