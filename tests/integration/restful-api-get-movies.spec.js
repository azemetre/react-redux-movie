const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exposes Joi for convenience
const url = 'http://localhost:3000/';

describe('Posts', function () {
  it('should return all posts and first post should have comments', function() {
    frisby.get(`${url}movies`)
      .expect('status', 200)
      .expect('jsonTypes', '*', {
        movieId: Joi.number(),
        cover: Joi.string(),
        starring: Joi.object(),
        title: Joi.string(),
        year: Joi.number(),
        synopsis: Joi.string()
      });
  });
});