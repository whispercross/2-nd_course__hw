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
        let mathExample = [Math.floor(Math.random() * 10 + 1),  mathOperators[randomIndex], Math.floor(Math.random() * 10 + 1)];
        const userAnswer = Number(prompt("Пример " + i + ". " + mathExample[0] + " " + mathExample[1] + " " + mathExample[2] + " будет..."));
        let answer;
        if (mathOperators[randomIndex] == '+') {
            answer = mathExample[0] + mathExample[2];
            if (userAnswer == answer) {
                alert("Правильно!");
                rightAnswersCount++;
            } else {
                alert("Неправильно! Будет " + answer);
            }
        } else if (mathOperators[randomIndex] == '-') {
            //проверка уменьшаемого и вычитаемого; разность должна быть целым положительным числом
            if (mathExample[0] < mathExample[2]) {
                do {
                    mathExample.shift();
                    mathExample.unshift(Math.floor(Math.random() * 10 + 1));
                } while (mathExample[0] < mathExample[2]);
            }
            answer = mathExample[0] - mathExample[2];
            if (userAnswer == answer) {
                alert("Правильно!");
                rightAnswersCount++;
            } else {
                alert("Неправильно! Будет " + answer);
            }
        } else if (mathOperators[randomIndex] == '*') {
            answer = mathExample[0] * mathExample[2];
            if (userAnswer == answer) {
                alert("Правильно!");
                rightAnswersCount++;
            } else {
                alert("Неправильно! Будет " + answer);
            }
        } else if (mathOperators[randomIndex] == '/') {
            //проверка делимого и делителя; частное должно быть целым числом
            if (mathExample[0] < mathExample[2]) {
                do {
                    mathExample.shift();
                    mathExample.unshift(Math.floor(Math.random() * 10 + 1));
                } while (mathExample[0] < mathExample[2]);
            }
            if (mathExample[0] % mathExample[2] !== 0) {
                do {
                    mathExample[0] = mathExample[0] + 1;
                } while (mathExample[0] % mathExample[2] !== 0); //увеличить делимое на 1, пока остаток от деления не равен нулю
            }
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