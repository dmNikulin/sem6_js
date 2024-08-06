function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function mult(num1, num2) {
    let result = num1 * num2;
    return result;
}

function div(num1, num2) {
    let result;
    result = num1 / num2;
    return result;
}

function subtraction(num1, num2) {
    let result;
    if (num1 > num2) {
        result = num1 - num2;
        return result;
    } else {
        result = num2 - num1;
        return result;
    }
}

let userNumber1 = Number(prompt("Введите число 1: "));
let userNumber2 = Number(prompt("Введите число 2: "));

alert(`Сумма чисел: ${sum(userNumber1,userNumber2)},\n разность чисел: ${subtraction(userNumber1,userNumber2)}, \n произведение чисел: ${mult(userNumber1,userNumber2)},\n частное чисел: ${div(userNumber1,userNumber2)}.`);