function init() {
  let oneBtn = document.getElementById('calc-one');
  let twoBtn = document.getElementById('calc-two');
  let threeBtn = document.getElementById('calc-three');
  let fourBtn = document.getElementById('calc-four');
  let fiveBtn = document.getElementById('calc-five');
  let sixBtn = document.getElementById('calc-six');
  let sevenBtn = document.getElementById('calc-seven');
  let eightBtn = document.getElementById('calc-eight');
  let nineBtn = document.getElementById('calc-nine');
  let zeroBtn = document.getElementById('calc-zero');
  
  let decimalBtn = document.getElementById('calc-decimal');
  let clearBtn = document.getElementById('calc-clear');
  let backspaceBtn = document.getElementById('calc-backspace');
  let displayValElement = document.getElementById('calc-display-val');

  let plusBtn = document.getElementById('calc-plus');
  let minusBtn = document.getElementById('calc-minus');
  let multiplyBtn = document.getElementById('calc-multiply');
  let divideBtn = document.getElementById('calc-divide');

  let equalBtn = document.getElementById('calc-equal');

  let displayVal ='0';
  let pendingVal;
  let evalStringArray = [];
  
  let calcNumBtns = document.getElementsByClassName('calc-btn-num');
  let calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');
  
  let updateDisplayVal = (clickObj) => {
    let btnText = clickObj.target.innerText;
    
    if(displayVal === '0')
        displayVal = '';
    
        displayVal += btnText;
        displayValElement.innerText = displayVal;
  }

  var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
      case '+':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('+');
        break;
        
      case '-':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('-');
        break;

      case 'x':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('*');
        break;

      case '÷':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('/');
        break;

      case '=':
        evalStringArray.push(displayVal)
          evaluation = eval(evalStringArray.join(' '));
          displayVal = evaluation + '';
          displayValElement.innerText = displayVal;
          evalStringArray = [];
          break;
          default:
        break;
        }
      
      
  }
  
  for (let i = 0; i < calcNumBtns.length; i++) {
      calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
  }
  
  for (let i = 0; i < calcOperatorBtns.length; i++) {
      calcOperatorBtns[i].addEventListener('click', performOperation, false);
  }
    
 
  clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
  }
  backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal -1);
    
    if(displayVal === '')
        displayVal = '0';
    
    displayValElement.innerText = displayVal;
  }
  decimalBtn.onclick = () => {
    if(!displayVal.includes('.'))
        displayVal += '.';
  }
}  
