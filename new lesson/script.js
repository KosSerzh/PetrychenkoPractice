
// setTimeout(arg1_Function,arg2_Timeout,arg3, etc) // 


    // const timerId = setTimeout(function(text){//const timerId созд уник.ID таймера
                                                //setTimeout() приним в себя фукц кот запуск с таймаутом
    //     console.log(text); //hello
    // },2000,'hello');// второй аргум в setTimeout - время таймаута,третий значение функции



    // const timerId = setTimeout(logger,2000);//Тоже,только с передачей в аргумент имени внешней функции
    // function logger(){
    //     console.log('hola'); //'hola' через 2 сек
    // }


    // const btn = document.querySelector('.btn');
    // btn.addEventListener('click',()=>{
    //     const timerId = setTimeout(logger,2000);// "hola" через2 сек после нажатия кнопки 
    // });

// clearInterval(timerId); // для удаления setTimeout. В аргумент передается перем с setTimeout

//setInterval() все тоже что и setTimeout() НО для повтор-я действия через интерв времени

    const btn = document.querySelector('.btn');
    let timerId , // пуст внешн перем куда запис данн из функций
        i=0;

    function myAnimation (){
        const elem = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(frame,10);
        function frame(){
            if (pos ==300){
                clearInterval(id);
            }else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }
    btn.addEventListener('click',myAnimation);

    // btn.addEventListener('click',()=>{
    //     timerId = setInterval(logger,1000);// вызыв logger() кажд 1 сек.

    // }); 

    // function logger(){
    //     i++;        // при кадом вызове(setInterval(logger,1000);) добавл i+1. Счит кол. вызовов
    //     if (i >= 3){ // если i >= 3 вызыв clearInterval(timerId) с данными timerId
    //         clearInterval(timerId); //
    //     }
    //     console.log('hola'); //'hola' через 1 сек

    // }
// РАЗНИЦА МЕЖДУ РЕКУРСИВНЫМ setTimeout() И setInterval(). (рекурсия-вызов фунц внунтри себя)
 
    let id = setTimeout(function log(){
        console.log('helo');
        id = setTimeout(log,1000);   //будет ждaть 1000мс и выполн только после выполнения предыдущ функц
    },1000);


// Даты
// new Date()

    // let date1 = new Date();
    // console.log(date1);

// const now = new Date(); // в () можно передав аргум.Браузер локальн дата,IDE дата по UTC 
// new Date(); Методы и свойства 
    // Геттеры

    // console.log(now.getFullYear()); //2021
    // console.log(now.getMonth());// 4 (месяц считается с нуля)
    // console.log(now.getDate());// 21 (день счит с 1)
    // console.log(now.getDay()); // день недели начин с воскр=0
    // console.log(now.getHours());// 0 local time
    // console.log(now.getUTCHours()); // 21 UTC time
    // console.log(now.getTimezoneOffset()); // -180 разниц между локальн и UTC временем

    // // Сеттеры

    // console.log(now.setHours(18));// можно второй аргумент,минуты .setHours(18,40).в IDE время по UTC
    // console.log(now); 


    // const now = new Date(); 
    // console.log(now.setHours(12));
    // console.log(now);//2021-05-23T09:20:04 // 12local == 09 UTC

// Автокоррекция
    // const now = new Date(); 
    // console.log(now); //2021-05-23T12:31:20.141Z
    // console.log(now.setHours(40)); // 40 == 24 + 16 -3 UTC 
    // console.log(now);// 2021-05-24T13:29:57.696Z // 40 == 24 + 16 -3 UTC 

//.parse // дату переданную в строке парсит/транформирует в миллисекунды, в числовое значение
    // const now = new Date('2020-3-4'); // созд дату 2020-3-4 // тоже самое что и :
    // new Date.parse('2020-3-4');// созд дату 2020-3-4

//TimeStamps или BenchMarks
let start = new Date();
    for (i= 0; i<100000; i++){
        let some = i**3;
    }
let end = new Date();
console.log(`executing time is ${end - start} ms`);//executing time is 12 mms




