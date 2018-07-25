const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmTitles = function () {
  return this.films.map(function(film){
    return film.title;
  })
};
//
// The map() method creates a new array with the results of calling a provided
// function on every element in the calling array.

Cinema.prototype.find = function(title){
  return this.films.find(function(film) {
    return film.title === title;
  });
};

Cinema.prototype.filter = function(genre){
  return this.films.filter(function(film){
    return film.genre === genre;
  });
};
//
// The filter() method creates a new array with all elements that pass
// the test implemented by the provided function.




Cinema.prototype.checkParticularYear = function(year){
  let result = false;
  this.films.some(function(film){
    if(film.year === year) result = true;
  })
  return result;
}
//
// The some() method tests whether at least one element in the array passes the
// test implemented by the provided function


Cinema.prototype.checkFilmsAreOverParticularLength = function(length){
  let result = false;
  this.films.some(function(film){
    if(film.length >= length) result = true;
  })
  return result;
}


Cinema.prototype.getTotalRuntime = function(films){
  let runTime = 0;
  this.films.every(function(film) {
    return runTime = runTime + film.length;
  })
  return runTime;
}
//
// The every() method tests whether all elements in the array pass the test
// implemented by the provided function.

module.exports = Cinema;
