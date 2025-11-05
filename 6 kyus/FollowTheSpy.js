// it should return the places from the given routes
function findRoutes(routes) {
  //first we make a set of pairs of origin, destination and ori and dest
    let pairs = new Map();
    let origins = new Set();
    let destinations = new Set();
    
    for(let [orig, dest] of routes){
        pairs.set(orig, dest);
        origins.add(orig);
        destinations.add(dest);
    }
    
    //then we look for the first or starting points which should be an origin... that is not among destinations
    let startingPoint;
    for(let origin of origins){
        if(!destinations.has(origin)){
        startingPoint = origin;
        break;
        }
    }
    
    let result = [startingPoint];
    let temp = startingPoint;
    
    while(pairs.has(temp)){
        let nextDest = pairs.get(temp);
        result.push(nextDest);
        temp = nextDest;
    }
    
    return result.join(", ")

}