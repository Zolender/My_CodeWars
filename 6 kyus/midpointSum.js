var midpointSum=function(n){
    //edge cases fist
    if(n.length < 3)return undefined;
    if(n.length ===3 && n[1]===0 && n[0]!==n[2])return undefined;
    //other cases now
    let wantedIndex;
    for(let i=1;i<n.length-1;i++){
        let leftSum = n.slice(0, i).reduce((a,b)=>a+b);
        let rightSum = n.slice(i+1).reduce((a,b)=>a+b);
        if(leftSum===rightSum)return i;
    }
    
    
    return wantedIndex;
};