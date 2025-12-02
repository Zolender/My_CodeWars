class HallOfFame{

  constructor(size = 5, playersArray = []){
    this.size = size;
    this.players = new Map()
    if (playersArray && playersArray.length>0) playersArray.forEach((player)=> this.add(player))
  }
  
  get list(){
    let list = Array.from(this.players.entries()).sort((a,b)=>{
      if(b[1]!==a[1]){
        return b[1]-a[1]
      }
      return a[0].localeCompare(b[0])  
      })
      //then we keep the size and format it the way they want
      list = list.slice(0, this.size).map(([a,b])=>`${a}: ${b}`)
      //case of empty slots
      while(list.length<this.size){
        list.push("")
      }
      
      return list
  }
  
  add( player ){
    let [name, score] = player
    score = Number(score)
    
    if(this.players.has(name)){
      let currentScore = this.players.get(name)
      if(score>currentScore){
        this.players.set(name,score)
      }
    }else{
      const playersArray = Array.from(this.players.entries())
        .sort((a, b) => {
          if (b[1] !== a[1]) return b[1] - a[1];
          return a[0].localeCompare(b[0]);
        });
      
      if(playersArray.length<this.size){
        this.players.set(name,score)
      }else{
        //we get and compare the worst score to the entered and see if we can update or not the list
        const lastScore = playersArray[playersArray.length - 1][1]
        if(lastScore < score){
          this.players.set(name,score)
        
        //then sort and trunc if needed
        const list = Array.from(this.players.entries())
        .sort((a, b) => {
          if (b[1] !== a[1]) return b[1] - a[1];
          return a[0].localeCompare(b[0]);
        });
        
        this.players = new Map(list.slice(0,this.size))
        }
      } 
    }  
  return this
    
  }
  

}
