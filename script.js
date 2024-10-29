'use strict';

const personMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function(){
        personMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        while (personMovieDB.count === '' || personMovieDB.count === null || isNaN(personMovieDB.count)){
            personMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++){
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = +prompt('На сколько оцените его?','');
            if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
                personMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    numberOfFilmsCheck: function() {
        if (personMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if (personMovieDB.count >= 10 && personMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(a){
        if (!a) {
            console.log(personMovieDB);
        }
    }, 
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++){
            personMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if (personMovieDB.genres[i] === '' || personMovieDB.genres[i] === null){
                i--;
            } else {
                continue;
            }
        }
        personMovieDB.genres.forEach((e, i) => {
            console.log(`Любимый жанр №${i+1} - это ${e}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personMovieDB.private) {
            personMovieDB.private = false;
        } else{
            personMovieDB.private = true;
        }
    }
};
