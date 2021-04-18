/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


/* 
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту 
*/






'use strict';
 
document.addEventListener('DOMContentLoaded', ()=>{ //Загружает скрипт только после закгузки DOM структуры

    const adv = document.querySelectorAll(".promo__adv img" ),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('.add'),
        input = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]'); // поиск чекбокса через HTML атрибуты '[type = checkbox]'
        // trashBin = document.querySelectorAll('.delete');



        




    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };


    movieDB.movies.sort();

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    genre.textContent = 'ДРАМА';



    function advRemove(advertising){
        advertising.forEach(item =>{
           item.remove();
        });
    }

// console.log(poster.innerHTML);// ПРИМЕР возвращ HTML код poster



// const comedy = document.querySelector('.promo__genre');
// const drama = document.createElement('div');
// drama.classList.add("promo__genre__drama");
// drama.innerHTML = 'ДРАМА';
// comedy.replaceWith(drama);


// const genre = document.querySelector(".promo__genre");
// genre.innerHTML 


    function addMovieForm(form,db){
        form.addEventListener('submit',(event)=>{ //'submit' !! событие отправки введенных данных
            event.preventDefault(); // останавливает дефолтную перезагрузку страницы после нажатия кнопки "Подтвердить"
            let newFilm = input.value; // .value возвращ введенные данные
            if(newFilm){     // !! если .value вернет пуст стрку newFilm == false -> выполнен будет остановлено
                if(newFilm.length > 15){
                    newFilm = `${newFilm.slice(1,15)}...`;
                    
                }
                db.push(newFilm);
            }
                //newFilm.length !=0 ? db.push(newFilm.slice(0,20)) : console.log('enter valid name');// май вариант
                db.sort();
            dinamicList(movieDB.movies, movieList);
                
            const favorite = checkbox.checked;// .checked Атрибут из HTML возвращ boolean
            if (favorite == true){
                console.log('adding favorite movie');
            }
        });
    }

        function dinamicList(films, parent ){
            parent.innerHTML = ''; // замена дефолтных фильмов на пустую строку   
            films.forEach( (item,i)=>{
                parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${item} 
                <div class="delete"></div>
                </li>
                `;//.innerHTML получ код с HTML страницы и заменяет на новый
                       // ${i+1} ${item} замена в HTML коде пустых строк на фильмы из movieDB.movies


                
            });
            document.querySelectorAll('.delete').forEach((btn,i)=>{ //получ елемент корзины
            // trashBin.forEach((btn,i)=>{
                btn.addEventListener('click',()=>{
                    //btn.parentElement.remove();//удал.со стран родит корзины.Без movieDB.movies.splice(i,1)чего-то не работ
                    movieDB.movies.splice(i, 1);// !! splice(i(номер иттерации елемента),1(елемент))удал из бд елем.Работ без btn.parentElement.remove()
                    dinamicList(movieDB.movies, movieList); // заново формир список фильмов

                });
            });

        }




        dinamicList(movieDB.movies, movieList);
        addMovieForm(addForm,movieDB.movies);
        advRemove(adv);
        console.log(movieDB.movies); 




});





