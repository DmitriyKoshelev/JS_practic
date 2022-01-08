const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false        
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних простотренных фильмов?', ''),
          b = prompt('На сколько оценили его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies [a] = b;
        console.log('Done');
    }  else {
        console.log('Error');
        i--;
    }    
          
}

if (personalMovieDB.count < 10) {
    console.log('Просмотренно мало сериалов');
} else if (personalMovieDB.count > 10 &&  personalMovieDB.count < 30) {
    console.log('Вы классический любитель');
} else if (personalMovieDB.count >= 30) {
    console.log('Повелитель сериалов');
} else {
    console.log('Ошибка');
}

console.log(personalMovieDB);

