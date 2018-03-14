var onlyIfTrue;
var index;
var myStr = 'some string';

// console.log(myStr);

myStr = 345;

// console.log(myStr);

var array = ['cat', 'dog'];


// console.log(array);


array.push(999);
// console.log(array[1]);

// console.log('index before loop', index);

for (let index = 0; index < array.length; index++) {
  // do something

  // console.log(array[index]);
}

// if (true) {
//   var onlyIfTrue = true;
// }

// console.log('index after loop', index);

// for (var element in array) {
//   console.log(array[element]);
// }


// for (var element of array) {
//   console.log('element of', element);
// }



const obj = {
  key: "value it's",
  'some-item': 'some value',
};

obj.data = 'this is some data';

// console.log(obj['key']);
// console.log(obj['some-item'])
//
// console.log(obj);



function printVal(value, ...content) {
  // console.log(arguments);
  var thing = 'something special';
  console.log('printing values', thing, content);
}


// printVal('information', [1,2,3], true, false, 'what');


function counter() {
  var count = 0;

  function childScope() {
    var childContent = 'child';
    console.log('counting');
    return ++count;
  }

  return childScope;
}


var incr = counter();
// count as 0
//   function childScope() {
  //   var childContent = 'child';
  //   console.log('counting');
  //   return ++count;
  // }
console.log('incr', incr());
console.log('incr', incr());
console.log('incr', incr());
console.log('incr', incr());
var incr2 = counter();
// count as 0
//   function childScope() {
  //   var childContent = 'child';
  //   console.log('counting');
  //   return ++count;
  // }

console.log('incr', incr());
console.log('incr', incr());
console.log('incr', incr());
console.log('incr', incr());
console.log('incr222222', incr2());
console.log('incr', incr());

//
