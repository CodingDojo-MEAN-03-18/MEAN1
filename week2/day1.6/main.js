




add(1, 5);

function run(cb) {
  cb();
}

//
// run(function() {
//   console.log('inside callback');
// });


function map(array, callback) {
  const results = [];

  for (let index = 0; index < array.length; index++) {
    // const data = callback(array[index], index);
    // console.log('data', data);
    //
    // results.push(data);

    results.push(callback(array[index], index));
  }

  return results;
}

function add(num1, num2) {
  return num1 + num2;
}

const strArray = ['cat', '1', '3', '6', '99'];
// console.log(map(strArray, function(element, number) {
//   console.log('inside map cb', element, number);
//
//   return (parseInt(element, 10) + number);
// }));
//
// console.log(map(strArray, function(element) {
//   return element * element;
// }));
//
// console.log(map(strArray, add));
//
// console.log('string array', strArray);
//



// console.log('before print');

function printName(name) {
  setTimeout(function() {
    console.log(`Hello, ${name}`);
  }, 2000);
}

// printName('Jason');

// console.log('after print');


function getThingsFromDB(query, callback) {
  return setTimeout(function() {
    const data = ['thing1', 'thing2', 'thing3'];
    callback(data);
    // return data;
  }, 2000);
}

getThingsFromDB('select * from things', handleData);


function handleData(infoFromDB) {
  console.log('handle data', infoFromDB);
}

// console.log('things', things);


//
