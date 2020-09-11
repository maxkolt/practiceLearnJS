"use strict"
//задание1
/*let age = prompt('Сколько тебе лет?', "");
alert(`Тебе ${age} лет!`);


//задание2
let company = prompt('Whats the JavaScript?', '');
if (company == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('You don t know? “ECMAScript”!');
}

//задание3
let value = prompt('Введите число', 0);
if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0);
}

//задание5
if (!(age >= 14 && age <= 90)) ;
if (age < 14 || age > 90) ;*/

//задание6
let name = prompt('Кто там?', '')
if (name == 'Админ') {

    let parol = prompt('Пароль?', '');

    if (parol == 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (parol == '' || parol == null) {
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }

} else if (name == '' || name == null) {
    alert( 'Отменено' );
} else {
    alert( "Я вас не знаю" );
}
