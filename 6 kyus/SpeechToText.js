const bot = {
    message(prompt) {
      let result;
      
      if(prompt.includes("to")){
        let [hum, first,humm , second] = prompt.split(" ");
        second = second.split("").filter(x=>x!=='.').join("")
        return Number(first) + Number(second)
        
      }else if(prompt.includes("from")){
        let [hum, first, humm , second] = prompt.split(" ");
        second = second.split("").filter(x=>x!=='.').join("")
        return Number(first)>=Number(second)? Number(first)-Number(second):Number(second)-Number(first)
      }else{
        let time = prompt.split(" ")[5]
        const isAm = time.includes("am");
        time = time.replace(/am|pm/,"").replace(/[?]/,"")
        
        let [hour, minutes] = time.split(":")
        hour = Number(hour);
        minutes = Number(minutes)

        if(isAm && hour===12)hour =0
        if(!isAm && hour !==12)hour +=12 
        
        let totalmins = hour*60 + minutes;
        let min_to_sixAm = 6 *60;
        let min_from_sixPm = 18*60;
        
        if(totalmins >=min_to_sixAm && totalmins <= min_from_sixPm){
          return "sunny"
        }else{
          return "raining"
        }
      }
      
      
        return result? result: undefined;
    }
};
