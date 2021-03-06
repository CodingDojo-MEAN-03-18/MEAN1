function orderSupplies(item, callback) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  setTimeout(function() {
    warehouse = {
      paint: {
        product: 'Neon Green Paint',
        directions: function() { return 'mix it!' }
      },
      brush: {
        product: 'Horsehair brush',
        directions: function() { return 'start painting!' }
      }
    };

    callback(warehouse[item]);
  }, deliveryTime);
}

function receivedItem(item) {
  console.log(`Received ${item.product} time to ${item.directions()}`);
}

orderSupplies('paint', function(paint) {
  receivedItem(paint);
  orderSupplies('brush', receivedItem);
});
//
// setTimeout(function() {
// }, 3000);
//
