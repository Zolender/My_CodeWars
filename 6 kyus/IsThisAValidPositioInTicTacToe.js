function isValid(board) {
  //as x always start, its coun should always be higher or equal to O's
  let Xcount=0, Ocount=0;
  for(let elts of board){
    for(let char of elts){
      if(char==="X")Xcount++;
      if(char==="O")Ocount++;
    }
  }
  
  if(Xcount<Ocount)return false;
  if(Xcount>Ocount+1) return false;
  
  //win checking now
  const hasWon = (board, char) => {
  // Rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === char && board[i][1] === char && board[i][2] === char) return true;
  }
  // Columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === char && board[1][i] === char && board[2][i] === char) return true;
  }
  // Diagonals
  if (board[0][0] === char && board[1][1] === char && board[2][2] === char) return true;
  if (board[0][2] === char && board[1][1] === char && board[2][0] === char) return true;

  return false;
};
  
 let Xwon= hasWon(board,'X');
 let Owon= hasWon(board,'O');
  
  if(Xwon && Owon)return false;
  if(Xwon && Xcount!==Ocount+1)return false;
  if(Owon && Ocount!==Xcount) return false;
  
  return true;
}