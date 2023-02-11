'use strict'

let numberOfFilms;

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);

// ========================= funtions

function start() {
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = + prompt('Сколько фильмов вы уже посмотрели?');
  }
}

function rememberMyFilms() {
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
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Вы мало лох');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классичский лох');
  } else if (personalMovieDB.count > 30) {
    console.log('Да вы кинолох батенька');
  } else {
    console.log('товарищ сталин произошла чудовишная БАЖЕНА!');
  }
}

function showMyDB(hidden) {
  if(!hidden) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let genre = prompt(`Какие видосики ${i + 1} нра?`);
    personalMovieDB.genres[i] = genre;
  }
}
