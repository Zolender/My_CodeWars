export class Challenge {
  static solution(num: number) {
    let result: number = 0
    
    for(let i=3; i<num; i++){
      if(i%3===0 || i%5===0){
        result+= i
      }
    }
    
    
    return result >0? result: 0; 
  }
}
