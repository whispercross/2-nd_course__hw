//игра Угадай число
function guessNumber() {
    alert("Нужно угадать число из диапазона от 1 до 100. Загадываю...");
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    alert("Всё.");
    let userNumber = Number(prompt("Какое число я загадала?"));
    while (userNumber !== randomNumber) {
        alert("Вы не угадали число.");
        if (randomNumber < userNumber) {
            alert("Я дам подсказку: оно меньше " + userNumber + ".");
            userNumber = Number(prompt("Попробуйте ещё раз. Какое число я загадала?"));
        } else if (randomNumber > userNumber) {
            alert("Я дам подсказку: оно больше " + userNumber + ".");
            userNumber = Number(prompt("Попробуйте ещё раз. Какое число я загадала?"));
        }
        if (randomNumber == userNumber) {
            alert("Да, это число " + userNumber + ". Вы угадали!");
            break;
        }
    }
}