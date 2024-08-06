let num = prompt("Введите число: ");

function userSalary(number) {
    if (isNaN(number)) {
        alert("Неправильное значение!");

    } else {

        let result = number - (number * 0.13);
        alert(`Размер заработной платы за вычетом налогов равен: ${result}`);
    }
}

userSalary(num);