function dismember (func) {
    // Implement this function, return an array of names of all formal arguments defined in the function implementation
    let str =  func.toString().trim();
    //now we just consider the first instances of ( and ) if any
    
    let start = str.indexOf("(");
    
    if(start !==-1){
        let end = str.indexOf(")", start);
        let args = str.substring(start+1, end);
        if(args.trim()){
        let result = args.split(",").map(x=>x.trim());
        return result;
        }else{
        return [];
        }
    }else{
        //well is it is an arrow function without paranthesis then...
        let end = str.indexOf("=>");
        if(end!==-1){
        let arg = str.substring(0,end).trim();
        return [arg];
        }
    }
}