//Задание 1
function madeFirst() {
    const array1 = new Array(1, 5, 4, 10, 0, 3);
    alert("Задание 1. Дан массив [1, 5, 4, 10, 0, 3]. Нужно перебрать его, пока не попадётся 10.");
    for (i = 0; i < array1.length; i++) {
        console.log(array1[i]);
        if (array1[i] == 10) break;
    }
    alert("Готово! Результат смотреть в консоли.");
}

//Задание 2
function madeSecond() {
    const array1 = [1, 5, 4, 10, 0, 3];
    alert("Задание 2. Дан массив [1, 5, 4, 10, 0, 3]. Нужно вывести индекс значения 4.");
    for (i = 0; i < array1.length; i++) {
        if (array1[i] == 4) {
            console.log("Индекс значения - " + i);
        }
    }
    alert("Готово! Результат смотреть в консоли.");
}

//Задание 3
function madeThird() {
    const array2 = [1, 3, 5, 10, 20];
    alert("Задание 3. Дан массив [1, 3, 5, 10, 20]. Нужно вывести элементы массива через пробел.");
    console.log("Результат - " + array2.join(' '));
    alert("Готово! Результат смотреть в консоли.");
}

//Задание 4
function madeFourth() {
    alert("Задание 4. Нужно создать многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].");
    const arr = new Array();
    for (i = 0; i <= 2; i++) {
        const arr1 = new Array();
        for (j = 0; j <= 2; j++) {
            arr1.push(1);
        }
        arr[i] = arr1;
    }
    console.log(arr);
    alert("Готово! Результат смотреть в консоли.");
}

//Задание 5
function madeFifth() {
    alert("Задание 5. Дан массив [1, 1, 1]. Нужно добавить в конец массива 2, 2, 2.");
    const a = new Array(1, 1, 1);
    for (i = 1; i <= 3; i++) {
        a.push(2);
    }
    console.log(a);
    alert("Готово! Результат смотреть в консоли.");
}

//Задание 6
function madeSixth() {
    alert("Задание 6. Дан массив [9, 8, 7, 'a', 6, 5]. Нужно удалить букву 'a'.");
    const b = new Array(9, 8, 7, 'a', 6, 5);
    b.sort();
    b.pop();
    console.log(b);
    alert("Готово! Результат смотреть в консоли.");
}

//Задание 7
function madeSeventh() {
    alert("Задание 7. Дан массив [9, 8, 7, 6, 5]. Нужно создать игру угадай число.");
    const numbers = [9, 8, 7, 6, 5];
    let number = Number(prompt("Угадайте число от 1 до 10:"));
    if (numbers.includes(number)) {
        alert("Вы угадали.");
    } else {
        alert("Вы не угадали.");
    }
}

//Задание 8
function madeEighth() {
    alert("Задание 8. Дана строка 'abcdef'. Нужно вывести в консоль 'fedcba'.");
    let letters = 'abcdef';
    let splitLetters = letters.split('');
    splitLetters.reverse();
    console.log(splitLetters.join(''));
    alert("Готово! Результат смотреть в консоли.");
}

//Задание 9
function madeNinth() {
    alert("Задание 9. Дан массив [[1, 2, 3], [4, 5, 6]]. Нужно объединить в один.");
    let c = [
        [1, 2, 3],
        [4, 5, 6]
    ]
    let d = [...[1, 2, 3], ...[4, 5, 6]];
    console.log(d);
    alert("Готово! Результат смотреть в консоли.");
}

//Задание 10
function madeTenth() {
    alert("Задание 10. Нужно создать массив с произвольными числами от 1 до 10, вывести консоль сумму текущего и следующего элемента.");
    const randomArray = new Array();
    for (i = 0; i <= 9; i++) {
        randomArray.push(Math.floor(Math.random() * 10) + 1);
    }
    console.log(randomArray);
    for (i = 0; i < 9; i++) {
        let sum = randomArray[i] + randomArray[i+1];
        console.log(sum);
    }
    alert("Готово! Результат смотреть в консоли.");
}

//Задание 11
function madeEleventh() {
    alert("Задание 11. Нужно создать функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.");
    let i = Number(prompt("Введите количество целых чисел в массиве:"));
    const integers = new Array();
    for (j = 0; j < i; j++) {
        integers.push(Math.floor(Math.random() * 10) + 1);
    }
    console.log("Массив целых чисел: " + integers);
    return console.log("Массив квадратов целых чисел: " + integers.map(integers => integers ** 2));
}

//Задание 12
function madeTwelfth() {
    alert("Задание 12. Нужно создать функцию, которая принимает на вход массив строк, а возвращает массив длины слов.");
    let i = Number(prompt("Введите количество слов в массиве:"));
    const words = new Array();
    for (j = 0; j < i; j++) {
        words[j] = prompt("Введите любое слово:");
    }
    console.log("У вас получился массив из следующих слов: " + words);
    return console.log("Массив длины слов: " + words.map(words => words.length));
}

//Задание 13
function madeThirteenth() {
    alert("Задание 13. Нужно создать функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.");
    let i = Number(prompt("Введите количество целых чисел в массиве:"));
    const integers = new Array();
    for (j = 0; j < i; j++) {
        integers.push(Math.floor(Math.random() * 10) + 1);
    }
    console.log("Массив целых чисел: " + integers);
    return console.log("Массив отрицательных целых чисел: " + integers.map(integers => 0 - integers));
}

//Задание 14
function madeFourteenth() {
    alert("Задание 14. Нужно В массиве из сгенерированных 10 чисел найти все чётные значения и добавить их в новый массив.");
    const ten = new Array();
    for (i = 0; i < 10; i++) {
        ten.push(Math.floor(Math.random() * 10) + 1);
    }
    console.log("У вас получился следующий массив: " + ten);
    return console.log("Массив чётных чисел: " + ten.filter(ten => ten % 2 == 0));
}

//Задание 15
function madeFifteenth() {
    alert("Задание 15. Нужно сгенерировать массив из 6 чисел и найти среднее арифметическое этих цифр.");
    const six = new Array();
    for (i = 0; i < 6; i++) {
        six.push(Math.floor(Math.random() * 10) + 1);
    }
    console.log("У вас получился следующий массив: " + six);
    const sum = six.reduce((total, number) => total + number, 0);
    return console.log("Среднее арифметическое: " + Math.round(sum / six.length));
}