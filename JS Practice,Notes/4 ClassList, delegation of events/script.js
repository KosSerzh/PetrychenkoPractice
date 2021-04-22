'use strict';
// .classList // изменение классов
    const btns = document.querySelectorAll('button'),
        wrapper = document.querySelector('.btn-block');

        // console.log(btns[0].classList.length); //2 // у кнопки номер 0 два класса
        // console.log(btns[0].classList.item(0));//blue // метод item() получает класс по номеру индекса
        // console.log(btns[1].classList.add('indigo')); //  Вешает класс ('indigo') на елемент
        // console.log(btns[0].classList.add('indigo','hfbdvowe'));// blue some indigo hfbdvowe

        // console.log(btns[0].classList.remove('indigo'));// Удаляет класс
        // console.log(btns[0].classList.toggle('indigo'));//переключает классы. ели нет добавл,если есть удал

    // Использование класса в условии
        // if (btns[1].classList.contains('indigo')){ //в строке 7 добавлен класс 'indigo' тут проверяем его наличие
        //     console.log('indigo');
        // }

    // btns[0].addEventListener('click',()=>{
    // if (!btns[1].classList.contains('indigo')){ // переключение классов. Вариант 1
    //     btns[1].classList.add('indigo');
    // }else{
    //     btns[1].classList.remove('indigo');
    // }

    // btns[1].classList.toggle('indigo'); // // переключение классов. Вариант 2

    // });

//.className() Устаревший. Возвращ список всех классов в строке.

//Делегирование событий.Делегирует событ с род на его потомков.Одинак событие и обраб на разн эл-тах одного родителя,
    // возвр boolean
wrapper.addEventListener('click',(event)=>{ // Делегирование. Назнач событие на родителя,но выполн при клике на ребенка
                                                //(в event вся инфа об елементе на кот произошло событие )
    if (event.target && event.target.tagName == "BUTTON"){ // event.target целевой елемент на кот происходит событ.
    console.log('hola');    
    }
         //console.dir(event.target);
    // if (event.target && event.target.classList.contains('blue')){ //Выполн на елементе содержащем класс 'blue'
    //     console.log('Ky');
    // }
});

const newBtn = document.createElement('button');//добавл динамически елемент.
    newBtn.classList.add('indigo');
    wrapper.append(newBtn); // На newBtn как и на других потомков wrapper также распростр делегирование

