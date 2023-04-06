const NUMERI = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const OPERATORI = ['+', '-', '*','/']

var input = document.getElementById("input")

document.addEventListener('keydown', function(event) {
    validaInput(event.key)
});

var operazione = ""
var risultato = ""

function validaInput(key) {
    if (key in NUMERI) {
        input.value+=key
        operazione+=key
        //Per qualche motivo non funziona --> key in OPERATORI
    } else if (key == "+" ||key == "-" ||key == "*" ||key == "/") {
        input.value=""
        operazione+=key
    } else if (key == "Enter") {
        input.value=calcolaRisultato(operazione)
    } else if (key == "Backspace") {
        delInput();
    }
}

function delInput() {
    input.value=""
    operazione=""
    risultato=""
}

function calcolaRisultato(operazione) {
    try {
        console.log(operazione)
        result=eval(operazione)
    } catch (e) {
        result = e;
    }
    delInput()
    return result;
}