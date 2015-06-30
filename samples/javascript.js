var data = [1, 2, 3, 4, 5];

var items = data.map(function(dataItem) {
  return dataItem * 5;
});

var lowCounter = data.reduce(function(total, current) {
  return total + (current < 10);
}, 0);

// A comment
console.log("items, lowCounter", items, lowCounter);
