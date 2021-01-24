class Calculator {
    constructor(previousOperandTextElement, lotQty) {
      this.previousOperandTextElement = previousOperandTextElement
      this.lotQty = lotQty
      this.clear()
    }
  
    clear() {
      this.lotQty = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete() {
      this.lotQty = this.lotQty.toString().slice(0, -1)
    }
  
    appendNumber(number) { 
      this.lotQty = this.lotQty.toString() + number.toString()
    }
  
    chooseOperation(operation) {
      
    }
  
    compute() {
      
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.lotQty.innerText =
        this.getDisplayNumber(this.lotQty)
      
    }
  }





const numberBtns = document.querySelectorAll('.number');
const aqlSelector = document.querySelector('#aql');
const allClearBtn = document.querySelector('.all-clear');
const lotQty = document.querySelector('.user-input');
const sampleDisplay = document.querySelector('.sample-size')
const result = document.querySelector('.submit');

const calculator = new Calculator(lotQty)

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
})





allClearBtn.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })