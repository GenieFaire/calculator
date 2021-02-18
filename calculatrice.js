let result = '', operator = '', number1 = '', number2 = '';

function getNumber(number) {
    if (result !== '') {
        reset();
    }
    operator === '' ? number1 += number : number2 += number;
    displayOperation();
}

function getOperator(operatorCapture) {
    if (number1 === '') {
        errorMessage("On commence par les chiffres");
    }
    if (result !== '') {
        let newNumber1 = result;
        reset();
        number1 = newNumber1;
    }
    operator !== '' ? errorMessage("Calcul à un seul opérateur") : operator += operatorCapture;
    displayOperation();
}

function getRelative() {
    if (result !== '') {
        let newNumber1 = result.toString();
        reset();
        number1 = newNumber1;
        console.log(typeof number1);
        console.log(number1.charAt(0));
    }
    operator === '' ? number1 = changeNumber(number1) : number2 = changeNumber(number2);
    displayOperation();
}

function changeNumber(number) {
    console.log(number.charAt(0));
    return number.charAt(0) === '-' ? number.slice(1) : '-' + number;
}


function getResult() {
    if (operator === '') {
        errorMessage('Il faut saisir une opération');
    } else {
        result = eval(number1 + ' ' + operator + ' ' + number2);
        number1 = result;
        document.getElementById('display').innerHTML = result;
    }
}

function reset() {
    operator = '';
    number1 = '';
    number2 = '';
    result = '';
    displayOperation();
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