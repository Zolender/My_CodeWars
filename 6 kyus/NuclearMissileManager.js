function launchAll(launchMissile) {
  let missile = 0
  
  for(var i = 0; i < 5; i++) {
    setTimeout(function() {
      launchMissile(missile++);
    }, i * 1000);
  }
}
