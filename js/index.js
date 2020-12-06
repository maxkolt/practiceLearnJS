"use strict"
//задание1
let age = prompt('Сколько тебе лет?', "");
alert(`Тебе ${age} лет!`);


//задание 2
let company = prompt('Whats the JavaScript?', '');
if (company == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('You don t know? “ECMAScript”!');
}

//задание 3
let value = prompt('Введите число', 0);
if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0);
}

//задание 5
if (!(age >= 14 && age <= 90)) ;
if (age < 14 || age > 90) ;

//задание 6 не сам делал
if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

//задание 7
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?')
}

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function pow(x, n) {
    let result = x;
    for (let i = 1; 1 < n; i++) {
        result *= x;
    }
    return result
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(x, n));
}

//задание 8
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);

//задание 9
let user = {
    name: "Jone",
    surname: "Smith"
}
user.name = "Pete";
delete obj.name;

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

//задание 10
let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


function Calculator() {

    this.read = function () {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul())


function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('Сколько нужно добавить?', 0);
    };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

//задание 11
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");
alert(a + b);

function readNumber() {
    let num
    do {
        num = prompt("Введите число", 0);
    } while (!isFinite(num));
    if (num === null || num === '') return null;
    return +num;
}

console.log(`Число: ${readNumber()}`);


function random(min, max) {
    return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

alert(randomInteger(1, 3));

//задание 11

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("вася"));


function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));


function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}


function extractCurrencyValue(str) {
    return +str.slice(1);
}

//задание 12

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");


function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введите число", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert(sumInput());


//задание 13

function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}


function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered);
alert(arr);


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr);


let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr);


function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert(sorted);
alert(arr);


function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

alert(names);


let vasya = {name: "Вася", surname: "Пупкин", id: 1};
let petya = {name: "Петя", surname: "Иванов", id: 2};
let masha = {name: "Маша", surname: "Петрова", id: 3};

let users = [vasya, petya, masha];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

alert(usersMapped[0].fullName);


function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};

let arr = [vasya, petya, masha];

sortByAge(arr);


alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);


function topSalary(salaries) {
    let max = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
}

//

let user = {
    name: "Василий Иванович",
    age: 35
};
let user2 = JSON.parse(JSON.stringify(user));

//

let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
    alert(`${key}: ${value}`);
    return (key != "" && value == meetup) ? undefined : value;
}));

//

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert(sumTo(100));

//

function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

alert(sumTo(100));

//

function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };

    this.down = function () {
        return --count;
    };
}

let counter = new Counter();

alert(counter.up());
alert(counter.up());
alert(counter.down());

//

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inArray([1, 2, 10])));


function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) );

//

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
users.sort(byField('name'));
users.sort(byField('age'));