let operatorNumber = false;
let result = '';
let operation = '';

function getNumber(number) {
    operation += number;
    displayOperation();
}

function getOperator(operatorCapture) {
    if (result !== '') {
        operatorNumber = false;
        operation = result;
    }
    if (operatorNumber === true) {
        errorMessage("Calcul à un seul opérateur");
    } else {
        operatorNumber = true;
        operation += ' ' + operatorCapture + ' ';
    }
    displayOperation();
}

// TODO faire passer le nombre négatif en positif
function getRelative() {
    if (operatorNumber === false) {
        operation = '-' + operation;
    } else {
        operation = operation.slice(0, operation.lastIndexOf(' ')) + ' -' + operation.slice(operation.lastIndexOf(' ') + 1);
    }
    displayOperation();
}

function getResult() {
    if (operation === '') {
        errorMessage('Il faut saisir une opération');
    } else {
        result = eval(operation);
        document.getElementById('display').innerHTML = result;
    }
}

function reset() {
    operation = '';
    operatorNumber = false;
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
    document.getElementById('display').innerHTML = operation;
}