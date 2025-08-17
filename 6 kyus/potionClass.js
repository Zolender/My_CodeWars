class Potion {
  constructor(color, volume){
    this.color = color;
    this.volume = volume;
  }
  
  mix(otherPotion){
    let newColor=[], newVolume;
    newVolume = this.volume + otherPotion.volume;
    
    for(let i=0; i<3; i++){
      let temp = Math.ceil((this.color[i]*this.volume + otherPotion.color[i]*otherPotion.volume)/newVolume);
      newColor.push(temp);
    }
    
    return new Potion(newColor, newVolume);
  }
}