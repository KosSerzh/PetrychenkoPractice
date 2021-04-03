"use strict";

// let amountOfMovies ;
// function start(){
//     amountOfMovies = +prompt ('How many movies have you seen?');
//     while (isNaN(amountOfMovies) || amountOfMovies == '' || amountOfMovies == null || amountOfMovies>100){
//         amountOfMovies = +prompt ('How many movies have you seen?');  
//     }
// }//start();

const personalMoviesDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start: function(){
        personalMoviesDB.count = +prompt ('How many movies have you seen?');
        while (isNaN(personalMoviesDB.count) || personalMoviesDB.count == '' || personalMoviesDB.count == null || personalMoviesDB.count>100){
            personalMoviesDB.count = +prompt ('How many movies have you seen?');  
        }
    },
    rememberMyFilms: function (){
        for (let i=0; i<2; i++) {
            const a = prompt ('What was the last movie youve seen '); 
            const b = +prompt ('How would you rate it', '');
            if (a.length<50 && b<11 && a != '' && b != '' && a != null && b != null){
                personalMoviesDB.movies[a] = b;
            }else {
                alert ( 'please enter valid name of movie or digit of rating');
                i--;
            }
        }  
    },
    detectPersonalLevel: function(){
        if (personalMoviesDB.count <=10){
            alert ('the beginer');
        }else if (personalMoviesDB.count>10 && personalMoviesDB.count<=30){
            alert ('middle');
        } else {
            alert('you are on quarantine');
        }
    },
    showMyDB: function(hidden){ //при вызове передает в аргумент функции showMyDB(hidden) -
        if (!hidden){                                 //свойство personalMoviesDB.privat
           console.log(personalMoviesDB);
        }
    },
    togglePrivatValue: function(){
        if (personalMoviesDB.privat){
            personalMoviesDB.privat = false;

        }else if (personalMoviesDB.privat == false){
              personalMoviesDB.privat = true;
        }
    },

    wrightMyGenre: function(){
        for (let i=1;i<2;i++){
            let genre = prompt('Enter your genre separated by comma').toLowerCase();
            if (genre === '' || genre=== null){
                i--;
                console.log('Please enter valid data');
            }else{
                personalMoviesDB.genres = genre.split(',');
                personalMoviesDB.genres.sort();
            }
        }
        // for (let i=1;i<=3;i++){
        //     let genre = prompt (`your favorite genre number ${i}`);
        //     if (genre !=='' && genre !== null){
        //      personalMoviesDB.genres[i-1] = genre; 
        //     } else {
        //         genre[i-1] = prompt (`your favorite genre number ${i}`); // [i-1] возврат на одну иттерацию
        //     }
        // }
            personalMoviesDB.genres.forEach((item,i,)=>{    //Променение СТРЕЛОЧНОЙ ФУНКЦИИ !!!!
            // personalMoviesDB.genres.forEach(function(item,i,){   // Обычная функция
            console.log(`Favorite genre number ${i+1} is ${item}`);
            });
    },
};
