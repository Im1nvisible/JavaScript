'use strict';


let numberOfFilms =  +prompt("Скільки ви фільмів подивились?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

console.log(personalMovieDB);