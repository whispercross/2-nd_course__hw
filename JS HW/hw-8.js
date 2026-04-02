function madeFirst() {
    const people = [
        {name: "Глеб", age: 29},
        {name: "Анна", age: 17},
        {name: "Олег", age: 7},
        {name: "Оксана", age: 47}
    ]
    const peopleSort = (personOne, personTwo) => {
        if (personOne.age < personTwo.age) { return -1; }
        if (personOne.age > personTwo.age) { return 1; }
        return 0;
    }
    console.log(people.sort(peopleSort));
}

function madeSecond() {
    function isPositive(number) {
        return number > 0;
    }
    function isMale(person) {
        return person.gender === "male";
    }
    function filter(people, filtering) {
        const result = [];
        for (i = 0; i < people.length; i++) {
            if (filtering(people[i])) { result.push(people[i]); }
        }
        return result;
    }

    console.log(filter([3, -4, 1, 9], isPositive));

    const people = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
    ];

    console.log(filter(people, isMale));
}

function madeThird() {    
    let threeSecDate = setInterval(() => console.log(Date()), 3000);
    setTimeout(() => { clearInterval(threeSecDate); console.log("30 секунд прошло"); }, 30000);
}

function madeFourth() {
    function delayForSecond(callback) {
        setTimeout(callback, 1000);
    }

    delayForSecond(function () {
    console.log('Привет, Глеб!');
    })
}

function madeFifth() {
    function delayForSecond(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда');
            if(cb) {  cb(); }
        }, 1000)
    }
    function sayHi (name) {
        console.log(`Привет, ${name}!`);
        //в задании написано, что код менять нельзя, но чтобы код работал корректно, изменения понадобились именно тут
    }

    delayForSecond(sayHi("Глеб"));
}