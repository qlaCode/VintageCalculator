let buttons = document.querySelectorAll('.calc-btn');
let numberButtons = document.querySelectorAll('.calc-number');
let operatorButtons = document.querySelectorAll('.calc-operator');
let bazookaButton = document.getElementById('bazooka');
let clearEntryButton = document.getElementById('clearEntry');
let equalButton = document.getElementById('equal');
let decimalButton = document.getElementById('decimal');
let percentageButton = document.getElementById('percentage');
let screen = document.getElementById('screen');
let operation;
let previousNumber = '';
let currentNumber = '';
let currentOperand = '';
let previousOperand = '';
let numberCount = 0;
let result;
let sizeExceeded = false

const logClick = (event) => {
    const button = event.target;
    console.log('Button Clicked: '+ button.textContent);
};

const updateCurrentValue = (event) => {
    const button = event.target;
    
    if(numberCount == 0){
        currentNumber = button.textContent;
        console.log('Clicked Number: ' + button.textContent);
        console.log('Current Number: ' + currentNumber);
        currentOperand = currentNumber;
        screen.textContent = currentOperand;
    }

    if(numberCount > 0){
        currentNumber = button.textContent; 
        currentOperand = currentOperand + currentNumber;
        screen.textContent = currentOperand
    }

    if(currentOperand.length >= 9){
        screen.textContent = 'Error'
    }
    
    /* 
    if(currentNumber.length > 9){
        sizeExceeded = true
        currentNumber.shift();
        screen.textContent = currentNumber.join('');
    }
    */
    numberCount += 1;
    previousNumber = currentNumber;
};

const updateOperation = (event) => {

    if(currentOperand.length < 9){
        const button = event.target;
        operation = button.id;
        previousOperand = currentOperand;
        currentOperand = '';
        currentNumber = '';
        console.log('Operation: '+ operation);
        console.log('numberCount: '+ numberCount);
        screen.textContent = button.textContent;
        
    }
    
    if(currentOperand.length >= 9){
        screen.textContent = 'Error'
    }

};

const calculateResult = (event) => {
    const button = event.target;
    console.log('operation in calculateResult is '+operation);
    
    console.log('Calculating Result... Intense Work in the background.');
    switch (operation){
        case 'add':
            result = parseFloat(previousOperand) + parseFloat(currentOperand); 
            break;
        case 'substract':
            result = parseFloat(previousOperand) - parseFloat(currentOperand); 
            break;
        case 'multiply':
            result = parseFloat(previousOperand) * parseFloat(currentOperand); 
            break;
        case 'divide':
            result = parseFloat(previousOperand) / parseFloat(currentOperand); 
            break;
        case 'percentage':
            result = parseFloat((previousOperand * 0.01)) * parseFloat(currentOperand);
            break;
        default: 
            console.log('Error');
            
    }
    console.log('Result: '+ result);
    currentNumber = result;
    currentOperand = result;
    screen.textContent = result;
};

const clearEntry = (event) => {
    console.log('Operation: Reset Entry');
    currentNumber = '';
    currentOperand = '';
    console.log('CE Clicked');  
    screen.textContent = '.';
};

//clears all entries - button C
const bazooka = (event) => {
    console.log('Operation: Clear All');
    previousNumber = '';
    currentNumber = '';
    currentOperand = '';
    previousOperand = '';
    numberCount = 0;
    screen.textContent = '.';
    console.log('C Clicked');
};

/// /// /// /// /// /// /// /// /// /// /// ///
/// /// /// /// EVENT LISTENERS /// /// /// /// 
/// /// /// /// /// /// /// /// /// /// /// ///

/// Capture click on any button, with the value
buttons.forEach(button => {
    //button.addEventListener('click', () => logClick(button.textContent));   
    button.addEventListener('click', logClick);   
});

/// Capture click on NUMBER buttons, show value in screen.
numberButtons.forEach(button => {
    button.addEventListener('click', updateCurrentValue);
 });

/// Capture click on OPERATION buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', updateOperation)
});

/// Capture click on CE buttons
clearEntryButton.addEventListener('click', clearEntry);

/// Capture click on C buttons
bazookaButton.addEventListener('click', bazooka);

/// Capture click on EQUAL buttons
equalButton.addEventListener('click', calculateResult);

/// Capture click on decimal buttons
// like a normal number button