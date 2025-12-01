function getState(promise) {
  return Promise.race([promise, Promise.resolve(6)])
  .then(value=>{
    if(value === 6)return "pending"
    return "fulfilled"
  }).catch(e=>{
    return "rejected"
  })
}
