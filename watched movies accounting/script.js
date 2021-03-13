"use strict";

let amountOfMovies = +prompt ('How many movies have you seen?');

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
console.log(personalMoviesDB);

if (personalMoviesDB.count <=10){
    alert ('the beginer');
}else if (personalMoviesDB.count>10 && personalMoviesDB.count<=30){
    alert ('middle');
} else {
    alert('you are on quarantine');
}
console.log(personalMoviesDB.count);