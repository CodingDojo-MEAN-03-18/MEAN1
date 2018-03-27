const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

const names = ['Bob', 'Spot', 'Sally'];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// console.log(path.join(__dirname, 'views'));
// console.log(path.resolve('views'));

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(request, response) {
  console.log('in root', request);

  // response.send('<h1>hello from express</h1>');
  response.render('index');
});

app.post('/process', function(request, response) {
  console.log('posting data', request.body);
  names.push(request.body.name);
  response.render('results', {
    name: request.body.name,
    names: names,
    errors: []
  });

  // response.redirect('/')
});

app.get('/names/:index', function(request, response) {
  console.log(request.params);
  response.send(names[request.params.index]);
});









app.listen(port, () =>
console.log(`express server listening on port ${ port }`)
);
///
