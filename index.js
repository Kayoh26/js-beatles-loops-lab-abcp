function theBeatlesPlay(arrayM,arrayI){
  var instM = [];
  for(let i=0;i<arrayM.length;i++){
    instM.push(arrayM[i] +' plays '+ arrayI[i]);
  }
  return instM;
}