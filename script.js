const buttons = document.querySelectorAll(".button-container button");
const prevOperandDisplay = document.querySelector(".prev-operand");
const currentOperandDisplay = document.querySelector(".current-operand");
const dotBtn = document.getElementById("dot");

// Variabler för ekvation
let a = 0;
let b = 0;
let operand = null;

buttons.forEach(button => {
    button.addEventListener("click", (event) => {

        const target = event.target;
        const value = target.dataset.value;

        console.log(currentOperandDisplay.textContent.slice(-1))

        console.log(target)
        
        if(target.classList.contains("number") && operand === null){
            currentOperandDisplay.textContent += value;


        } else if (target.classList.contains("operand") && operand === null){

            operand = value;
            console.log(operand)

            a = Number(currentOperandDisplay.textContent)

            prevOperandDisplay.textContent = a + operand;
            currentOperandDisplay.textContent = "";

           console.log(`Värde på A: ${a}`)
        } 

        if (target.classList.contains("number") && operand !== null){

            currentOperandDisplay.textContent += value;

            b = Number(currentOperandDisplay.textContent);
            prevOperandDisplay.textContent += b;
            
            console.log(`värde på a: ${a}, värde på b ${b}, värde på operand: ${operand}`)
        }

       if (value === "="){
        let sum = operate(operand, a, b);
        currentOperandDisplay.textContent = sum;
        operand = null;
       }

       if (value === "AC"){
        clearAll()
       } else if (value === "⌫"){
        del()
       }

       
       if(currentOperandDisplay.textContent.includes(".")){
        dotBtn.disabled = true;
       } else {
        dotBtn.disabled = false;
       }
        
    })
});


function operate(operand, a, b){
    switch(operand){
        case "+":
           return a + b;
        case "−":
            return a - b;
        case "×":
            return a * b;
        case "÷":
            return a / b;
    }
}

function clearAll(){
    currentOperandDisplay.textContent = "";
    prevOperandDisplay.textContent = "";
    a = 0;
    b = 0;
}

function del(){
    let del = currentOperandDisplay.textContent.slice(0, -1);
     currentOperandDisplay.textContent = del
}