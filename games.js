//игра Угадай число
function guessNumber() {
    alert("Нужно угадать число из диапазона от 1 до 100. Загадываю...");
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    alert("Всё.");
    let i = 3;
    let userInput = prompt("У вас есть попыток: " + i + ". Какое число я загадала?");
    if (userInput === null) {
        alert("Вы вышли из игры.");
        return;
    }
    let userNumber = Number(userInput);
    while (userNumber !== randomNumber && i > 0) {
        alert("Вы не угадали число.");
        if (randomNumber < userNumber) {
            i--;
            alert("Я дам подсказку: оно меньше " + userNumber + ".");
            userNumber = Number(prompt("Осталось попыток: " + i + ". Какое число я загадала?"));
        } else if (randomNumber > userNumber) {
            i--;
            alert("Я дам подсказку: оно больше " + userNumber + ".");
            userNumber = Number(prompt("Осталось попыток: " + i + ". Какое число я загадала?"));
        }
        if (i == 1) {
            alert("У вас не осталось попыток. Я загадала число " + randomNumber + ".")
            break;
        }
        if (userNumber == randomNumber) {
            alert("Да, это число " + userNumber + ". Вы угадали!");
            break;
        }
    }
}
//игра Простая арифметика
function simpleMaths() {
    alert("Нужно решить простые арифметические примеры. Их будет пять.");
    let rightAnswersCount = 0;
    for (i = 1; i <= 5; i++) {
        const mathOperators = ['+', '-', '*', '/'];
        const randomIndex = Math.floor(Math.random() * mathOperators.length);
        let first = Math.floor(Math.random() * 10 + 1);
        let second = Math.floor(Math.random() * 10 + 1);
        let mathExample = [mathOperators[randomIndex]];
        function checkReduced() { //проверка уменьшаемого и вычитаемого; разность должна быть положительным числом
            if (first < second) {
                let temp = first;
                first = second;
                second = temp;
            } //поменять числа местами
        }
        function checkDividend() { // проверка делимого и делителя; делимое должно быть кратно делителю, а частное должно быть целым числом
            if (first < second) {
                let temp = first;
                first = second;
                second = temp; //поменять числа местами
                if (first % second !== 0) {
                    do {
                        first = Math.floor(Math.random() * 10 + 1);
                    } while (first % second !== 0); // генерировать первое число до тех пор, пока оно не будет кратно второму
                }
            }
        }
        let answer;
        if (mathOperators[randomIndex] == '+') {
            mathExample.unshift(first);
            mathExample.push(second);
            let userAnswer = Number(prompt("Пример " + i + ". " + mathExample[0] + " " + mathExample[1] + " " + mathExample[2] + " будет..."));
            answer = mathExample[0] + mathExample[2];
            if (userAnswer == answer) {
                alert("Правильно!");
                rightAnswersCount++;
            } else {
                alert("Неправильно! Будет " + answer);
            }
        } else if (mathOperators[randomIndex] == '-') {
            checkReduced();
            mathExample.unshift(first);
            mathExample.push(second);
            let userAnswer = Number(prompt("Пример " + i + ". " + mathExample[0] + " " + mathExample[1] + " " + mathExample[2] + " будет..."));
            answer = mathExample[0] - mathExample[2];
            if (userAnswer == answer) {
                alert("Правильно!");
                rightAnswersCount++;
            } else {
                alert("Неправильно! Будет " + answer);
            }
        } else if (mathOperators[randomIndex] == '*') {
            mathExample.unshift(first);
            mathExample.push(second);
            let userAnswer = Number(prompt("Пример " + i + ". " + mathExample[0] + " " + mathExample[1] + " " + mathExample[2] + " будет..."));
            answer = mathExample[0] * mathExample[2];
            if (userAnswer == answer) {
                alert("Правильно!");
                rightAnswersCount++;
            } else {
                alert("Неправильно! Будет " + answer);
            }
        } else if (mathOperators[randomIndex] == '/') {
            checkDividend();
            mathExample.unshift(first);
            mathExample.push(second);
            let userAnswer = Number(prompt("Пример " + i + ". " + mathExample[0] + " " + mathExample[1] + " " + mathExample[2] + " будет..."));
            answer = mathExample[0] / mathExample[2];
            if (userAnswer == answer) {
                alert("Правильно!");
                rightAnswersCount++;
            } else {
                alert("Неправильно! Будет " + answer);
            }
        }
    }
    alert("Вы решили правильно такое количество примеров: " + rightAnswersCount + ".");
}