// События , Обработчики событий
// три способа назначения обработчика
// Навигация по DOM дереву 

// window.addEventListener('DOMContentLoaded', ()=>{ //загрузка HTML и построение DOM дерева в перв очередь.Потом внешн ресурсы 
    // или можно через document.addEventListener('DOMContentLoaded', ()=>{});
    

        // <button onclick="alert('Click')"id="btn">Нажми меня</button>// onclic-обработчик.Назнач обработч прямо в HTML коде 
              //исольз ооочень редко

    // const btn = document.querySelector('button'),
    //       overlayVar = document.querySelector('.overlay'), //.class начин с тчки.Метод .querySelector,параметр('.overlay')
    //       btn = document.querySelectorAll('button');

    // btn.onclick = function(){ // через свойство DOM дерева .onclick ; Использ оч редко
    //     alert('click');
    // }; // Не примен изза возможности переназначеня и последщей ошибке

// // МЕТОДЫ addEventListener() removeEventListener() можно назначать несколько дествий на одно событие
    // btn.addEventListener('click',()=>{//'click' событие; после выполн 'click' выполн-ся callback ф-я alert('blabla');
    //     alert('blabla 1');
    // });
    // btn.addEventListener('click',()=>{ //назначено второе действие для того же события
    //     alert('blabla 2');
    // });

    // btn.addEventListener('mouseenter', () =>{ //в addEventListener ,в аргумент callback функции можно передав event с любым именем
    //     console.log('Hover');
    // });// Hover при наведении на кнопку
    // btn.addEventListener('mouseenter', (e) =>{ // e от event - передача ивента в параметр callback ф.
    //     console.log(e);//MouseEvent
    // });
    // // Свойства type и target
        // // .type тип события которое произошло, .target елеmент на котором произошло событие

    // btn.addEventListener('click',(e)=>{
    //     console.log(e.target); // Откр огромн возможности обработки event
    // });


    // btn.addEventListener('click',(e)=>{// 'click' название события
    //     e.target.remove();// .target.remove() удаляет елеmент на котором произошло событие
    // });


    //.removeEventListener(); принцип использования
        //!!! Нужно использовать такую же функцию, при помощи которой назначали обработку в .addEventListener
        // ! две одинаковые функции == разные функции

    // btn.addEventListener('click',(e)=>{
    //     console.log(e.target);
    // });
    // const deleteEvent = (e)=>{  //(e)=>{ console.log(e.target);}; копия функции из .addEventListener
    //     console.log(e.target);
    // };
    // btn.addEventListener('click',deleteEvent);//шаг 1 назнач обработчик события,ПЕРЕДАЕМ(БЕЗ ВЫЗОВА) deleteEvent-callback функц.
    // btn.removeEventListener('click',  deleteEvent); //шаг 2 сразу удал обработчик события


    // let i = 0;
    // const deleteEvent = (e)=>{  //(e)=>{ console.log(e.target);}; копия функции из .addEventListener
    // console.log(e.target);
    // i++;
    // if (i==1){
    //     btn.removeEventListener('click',  deleteEvent);// если if выполн. событие удаляется
    // }
    // };
    // btn.addEventListener('click',deleteEvent); //передаем deleteEvent - callback функц.


// Всплытие событий  !! обработка начин с вложенного елемента и подним вверх

    // const deleteEvent = (e)=>{
    //     console.log(e.target); // btn // возвр конечный елемент. Примен чаще всего
    //     // console.log(e.currentTarget); // btn, overlay // возвр каждый елемент последовательно вверх по вложености
    //     // console.log(e.type); // тип события которое произошло
    // };
    // btn.addEventListener('click',deleteEvent); // 1 //!! обработка начин с вложенных елементов и подним вверх
    // overlayVar.addEventListener('click',deleteEvent);// 2
    //'.overlay' родитель 'button' на оба назнач обраб-ки событий кот выполн одинак действ
    
    
    // Назнач одного обработчика на группу елементов при помощи перебора псвдомассива

        // btns.forEach(i=>{
        //     i.addEventListener('click', deleteEvent, {once: true});// выполняет событие один раз. Замена .removeEventListener
        // });
        
    // .addEventListener('eventName', (callback),options) может иметь третий агрумент ОПЦИИ
    // .addEventListener('eventName', (callback),options


    // Отмена событий, стандартного поведения в браузере
    // .preventDefault()

    // const link = document.querySelector('a');  //метод объекта события
    //     link.addEventListener('click',(evnt)=>{
    //         evnt.preventDefault();
    //         console.log(evnt.target);
    //     });

//Навигация по DOM елементам

    // console.log(document.documentElement); //.documentElement Свойство только для HTML тега
    // console.log(document.head);//получает head
    // console.log(document.body);//получает body; итд

    // console.log(document.body.childNodes); //.сhildNodes получает все вложенные узлы родителя
    // console.log(document.body.firstChild);
    // console.log(document.body.lastChild);

    //Получение родителей, соседей и детей елемента
    // console.log(document.querySelector("#current").parentElement);// # селектор для ID//Возвр родителя елемента current
    // console.log(document.querySelector("#current").parentElement.parentElement);//двойнн и больше использ,Возвр родителя родителя итд елемента

    // Дата атрибуты HTML5 стандарт data-...
    // получение Дата атрибута из css  только через [data-name="value"] 
    // console.log(document.querySelector('[data-current="3"]'));

    // console.log(document.querySelector('[data-current="3"]').nextSibling);// Получ следующ елем после указанного

    //Получение елементов из .childNodes. Всех кроме  nodeName: "#text" - текстовых нод
    // for (let node of document.body.childNodes ){
    //     if (node.nodeName == '#text'){
    //      continue;   
    //     }
    //     console.log(node); // Возвр все ноды кроме текстовых
    // }

// EVENTS for touch mobile devices // события для сенсорных мобильных устройств

    // touchstart //начало прикосновения
    // touchmove // скольжение
    // touchend  // конец касания

    // touchenter // вход в зону елемента
    // touchleave // выход из зоны елемента
    // touchcancel // выход за пределы окна браузера
        //touches
    // const box = document.querySelector('.box'); //
    //     box.addEventListener('touchstart', (e)=>{ 
    //         e.preventDefault();// в touch событиях всегда примен preventDefault()
        //     console.log('start');
        // box.addEventListener('touchmove', ()=>{
        //     console.log('move');
        // box.addEventListener('touchend', ()=>{
        //     console.log('end');

        // box.addEventListener('touchstart', ()=>{
            // console.log(e.touches); //TouchList {0: Touch, length: 1} //0: Touch, колич пальцев одноврем. на екране
            // console.log(e.targetTouches); //TouchList {0: Touch, length: 1} количество пальцев на конкретном елеме.
            // console.log(e.changedTouches); // список пальц учавств в текущем соб. (те,из всех на экране, кот учавств в событии)
            // console.log(e.changedTouches[0].pageX); // [0] ном пальца, отслеживание координат прикосновения
        // });
//HTML атрибут defer. <script defer src='script.js'></script>
// defer загруж. внешн. елем. последовательно,в фон. режиме одновременно с загрузкой DOM дерева
const p = document.querySelectorAll('p');
console.log(p);

//Добавл внешнего файла в HTML посредством JS. По умолч загруж как с атрибутом async

function loadScript(source){
const script = document.createElement('script');
    script.src = source;
    script.async = false; // выкл async 
    document.body.append(script); // добавл в конец body
}
loadScript('test.js');
loadScript('some.js');

// });