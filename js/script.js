'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько сериалов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько сериалов вы уже посмотрели?', '');        
        }
    },

    rememberFilms: function() {
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
    },

    personalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно мало сериалов');
        } else if (personalMovieDB.count > 10 &&  personalMovieDB.count < 30) {
            console.log('Вы классический любитель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Повелитель сериалов');
        } else {
            console.log('Ошибка');
        }
        
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }   
    },
    toggleVisibleMyDB: function() {
       if (personalMovieDB.privat) {
           personalMovieDB.privat = false;
       } else {
           personalMovieDB.privat = true;
       }
    },
    writeGeners: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели не рорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
            
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};


