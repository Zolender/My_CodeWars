export class Connect4 {
currentPlayer: number;
isFinished: boolean;
gameArr: number[][];

  constructor() {
    this.currentPlayer = 1
    this.isFinished = false
    this.gameArr = []
    
    for(let i=0; i<6; i++){
      let temp: number[] = []
      for(let j=0; j<7; j++){
        temp.push(0)
      }
      this.gameArr.push(temp)
    }
  }
  
  private checkWin(row: number, col: number, player: number): boolean{
    if(this.countConsecutive(row, col, player, 0, 1) + this.countConsecutive(row, col, player, 0, -1) -1 >= 4 ){
      return true;
    }
    if(this.countConsecutive(row, col, player, 1, 0) + this.countConsecutive(row, col, player, -1, 0) -1 >= 4 ){
      return true;
    }
    if(this.countConsecutive(row, col, player, 1, 1) + this.countConsecutive(row, col, player, -1, -1) -1 >= 4 ){
      return true;
    }if(this.countConsecutive(row, col, player, 1, -1) + this.countConsecutive(row, col, player, -1, 1) -1 >= 4 ){
      return true;
    }
    return false
  }
  
  private countConsecutive(row: number, col: number, player: number, rowDelta: number, colDelta: number): number{
    let count = 0
    
    while(row >= 0 && row < 6 && col >=0 && col < 7 && this.gameArr[row][col]=== player){
      count++;
      row+= rowDelta;
      col+= colDelta;
    }
    return count
  }
  
  

  play(col: number): string{
    if(this.isFinished){
      return "Game has finished!"
    }
    
    for(let i=5; i>=0; i--){
      if(this.gameArr[i][col]=== 0){
        this.gameArr[i][col] = this.currentPlayer
        
        if(this.checkWin(i, col, this.currentPlayer)){
          this.isFinished = true
          return `Player ${this.currentPlayer} wins!`
        }
        
        const message = `Player ${this.currentPlayer} has a turn`
        this.currentPlayer = this.currentPlayer === 1? 2:1
        return message
      }
    }
      return 'Column full!'
    
  }
}
