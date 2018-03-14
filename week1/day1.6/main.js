var index;
var myStr = "some value";

console.log(myStr);

myStr =  444;

console.log(myStr);


var array = ['cat', 'dog'];

array.push(999);

console.log(array);

console.log('before loop', index);

for (let index = 0; index < array.length; index++) {
  console.log('in the loop', array[index]);
}


console.log('after loop', index);

// for (var index in array) {
//   console.log(array[index]);
// }

// for (var [index, element] of array.entries()) {
//   // var index = what[0];
//   // var element = what[1];
//   console.log('what',index, element);
// }


const obj = {
  "key": 'value it\'s values',
  'some-item': 'more data',
  some_item: 'more and more data',
};

obj.data = 'this is some data';
// obj['things'] = [1,2,3,4,5];
console.log(obj);
//
// for (var key in obj) {
//     console.log('key', key, obj[key]);
// }

function printVal(name, ...content) {
  // console.log(arguments);
  var data = 'scoped data';
  console.log('inside function', name, content);
  return data;
}
//
console.log(printVal('Jason', [1,2,3,4], 'true' ));

function counter() {
  var count = 0;

  function childScope() {
    console.log('inside child scope');

    return ++count;
  }

  return childScope;
}

// console.log('count', counter());
var incr = counter();
console.log(incr);
console.log(incr());
console.log(incr());
var incr2 = counter();
console.log(incr());
console.log(incr());
console.log(incr());
console.log('incr2', incr2());
console.log(incr());
console.log(incr());
console.log(incr());
console.log('incr2', incr2());

// => 1


//
