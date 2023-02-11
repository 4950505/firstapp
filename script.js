'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', 'Звёздные войны'),
        b = prompt('На сколько оцените его?', '8.1');
  if (a && a.length < 50 && b) {
    personalMovieDB.movies[a] = b;
    personalMovieDB.count += 1;  
  } else {
    alert('Введи нормально сука ебаная');
    i--;
  
  }
}



if (personalMovieDB.count < 10) {
  console.log('Вы мало лох');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log('Вы классичский лох');
} else if (personalMovieDB.count > 30) {
  console.log('Да вы кинолох батенька');
} else {
  console.log('товарищ сталин произошла чудовишная ошибко!');
}

console.log(personalMovieDB);
