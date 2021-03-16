
"use strict";
// a = 15;
// console.log (a);
// let number = 5 ;
// const leftBorderWidth = 1;

// number = 10;
// console.log (number);

// const obj = {a:50};
//  obj.a = 10;

//  console.log (obj);
// let number = 4.6;

// console.log (-4/0);
// console.log( 'string*5');

// const person = 'Kos' ;

// const bool = true / false ;

// let und ;
// console.log (und);

// const obj = {
//     name: 'Kos',
//     age: 30,
//     isMarried: false
// };
// console.log (obj.name);

// let arr = ['orange.jpg','plum.png',6 ,'apple.bmp', {}, ['unnamed fruite'], ]
// console.log (arr [5]);
// alert ('Hello');

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
// alert (`hello ${user}`);
// console.log('arr' + '-object');
// console.log(4 + '-object');

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

// && //Оператор И
// || // Оператор ИЛИ
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
function calc(num1,num2){
    console.log(num1+num2);
}
const num1 = prompt ("?"),
      num2 = prompt ("?");
calc();
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
// const arrowFunction = (a,b) =>{

//     return a+b; 
// };
// console.log ('hola' , arrowFunction(2,3));


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