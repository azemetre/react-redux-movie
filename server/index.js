const express = require('express');
const bodyParser = require('body-parser');
const movies = require('./movies.json');

let app = express();

app.use(express.static(__dirname +'./../'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.listen(3000);
console.log('on port 3000');