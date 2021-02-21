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

    updateDisplay() {
        this.lotQty.innerText = this.lotSize

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
    const sample = parseInt(sampleDisplay.innerText)
   
    if (aqlSelector.value == 0.010 && sample > 0 && sample <= 1200) {
        lotQty.innerText = 'All'
    } else if (aqlSelector.value == 0.010 && sample >= 1201) {
        lotQty.innerText = '1250 muestras'
    } else if (aqlSelector.value == 0.015 && sample > 0 && sample <= 500) {
        lotQty.innerText = 'All'
    } else if (aqlSelector.value == 0.015 && sample >= 501 && sample <= 500000) {
        lotQty.innerText = 800 
    } else if (aqlSelector.value == 0.015 && sample >= 500001) {
        lotQty.innerText = 1200
    } else if (aqlSelector.value == 0.025 && sample >= 2 && sample <= 500) {
        lotQty.innerText = 'All'
    } else if (aqlSelector.value == 0.025 && sample >= 501 && sample <= 150000) {
        lotQty.innerText = 500
    } else if (aqlSelector.value == 0.025 && sample >= 150001 && sample <= 500000) {
        lotQty.innerText = 750
    } else if (aqlSelector.value == 0.025 && sample >= 500001) {
        lotQty.innerText = 1112
    } else if (aqlSelector.value == 0.040 && sample > 0 && sample <= 280) {
        lotQty.innerText = 'All'
    } else if (aqlSelector.value == 0.040 && sample >= 281 && sample <= 35000) {
        lotQty.innerText = 315
    } else if (aqlSelector.value == 0.040 && sample >= 35001 && sample <= 150000) {
        lotQty.innerText = 490
    } else if (aqlSelector.value == 0.040 && sample >= 150001) {
        lotQty.innerText = 715
    } else if (aqlSelector.value == 0.065 && sample >= 2 && sample <= 150) {
        lotQty.innerText = 'All'
    } else if (aqlSelector.value == 0.065 && sample >= 151 && sample <= 10000) {
        lotQty.innerText = 200
    } else if (aqlSelector.value == 0.065 && sample >= 10001 && sample <= 35000) {
        lotQty.innerText = 300
    } else if (aqlSelector.value == 0.065 && sample >= 35001 && sample <= 500000) {
        lotQty.innerText = 476
    } else if (aqlSelector.value == 0.065 && sample >= 500001) {
        lotQty.innerText = 556
    } else if (aqlSelector.value == 0.10 && sample >= 2 && sample <= 90) {
        lotQty.innerText = 'All'
    } else if (aqlSelector.value == 0.10 && sample >= 91 && sample <= 3200) {
        lotQty.innerText = 125
    } else if (aqlSelector.value == 0.10 && sample >= 3201 && sample <= 10000) {
        lotQty.innerText = 192
    } else if (aqlSelector.value == 0.10 && sample >= 10001 && sample <= 150000) {
        lotQty.innerText = 294
    } else if (aqlSelector.value == 0.10 && sample >= 150001 && sample <= 500000) {
        lotQty.innerText = 345
    } else if (aqlSelector.value == 0.10 && sample >= 500001) {
        lotQty.innerText = 435
    } else if (aqlSelector.value == 0.15 && sample >= 2 && sample <= 50) {
        lotQty.innerText = 'All'
    } else if (aqlSelector.value == 0.15 && sample >= 51 && sample <= 1200) {
        lotQty.innerText = 80
    } else if (aqlSelector.value == 0.15 && sample >= 1201 && sample <= 3200) {
        lotQty.innerText = 120
    } else if (aqlSelector.value == 0.15 && sample >= 3201 && sample <= 35000) {
        lotQty.innerText = 189
    } else if (aqlSelector.value == 0.15 && sample >= 35001 && sample <= 150000) {
        lotQty.innerText = 218
    } else if (aqlSelector.value == 0.15 && sample >= 150001 && sample <= 500000) {
        lotQty.innerText = 270
    } else if (aqlSelector.value == 0.25 && sample >= 2 && sample <= 50) {
        lotQty.innerText = 'All'
    } else if (aqlSelector.value == 0.25 && sample >= 51 && sample <= 500) {
        lotQty.innerText = 50
    } else if (aqlSelector.value == 0.25 && sample >= 501 && sample <= 1200) {
        lotQty.innerText = 75
    } else if (aqlSelector.value == 0.25 && sample >= 1201 && sample <= 10000) {
        lotQty.innerText = 116
    } else if (aqlSelector.value == 0.25 && sample >= 10001 && sample <= 35000) {
        lotQty.innerText = 135
    } else if (aqlSelector.value == 0.25 && sample >= 35001 && sample <= 150000) {
        lotQty.innerText = 170
    } else if (aqlSelector.value == 0.25 && sample >= 150001 && sample <= 500000) {
        lotQty.innerText = 200
    } else if (aqlSelector.value == 0.25 && sample >= 500001) {
        lotQty.innerText = 244
    } else if (aqlSelector.value == 0.40 && sample >= 2 && sample <= 25) {
        lotQty.innerText = 'All'
    } else if (aqlSelector.value == 0.40 && sample >= 26 && sample <= 280) {
        lotQty.innerText = 32
    } else if (aqlSelector.value == 0.40 && sample >= 281 && sample <= 500) {
        lotQty.innerText = 48
    } else if (aqlSelector.value == 0.40 && sample >= 501 && sample <= 3200) {
        lotQty.innerText = 73
    } else if (aqlSelector.value == 0.40 && sample >= 3201 && sample <= 10000) {
        lotQty.innerText = 86
    } else if (aqlSelector.value == 0.40 && sample >= 10001 && sample <= 35000) {
        lotQty.innerText = 108
    } else if (aqlSelector.value == 0.40 && sample >= 35001 && sample <= 150000) {
        lotQty.innerText = 123
    } else if (aqlSelector.value == 0.40 && sample >= 150001 && sample <= 500000) {
        lotQty.innerText = 156
    } else if (aqlSelector.value == 0.40 && sample >= 500001) {
        lotQty.innerText = 189
    } else if (aqlSelector.value == 0.65 && sample >= 2 && sample <= 15) {
        lotQty.innerText = 'All'
    } else if (aqlSelector.value == 0.65 && sample >= 16 && sample <= 150) {
        lotQty.innerText = 20
    } else if (aqlSelector.value == 0.65 && sample >= 151 && sample <= 280) {
        lotQty.innerText = 29
    } else if (aqlSelector.value == 0.65 && sample >= 281 && sample <= 1200) {
        lotQty.innerText = 47
    } else if (aqlSelector.value == 0.65 && sample >= 1201 && sample <= 3200) {
        lotQty.innerText = 53
    } else if (aqlSelector.value == 0.65 && sample >= 3201 && sample <= 10000) {
        lotQty.innerText = 68
    } else if (aqlSelector.value == 0.65 && sample >= 10001 && sample <= 35000) {
        lotQty.innerText = 77
    } else if (aqlSelector.value == 0.65 && sample >= 35001 && sample <= 150000) {
        lotQty.innerText = 96
    } else if (aqlSelector.value == 0.65 && sample >= 150001 && sample <= 500000) {
        lotQty.innerText = 119
    } else if (aqlSelector.value == 0.65 && sample >= 500001) {
        lotQty.innerText = 143
    } else if (aqlSelector.value == 1.0 && sample >= 2 && sample <= 8) {
        lotQty.innerText = 'All'
    } else if (aqlSelector.value == 1.0 && sample >= 9 && sample <= 90) {
        lotQty.innerText = 13
    } else if (aqlSelector.value == 1.0 && sample >= 91 && sample <= 150) {
        lotQty.innerText = 19
    } else if (aqlSelector.value == 1.0 && sample >= 151 && sample <= 500) {
        lotQty.innerText = 29
    } else if (aqlSelector.value == 1.0 && sample >= 501 && sample <= 1200) {
        lotQty.innerText = 34
    } else if (aqlSelector.value == 1.0 && sample >= 1201 && sample <= 3200) {
        lotQty.innerText = 42
    } else if (aqlSelector.value == 1.0 && sample >= 3201 && sample <= 10000) {
        lotQty.innerText = 50
    } else if (aqlSelector.value == 1.0 && sample >= 10001 && sample <= 35000) {
        lotQty.innerText = 60
    } else if (aqlSelector.value == 1.0 && sample >= 35001 && sample <= 150000) {
        lotQty.innerText = 74
    } else if (aqlSelector.value == 1.0 && sample >= 150001 && sample <= 500000) {
        lotQty.innerText = 90
    } else if (aqlSelector.value == 1.0 && sample >= 500001) {
        lotQty.innerText = 102
    } else if (aqlSelector.value == 1.5 && sample >= 2 && sample <= 8) {
        lotQty.innerText = 'All'
    } else if (aqlSelector.value == 1.5 && sample >= 9 && sample <= 50) {
        lotQty.innerText = 8
    } else if (aqlSelector.value == 1.5 && sample >= 51 && sample <= 90) {
        lotQty.innerText = 13
    } else if (aqlSelector.value == 1.5 && sample >= 91 && sample <= 280) {
        lotQty.innerText = 19
    } else if (aqlSelector.value == 1.5 && sample >= 281 && sample <= 500) {
        lotQty.innerText = 21
    } else if (aqlSelector.value == 1.5 && sample >= 501 && sample <= 1200) {
        lotQty.innerText = 27
    } else if (aqlSelector.value == 1.5 && sample >= 1201 && sample <= 3200) {
        lotQty.innerText = 35
    } else if (aqlSelector.value == 1.5 && sample >= 3201 && sample <= 10000) {
        lotQty.innerText = 38
    } else if (aqlSelector.value == 1.5 && sample >= 10001 && sample <= 35000) {
        lotQty.innerText = 46
    } else if (aqlSelector.value == 1.5 && sample >= 35001 && sample <= 150000) {
        lotQty.innerText = 56
    } else if (aqlSelector.value == 1.5 && sample >= 150001) {
        lotQty.innerText = 64
    } else if (aqlSelector.value == 2.5 && sample >= 2 && sample <= 25) {
        lotQty.innerText = 5
    } else if (aqlSelector.value == 2.5 && sample >= 26 && sample <= 50) {
        lotQty.innerText = 7
    } else if (aqlSelector.value == 2.5 && sample >= 51 && sample <= 150) {
        lotQty.innerText = 11
    } else if (aqlSelector.value == 2.5 && sample >= 151 && sample <= 280) {
        lotQty.innerText = 13
    } else if (aqlSelector.value == 2.5 && sample >= 281 && sample <= 500) {
        lotQty.innerText = 16
    } else if (aqlSelector.value == 2.5 && sample >= 501 && sample <= 1200) {
        lotQty.innerText = 19
    } else if (aqlSelector.value == 2.5 && sample >= 1201 && sample <= 3200) {
        lotQty.innerText = 23
    } else if (aqlSelector.value == 2.5 && sample >= 3201 && sample <= 10000) {
        lotQty.innerText = 29
    } else if (aqlSelector.value == 2.5 && sample >= 10001 && sample <= 35000) {
        lotQty.innerText = 35
    } else if (aqlSelector.value == 2.5 && sample >= 35001) {
        lotQty.innerText = 40
    } else if (aqlSelector.value == 4.0 && sample >= 2 && sample <= 25) {
        lotQty.innerText = 3
    } else if (aqlSelector.value == 4.0 && sample >= 26 && sample <= 50) {
        lotQty.innerText = 7
    } else if (aqlSelector.value == 4.0 && sample >= 51 && sample <= 90) {
        lotQty.innerText = 8
    } else if (aqlSelector.value == 4.0 && sample >= 91 && sample <= 150) {
        lotQty.innerText = 9
    } else if (aqlSelector.value == 4.0 && sample >= 151 && sample <= 280) {
        lotQty.innerText = 10
    } else if (aqlSelector.value == 4.0 && sample >= 281 && sample <= 500) {
        lotQty.innerText = 11
    } else if (aqlSelector.value == 4.0 && sample >= 501 && sample <= 1200) {
        lotQty.innerText = 15
    } else if (aqlSelector.value == 4.0 && sample >= 1201 && sample <= 3200) {
        lotQty.innerText = 18
    } else if (aqlSelector.value == 4.0 && sample >= 3201 && sample <= 10000) {
        lotQty.innerText = 22
    } else if (aqlSelector.value == 4.0 && sample >= 10001) {
        lotQty.innerText = 29
    } else if (aqlSelector.value == 6.5 && sample >= 2 && sample <= 25) {
        lotQty.innerText = 3
    } else if (aqlSelector.value == 6.5 && sample >= 26 && sample <= 90) {
        lotQty.innerText = 5
    } else if (aqlSelector.value == 6.5 && sample >= 91 && sample <= 150) {
        lotQty.innerText = 6
    } else if (aqlSelector.value == 6.5 && sample >= 151 && sample <= 280) {
        lotQty.innerText = 7
    } else if (aqlSelector.value == 6.5 && sample >= 281 && sample <= 500) {
        lotQty.innerText = 9
    } else if (aqlSelector.value == 6.5 && sample >= 501 && sample <= 1200) {
        lotQty.innerText = 11
    } else if (aqlSelector.value == 6.5 && sample >= 1201 && sample <= 3200) {
        lotQty.innerText = 13
    } else if (aqlSelector.value == 6.5 && sample >= 3201) {
        lotQty.innerText = 15
    } else if (aqlSelector.value == 10.0 && sample >= 2 && sample <= 50) {
        lotQty.innerText = 3
    } else if (aqlSelector.value == 10.0 && sample >= 51 && sample <= 90) {
        lotQty.innerText = 4
    } else if (aqlSelector.value == 10.0 && sample >= 91 && sample <= 150) {
        lotQty.innerText = 5
    } else if (aqlSelector.value == 10.0 && sample >= 151 && sample <= 280) {
        lotQty.innerText = 6
    } else if (aqlSelector.value == 10.0 && sample >= 281 && sample <= 500) {
        lotQty.innerText = 7
    } else if (aqlSelector.value == 10.0 && sample >= 501 && sample <= 1200) {
        lotQty.innerText = 8
    } else if (aqlSelector.value == 10.0 && sample >= 1201) {
        lotQty.innerText = 9
    }

    calculator.updateDisplay()
})