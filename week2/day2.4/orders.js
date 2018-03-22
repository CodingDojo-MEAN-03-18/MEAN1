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

function receivedItem(item) {
  console.log(`Received ${item.product} time to ${item.directions()}`);
}

const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const roller = orderSupplies('roller').catch(handleError);

// paint
//   .then(function(item) {
//     receivedItem(item);
//
//     return brush;
//   })
//   .then(function(item) {
//     receivedItem(item);
//     return roller;
//   })
//   .then(receivedItem)
//   .catch(handleError);
//
  function handleError(error) {
    console.log(error.message ? error.message : error);
  }

  // async/await

Promise.all([paint, brush, roller])
  .then(items => {
    console.log(items);

    for (const item of items) {
      if (item) {
        receivedItem(item);
      }
    }
  })
  .catch(handleError);

// solution #1
// orderSupplies('paint', function(item) {
//   receivedItem(item);
//   orderSupplies('brush', receivedItem);
// });

// solution #2

// let havePaint = false;
//
// orderSupplies('paint', item => {
//   receivedItem(item);
//
//   havePaint = true;
// });

// orderSupplies('brush', function(item) {
//   if (havePaint) {
//     receivedItem(item);
//   } else {
//     const timer = setInterval(function() {
//       console.log('checking for paint...');
//
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
//   // console.log(item);
//   if (havePaint) {
//     return receivedItem(item);
//   }
//
//   console.log('checking for paint...');
//
//   setTimeout(handleBrush, 50, item);
// }


// solution #3

// let havePaint = false;
// let haveBrush = false;
//
//
// orderSupplies('paint', item => {
//   receivedItem(item);
//
//   if (haveBrush) {
//     return receivedItem(haveBrush);
//   }
//
//
//   havePaint = true;
// })
//
// orderSupplies('brush', item => {
//   if (havePaint) {
//     return receivedItem(item);
//   }
// console.log('brush first');
//   // no paint
//
//   haveBrush = item;
// });

//

// const paint = new Promise(function(resolve, reject) {
//   // console.log('resolve', resolve);
//   // console.log('reject', reject);
//   orderSupplies('paint', resolve);
// });
//
// const brush = new Promise(function(resolve, reject) {
//   orderSupplies('brush', resolve);
// });
//
// const tarp = new Promise(function(resolve, reject) {
//   orderSupplies('tarp', resolve);
// })
//
// tarp
//   .then(function(item) {
//     receivedItem(item);
//     return paint;
//   })
//   .then(function(item) {
//     // do something on success
//     receivedItem(item);
//     return brush
//
//   })
//   .then(function(item) {
//     receivedItem(item);
//   })
//   .catch(function(error) {
//     // do somethign on error
//   });
