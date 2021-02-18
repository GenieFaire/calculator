let result = '', operator = '', number1 = '', number2 = '';

function getNumber(number) {
    if (result !== '') {
        number1 = '';
        result = '';
    }
    operator === '' ? number1 += number : number2 += number;
    displayOperation();
}

function getOperator(operatorCapture) {
    if (number1 === '') {
        errorMessage("On commence par les chiffres");
    }
    operator !== '' ? errorMessage("Calcul à un seul opérateur") : operator += operatorCapture;
    displayOperation();
}

function setRelative() {
    operator === '' ? number1 = changeNumber(number1) : number2 = changeNumber(number2);
    displayOperation();
}

function changeNumber(number) {
    return number.charAt(0) === '-' ? number.slice(1) : '-' + number;
}

function getResult() {
    if (operator === '') {
        errorMessage('Il faut saisir une opération');
        displayConsole();
    } else {
        result = eval(number1 + ' ' + operator + ' ' + number2);
        document.getElementById('display').innerHTML = result;
        reset();
        number1 = result.toString();
    }
}

function displayConsole (){
    console.log('number1 : ' + number1);
    console.log('number2 : ' + number2);
    console.log('operator : ' + operator);
    console.log('result : ' + result);
}

function reset() {
    operator = '';
    number1 = '';
    number2 = '';
}

function errorMessage(message) {
    document.getElementById('display').innerHTML = message;
    setTimeout(function () {
        displayOperation();
    }, 2000);
}

function displayOperation() {
    document.getElementById('display').innerHTML = number1 + ' ' + operator + ' ' + number2;
}
