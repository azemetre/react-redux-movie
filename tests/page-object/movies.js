class Movies {
  constructor(driver) {
    this.driver = driver;

    this.movieSection = this.driver.findElement({
      css: 'section.list__M5T1N'
    });

    this.movieSectionHidden = this.driver.findElement({
      css: 'section.listHidden__1iV9-'
    });
  }

  fromMoviesSelectMovie(num) {
    return this.driver.findElement({
      css: '#app > div > div > section > a:nth-child(' + num + ')'
    }).click();
  }

  getMovieSynopsis() {
    return this.driver.findElement({
      css: 'div.synopsis__28V3T'
    }).getText();
  }

  getMovieTitle() {
    return this.driver.findElement({
      css: 'div.title__2aBIx'
    }).getText();
  }

  getMovieYear() {
    return this.driver.findElement({
      css: 'div.year__35Bhg'
    }).getText();
  }

  exitMoviePane() {
    return this.closeMoviePane = this.driver.findElement({
      css: 'a.closeButton__3-CaH'
    }).click();
  }
}

module.exports = Movies;