function evaluate(left, op, right) {
  //handle the given operands first
    function handler(operand){
        //we want to return an array of result of the reduce version of the given arrays
        const results = [];
        if(typeof operand ==="number")return operand;
        
        //we get the root operation(the root key), and it's value(which is an obj)
        const key = Object.keys(operand)[0];
        const nestedObj = operand[key];
        
        //we need to reduce the arr values to a single one accordingly to their key
        //a function to add the array values, we will use a loop to go through them
        //we endup moving it outside the handler
        
        function reducer(arr, operation){
            return arr.reduce((a,b)=>opApplication(a,operation,b));
        }

        const ops = ['add', 'subtract', 'multiply', 'divide'];
        for(const operation of ops){
            if(nestedObj[operation]){
                const arr = nestedObj[operation];
                const reduced = reducer(arr, operation);
                results.push(reduced);
            }
        }

        //then we reduce the overall using the reducer function again
        return reducer(results, key);
    }  

        function opApplication(left, op, right){
            switch(op){
                case 'add': return left + right;
                case 'subtract': return left - right;
                case 'divide': return left / right;
                case 'multiply': return left * right;
            }
        }

    const lefty = handler(left);
    const righty = handler(right);

    
    return opApplication(lefty, op, righty);
}