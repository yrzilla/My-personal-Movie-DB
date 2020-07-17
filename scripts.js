

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){ // Проверка чтобы пользователь не смог ввести пустую строку, не число и т.д
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                b = +prompt("На сколько оцените его?", "");
        
            if( a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;   
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотренно довольно мало фильмов");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30){
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка")
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`);
        }
    },
    toogleVisibleMyDB: function() {
        if(privat == false) {
            privat = true;
        } else if (privat == true) {
            privat = false;
        }
    }
}


