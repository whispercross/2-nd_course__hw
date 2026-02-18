//Задание 1
let password = "пароль";
let enteredPassword = String (prompt("Введите пароль:"));
if (enteredPassword == password) {
    alert("Пароль введён верно");
} else {
    alert("Пароль введён неправильно");
}

//Задание 2
let c = Number(prompt("Введите число с:"));
if (c > 0 && c < 10) {
    alert("Верно");
} else {
    alert("Неверно");
}

//Задание 3
let d = Number(prompt("Введите число d:"));
let e = Number(prompt("Введите число e:"));
if (d > 100 || e > 100) {
    alert("Верно");
} else {
    alert("Неверно");
}

//Задание 4
let a = '2';
let b = '3';
alert(+a + +b);

//Задание 5
let month = prompt("Введите номер месяца:");
switch (month) {
    case "1":
        console.log ("Месяц - январь, сезон - зима.");
        break;
    case "2":
        console.log ("Месяц - февраль, сезон - зима.");
        break;
    case "3":
        console.log ("Месяц - март, сезон - весна.");
        break;
    case "4":
        console.log ("Месяц - апрель, сезон - весна.");
        break;
    case "5":
        console.log ("Месяц - май, сезон - весна.");
        break;
    case "6":
        console.log ("Месяц - июнь, сезон - лето.");
        break;
    case "7":
        console.log ("Месяц - июль, сезон - лето.");
        break;
    case "8":
        console.log ("Месяц - август, сезон - лето.");
        break;
    case "9":
        console.log ("Месяц - сентябрь, сезон - осень.");
        break;
    case "10":
        console.log ("Месяц - октябрь, сезон - осень.");
        break;
    case "11":
        console.log ("Месяц - ноябрь, сезон - осень.");
        break;
    case "12":
        console.log ("Месяц - декабрь, сезон - зима.");
        break;
    default:
        console.log("Неправильный номер месяца");
}