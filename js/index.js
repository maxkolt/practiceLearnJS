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
alert("Mul=" + calculator.mul());
