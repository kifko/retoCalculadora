var operandoa;
var operandob;
var operacion;


function init(){
  //variables
  var oneBtn = document.getElementById('calc-one');
  var twoBtn = document.getElementById('calc-two');
  var threeBtn = document.getElementById('calc-three');
  var fourBtn = document.getElementById('calc-four');
  var fiveBtn = document.getElementById('calc-five');
  var sixBtn = document.getElementById('calc-six');
  var sevenBtn = document.getElementById('calc-seven');
  var eightBtn = document.getElementById('calc-eight');
  var nineBtn = document.getElementById('calc-nine');
  var zeroBtn = document.getElementById('calc-zero');
  
  var decimalBtn = document.getElementById('calc-decimal');
  var clearBtn = document.getElementById('calc-clear');
  var backspaceBtn = document.getElementById('calc-backspace');
  var displayValElement = document.getElementById('calc-display-val');

  var plusBtn = document.getElementById('calc-plus');
  var minusBtn = document.getElementById('calc-minus');
  var multiplyBtn = document.getElementById('calc-multiply');
  var divideBtn = document.getElementById('calc-divide');

  var equalBtb = document.getElementById('calc-equal');

  oneBtn.onclick = function(e){
    displayValElement.textContent = displayValElement.textContent + "1";
  }
  twoBtn.onclick = function(e){
    displayValElement.textContent = displayValElement.textContent + "2";
  }
  threeBtn.onclick = function(e){
    displayValElement.textContent = displayValElement.textContent + "3";
  }
  fourBtn.onclick = function(e){
    displayValElement.textContent = displayValElement.textContent + "4";
  }
  fiveBtn.onclick = function(e){
    displayValElement.textContent = displayValElement.textContent + "5";
  }
  sixBtn.onclick = function(e){
    displayValElement.textContent = displayValElement.textContent + "6";
  }
  sevenBtn.onclick = function(e){
    displayValElement.textContent = displayValElement.textContent + "7";
  }
  eightBtn.onclick = function(e){
    displayValElement.textContent = displayValElement.textContent + "8";
  }
  nineBtn.onclick = function(e){
    displayValElement.textContent = displayValElement.textContent + "9";
  }
  zeroBtn.onclick = function(e){
    displayValElement.textContent = displayValElement.textContent + "0";
  }
  clearBtn.onclick = function(e){
    resetear();
  }
  plusBtn.onclick = function(e){
    operandoa = displayValElement.textContent;
    operacion = "+";
    limpiar();
  }
  minusBtn.onclick = function(e){
    operandoa = displayValElement.textContent;
    operacion = "-";
    limpiar();
  }
  multiplyBtn.onclick = function(e){
    operandoa = displayValElement.textContent;
    operacion = "*";
    limpiar();
  }
  divideBtn.onclick = function(e){
    operandoa = displayValElement.textContent;
    operacion = "/";
    limpiar();
  }
  equalBtn.onclick = function(e){
    operandob = displayValElement.textContent;
    resolver();
  }
}

function limpiar(){
  displayValElement.textContent = "";
}

function resetear(){
  displayValElement.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function equalBtb(){
  var res =0;
  switch(operacion){
    case"+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    
    case"-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;

    case"x":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;

    case"÷":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
    displayValElement.textContent = res;
}
