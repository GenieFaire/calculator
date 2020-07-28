function addition(terme1, terme2) {
    return terme1 + terme2;
}

function soustraction(terme1, terme2) {
    return terme1 - terme2;
}

function multiplication(facteur1, facteur2) { 
    return facteur1 * facteur2;
}

function division(dividende, diviseur) {
    if (diviseur === 0) {
        throw new Error('on ne peut pas diviser par 0 !!!!');
    } else {
        return dividende / diviseur;
    }
}

try {
    do {
        var operation = Number(prompt('Quelle opération voulez-vous effectuer ? \n'
        + '1 - Addition \n'
        + '2 - Multiplication \n'
        + '3 - Soustraction \n'
        + '4 - Division'));
    
        console.log(operation);
    } while(operation != 1 && operation != 2 && operation != 3 && operation != 4);
    
    do {
        var firstNumber = (Number(prompt('Entrez le premier nombre : ')));
    } while(isNaN(firstNumber));
    
    do {
        var secondNumber = (Number(prompt('Entrez le deuxième nombre : ')));
    } while(isNaN(secondNumber));
    
    switch (operation) {
        case 1:
            var result = addition(firstNumber, secondNumber);
            break;
        case 2:
            var result = soustraction(firstNumber, secondNumber);
            break;
        case 3:
            var result = multiplication(firstNumber, secondNumber);
            break;
        case 4:
            var result = division(firstNumber, secondNumber);
            break;
        default:
            throw new Error('Cette opération n\'est pas connue');
            break;
    }
    
        alert('Le résultat est : ' + result);
        
} catch (error) {
    alert(error);
}


