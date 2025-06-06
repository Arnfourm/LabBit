export function operationAdding(firstNumber, secondNumber){
    if (!firstNumber || !secondNumber){
        return ("Ошибка! Нельзя сложить!");
    }
    else{
        return (firstNumber + secondNumber);
    }
}

export function operationSubtraction(firstNumber, secondNumber){
    if (!firstNumber || !secondNumber){
        return ("Ошибка! Нельзя вычесть!");
    }
    else{
        return (firstNumber - secondNumber);
    }
}

export function operationMultiply(firstNumber, secondNumber){
    if (!firstNumber || !secondNumber){
        return ("Ошибка! Нельзя умножить!");
    }
    else{
        return (firstNumber * secondNumber);
    }
}

export function operationDivide(firstNumber, secondNumber){
    if (!firstNumber || !secondNumber){
        return ("Ошибка! Нельзя умножить!");
    }
    else if (firstNumber == 0 || secondNumber == 0){
        return ("Ошибка! Нельзя умножить на ноль!");
    }
    else{
        return (firstNumber / secondNumber);
    }
}

export function operationPow(firstNumber){
    if (!firstNumber){
        return ("Ошибка! Нельзя возвести в квадрат!");
    }
    else{
        return (Math.pow(firstNumber, 2));
    }
}

export function operationSQRT(firstNumber){
    if (!firstNumber){
        return ("Ошибка! Нельзя возвести в квадрат!");
    }
    else if (firstNumber < 0){
        return ("Меньше нуля!");
    }
    else{
        return (Math.sqrt(firstNumber));
    }
}