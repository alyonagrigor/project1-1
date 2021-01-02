
'use strict';
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?",'');

let personalMovieBD = {};
personalMovieBD['count'] = numberOfFilms;
personalMovieBD['movies'] = {};
personalMovieBD['actors'] = {};
personalMovieBD['genres'] = [];
personalMovieBD['privat'] = false;


for (let i=0; i<2; i++) {
let a = prompt("Один из последних просмотренных фильмов?", '');
let b = prompt("На сколько оцените его по 10-балльной шкале?",'');
    
    if (a !== null && b !== null && a !== '' && b !=='' && a.length < 50 && b.length < 50) {
        personalMovieBD.movies[a] = +b;
        console.log ('Done');
    } else {
        console.log ('Error');
        i--;
    }
}

console.log (personalMovieBD);


if (personalMovieBD.count < 10) {
    console.log ("Просмотрено довольно мало фильмов");
}
else if (personalMovieBD.count >= 30){
    console.log ("Вы киноман");
}
else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30){
    console.log ("Вы классический зритель");
}
else {
    console.log ("Произошла ошибка");
} 