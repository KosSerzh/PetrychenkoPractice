"use strict";

let amountOfMovies ;
function start(){
    amountOfMovies = +prompt ('How many movies have you seen?');
    while (isNaN(amountOfMovies) || amountOfMovies == '' || amountOfMovies == null || amountOfMovies>100){
        amountOfMovies = +prompt ('How many movies have you seen?');  
    }
}//start();

const personalMoviesDB = {
    count : amountOfMovies,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};




// for (let i=0; i<2; i++) {
//     const a = prompt ('What was the last movie youve seen '); 
//     const b = +prompt ('How would you rate it', '');
//     if (a.length>50 || b.length>50 || a == '' || b == '' || a == null || b == null){
//         alert ( 'please enter valid name of movie or digit of rating');
//         i--;
//     }else {
//         personalMoviesDB.movies[a] = b;
//     }
//     console.log(personalMoviesDB);

    
// } 

function rememberMyFilms(){
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
}
//rememberMyFilms();



function detectPersonalLevel(){
    if (personalMoviesDB.count <=10){
        alert ('the beginer');
    }else if (personalMoviesDB.count>10 && personalMoviesDB.count<=30){
        alert ('middle');
    } else {
        alert('you are on quarantine');
    }
}
//detectPersonalLevel();

function showMyDB(hidden){ // ??? где логика ???
    if (!hidden){
       console.log(personalMoviesDB);
    }
} //showMyDB(personalMoviesDB.privat);   //при вызове передает в аргумент функции showMyDB(hidden) -
                                       //свойство personalMoviesDB.privat : FALSE .






function wrightMyGenre(){
        for (let i=1;i<4;i++){ 
             personalMoviesDB.genres[i-1] = prompt (`your favorite genre number ${i}`);
    }
}wrightMyGenre();
console.log (personalMoviesDB);
