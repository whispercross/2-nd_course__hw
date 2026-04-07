//Задание 1
function madeFirst() {
    let string = "js";
    console.log(string.toUpperCase());
}

//Задание 2
function madeSecond() {
    const characters = ["кот Матроскин", "пёс Шарик", "КОТ Том", "мышонок Джерри", "Кот-Бегемот"];
    const search = "кот";
    const cats = new Array();
    characters.forEach((character) => {
        if (character.toLowerCase().startsWith(search.toLowerCase())) {
            cats.push(character);
        }
    });
    console.log(cats);
}

//Задание 3
function madeThird() {
    console.log(Math.floor(32.58884));
    console.log(Math.ceil(32.58884));
    console.log(Math.round(32.58884));
}

//Задание 4
function madeFourth() {
    const numbers = [52, 53, 49, 77, 21, 32];
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    return console.log("Макс. значение - " + max + ", мин. значение - " + min + ".")
}

//Задание 5
function madeFifth() {
    console.log(Math.floor(Math.random() * 10) + 1);
}

//Задание 6
function madeSixth() {
    let lastNumber = Math.round(Math.random() * 10) + 1;
    console.log(lastNumber);
    const numberArray = new Array();
    for (i = 0; i < Math.ceil(lastNumber / 2); i++) {
        temp = numberArray.push(Math.round(Math.random() * 10));
        if (temp > lastNumber) {
            temp = numberArray.pop();
        }
    }
    console.log(numberArray);
}

//Задание 7
function madeSeventh() {
    //let start = Math.round(Math.random() * 10) + 1;
    //let end = Math.round(Math.random() * 10) + 1;
    //console.log(start + " -> " + end);
    //if (start > end && start != end) {
    //    let temp = start;
    //    start = end;
    //    end = temp; 
    //}
    //console.log(start + " -> " + end);
    //const range = new Array();
    //for (i = start; i <= end; i++) {
    //    range.push(i);
    //}
    //console.log(range);
    //let randomIndex = Math.floor(Math.random() * range.length);
    //console.log(range[randomIndex]);

    let start = 5;
    let end = 15;
    let randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
    console.log(randomNumber);
}

//Задание 8
function madeEighth() {
    console.log(new Date());
}

//Задание 9
function madeNinth() {
    let currentDate = new Date();
    let searchDate = currentDate.setDate(currentDate.getDate() + 73);
    let dayAhead = new Date(searchDate);
    console.log(dayAhead);
}

//Задание 10
function madeTenth() {
    let currentDate = new Date();
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const weekDays = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
    let dateRus = "Дата: " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear() + " - это " + weekDays[currentDate.getDay() - 1];
    console.log(dateRus);
    console.log("Время: " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
}