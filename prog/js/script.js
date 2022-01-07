const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false        
};

const a = prompt('Один из последних простотренных фильмов?', ''),
      b = prompt('На сколько оценили его?', ''),
      c = prompt('Один из последних простотренных фильмов?', ''),
      d = prompt('На сколько оценили его?', '');

      personalMovieDB.movies [a] = b;
      personalMovieDB.movies [с] = d;
      
console.log(personalMovieDB);      