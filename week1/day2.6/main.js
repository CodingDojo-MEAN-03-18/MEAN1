

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



const jason = Person('Jason', ['wallet', 'keys', 'phone']);
const person2 = new Person('Bob', ['gold', 'lint', 'coins']);
const person3 = new Person('Kris', ['stuff', 'gum', 'coins']);

const backpack = {
  items: ['compass', 'map', 'food']
};
console.log(person3);

console.log(backpack);

jason.take('gold', person2);
person2.take.apply(backpack, ['wallet', jason]);

jason.take('food', backpack);


console.log(backpack);

// console.log(1 === '1');
// take('gold', person2);
//
console.log(jason);
console.log(person2);
console.log(person3);
