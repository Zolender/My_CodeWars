// Solution Setup
export function detectBruteForce(logs: string[]): string[] {
    // track consecutive failures per IP
    // 3+ in a row without success = suspicious
  
  let dict : Record<string, number> = {}
  let failureSet = new Set<string>()
  //lemme transform the logs into array and then get the ip and the status
  let logsObj: {ip: string, status: string}[]  = []
  for(let str of logs){
    let temp = str.split(' ')
    let [ip, status, user] = temp
    logsObj.push({ip: ip, status:status})
  }
  
  for(let obj of logsObj){
    if(obj.ip in dict && obj.status === "LOGIN_FAIL"){
      dict[obj.ip]++
      if(dict[obj.ip]>=3)
        failureSet.add(obj.ip)
    }else if(obj.ip in dict && obj.status === "LOGIN_SUCCESS"){
      dict[obj.ip] = 0
    }else if(!(obj.ip in dict) && obj.status === 'LOGIN_FAIL'){
      dict[obj.ip] = 1
    }
  }
  

    
  
  return Array.from(failureSet).sort();
}
