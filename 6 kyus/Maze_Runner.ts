export function mazeRunner(maze:number[][], directions:string[]): string{
  if(directions.length===0) return "Lost"
  
  let startPoint: number[]= []
  for(let i = 0; i<maze.length; i++){
    for(let j=0; j<maze[i].length; j++){
      if(maze[i][j] === 2)startPoint.push(i,j)
    }
  }
  let current = [...startPoint]
  
  for(let k=0; k<directions.length; k++){
    if(directions[k]==='N'){
       current[0]--
    }else if(directions[k]==='E'){
       current[1]++
    }else if(directions[k]==='W'){
       current[1]--
    }else if(directions[k]==='S'){
       current[0]++
    }
    
    
    if (current[0] < 0 || current[0] >= maze.length || current[1] < 0 || current[1] >= maze.length){
      return "Dead"
    }

    
    
    
    if(maze[current[0]][current[1]]){
      if(maze[current[0]][current[1]] === 1){
        return 'Dead'
      }else if(maze[current[0]][current[1]] === 3)
        return 'Finish'
    }
  }
  return 'Lost'
}
