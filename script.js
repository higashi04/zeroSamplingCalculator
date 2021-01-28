class Calculator {
    constructor(sampleDisplay, lotQty) {
      this.sampleDisplay = sampleDisplay
      this.lotQty = lotQty
      this.clear()
    }
  
    clear() {
      this.lotSize = ''
      this.sampleSize = ''
      lotQty.innerText = ''
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
     const sample = parseFloat(this.sampleSize)
     const lot = parseFloat(this.lotSize)
     if (aqlSelector.value == 0.010) {
       if (this.sampleSize > 0 || this.sampleSize <= 1200)
             {lotQty.innerText = 'All'} 
             else if (this.sampleSize >= 1201) 
             {lotQty.innerText = '1250'};
      } else if (aqlSelector.value == 0.015) {
        if (this.sampleSize >= 2 || this.sampleSize <= 500)
             {lotQty.innerText = 'All'} 
             else if(this.sampleSize >= 501 || this.sampleSize <= 5000000)
             {lotQty.innerText = 800} 
             else if (this.sampleSize >= 500001) 
             {lotQty.innerText = 1200}
      } else if (aqlSelector.value == 0.025) {
        if (this.sampleSize > 2 || this.sampleSize <= 500)
             {lotQty.innerText = 'All'}
             else if (this.sampleSize >= 501 || this.sampleSize <= 150000)
             {lotQty.innerText = 500}
             else if (this.sampleSize >= 150001 || this.sampleSize <= 500000)
             {lotQty.innerText = 750} else if 
             (this.sampleSize >= 500001) 
             {lotQty.innerText = 1112}

      } else if (aqlSelector.value == 0.040){
        if (this.sampleSize >= 2 || this.sampleSize <= 280)
        {lotQty.innerText = 'All'} else if 
        (this.sampleSize >= 281 || this.sampleSize <= 35000)
        {lotQty.innerText = 315} else if 
        (this.sampleSize >= 35001 || this.sampleSize <= 150000) 
        {lotQty.innerText = 490} else if 
        (this.sampleSize >= 150001)
        {lotQty.innerText = 715}
      }
      else if (aqlSelector.value == 0.065){ 
        if (this.sampleSize >= 2 || this.sampleSize <= 150)
        {lotQty.innerText = 'All'} else if 
        (this.sampleSize >= 151 || this.sampleSize <= 10000)
        {lotQty.innerText = '200'} else if 
        (this.sampleSize >= 10001 || this.sampleSize <= 35000)
        {lotQty.innerText = '300'} else if 
        (this.sampleSize >= 35001 || this.sampleSize <= 500000)
        {lotQty.innerText = '476'} else if 
        (this.sampleSize >= 500001)
        {lotQty.innerText = '556'}
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
//const span = document.querySelector('.inspect')

const calculator = new Calculator(lotQty, sampleDisplay)

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
})

aqlSelector.addEventListener('input', select =>{
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
    lotQty.innerText = ''
    calculator.compute()
    calculator.updateDisplay()
    
  })