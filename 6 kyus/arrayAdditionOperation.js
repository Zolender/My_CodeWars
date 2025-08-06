function splitAndAdd(arr, n) {
  let mid = Math.floor(arr.length/2);
  let arr1=arr.slice(0,mid+1), arr2=arr.slice(mid+1);
  let result=[];
  
  while(n>0 && mid>0){
    let subArr2 = arr1.length === arr2.length? arr2: arr2.join('').split('').reverse().splice(0,arr1.length).reverse().map(Number);
    for(let i=arr1.length-1;i>0;i--){
      result.unshift(arr1[i]+subArr2[i])
    }
    if(arr2.length>=1)result.unshift(...arr2);
    n--;
    mid= Math.floor(result.length/2);
    arr1= result.slice(0,mid+1), arr2=result.slice(mid+1);
  }
  return result;
  
}