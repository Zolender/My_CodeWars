function flatten(...args) {
//     return args.flat(Infinity);
    let result = [];
    for(let arg of args){
        //if it's a array then we send it back to the function 
        if(Array.isArray(arg)) {
        result.push(...flatten(...arg));
        }else{
            result.push(arg);
        }
    }
    return result;
}