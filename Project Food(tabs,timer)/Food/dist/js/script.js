window.addEventListener('DOMContentLoaded', ()=>{

    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContnt = document.querySelectorAll(".tabcontent"),
          tabsParent = document.querySelector(".tabheader__items");



    function hideTabContent(){ // прячет весь контент каждой табы
        tabsContnt.forEach(text=>{
            // text.style.display = 'none';// обращение к инлайн стилю. none - прячет елем.. none cвойство .style.display
            text.classList.add('hide','fade'); //класс 'fade'- добавление css анимации
            text.classList.remove('show');//вместо инлайн использ классы. примен в комбин-я двух действий add + show
        });

        tabs.forEach(activeTab =>{ // прячет активную вкладку
            activeTab.classList.remove('tabheader__item_active');
        });
    }
    
    function showTabContent(i = 0){// (i = 0) вместо передачи значения по умолч в аргум фукции showTabContent(0); ES6
        // tabsContnt[i].style.display = 'block';//рендерится(показывается) как блочн елем. 'block' cвойство .style.display
        tabsContnt[i].classList.add('show','fade'); //класс 'fade'- добавление css анимации
        tabsContnt[i].classList.remove('hide');       
        tabs[i].classList.add('tabheader__item_active');
        
    }
    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click',(event)=>{  // Назн соб на родителя для делегирования
//что бы показать нужн Т.,перебер все Т в массиве назначая номер(i),сравн с кликнутой(event.target) и возвр Т по номеру 
        const target = event.target;     //лайфхак чтоб не писать кажд раз event.target

        if(target && target.classList.contains("tabheader__item")){     // определят точное место клика
            tabs.forEach((item, i)=>{   // перебер все елементы массива, назнач ном (i)кажд елементу
                if(item == target){     // если елем массива item совпад с местом клика event.target ,
                    hideTabContent();   //скрывает все ненужное
                    showTabContent(i);
                } 
            });
        }
    });

// Timer

    const deadline = '2021-08-20';


    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t/(1000*60*60*24)), //Math.floor округр до нижн целого знач
            hours = Math.floor(t/(1000*60*60)%24),// % возвр остаток от деления
            minutes = Math.floor(t/(1000*60)%60),//
            seconds = Math.floor(t/(1000)%60);//
        // console.log(days);
        // console.log(hours);
        // console.log(minutes);
        // console.log(seconds);
        return{
            'total': t,
            'days': days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        };
    }

    function addZero(num){
        if (num >= 0 && num <10){
            return `0${num}`;
        }else{
            return num;
        }
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
            days1 = timer.querySelector('#days'),
            hours1 = timer.querySelector('#hours'),
            minutes1 = timer.querySelector('#minutes'),
            seconds1 = timer.querySelector('#seconds');


        // рекурсивный setTimeout
            let timeInterval = setTimeout(timerUpdate, 1000 );
            timerUpdate();

        timerUpdate();
        //setInterval
            // timeInterval = setInterval(timerUp
        function timerUpdate(){
            const t = getTimeRemaining(endtime);
                days1.textContent = addZero(t.days);
                hours1.textContent = addZero(t.hours);
                minutes1.textContent = addZero(t.minutes);
                seconds1.textContent = addZero(t.seconds);

            if (t.total>0){
                timeInterval = setTimeout(timerUpdate,1000);
            }else{
                clearTimeout(timeInterval);
            }
            // if (t.total<=0){
            //     clearInterval(timeInterval);
            // }

        }
    
    }
    setClock('.timer', deadline);


});