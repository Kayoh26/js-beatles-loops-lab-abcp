function theBeatlesPlay(arrayM,arrayI){
  //declare empty array
  var instM = [];
  for(let i=0;i<arrayM.length;i++){
    //put string in the array
    instM.push(arrayM[i] +' plays '+ arrayI[i]);
  }
  return instM;
}

function johnLennonFacts(arrayF){
  //declare empty array
  var newArryf = [];
  //for loop should go through array
  for (let i=0; i<arrayF.length; i++){
    //put string in newArrF
    newArryf.push(arrayF[i]+'!!!');
  }
  return newArryf;
}

function iLoveTheBeatles(number){
  //declare empty array
  var newArr = [];
  do{
    //put string in newArr
    newArr.push('I love the Beatles!');
    //increase number
    number++;
  }while(number<15); // checks to see if less than 15
  return newArr;
}