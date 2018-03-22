function orderSupplies(item) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        },
        tarp: {
          product: 'A Large Tarp',
          directions: () => 'cover the floor'
        }
      };

      if (warehouse[item]) {
        resolve(warehouse[item]);
      } else {
        reject(new Error(`${item} is out of stock`));
      }

    }, deliveryTime);
  });
}

const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const tarp = orderSupplies('tarp');
const roller = orderSupplies('roller').catch(handleError);

// tarp
//   .then(function(item) {
//     receivedItem(item);
//     return paint;
//   })
//   .then(item => {
//     receivedItem(item)
//     return brush;
//   })
//   .then(item => {
//     receivedItem(item);
//     return roller;
//   })
//   .catch(handleError);

Promise.all([tarp, paint, brush])
  .then(function(items) {
    console.log(items);

    for (const item of items) {
      receivedItem(item);
    }
  })
  .catch(handleError);


function handleError(error) {
  console.log(error.message);
}

function receivedItem(item) {
  console.log(`Received ${item.product}. Time to ${item.directions()}`);
}

// solution #1

// orderSupplies('paint', item => {
//   receivedItem(item);
//   orderSupplies('brush', receivedItem);
// });


// solution #2
// let havePaint = false;
// orderSupplies('paint', item => {
//   receivedItem(item);
//
//   havePaint = true;
// });
// orderSupplies('brush', item => {
//   if (havePaint) {
//     receivedItem(item);
//   } else {
//     const timer = setInterval(function() {
//       console.log('checking for paint...', havePaint);
//       if (havePaint) {
//         receivedItem(item);
//         clearInterval(timer);
//       }
//     }, 50);
//   }
// });

// orderSupplies('brush', handleBrush);
//
// function handleBrush(item) {
//   if (havePaint) {
//     return receivedItem(item);
//   }
//
//   console.log('checking for paint....');
//   setTimeout(handleBrush, 50, item);
// }


// solution #3

// let havePaint = false;
// let haveBrush = false;
//
// orderSupplies('paint', item => {
//   receivedItem(item);
//
//   if (haveBrush) {
//     // do something
//     return receivedItem(haveBrush);
//   }
//
//   havePaint = true;
// });
// orderSupplies('brush', item => {
//   if (havePaint) {
//     return receivedItem(item);
//   }
//
//   console.log('have brush');
//   // no paint
//   haveBrush = item;
// });


// solution #4

// const paint = new Promise(function(resolve, reject) {
//   // console.log('resolve', resolve);
//   // console.log('reject', reject);
//   orderSupplies('paint', resolve);
// });
// const brush = new Promise(function(resolve, reject) {
//   // console.log('resolve', resolve);
//   // console.log('reject', reject);
//   orderSupplies('brush', resolve);
// });
//
// const tarp = new Promise(function(resolve, reject) {
//   orderSupplies('tarp', resolve);
// });
//
// tarp
//   .then(function(item) {
//     receivedItem(item);
//     return paint;
//   })
//   .then(function(item) {
//     receivedItem(item);
//   })
//   .then(function() {
//     return brush;
//   })
//   .then(function(item) {
//     receivedItem(item);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });


//
