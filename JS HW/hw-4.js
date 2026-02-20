//Задание 1
alert("Задание 1");
let g = "Привет";
for (i = 1; i <= 2; i++) {
    console.log(g);
}

//Задание 2
alert("Задание 2");
for (i = 1; i <= 5; i++) {
    console.log(i);
}

//Задание 3
alert("Задание 3");
for (i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание 4
alert("Задание 4");
let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
}
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
//Задание 5
alert("Задание 5");
let n = 1000;
let divide;
let j = 1;
do {
    divide = n / 2;
    j++;
} while (divide > 50)
let num = j;
console.log(num);

//Задание 6