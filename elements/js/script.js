'use strict';

//DOM Document Object Model . Обращаться через document.
// Получение элементов со спраницы


// .getElementById('назв. ID искомого елемента')
// const box = document.getElementById('box');

// console.log(box);

// // getElementsByTagName('назв. искомого тега') Возвращ псевдомассив
// const btns = document.getElementsByTagName('button');

// console.log(btns);// HTMLCollection(5) [button, button, button, button, button]. Псевдомассив

// const btns = document.getElementsByTagName('button')[1];//<button>2</button>//HTMLCollection Получ конкр элем-а по номеру индекса в []
// console.log(btns[2]);// работа с конкретным елементом ( извлечение эл. из псевдомассива HTMLCollection)
// // !!! HTMLCollection == псевдомассив . для работы с конкретным элементом обращ к конкретн. элем. !!!

// const circles = document.getElementsByClassName('circle');
// console.log(circles); // HTMLCollection(3) [div.circle, div.circle, div.circle] // Три круга на странице

// Более новые методы :

// .querySelectorAll(); для CSS селекторов - #id , class, итд. ! ИМЕЕТ МЕТОД forEach
// const hearts = document.querySelectorAll('.heart'); //при работе с классами ставить точку 
// console.log(hearts); // NodeList(3) [div.heart, div.heart, div.heart]
                     // 0: div.heart
                     // 1: div.heart
                     // 2: div.heart
                     // length: 3


// hearts.forEach(item =>{
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart'); 
// console.log(oneHeart); // Возвращ ТОЛЬКО ПЕРВЫЙ елемент из указанного селектора ('.heart')


// Работа, действия с элементами на странце

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),      
      hearts = document.querySelectorAll('.heart'),// querySelectorAll() добавл. метод .forEach() для переменной hearts
      oneHeart = document.querySelector('.heart'); // получает ПЕРВЫЙ селлектор из указанных
// Получать доступ к елементу можно не через  document а через их родителя если он есть:
    //hearts = wrapper.querySelectorAll('.heart'),// querySelectorAll() добавл. метод .forEach() для переменной hearts
    //oneHeart = wrapper.querySelector('.heart'),



    // style .Имеет множство методов.Назначение InLine styles(приоритетны над другими записями стилей) создаются прямо в HTML
// box.style.backgroundColor = 'purple';//Создает InLine styles(приоритетны над другими записями стилей) прям в HTML
// box.style.width = '300px';

btns[0].style.borderRadius = '20%';
btns[1].style.backgroundColor = 'green';
btns[2].style.backgroundImage = 'url("folder/object")';
circles[2].style.backgroundColor = 'indigo';
     // Назначение нескольких InLine styles через .cssText значения на языке CSS , НЕ В camelCase
box.style.cssText = 'background-color: midnightBlue; width: 200px; height: 200px ';
// box.style.cssText = `background-color:midnightBlue; width:${num}`;// в ``, с переменной, для динамически измен елементов

     // Одно действие над несколькими элементами при помощи циклов, for (...Of...) и forEach с querySelectorAll
//  for (let i = 0; i < hearts.length; i++ ){
//      hearts[i].style.backgroundColor = 'OrangeRed';
//  }

hearts.forEach(item =>{ //в item передается heart
    item.style.backgroundColor = 'black';
});

//методы для работы с елементами страницы,
// document.createElement //создает елементы на лету

const div = document.createElement('div');  //создание CSS елемента в JS. пока существ ТОЛЬКО в JS,на странице не виден
                                            // созд елем  в JS имеют много свойств
// const text = document.createTextNode('Ky-Ky');//созд текстов узел. использ оч редко

div.classList.add ('black');// свойство .classList , метод .add () добавл класс

// document.body.append(div);//append добавл новый div в конец body в DOM
wrapper.append(div); //.querySelector получ эелемент .wrapper, append запис в его конец div
// wrapper.prepend(div); //.querySelector получ эелемент .wrapper,prepend запис в его начало div
//before, after
// hearts[0].before(div); //hearts[0] елем и его индекс ПЕРЕД которым добавл нов елем
// hearts[0].after(div); //hearts[0] елем и его индекс ПОСЛЕ которого добавл нов елем
// circles[0].remove(); //удаляет елемент
// hearts[0].replaceWith(circles[0]);//hearts[0] заменяемый елем,(circles[0])на который заменяем

// Старые конструкции и команды
// wrapper.appendChild(div);// .appendChild добавл новый div в конец body в DOM. ЧЕРЕЗ ОБРАЩ К РОДИТЕЛЮ
// wrapper.insertBefore(div, hearts[1]); // div новый елем, hearts[] -елем Перед которым вставл div
// wrapper.removeChild(hearts[1]); //удаляет елемент
// wrapper.replaceChild(circles[2],hearts[0]);//hearts[0] заменяемый елем,(circles[2])на который заменяем



// Добавление текста и кода в елемент. .innerHTML,.textContent, .insertAdjacentHTML()
div.innerHTML = '<h3> Hola el mundo </h3>';// Добавл HTML код в елемент
// div.textContent = 'hello'; // Добавл ТЕКСТ в елемент (Безопасность)
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');// 'beforebegin' ставит HTML код перед елементом
div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');//'afterbegin' ставит HTML код В НАЧАЛО елемента
                                                       //в div сначала '<h2>Hello</h2>' потом '<h3> Hola el mundo </h3>'
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');// 'afterend' ставит HTML код после елемента
div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');






