
"use strict";


// Infinity, NaN
// console.log(typeof(Infinity)); //number
// console.log(typeof(NaN)); //number



// const obj = {a:50};
//  obj.a = 10;
//  console.log (obj);//{ a: 10 }

// let number = 4.6;

// console.log (-4/0);
// console.log( 'string*5');

// const person = 'Kos' ;

//console.log('abcdefg'[0]); //а // [] обращение к елементу строки по номеру его индекса

// const bool = true / false ;

// let und ;
// console.log (und);

// const obj = {
//     name: 'Kos',
//     age: 30,
//     isMarried: false
// };
// console.log (obj.name);

//// МАССИВЫ . Содержат елементы строго по порядку
// let arr = ['orange.jpg','plum.png',6 ,'apple.bmp', {}, ['unnamed fruite'], ]
// console.log (arr [5]);


// const result = confirm('are you here?');
// console.log (result);

// const answers = [];
// answers [0]= prompt ('What is your name','');
// answers [1]= prompt ('What is your surname','');
// answers [2]= prompt ('What is your age','');
// console.log(typeof(answers));

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user =  'Kos';
// console.log (`hello ${user}`); //Интерполяция- (`string ${}`);
// console.log('arr' + '-object');
// console.log(4 + '-object');

//OPERATORS операторы
 
// == сравнение. При сравн различн типов данных приводит все к числу. возвр boolean

// === строгого равенства. сравнивает непосредственно то что получил. возвр boolean

// // typeof. ... возвращает тип данных 

// let incr = 10,
//     decr = 10;
// // incr ++;
// // decr --;

// console.log (++incr); //Префиксн изменю перед применением
// console.log (--decr);
// console.log (incr++); //Постфикс измен после применения
// console.log (decr--);

// console.log (5%2);

// console.log (2+2*2 === '8');

// && //Оператор И.Останавл и возвр первый false.Возвращеат true если все условия true и false если хотя бы одно условие false 
// || // Оператор ИЛИ остан и возвр первое true если одно из условий true и false если не одно из условий не true
// ! Оператор отрицания
// const isChecked = false,
//       isClosed = true ;
// console.log (isChecked && isClosed); //false

// const isChecked = false,
//       isClosed = false ;
// console.log (isChecked || ! isClosed); //true



// if (4==4) {
//     console.log('Ok');
// } else {
//     console.log('error');
// }

// const num = 50;
// if (num<49) {
//     console.log('Error');
// }else if(num>51){
//     console.log('TooMuch');
// }else {
//     console.log('Ok');
// }

// const num = 50;
// (num === 50 ) ? console.log('Ok') : console.log('Error');

// LOOPS AND ITERATION циклы

// const num = 50;
// switch (num) {
//     case 49:
//         console.log('fault');
//             break;
//         case 51:
//             console.log('fault');
//             break;
//         case 51:
//             console.log('Ok');
//             break;
//         default:
//             console.log('Not this time');
//             break;

// }

// let num = 50;

// while (num<55){
//     num ++;
//     console.log(num);
// }

// let num = 50;
// do {
//     num ++;
//     console.log(num);
// }
// while (num < 55);


// let num = 50;
// for (let i = 1;i<10; i++){
//     if (i == 8 ){
//         // break;
//         continue;
//     }
//     console.log(num); 
// }

//FUNCTIONS
      //FUNCTION DECLARATION
// let str = 'string'; //Глобальная переменная
// function showMessage(text){ //в () АРГУМЕНТ функции
//     str = 'changed'; //обращение к глобальной перерменной, ее изменения
//     console.log(text);
//     let num = 1;// внутри функц локальн перем.
// }
// showMessage ('Hey'); // вызов функции 

// console.log (str); // Глобальная перем. 
// // console.log (num); // локалные перем. не видны глобально


//  function practice (a, b) {
//      return (a+b);
//  }

//  console.log (practice(2,3));  //5
//  console.log (practice(2,4));  //6

//  function ret(){
//      let num = 10 ;
//      return num;
//  }
//  const newNum = ret();
//  console.log (newNum);


     //FUNCTION EXPRESSION
// const logger = function (){
//     console.log ('KyKy');
// };
// logger ();

     // ARROW FUNCTIONS ()=>
// const arrowFunction = (a,b) => { //... = a =>{}; Если параметр один () скобки не ставить.
//     return a+b; 
// };
// console.log ('hola' , arrowFunction(2,3)); // hola 5


//METHODS AND PROPERTIES
    //Strings
// const str = 'test';
// const arr = [1, 2, 3];
// console.log (str.length); // 4
// console.log (arr.length); //3
// console.log (str.toUpperCase());
// const fruit = 'Some fruit';
// console.log (fruit.indexOf('fruit'));


// const logg = 'Hello World';
// console.log (logg.slice(6,11)); // World
// console.log (logg.substring (6,10)); // Worl
// console.log (logg.substr(6,3)); // Wor (.substr(6 начало,3 колич. симв-ов))

//     //Numbers
// const num = 12.2;
// console.log (Math.round(num));


// const test = '12.2px';
// console.log (parseInt(test)); //12 число
// console.log (parseFloat(test)); //12.2


//CALLBACK FUCTIONS функц кот выполн. только псле завершения выполн другой функц. 

// function first (){
//      //doSomething
//      setTimeout(function() {
//           console.log(1);
//      },500);
// }
// function second(){
//      console.log(2);
// }
// first();
// second();
//            //result 2,1

// function learnJS(lang,callback){ //сначала выполн learnJS а потом вложенные callback функции
//      console.log(`i learn ${lang}`);
//      callback();
// }
// function done(){
//      console.log('Ive done this lesson');
// }
// learnJS('JavaScript',done);     //Тип вызова с отдельной функцией
//     // i learn JavaScript ; Ive done this lesson

// learnJS('JavaScript',function(){       //Тип вызова с анонимной функцией
//      console.log('Ive done this lesson');
// }); // i learn JavaScript ; Ive done this lesson


// OBJECTS and OBJECTS DESTRUCTURING. объекты (Ассоциативные массивы) и деструктуризация объектов


// const options = {
//      name: 'test',
//      width: 1024,
//      height: 1024,
//      colors: {
//           border: 'black',
//           bg: 'red'
//      },
//      makeTest: function(){ // встроенный метод внутри объекта
//           console.log('Works');
//      }
// };
// options.makeTest(); //  вызов метода через имя объекта

// console.log (Object.keys(options).length); // 4 //!ЗАПОМНИТЬ! метод "Object.keys()" созд массив со всеми ключами объекта, .length провер кол-во ключей.

// const {border,bg} = options.colors; //ДЕСТРУКТУРИЗАЦИЯ, разделение объекта.
// console.log (border);
// delete options.name;
// console.log(options);

    //способ перебора объекта for(let ... in ...){}

// for (let key in options){
//      console.log(`Property ${key} has value ${options[key]}`); 
// }     // Property name has value test
//       // Property width has value 1024
//       //Property height has value 1024
//       //Property colors has value [object Object]

//    //Тоже самое,только с перебором объекта (colors) в обекте (options).
//   let counter = 1;
//   for (let key in options){
//        if (typeof (options[key]) === 'object'){
//             for (let i in options[key]){
//                  console.log(`Property ${i} has value ${options[key][i]}`);
//                  counter++;
//                 } 
//      }else {
//           console.log(`Property ${key} has value ${options[key]}`);
//           counter++;
//      }
//   }
//   console.log (counter); // 6


// // ARRAYs массивы
// //МЕТОДЫ МАССИВОВ

// const arr = [1,2,3,6,9];

//arr.pop();//[ 1, 2, 3, 6 ] удаляет последний елемент массива
//arr.push(10);//[ 1, 2, 3, 6, 9, 10 ] добавляет елемент в конец массива
//console.log(arr);

// for (let i = 0;i<arr.length;i++){ //перебор елментов массива при помощи цикла
//     console.log(arr[i]);
// }

// for (let value of arr){ //перебор елментов массива при помощи конструкции for(let ... of ...)
//      console.log(value);
// }

// arr[99] = 0;
// console.log(arr); //[ 1, 2, 3, 6, 9, <94 empty items>, 0 ]
// console.log(arr.length); // 100 //свойство length выводит последниий индекс(+1)


    // forEach 
// const arr = [1,2,3,6,9]; 
// arr.forEach(function(item,i,arr){
//      console.log(`${i}: ${item} inside array: ${arr}`);
// });    //0: 1 inside array: 1,2,3,6,9
//        //1: 2 inside array: 1,2,3,6,9
//        //2: 3 inside array: 1,2,3,6,9
//        // 3: 6 inside array: 1,2,3,6,9
//        // 4: 9 inside array: 1,2,3,6,9
// // arr.map(); //перебирает массив МОДИФИЦИРУЯ ЕГО
// // arr.filter(); // отфильтровывает массив по критерию который задан

// const str = prompt("","");
// const products = str.split(",");//елем. строки в єлем. массива только если данные стр. раздел запятой или друг знаком
//      products.sort();//Сортирует по алфавиту елементы массива КАК СТРОКИ.
// console.log (products.join("; "));// Массив кладет в строку разделяя ";"  или другим знаком

// const arr = [1,43,3,16,9]; // Метод .sort не сортир числа по порядку
// arr.sort(compareNum);
//     console.log(arr);
// function compareNum(a,b){   // !!! ЗАПОМНИТЬ ФУНКЦИЯ ДЛЯ СОРТИРОВКИ ЧИСЕЛ ПО ПОРЯДКУ
//     return a-b; 
// }    //  [ 1, 3, 9, 16, 43 ]



// !!! ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ !!! по ссылке- объекты, по значению- простые типы данных


// let a = 5,
//     b = a;

//     b = b + 5; //меняем зачение b
//     console.log(b); // 10
//     console.log(a); // 5

    // const obj = {
    //     a:5,
    //     b:1
    // };
    // const copy = obj;// copy это ссылка на obj
    // copy.a = 10; // меняя copy меняем obj, 
    // console.log(copy);
    // console.log(obj);

    // //  ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ. Вложенные объэкты остсаются ссылками
    // //Функция копирования объэкта при помощи ЦИКЛА
    // function copy(mainObj){ 
    //      let objCopy = {};
    //          let key;
    //          for (key in mainObj){ // перебераем и копируем в objCopy[key] из mainObj[key]
    //              objCopy[key] = mainObj[key];
    //          }
    //          return objCopy;
    // }
    // const numbers = {
    //     a:2,
    //     b:5,
    //     c:{
    //         x:1,
    //         y:3
    //     }
    // };
    // const newNumbers = copy(numbers);
    // newNumbers.a = 10;
    // newNumbers.c.x = 15;
    // console.log (newNumbers); // { a: 10, b: 5, c: { x: 15, y: 3 } }
    // console.log (numbers); // { a: 2, b: 5, c: { x: 15, y: 3 } }

    // // Функция копирования объэкта при помощи Object.assign
    // const add = {
    //     d:15,
    //     e:20
    // };
    // console.log(Object.assign(numbers,add)); //в numbers добавляет add 
    // const clone = Object.assign({},add);
    // clone.d = 51;
    // console.log(clone);//51
    // console.log(add);//15
    // //КОПИРОВАНИЕ МАССИВОВ , при помощи SLICE
    // const oldArray = ['a','b','c'];
    // const coppiedArray = oldArray.slice();
    // coppiedArray.push('123');
    // coppiedArray[0] = 'blabla';
    // console.log(coppiedArray);
    // console.log(oldArray);

    // // Функция копирования объэкта или массива при помощи SPREAD ...
    
    // const video = ['youtube','vimeo','moviestape'],
    //       blogs = ['workpress','livejournal','blogger'],
    //       internet = [...video, ...blogs, 'social media'];//оператор ... рампаковывает массивы
    //       console.log(internet);

    //       function log (a,b,c){
    //           console.log(a);
    //           console.log(b);
    //           console.log(c);
    //       }
    //       const num = [2,3,4];
    //       log (...num); //2
                           //3
                           //4


    // const array = ['a','b'];
    // const otherArray = [...array];
    // otherArray[0] = 'asd';
    // console.log(otherArray); //[ 'asd', 'b' ]

    // const q = {
    //     one:1,
    //     two:2,
    //     three:{
    //         q:'qw',
    //         a:'as'
    //     }
    // };
    // const a = {...q};
    // a.one = 11;
    // console.log (a); //{ one: 11, two: 2, three: { q: 'qw', a: 'as' } }
    // console.log(q);//{ one: 1, two: 2, three: { q: 'qw', a: 'as' } }

// OOP. ООП, Основы

// DYNAMIC TYPING . ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ 

// To String
//1)

// console.log(typeof(String(null))); //string
// console.log((String(null)));       //null
// console.log(typeof(String(4)));    //string

// //2

// console.log(typeof(5 + '')); //string. Конкотенация-сложение строки с чем либо. - всегда остается строка.

// const num = 5;
// console.log('https://vk.com/catalog/' + num); // Динамическая строка

// const fontSize = 26 + 'px'; //Cтили только строка и задаются с характ-ой. 26+'px' string

// // To Number
// // 1)
// console.log(typeof(Number('4'))); //number
// // 2) 
// console.log(typeof(+'5')); //number
// // 3)
// console.log(typeof(parseInt('12px')));
// console.log(typeof+('','hello')); //number

// // To Boolean
// // 0, '', null, undefined,NaN;// = трансформируется в false.Все остальное в true.

// // 1)
// let switcher = null; //например если элемента пока что нет
// if (switcher){
//     console.log('works');
// } //false
//     switcher = 1;
// if (switcher){
//     console.log('works');
// } // works (true)

// // 2)
// console.log(typeof(Boolean('1')));//boolean
// console.log(typeof(!!'1')); //boolean примен. оч редко
// console.log(!!'1'); // true
// console.log(Boolean('1')); //true
// 3)

// DOM Document Object Model . Обращаться к DOM при помощи document.

