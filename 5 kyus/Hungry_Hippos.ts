export class Game {
  private count: number;
  private board: number[][]

  constructor(board: number[][]) {
    this.count = 0;
    this.board = board
  }
  
  private dfs(i: number, j: number){
    if(typeof this.board[i]==='undefined'||typeof this.board[i][j]==='undefined')return
    
    if(this.board[i][j]===0)return
    
    this.board[i][j] = 0
    this.dfs(i+1, j)
    this.dfs(i-1, j)
    this.dfs(i, j+1)
    this.dfs(i, j-1)
  }
  
  play(): number{
    for(let i=0; i<=this.board.length-1;i++){
      for(let j=0; j<this.board[i].length; j++){
        if(this.board[i][j]===0){
          continue
        }else{     
          this.count++
          this.dfs(i,j)
        }
      }
    }
    
    return this.count
  }
  
}
