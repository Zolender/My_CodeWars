function movie(card, ticket, perc) {
    let count=0;
    let sysA = 0, sysB=card;
    let disc=ticket*perc;
  
  while(sysA <= Math.ceil(sysB)){
    count++;
    sysA += ticket;
    sysB += disc;
    disc*=perc;
  }
  return count;
};
