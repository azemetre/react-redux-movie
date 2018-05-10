const { Builder } = require('selenium-webdriver');
const chai = require('chai');

const expect = chai.expect;
const MoviesPO = require('./page-object/movies');

describe('React Redux Movies - Verifying Movie User Stories', function() {
  let driver;
  let movies;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    movies = new MoviesPO(driver);
    await driver.get('http://localhost:3000/')
  });

  after(function() {
    return driver.quit();
  });
  
  describe('Ronald would like to view the movie pane for 12 Angry Men', function() {
    it('synopsis is \"A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.\"', async function() {
      await movies.fromMoviesSelectMovie('2');
      let synopsis = await movies.getMovieSynopsis();
      expect(synopsis).equals('A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.');
    });

    describe('Ronald would like to exit the current movie pane and view what year the Truman show was released', function() {
      it('Year released was 1998', async function() {
        await movies.exitMoviePane();
        await movies.fromMoviesSelectMovie('7');
        let released = await movies.getMovieYear();
        expect(released).equals('1998');
      });
    });
  });

});
