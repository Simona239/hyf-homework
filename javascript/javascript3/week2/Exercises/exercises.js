//Movies exercise
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then((movies) => {
let badMovies = movies.filter(movie => movie.rating < 5); //creates an array of bad movies 
let badMoviesSince2000 = badMovies.filter(movie => movie.year >= 2000); //creates an array of bad movies since year 2000
let badMoviesTitles = badMoviesSince2000.map(movie => movie.title); //  creates an array of the titles of the bad movies since year 2000
console.log(badMovies); 
console.log(badMoviesSince2000);
console.log(badMoviesTitles);
});  

//Promise that resolves after set time   
function getPromise (resolveAfter) {
    return new Promise (function(resolve) {
        setTimeout(() => {
            resolve("I am called asynchronously");
        }, resolveAfter * 1000);
    });
}
getPromise(6)
    .then(function(result) {
    console.log(result);
}); 

//rewrites "setTimeout" as a promise
function setTimeOut (msec) {
    return new Promise(function(resolve) {
        setTimeout(resolve, msec);
    });
}
setTimeOut(3000)
    .then(() => {
    console.log("Called after 3 seconds");
}); 

//rewrites "navigator.geolocation.getCurrentPosition" as a promise
function getLocation() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);        
    });
}
getLocation()
.then((position) => {
    console.log(position);
})
.catch((error) => {
    console.log(error);
}); 

//fetches data from an app and waits 
fetch('https://api.openbrewerydb.org/breweries') 
.then(response => response.json())
.then(data => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(data) 
        }, 3000);
    });
})
.then(data => { 
    console.log(data);
});