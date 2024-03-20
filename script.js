// const para resultados
const result = document.querySelector('.result');
// const para botões
const buttons = document.querySelectorAll('.buttons button');

let currentNumber = "";
let firstOperand = null;
let operator = null;
let restart = false;

// função para zerar os digitos e fazer uma nova ligação
 function updateResult(originClear = false){
    result.innerText = originClear ? 0: currentNumber.replace(".",",");
 }

 function addDigit(digit) {
    if (restart) {
        currentNumber = digit;
        restart = false;
    } else {
        currentNumber += digit;
    }

    updateResult();
 }
//  evento onclick para cada botão e uma condicional
buttons.forEach((button)=> {
    button.addEventListener("click", () => {
        const buttonText = button.innerText;
        if (/^[0-9]+$/.test(buttonText)) {
            addDigit(buttonText);
        }
    })
}
)

// função para capturar os eventos onclick no visor

function name(params) {
    
}