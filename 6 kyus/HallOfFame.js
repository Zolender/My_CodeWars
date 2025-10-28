class HallOfFame{
    constructor(size = 5, players=[]) {
        this.size = size;
        //first we keep the object's players array empty
        this.players = [];
        
        //we check if players have been passed, if yes then we add each one of them to the class's players variable
        if(players && players.length > 0){
            players.forEach(player => this.add(player));
            }
        }

    get list() {
        //we would create a result variable that would actually store the right format of output... like emmpty string or actuall values
        let result = [];
        
        for(let i=0; i<this.size; i++){
          //in case there are palyers credentials
            if(i<this.players.length){
            result.push(`${this.players[i][0]}: ${this.players[i][1]}`);
            }else{
            //otherwise
            result.push("");
            }
        }
        
        return result;  
    }

    add(player) {
        //well push player to the class's players array then sort it actually
        this.players.push(player);
        
        //not we firstsort by score and when needed then we sort by name
        this.players.sort((a,b)=>{
          //by score first
        if(b[1] !== a[1]){
            return b[1] - a[1];
        }
          //and then by alphabetical order, we will use localCompare method here
        return a[0].localeCompare(b[0]);
        })
        
        // we should respect the size as well
        this.players = this.players.slice(0, this.size);
        
        return this;
    }

}