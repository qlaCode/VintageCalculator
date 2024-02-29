class Calculator {
    constructor() {
        this.buttons = document.querySelectorAll('.calc-btn');
        this.numberButtons = document.querySelectorAll('.calc-number');
        this.operatorButtons = document.querySelectorAll('.calc-operator');
        this.bazookaButton = document.getElementById('bazooka');
        this.clearEntryButton = document.getElementById('clearEntry');
        this.equalButton = document.getElementById('equal');
        this.decimalButton = document.getElementById('decimal');
        this.percentageButton = document.getElementById('percentage');
        this.screen = document.getElementById('screen');
        this.operation = '';
        this.currentNumber = '';
        this.currentOperand = '';
        this.previousOperand = '';
        this.startNewNumber = true;
        this.result;
        this.sizeExceeded = false;

        this.myEventListeners();
    }

    myEventListeners() {
        this.buttons.forEach(button => {
            button.addEventListener('click', this.logClick.bind(this));
        });

        this.numberButtons.forEach(button => {
            button.addEventListener('click', this.updateCurrentValue.bind(this));
        });

        this.operatorButtons.forEach(button => {
            button.addEventListener('click', this.updateOperation.bind(this));
        });
        
        this.equalButton.addEventListener('click', this.calculateResult.bind(this));
        this.clearEntryButton.addEventListener('click', this.clearEntry.bind(this));
        this.bazookaButton.addEventListener('click', this.bazooka.bind(this));
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
    }

    logClick(event) {
        const button = event.target;
        console.log('Button Clicked: ' + button.textContent);
    }

    updateCurrentValue(event) {
        const button = event.target;

        if (this.startNewNumber === true) {
            this.currentNumber = button.textContent;
            console.log('Clicked Number: ' + button.textContent);
            console.log('Current Number: ' + this.currentNumber);
            this.currentOperand = this.currentNumber;
            this.screen.textContent = this.currentOperand;
        }

        if (this.startNewNumber === false) {
            this.currentNumber = button.textContent;
            this.currentOperand = this.currentOperand + this.currentNumber;
            this.screen.textContent = this.currentOperand;
        }

        if (this.currentOperand.length >= 9) {
            this.screen.textContent = 'Error';
        }

        this.startNewNumber = false;
    }

    updateOperation(event) {
        if (this.currentOperand.length < 9) {
            const button = event.target;
            this.operation = button.id;
            this.previousOperand = this.currentOperand;
            this.currentOperand = '';
            this.currentNumber = '';
            console.log('Operation: ' + this.operation);
            console.log('numberCount: ' + this.numberCount);
            this.screen.textContent = button.textContent;
        }

        if (this.currentOperand.length >= 9) {
            this.screen.textContent = 'Error';
        }
    }

    calculateResult(event) {
        const button = event.target;
        console.log('Operation in calculateResult is ' + this.operation);

        console.log('Calculating Result... Intense Work in the background.');
        switch (this.operation) {
            case 'add':
                    this.result = parseFloat(this.previousOperand) + parseFloat(this.currentOperand);
                    this.result = this.result.toFixed(3)
                break;
            case 'substract':
                    this.result = parseFloat(this.previousOperand) - parseFloat(this.currentOperand);
                    this.result = this.result.toFixed(3)
                break;
                case 'multiply':
                    this.result = parseFloat(this.previousOperand) * parseFloat(this.currentOperand);
                    this.result = this.result.toFixed(3)
                break;
            case 'divide':
                    this.result = parseFloat(this.previousOperand) / parseFloat(this.currentOperand);
                    this.result = this.result.toFixed(3)
                break;
            case 'percentage':
                    this.result = parseFloat((this.previousOperand * 0.01)) * parseFloat(this.currentOperand);
                break;
            default:
                console.log('Error');
        }
        console.log('Result: ' + this.result);
        this.currentNumber = this.result;
        this.currentOperand = this.result;
        this.previousOperand = this.result;

        if (this.currentOperand.length >= 9) {
            this.screen.textContent = 'Error';
        }
        if (this.currentOperand.length < 9) {
            this.screen.textContent = this.result;
        }
        this.startNewNumber = true;

    }

    clearEntry(event) {
        console.log('Operation: Reset Entry');
        this.currentNumber = '';
        this.currentOperand = '';
        console.log('CE Clicked');
        this.screen.textContent = '.';
    }

    bazooka(event) {
        console.log('Operation: Clear All');
        this.currentNumber = '';
        this.currentOperand = '';
        this.previousOperand = '';
        this.numberCount = 0;
        this.screen.textContent = '.';
        console.log('C Clicked');
    }

    later(event) {
        const button = event.target;
        console.log('Under development. Come back later.');
        this.screen.textContent = 'LATER.';
    }

    handleKeyPress(event) {
        const key = event.key;
        const button = document.querySelector(`.calc-btn[data-key="${key}"]`);

        if (button) {
            button.click();
        }
    }
}

// Instantiate Calculator
const calculator = new Calculator();
