const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const logger = require('./server/middleware/logger');

const app = express();

const names = ['Bob', 'Spot', 'Sally'];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

// app.use(function(request, response, next) {
//   // console.log(next);
//   console.log(new Date());
//
//   request.dateRequested = new Date();
//
//   next();
// });


function dateRequested({ getOnly = true, errorIf = false, body = false, ignore = false } = {}) {
  console.log(getOnly, errorIf, body, ignore);

  return function(request, response, next) {
    if (ignore) { return next(); }

    console.log('processing date');

    if (getOnly) {
      if (request.method !== 'GET') {
        let error = null;

        if (errorIf) {
          error = new Error(`The request method ${ request.method } is not supported`);
        }

        return next(error);
      }
    }

    if (body) {
      request.body.dateRequested = new Date();
    } else {
      request.dateRequested = new Date();
    }

    next();
  };
}

app.use(dateRequested({ errorIf: true  }))

// console.log(path.join(__dirname, 'views'));
// console.log(path.resolve('views'));

app.get('/', function(request, response) {
  // console.log('requesting', request);
  // console.log(new Date());
  console.log('inside root', request.dateRequested);
  console.log('inside root body', request.body.dateRequested);
  // response.send('<h1>hello from express</h1>');
  response.render('index');
});


app.post('/process', function(request, response) {
  console.log('handling post', request.body);
  // console.log(new Date());

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
  // console.log(new Date());

  response.send(names[request.params.index]);
});


//

app.use(function(error, request, response, next) {
  console.log('error handling', error.message);

  next(error);
});

app.use(function(error, request, response, next) {
  response.send(`There was an error: ${ error.message }`);
});


app.listen(port, () => console.log(`express server listening on port ${ port }`));
