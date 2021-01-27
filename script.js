class Calculator {
    constructor(sampleDisplay, lotQty) {
      this.sampleDisplay = sampleDisplay
      this.lotQty = lotQty
      this.clear()
    }
  
    clear() {
      this.lotSize = ''
      this.sampleSize = ''
      this.operation = undefined
    }
  
    delete() {
      this.lotSize = this.lotSize.toString().slice(0, -1)
    }
  
    appendNumber(number) { 
      this.lotSize = this.lotSize.toString() + number.toString()
    }
  
    chooseAql(aql) {
      if (this.sampleSize === '') return
      if (this.lotSize !== '') {
        this.compute()
      }
      this.aql = aql
      this.sampleSize = this.lotSize
      this.lotSize = ''
    }
  
    compute() {
      let computation
      parseFloat(this.sampleSize)
     // const lot = parseFloat(this.lotSize)
     // if (isNaN(sample)||isNaN(lot)) return
     switch (this.aql){
     case 0.010:
      if (this.sampleSize > 2 || this.sampleSize < 1200)
          { //this.lotQty.innerText = 'all'
          let samples = document.createElement(div);
          samples.innerText = 'All'
          lotQty.append('All');
        };

    }
    
      
      };
    
  
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
      this.getDisplayNumber(this.lotSize)
      
    }
  };





const numberBtns = document.querySelectorAll('.number');
const aqlSelector = document.querySelector('#aql');
const allClearBtn = document.querySelector('.all-clear');
const lotQty = document.querySelector('.user-input');
const sampleDisplay = document.querySelector('.sample-size')
const result = document.querySelector('.submit');
const deleteBtn = document.querySelector('.delete');

const calculator = new Calculator(lotQty, sampleDisplay)

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
})

aqlSelector.addEventListener('change', select =>{
  calculator.chooseAql(select.value)
  calculator.updateDisplay()
})

deleteBtn.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})


allClearBtn.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })

  result.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })