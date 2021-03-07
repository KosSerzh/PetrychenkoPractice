"use strict";

let amountOfMovies = +prompt ('How many movies have you seen?');
// // alert (amountOfMovies);


const personalMoviesDB = {
    count : amountOfMovies,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};

const a = prompt ('What was the last movie yove seen ', ''),
      aa = prompt ('How would you rate it', ''),
      b = prompt ('What was the last movie yove seen ' , ''),
      bb = prompt ('How would you rate it' , '');
personalMoviesDB.movies[a] = aa;
personalMoviesDB.movies[b] = bb;
console.log (personalMoviesDB);

      
