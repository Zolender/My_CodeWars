function shortesttoChar(s, c) {
    if(s==='' || !s.includes(c))return[];
    let result = [];
    let closest_c = 0;
    
    let chars = s.split('');
    
    for(let i in chars){
        if(chars[i]===c){
        result.push(0);
        continue;
        }else{
            
        }
        
    }
}


console.log(shortesttoChar(heythere, s));
