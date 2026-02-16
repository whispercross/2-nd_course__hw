//Задание 1
let password = "12-MyPassw0rd";
let enteredPassword;
prompt("Введите пароль", enteredPassword);
if (enteredPassword == password) {
    alert("Пароль введён верно");
} else {
    alert("Пароль введён неправильно");
}

//Задание 2
let c = 6;
if (c > 0 && c < 10) {
    alert("Верно");
} else {
    alert("Неверно");
}

//Задание 3
let d = 2;
let e = 102;
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
let monthNumber = 12;
let month = prompt("Введите номер месяца:");
switch (month) {
    case "1":
        console.log ("Сезон - зима.");
        break;
    case "2":
        console.log ("Сезон - зима.");
        break;
    case "3":
        console.log ("Сезон - весна.");
        break;
    case "4":
        console.log ("Сезон - весна.");
        break;
    case "5":
        console.log ("Сезон - весна.");
        break;
    case "6":
        console.log ("Сезон - лето.");
        break;
    case "7":
        console.log ("Сезон - лето.");
        break;
    case "8":
        console.log ("Сезон - лето.");
        break;
    case "9":
        console.log ("Сезон - осень.");
        break;
    case "10":
        console.log ("Сезон - осень.");
        break;
    case "11":
        console.log ("Сезон - осень.");
        break;
    case "12":
        console.log ("Сезон - зима.");
        break;
    default:
        console.log("Неправильный номер месяца");
}