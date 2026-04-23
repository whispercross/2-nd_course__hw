//игра Угадай число
function guessNumber() {
    alert("Нужно угадать число из диапазона от 1 до 100. Загадываю...");
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let i = 3;
    let userNumber = prompt("У вас есть попыток: " + i + ". Какое число я загадала?");
    if (userNumber === null) {
        alert("Вы вышли из игры.");
        return;
    }
    while (userNumber !== randomNumber && i > 0) {
        alert("Вы не угадали число.");
        if (randomNumber < userNumber) {
            i--;
            alert("Я дам подсказку: оно меньше " + userNumber + ".");
            userNumber = prompt("У вас есть попыток: " + i + ". Какое число я загадала?");
            if (userNumber === null) {
                alert("Вы вышли из игры.");
                return;
            }
        } else if (randomNumber > userNumber) {
            i--;
            alert("Я дам подсказку: оно больше " + userNumber + ".");
            userNumber = prompt("У вас есть попыток: " + i + ". Какое число я загадала?");
            if (userNumber === null) {
                alert("Вы вышли из игры.");
                return;
            }
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

        //проверка уменьшаемого и вычитаемого; разность должна быть положительным числом
        function checkReduced() {
            //поменять числа местами
            if (first < second) {
                let temp = first;
                first = second;
                second = temp;
            }
        }

        // проверка делимого и делителя; делимое должно быть кратно делителю, а частное должно быть целым числом
        function checkDividend() {
            //поменять числа местами
            if (first < second) {
                let temp = first;
                first = second;
                second = temp;
            }
            // генерировать первое число до тех пор, пока оно не будет кратно второму
            if (first % second !== 0) {
                do {
                    first = Math.floor(Math.random() * 10 + 1);
                } while (first % second !== 0);
            }
        }

        let userInput;
        let answer;
        if (mathOperators[randomIndex] == '+') {
            mathExample.unshift(first);
            mathExample.push(second);
            userInput = prompt("Пример " + i + ". " + mathExample[0] + " " + mathExample[1] + " " + mathExample[2] + " будет...");
            if (userInput === '' || userInput === null) {
                alert("Конец игры.");
                break;
            }
            let userAnswer = Number(userInput);
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
            userInput = prompt("Пример " + i + ". " + mathExample[0] + " " + mathExample[1] + " " + mathExample[2] + " будет...");
            if (userInput === '' || userInput === null) {
                alert("Конец игры.");
                break;
            }
            userAnswer = Number(userInput);
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
            userInput = prompt("Пример " + i + ". " + mathExample[0] + " " + mathExample[1] + " " + mathExample[2] + " будет...");
            if (userInput === '' || userInput === null) {
                alert("Конец игры.");
                break;
            }
            userAnswer = Number(userInput);
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
            userInput = prompt("Пример " + i + ". " + mathExample[0] + " " + mathExample[1] + " " + mathExample[2] + " будет...");
            if (userInput === '' || userInput === null) {
                alert("Конец игры.");
                break;
            }
            userAnswer = Number(userInput);
            answer = mathExample[0] / mathExample[2];
            if (userAnswer == answer) {
                alert("Правильно!");
                rightAnswersCount++;
            } else {
                alert("Неправильно! Будет " + answer);
            }
        }
    }
    if (userInput === '' || userInput === null) {
        alert("Конец игры.");
    } else {
        alert("Вы решили правильно такое количество примеров: " + rightAnswersCount + ".");
    }
}
//игра Переверни текст
function flipText() {
    let userText = prompt("Введите текст:");
    if (userText === '' || userText === null) {
        alert("Конец игры.");
        return;
    }
    let userTextLetters = userText.split("").reverse();
    alert("Перевёрнутый текст - \"" + userTextLetters.join("") + "\".");
}
//игра Простая викторина
function simpleQuiz() {
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зелёный"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let rightAnswersCount = 0;
    for (i = 0; i < quiz.length; i++) {
        let answerTemplate = /^[а-яё]*$/gi; //должны быть русские буквы
        let userAnswer = prompt(quiz[i].question + " Варианты ответов: " + quiz[i].options[0] + ". " + quiz[i].options[1] + ". " + quiz[i].options[2] + ".");
        if (userAnswer === null) {
            alert("Конец игры.");
            break;
        }
        while (userAnswer === '') {
            alert("Введите ответ на вопрос.");
            userAnswer = prompt(quiz[i].question + " Варианты ответов: " + quiz[i].options[0] + ". " + quiz[i].options[1] + ". " + quiz[i].options[2] + ".");
            if (userAnswer === null) {
                alert("Конец игры.");
                break;
            }
        }
        while (!answerTemplate.test(userAnswer)) {
            alert("Вы ввели ответ некорректно. Убедитесь, что у вас включена русская раскладка.");
            userAnswer = prompt(quiz[i].question + " Варианты ответов: " + quiz[i].options[0] + ". " + quiz[i].options[1] + ". " + quiz[i].options[2] + ".");
            if (userAnswer === null) {
                alert("Конец игры.");
                break;
            }
        };
        userAnswer.toLowerCase();
        for (j = 0; j < quiz[i].options.length; j++) {
            let correctAnswerWord = quiz[i].options[quiz[i].correctAnswer - 1].slice(3).toLowerCase();
            let correctOption = quiz[i].options.find(option => option.startsWith(String(quiz[i].correctAnswer))).toLowerCase();
            if (correctOption.endsWith(userAnswer)) {
                alert("Правильно! Это \"" + userAnswer + "\"");
                rightAnswersCount++;
                break;
            } else {
                alert("Нет, правильный ответ - \"" + correctAnswerWord + "\"");
                break;
            }
        }
    }
    alert("Вы ответили правильно на такое количество вопросов: " + rightAnswersCount);
}
//игра Камень, ножницы, бумага
function rockScissorsPaper() {
    const choices = ["камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    let userChoice = prompt("Камень, ножницы или бумага?");
    if (userChoice === null) {
        alert("Конец игры.");
        return;
    }
    do {
        alert("Введите корректный вариант.");
        userChoice = prompt("Камень, ножницы или бумага?");
        if (userChoice === null) {
            alert("Конец игры.");
            return;
        }
    } while (userChoice !== choices[0] && userChoice !== choices[1] && userChoice !== choices[2]);
    userChoice.toLowerCase();
    let compChoice = choices[randomIndex];
    alert("\"" + userChoice + "\" против \"" + compChoice + "\". Победа...");
    if (userChoice === compChoice) { alert("Ничья!"); }
    if ((userChoice === choices[0] && compChoice === choices[1]) || 
        (userChoice === choices[1] && compChoice === choices[2]) || 
        (userChoice === choices[2] && compChoice === choices[0])) {
        alert("Ваша!");
    } else {
        alert("Моя!");
    }
}
//игра Генератор случайных цветов
let changeColorButton = document.querySelector('button#change-color');
changeColorButton.addEventListener('click', () => {
    let bg1 = document.querySelector('.games');
    let bg2 = document.querySelector('.about-games');
    const randomColor = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0')}`;
    bg1.style.backgroundColor = randomColor;
    bg2.style.backgroundColor = randomColor;
});