//Задание 1
alert("Задание 1.");
function minimum(a, b) {
    return a < b ? a : b;
}
let c = prompt("Введите первое число:");
let d = prompt("Введите второе число:");
let min = minimum(c, d);
alert("Минимальное число - " + min);

//Задание 2
alert("Задание 2.");
function oddEven(m) {
    let message;
    if (m % 2 == 0) {
        message = alert(m + " - чётное число.");
    } else {
        message = alert(m + " - нечётное число.");
    }
    return message;
}
let e = prompt("Введите число:");
let isOddOrEven = oddEven(e);

//Задание 3
alert("Задание 3.");
function raiseSquare(l) {
    let r = l ** 2;
    console.log(r);
}
let n = prompt("Введите число, которое надо возвести в квадрат:");
let square = raiseSquare(n);
function returnSquare(k) {
    let sq = k ** 2;
    return sq;
}
let p = prompt("Введите число, которое надо возвести в квадрат:");
let s = returnSquare(p);
alert("Квадрат числа " + p + " - " + s);

//Задание 4
alert("Задание 4.");
function askAge() {
    let age = prompt("Сколько тебе лет?");
    let answer;
    if (age < 0) {
        answer = alert("Вы ввели неправильное значение!");
    } else if (age >= 0 && age <= 12) {
        answer = alert("Привет, друг!");
    } else {
        answer = alert("Добро пожаловать!");
    }
    return answer;
}
askAge();

//Задание 5
alert("Задание 5");
function checkNumbers(x, y) {
    let num1 = Number(x);
    let num2 = Number(y);
    if (isNaN(num1) == true || isNaN(num2) == true) {
        return "Один или оба значения не являются числом.";
    }
    return num1 * num2;
}
let u = prompt("Введите первое число:");
let v = prompt("Введите второе число:");
let result = checkNumbers(u, v);
alert(result);

//Задание 6
alert("Задание 6");
function raiseCube(z) {
    let num = Number(z);
    if (isNaN(num) == true) {
        return "Переданный параметр не является числом";
    } else {
        let cube = num ** 3;
        return num + " в кубе равняется " + cube;
    }
}
let enterNum = prompt("Введите число, которое нужно возвести в куб:");
let cubeResult = raiseCube(enterNum);
alert (cubeResult);

//Задание 7
alert("Задание 7");
//методы вычисления площади круга и длины окружности
function getArea() {
    return Math.round(Math.PI * (`${this.radius}` ** 2));
}
function getPerimeter() {
    return Math.round(2 * Math.PI * `${this.radius}`);
}

//объекты
let circle1 = {
    radius: 3,
    getArea,
    getPerimeter
}
let circle2 = {
    radius: 6,
    getArea,
    getPerimeter
}

//круг 1
let firstCircleArea = circle1.getArea();
let firstCirclePerimeter = circle1.getPerimeter();
alert("Площадь круга 1 равна " + firstCircleArea + " кв. см, длина окружности 1 равна " + firstCirclePerimeter + " см.");
//круг 2
let secondCircleArea = circle2.getArea();
let secondCirclePerimeter = circle2.getPerimeter();
alert("Площадь круга 2 равна " + secondCircleArea + " кв. см, длина окружности 2 равна " + secondCirclePerimeter + " см.");
