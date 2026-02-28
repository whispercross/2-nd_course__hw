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
        if (i === 0) {
            alert("У вас не осталось попыток. Я загадала число " + randomNumber + ".")
            break;
        }
        if (userNumber == randomNumber) {
            alert("Да, это число " + userNumber + ". Вы угадали!");
            break;
        }
    }
}