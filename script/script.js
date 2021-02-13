"Use strict";


let numberOfFilms =  +prompt("Скільки ви фільмів подивились?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let nameFilm1 = prompt("Один з останніх переглянутих фільмів?", "");
let ratingOfFilms1 = prompt("На скільки ви його оціните?", "10");

let nameFilm2 = prompt("Один з останніх переглянутих фільмів?", "");
let ratingOfFilms2 = prompt("На скільки ви його оціните?", "10");

personalMovieDB.movies[nameFilm1] = ratingOfFilms1;
personalMovieDB.movies[nameFilm2] = ratingOfFilms2;

console.log(personalMovieDB);