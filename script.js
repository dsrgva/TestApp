'use strict';


let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++){
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = +prompt('На сколько оцените его?','');
    if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
        personMovieDB.movies[a] = b;
    } else {
        i--;
    }
    
}

if (personMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if (personMovieDB.count >= 10 && personMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


function check(a) {
    if (a == false) {
        console.log(personMovieDB);
    }
}


function writeYourGenres(mas){
    for (let i = 0; i < 3; i++){
        mas[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    }
}

writeYourGenres(personMovieDB.genres);

check(personMovieDB.private);

