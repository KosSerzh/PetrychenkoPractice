'use strict';

let x = 5; alert( x++ ); //5. x++ постфиксный оператор инкримента меняет исходное занчение после возвращ исходн знач.

console.log([ ] + false - null + true); //NaN.  матем. оператор - примен не к числам. ([]пустой массив=строка)

let y = 1;
let x = y = 2;
console.log(x); //2

console.log([ ] + 1 + 2);//'12' т.к. [ ] делает все срокой а 1+2 в строке = 12

console.log( "asdfghjk"[4] ); //g елемент строки с индексом номер 4

console.log(2 && 1 && null && 0 && undefined ); // null // Оператор && возвращ перв false

console.log (!!( 1 && 2 )); // true
console.log (1 && 2); // 2

//                      3 
console.log ( null || 2 && 3 || 4 ); //3 // приоритет && оператора выше чем || 

const a = [1, 2, 3], 
      b = [1, 2, 3];
console.log(a == b);// false //Одинаковых объектов не существует. a и b разные массивы с разным id

console.log( +"Infinity" ); // Infinity. Infinity и NaN числовые значения

console.log( "Ёжик" > "яблоко"); //false . Строчные буквы > заглавные, я > a .

console.log(0 || "" || 2 || undefined || true || falsе);//2

