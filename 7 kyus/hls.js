function displayValue(value) {
    let hours, days, months, mins=value;
    
    if(mins<60)return `${mins} minute${mins===1?'':'s'}`;
    if(mins<0)return false;
    
    if(mins>=60){
        hours = Math.floor(mins/60);
        mins = mins%60;
        if(hours<24)return `${hours} hour${hours===1?'':'s'} ${mins} minute${mins===1?'':'s'}`;
    }else if(hours>=24){
        days = Math.floor(hours/24);
        hours = hours%24;
        if(days<28)return `${days} day${days===1?'':'s'} ${hours} hour${hours===1?'':'s'} ${mins} minute${mins===1?'':'s'}`;
    }else if(days>=28){
        months = Math.floor(days/28);
        days= days%28;
        return `${months} month${months===1?'':'s'} ${days} day${days===1?'':'s'} ${hours} hour${hours===1?'':'s'} ${mins} minute${mins===1?'':'s'}`;
    }
    
    return;
}
