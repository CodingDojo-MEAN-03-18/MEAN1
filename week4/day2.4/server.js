const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema;
const port = process.env.PORT || 8005;

const app = express();


mongoose.connect('mongodb://localhost/books_and_authors');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));


// mongoose.Promise = global.Promise;

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(bodyParser.urlencoded({ extended: true }));


const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  age: Number,
  isAlive: {
    type: Boolean,
    default: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
}, {
  timestamps: true,
});

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
  },
  pages: Number,
  year: Number,
  publisher: String,
});

const Author = mongoose.model('Author', authorSchema);
const Book = mongoose.model('Book', bookSchema);


app.get('/', function(request, response) {
  response.render('index');
});

app.get('/authors', function(request, response) {
  Author.find({})
    .populate('books')
    .then(authors => {
      response.render('authors/index', { authors });
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
});



app.get('/authors/new', function(request, response) {
  response.render('authors/new');
});


app.post('/authors', function(request, response) {
  console.log(request.body);
  // const author = {
  //   name: request.body.name,
  //   age: request.body.age,
  //   isAlive: request.body.isAlive,
  // }
  // const author = new Author()
  Author.create(request.body)
    .then(author => {
      console.log('author', author);

      response.redirect('/authors');
    })
    .catch(error => {
      console.log('error', error);
    });
});




app.get('/books', function(request, response) {
  Book.find({})
    .populate('author')
    .then(books => {
      response.render('books/index', { books });
    })
    .catch(console.log);
});

app.get('/books/new', function(request, response) {
  Author.find({})
    .then(authors => {
      response.render('books/new', { authors });
    })
});

app.post('/books', function(request, response) {
  console.log(request.body);
  Book.create(request.body)
    .then(book => {

      return Author.findById(book.author)
        .then(author => {
          console.log('author', author);

          author.books.push(book._id);

          return author.save()
            .then(() => response.redirect('/books'))
        })
      console.log('book', book);
    })
    .catch(console.log);
});


app.listen(port, () => console.log(`express listening on port ${ port }`));
