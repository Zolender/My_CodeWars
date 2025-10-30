function booleanReducer(func){
    let result = [];
    let numOfParam = func.length;
    
    //we create a function that would generate an array that we would be using for the tests
    function combiMaker(){
        let combis = [];
        let totalCombis = Math.pow(2, numOfParam);
        
        //now we will be creating the possible set of test that could be performed on that given func
        for(let i = 0; i<totalCombis;i++){
        const duo = [];
        let a = i;
        
        for( let j = 0; j<numOfParam; j++){
            if(a%2 === 0){
            duo.push(false);
            }else{
            duo.push(true);
            }
            a =  Math.floor(a/2);
        }
        combis.push(duo)
        }
        return combis;
    }
    
    const combinations = combiMaker();
    
    //now we will be testing the function to determine which param is important and then return it's index.
    
    for(let i=0; i< numOfParam;i++){
        let important = false;
        
        for(let combi of combinations){
        const res1 = func(...combi);
        //then we reverse the tested value and check again
        combi[i] = !combi[i];
        
        let res2 = func(...combi);
        
        if(res1 !== res2){
            important = true;
            break;
        }
        }
        //in case the parameter matters(like if changing it changes the output) then we could add it index to the result array
        if(important){
        result.push(i);
        }
    }
    return result;
}