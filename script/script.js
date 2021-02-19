'use strict';


let numberOfFilms;

function start() {
    numberOfFilms =  +prompt("Скільки ви фільмів подивились?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms =  +prompt("Скільки ви фільмів подивились?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один з останніх переглянутих фільмів?", ""),
              b = prompt("На скільки ви його оціните?", "10");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        alert('Переглянуто мало фільмів)');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Ви класичний глядач!');
    } else if (personalMovieDB.count > 30) {
        alert('Ви кіноман! =)');
    } else {
        alert('Невідома помилка');
    }
}

detectPersonalLevel();



function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();


