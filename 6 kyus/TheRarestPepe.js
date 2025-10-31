function findRarestPepe(pepes) {
    let counts = {}
    for(let pepe of pepes){
        if(!counts[pepe]){
        counts[pepe]=1;
        }else{
        counts[pepe]++;
        }
    }
    
    let minCount = Object.values(counts);
    minCount = Math.min(...minCount);
    
    if(minCount >=5)return 'No rare pepes!';
    
    const pepeNames = Object.keys(counts);
    const rarest = pepeNames.filter(key=>counts[key]===minCount)
    
    //   if(rarest.length > 1){
    //     rarest = rarest.sort();
    //   }
    
    return rarest.length>1?rarest.sort():rarest[0];
}