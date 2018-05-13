const frisby = require('frisby');
const Joi = frisby.Joi;
const url = 'http://localhost:3000/';

describe('Movies', function () {
  it('should return proper movie json back', function() {
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