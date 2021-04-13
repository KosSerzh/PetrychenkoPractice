/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// const adv = document.querySelector(".promo__adv");
// adv.remove();
const adv = document.querySelectorAll(".promo__adv img" ),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');


adv.forEach(item =>{
    item.remove();
});

poster.style.backgroundImage = 'url("img/bg.jpg")';

genre.textContent = 'ДРАМА';

movieList.innerHTML = '';

// console.log(poster.innerHTML);// ПРИМЕР возвращ HTML код poster



// const comedy = document.querySelector('.promo__genre');
// const drama = document.createElement('div');
// drama.classList.add("promo__genre__drama");
// drama.innerHTML = 'ДРАМА';
// comedy.replaceWith(drama);


// const genre = document.querySelector(".promo__genre");
// genre.innerHTML 

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();

movieDB.movies.forEach( (item,i)=>{
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${item}
        <div class="delete"></div>
    </li>
    `;
});

