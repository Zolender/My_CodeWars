function solution(input) {
    if(input.length === 0 || input.trim() ==="")return 0;
    //let's first make the input ready for being used and put point in a 'a,b' format
    const coordinates = new Set();
    
    const bruteCoordinates = input.split(',');
    
    for(let cell of bruteCoordinates){
        if(cell.length === 2 && /^\d{2}$/.test(cell)){
        let col = cell[0];
        let row = cell[1];
        
        coordinates.add(`${col},${row}`);
        }
    }
    
    //in case no valid coordinate is found...
        if(coordinates.size === 0)return 0;
    //using a bfs algorithm we would try to find the connected cells then the largest one of them
    const visited = new Set();
    let largestSize = 0;
    
    function bfs(startCol,startRow){
        const queue = [[startCol, startRow]];
        visited.add(`${startCol},${startRow}`);
        let sizeCounter = 0;  
        
        while(queue.length >0){
        const [col, row] = queue.shift();
        sizeCounter++;
        
        //checking the neighborhood(cells next to the one we working on) up down left and right
        const neighbors = [
                    [col, row + 1],  // up
                    [col, row - 1],  // down
                    [col + 1, row],  // right
                    [col - 1, row]   // left
                ];
        
        for(let [a,b] of neighbors){
            const key = `${a},${b}`;
            //checking if that cell is black and not visited, if yes then we add to visited and to the queue as well
            if(coordinates.has(key) && !visited.has(key)){
            visited.add(key);
            queue.push([a,b]);
            }
        }
        }
        return sizeCounter;// which will return the size of this connected bunch of 
        
    }
    
    for(let point of coordinates){
        if(!visited.has(point)){
        const [col, row] = point.split(',').map(Number);
        const blockSize = bfs(col, row);
        largestSize = Math.max(largestSize, blockSize);
        }
    }
    
    return largestSize;
}