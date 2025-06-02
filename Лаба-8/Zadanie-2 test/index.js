import readline from 'readline';

import {
  operationAdding,
  operationSubtraction,
  operationMultiply,
  operationDivide,
  operationPow,
  operationSQRT
} from '@luver/zadanie-2';

const prmt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askOperation() {
    prmt.question("Введите номер операции: ", (operation) => {
        if (operation == "exit"){
            rl.close();
            return;
        }
    
        if (operation === '5' || operation === '6') {
            prmt.question("Введите число: ", (number) => {
                switch (operation){
                    case '5':
                        console.log(operationPow(Number(number)));
                        break;
                    case '6':
                        console.log(operationSQRT(Number(number)));
                        break
                }
                askOperation();
            });
        } else {
            prmt.question("Введите первое число: ", (firstNumber) => {
                prmt.question("Введите второе число: ", (secondNumber) => {
                    switch(operation){
                        case '1':
                            console.log(operationAdding(Number(firstNumber), Number(secondNumber)));
                            break;
                        case '2':
                            console.log(operationSubtraction(Number(firstNumber), Number(secondNumber)));
                            break;
                        case '3':
                            console.log(operationMultiply(Number(firstNumber), Number(secondNumber)));
                            break;
                        case '4':
                            console.log(operationDivide(Number(firstNumber), Number(secondNumber)));
                            break;
                        default:
                            console.log("Неизвестное число");
                            break;
                    }
                    askOperation();
                });
            });
        }
    });
}

askOperation();