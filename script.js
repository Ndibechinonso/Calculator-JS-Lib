class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
clear() {
this.currentOperand = ""
this.previousOperand = ""
 this.operation = ""
}

appendNumber(number) { if (number === "." && this.currentOperand.includes(".") ) return
this.currentOperand += number

}

    
delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  
}

chooseOperand(operation) { if (this.currentOperand === "") return
if(this.previousOperand !== "" || this.operation === "%") {
    this.calculate()
}
    this.operation = operation
this.previousOperand = this.currentOperand + this.operation;
this.previousOperand = parseFloat(this.currentOperand)
this.currentOperand = ""

}

calculate() { 
    let result
    const previous = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    
    switch (this.operation) {
     case "+" : 
        result = previous + current 
        break

     case "÷" : 
         result = previous / current  
        break
    
    case "-" :
        result = previous - current
        break

    case "*" :
        result = previous * current
        break

    case "%" :
        result = previous / 100 
        break

    default :
     return
}

 this.currentOperand = result
    this.previousOperand = ""
}


updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand
    this.previousOperandTextElement.innerText = this.previousOperand

    }

}



