// Code wrapped in IIFE does not interfere with, Crash into, or be interfered by
// any other code that might be included in my application.
//IIFE
(function (name) {
  var greeting = 'Hello';
  console.log(greeting + ' ' + name);
})('John');

console.log(greeting);

// Making Global Object

(function (global, name) {
  var greeting = 'Hello';
  global.greeting = 'Heloooowo';
  console.log(greeting + ' ' + name);
})(window, 'John');

console.log(greeting);
