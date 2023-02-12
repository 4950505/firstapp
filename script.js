'use strict'

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,

  start: function() {
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    }
  },

  rememberMyFilms: function() {
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
  },

  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Вы мало лох');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log('Вы классичский лох');
    } else if (personalMovieDB.count > 30) {
      console.log('Да вы кинолох батенька');
    } else {
      console.log('товарищ сталин произошла чудовишная БАЖЕНА!');
    }
  },

  showMyDB: function() {
    if(!personalMovieDB.privat) {
      console.log(personalMovieDB);
    }
  },
 
  writeYourGenres: function() {
    let genres = prompt(`Какие видосики нра? веди через ,`).toLowerCase();
    while(!genres) {
      alert('введи норм придурок!');
      genres = prompt(`Какие видосики нра? веди через ,`);
    }  
    personalMovieDB.genres = genres.split(', ');
    personalMovieDB.genres.sort();
    personalMovieDB.genres.forEach((element, i) => {
        console.log(`${i+1}-ый любимйы жанр — ${element} `);
    });
    
  },

  toggleVisibleMyDB: function() {
    if(personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }

}
