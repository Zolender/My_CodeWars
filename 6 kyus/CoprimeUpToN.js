function coprimes(n){
    function gcd(a,b){
        while(b!==0){
        let temp = b;
        b= a%b;
        a = temp;
        }
        return a;
    }
    let result = []
    
    for(let k=1; k<n;k++){
        if(gcd(n,k)===1){
        result.push(k);
        }
    }
    return result;
};