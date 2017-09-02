//Задание 1.
//Создайте ассоциативный массив содержащий описание человека.
//Задайте поля: имя, возраст, пол, индивидуальный номер. Заполните массив.
//Выведите его в консоли.

//Задание 2.
//Выведите массив на страницу с помощью цикла for..in

var ppl = {
    "name": "Pavel",
    "age": "34",
    "sex": "male",
    "id": "1237"
}
console.log(ppl);


var out = '';

for (var key in ppl) {
    out += `<p>${[key]} --- ${ppl[key]}</p>`;
}

var p = document.getElementById('ppl');
p.innerHTML = out + '<br>';


// Задача 3.
// Дан ассоциативный массив:
// Выведите его на страницу в формате ключ *** значение ключ *** значение

var arr = {
    "k1": "17w4",
    "k2": "1sfsg7",
    "k3": "17nd",
    "k16": "1237",
    "k14": "1w37",
    "k11": "1wrw7"
}

var out1 = '';

for (var key in arr) {
    out1 += `<p>${[key]} *** ${arr[key]} - ${[key]} *** ${arr[key]}</p>`;
}

var p = document.getElementById('out1');
p.innerHTML = out1 + '<br>';