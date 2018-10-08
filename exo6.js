function Hello(){
  var firstNumber=parseFloat(document.getElementById("firstNumber").value);
  var secondNumber=parseFloat(document.getElementById("secondNumber").value);

  if(!Object.is(firstNumber,NaN)&&!Object.is(secondNumber,NaN)){
    alert(firstNumber%secondNumber);
  }
  return false;
}
