const mongoose = require('mongoose');
const { Schema } = mongoose;
// mongoose = 'not mongoose';
mongoose.connect('mongodb://localhost/animals');

mongoose.connection.on('connected', () => console.log('connected to mongodb'));

// const o = {
//   a: 'this is a',
//   b: 'this is b',
// };
// const a = 'important stuff'

// // const a = o.a;
// // const b = o.b;
// const { a: c, b } = o;
// // const { b } = o;
//
// console.log(c, b);

const animalSchema = new Schema({
  name: String,
  age: {
    type: Number,
    required: [true, 'You must supply an age!!!'],
  },
  numLegs: {
    type: Number,
    required: [true, 'Age is a required field'],
    min: [2, '2 or more characters required'],
  },
  eatsPeople: {
    type: Boolean,
    default: false,
  },
});

mongoose.model('Animal', animalSchema);


const Animal = mongoose.model('Animal');


const animal = new Animal({
  name: 'Spot',
  numLegs: 2,
  age: 4
});

// animal.save(function(error, savedAnimal) {
//   console.log(error, savedAnimal);
// });
// console.log(animal.save());

animal.save()
  .then(function(animal) {
    console.log('animal saved', animal);
    // send saved animal to client
    // response.render('index', { animal });
  })
  .catch(function(error) {
    // console.log('error', error.errors);

    // const errors = [];
    // console.log(keys);
    const errors = Object.keys(error.errors)
      .map(key => error.errors[key].message);

    // for (let index = 0; index < keys.length; index++) {
    //   errors.push(error.errors[keys[index]].message);
    // }

    // response.render('index',{ errors: Object.keys(error.errors)
    //   .map(key => error.errors[key].message)
    // });

    console.log(errors);
  });


console.log(animal);

//
