// const numberOfFilms = +prompt("How many films did you watched?", '');
// const oneLastOfFilms = prompt("How your last films did you watched?", ''),
// yourRatindOfFilms = +prompt("What so you rating this films?", '');
// const personalMovieD5B = {
//     count: numberOfFilms,
//     movies: {
//         film: oneLastOfFilms,
//         rating: yourRatindOfFilms
//     },
//     actors: {},
//     genres: [],
//     privat: false
// };
// console.log(personalMovieD5B);
const numberOfFilms = +prompt("How many films did you watched?", '');
const personalMovieD5B = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt("How your last films did you watched?", ''),
      b = +prompt("What so you rating this films?", ''),
      c = prompt("How your last films did you watched?", ''),
      d = +prompt("What so you rating this films?", '');
personalMovieD5B.movies[a] = b; 
personalMovieD5B.movies[c] = d;
console.log(personalMovieD5B);