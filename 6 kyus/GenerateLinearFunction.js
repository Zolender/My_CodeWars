function getFunction(sequence) {
    let m = sequence[0];
    let n, diff = [];
    
    for(let i =0; i<sequence.length-1;i++){
        diff.push(sequence[i+1]-sequence[i]);
    }
    let test = diff[0];
    let allTheSame = diff.every((x)=> x=== test);
    
    if(allTheSame){
        n = test;
    }else{
        return "Non-linear sequence";
    }
    
    if(n===0){
        return `f(x) = ${m}`
    }else if(n===1){
        if(m===0){
        return `f(x) = x`
        }else if(m>0){
        return `f(x) = x + ${m}`
        }else{
        return `f(x) = x - ${-m}`
        }
    }else if(n===-1){
        if(m===0){
        return `f(x) = -x`
        }else if(m>0){
        return `f(x) = -x + ${m}`
        }else{
        return `f(x) = -x - ${-m}`
        }
    }else{
        if(m===0)return `f(x) = ${n}x`

        return m>0?`f(x) = ${n}x + ${m}`:`f(x) = ${n}x - ${-m}`
    }
    
    
}
