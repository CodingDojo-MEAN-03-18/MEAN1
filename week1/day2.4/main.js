// function personMaker() {}



// const person = personMaker()

// console.log(person.name)
// person.items ==> []
// ==> 'Jason'

function Person(name, items, age) {
  if (!(this instanceof Person)) {
    return new Person(name, items);
  }

  // this.getAge = function() { return age; }
  this._age = age;
  // const person = {
  //   name
  // };

  this.name = name;

  this.items = items;

  // this.take = take;


  // 'this' is returned
  // return person;

  return this;
}


Person.prototype.take = function(item, target) {
  if (!(target && Array.isArray(target.items))) {
    // fail here
    throw new Error('target must have an items array');
  }

  for (let index = 0; index < target.items.length; index++) {
    if (target.items[index] === item) {
      // splice
      // slice
      console.log('item', target.items.splice(index, 1));

      this.items.push(item);
      return true;
    }
  }

  return false;
};

const person = Person('Jason', ['keys', 'phone', 'wallet']);
const person2 = new Person('Bob', ['lint', 'gold', 'coins']);

person.take('gold', person2);
person2.take('wallet', person);

// take('gold', person2);

const backpack = {
  items: ['map', 'compass', 'food']
};

// console.log(backpack);
//
person.take('map', backpack);
//
console.log(person);
console.log(person2);
console.log(backpack);

// console.log(1 === '1');
