

function Person(name, items) {
  // this = {}
  // console.log('what is this', this);

  if (!(this instanceof Person)) {
    return new Person(name, items);
  }

  // const person = {
  //   name,
  // };

  this.name = name;
  this.items = items;

  // this.take = take;

  // return person;
}

Person.prototype.take = function(item, target) {
  if (!target || !Array.isArray(target.items)) {
    throw new Error('target does not have an items array');
  }

  console.log('taking', this);

  for (const [index, element] of target.items.entries()) {
    // console.log(`found ${element} at ${ index }`);
    if (item === element) {
      // slice
      // splice
      // target.items.pop();
      target.items.splice(index, 1);
      this.items.push(element);

      return true;
    }
  }

  return false;
};

Person.prototype.find = function (item) {
  const self = this;
  return this.items.find(function(element, index) {
    // console.log(this.items[index]);
    return self.items[index] === item;
  });
}



const jason = Person('Jason', ['wallet', 'keys', 'phone']);
const person2 = new Person('Bob', ['gold', 'lint', 'coins']);
const person3 = new Person('Kris', ['stuff', 'gum', 'coins']);

const backpack = {
  items: ['compass', 'map', 'food']
};
// console.log(person3);

// console.log(backpack);

jason.take('gold', person2);
person2.take.apply(backpack, ['wallet', jason]);

jason.take('food', backpack);


// console.log(backpack);

// console.log(1 === '1');
// take('gold', person2);
//
// console.log(jason);
// console.log(person2);
// console.log(person3);


function find(element) {
  for (const item of this.items) {
    if (item === element) {
      return true;
    }
  }
  return false;
}
// jason.find()

// const find = ;

// const result = jason.find('gold');

// console.log('result', result);

// console.log(find.call(jason, 'gold'));



// const es6 = x => y => z => x * y * z;

// console.log('es6', es6);

var es5 = function (x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    }
  }
}

// different file
// const imported = require('./main');



module.exports = es5;

console.log('es5', es5);

var yInt = es5(5);


console.log('es5 again', yInt);

console.log('result', yInt(5))


console.log(es5(5)(9));


module.exports = function (request, response) {
  // check for types

  if (request.url === '/') {
    // do something
    if (request.method === 'POST') {

    }
  }
}
