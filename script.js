'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 15);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

let a = prompt('Один из последних просмотренных фильмов?', 'Звёздные войны');
let b = prompt('На сколько оцените его?', '8.1');

personalMovieDB.movies[a] = b;

a = prompt('Один из последних просмотренных фильмов?', 'Звёздные войны');
b = prompt('На сколько оцените его?', '8.1');

personalMovieDB.movies[a] = b;


console.log(personalMovieDB);
console.log(personalMovieDB.movies);
