function theBeatlesPlay(arrayM,arrayI){
  //empty array instM
  var instM = [];
  for(let i=0;i<arrayM.length;i++){
    //put string in the array
    instM.push(arrayM[i] +' plays '+ arrayI[i]);
  }
  return instM;
}

function johnLennonFacts(arrayF){
  var newArryf = [];
  for (let i=0; i<arrayF.length; i++){
    newArryf.push(arrayF[i]+'!!!');
  }
  return newArryf;
}

function iLoveTheBeatles(number){
  var newArr = [];
  do{
    newArr.push('I love the Beatles!');
    number++;
  }while(number<15);
  
}