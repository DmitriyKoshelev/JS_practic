'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько сериалов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько сериалов вы уже посмотрели?', '');        
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

function rememberFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных сериалов?', ''),
              b = prompt('На сколько оценили его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
            personalMovieDB.movies [a] = b;
            console.log('Done');
        }  else {
            console.log('Error');
            i--;
        }    
              
    }   
}
     rememberFilms();

function personalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно мало сериалов');
    } else if (personalMovieDB.count > 10 &&  personalMovieDB.count < 30) {
        console.log('Вы классический любитель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Повелитель сериалов');
    } else {
        console.log('Ошибка');
    }
    
}

 personalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }   
}

showMyDB(personalMovieDB.privat);

function writeGeners() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }   
}

writeGeners();

