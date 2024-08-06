let userNum1 = Number(prompt("Введите число 1: "));
let userNum2 = Number(prompt("Введите число 2: "));
let userNum3 = Number(prompt("Введите число 3: "));

function findMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else return num3;
}

alert(`Максимальное число: ${findMax(userNum1,userNum2,userNum3)}`);