function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

var arr1 = [2, 4, 6];
console.log(arr1);

// for (var i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i] * 3);
// }
var arr2 = mapForEach(arr1, function (item) {
  return item * 3;
});
var arr3 = mapForEach(arr1, function (item) {
  return item > 3;
});

console.log(arr2);
console.log(arr3);

var checkPastLimit = function (limiter, item) {
  return item > limiter;
};

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 2));
console.log(arr4);

// If you want not to use bind as above, then

var checkPastLimitSimplified = function (limiter) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(3));
console.log(arr5);

// Using underscore.js

var arr6 = _.map(arr1, function (item) {
  return item * 3;
});
console.log(arr6);

var arr7 = _.filter([2, 3, 4, 5, 6, 7, 8, 9], function (item) {
  return item % 2 === 0;
});

console.log(arr7);
