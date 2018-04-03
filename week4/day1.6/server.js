const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema;


mongoose.connect('mongodb://localhost/animalzzz');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));
//
// const a = 'this is important';
//
// const o = {
//   a: 'this is a',
//   b: 'this is b',
// };
//
// // const a = o.a;
// const { a: c, b } = o;
// // const { b } = o;
//
//
// console.log(a, b, c);

const animalSchema = new Schema({
  name: String,
  age: {
    type: Number,
    required: [true, 'Age is required information'],
  },
  numLegs: {
    type: Number,
    required: [true, 'Please supply a number of legs'],
    min: [2, 'Minimum of two legs'],
  },
  eatsPeople: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true,
});

mongoose.model('Animal', animalSchema);


// new file
const Animal = mongoose.model('Animal');

const animal = new Animal({
  name: 'Spot',
  bogus: 'does not exist',
  age: 4,
  numLegs: 2,
});

animal.save()
  .then(function(savedAnimal) {
    console.log('saved animal', savedAnimal);
  })
  .catch(function(error) {
    // console.log('error', error.errors);


    const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message);

    // for (let index = 0; index < keys.length; index++) {
    //
    //   errors.push(error.errors[keys[index]].message);
    // }


    // response.render('index', {
    //   errors: Object.keys(error.errors)
    //             .map(key => error.errors[key].message)
    //   });

    console.log(errors);
  });



// animal.save(function(error, savedAnimal) {
//   console.log(error, savedAnimal);
// });




//
