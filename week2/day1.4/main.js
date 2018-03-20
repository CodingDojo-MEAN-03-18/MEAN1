


function run(cb) {
  cb();
}

// run(function() {
//   console.log('running function');
// });


function map(array, callback) {
  const results = [];

  for (let index = 0; index < array.length; index++) {
    console.log('inside loop');
    const data = callback(array[index], index);
    console.log('value',  data);

    results.push(data);
  }

  return results;
}

function add(num1, num2) {
  return num1 + num2;
}

const strArray = ['1', '2', '3', '4'];
// console.log(map(strArray, add));
//
//
// console.log(map(strArray, function(element, number) {
//   console.log('inside map callback', element, number);
//
//   return (parseInt(element, 10) + number);
// }));
//
//
// console.log(map(strArray, element => parseInt(element, 10)));
//


console.log('before name');
function printName(name) {
  setTimeout(function() {
    console.log(`hello ${name}`);
  }, 2000);
}

// printName('Jason');
//
// console.log('after name');


function getThingsFromDB(query, callback) {
  return setTimeout(function() {
    const data = ['thing1', 'thing2',' thing3'];

    callback(data);
    console.log('inside db call');

    // return data;

  }, 2000);
}


getThingsFromDB('select * from things', handleData);



function handleData(data) {
  console.log('handling data', data);

  for (const thing of data) {
    console.log('i have data', thing);
  }
}




///
