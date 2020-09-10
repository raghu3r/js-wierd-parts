// This is an example of Closure.
// Here setTimeoout is using first class functions.
// we are creating functions on the fly so taking the advantage of a function expression.
// I am passing a function object and another parameter the time to setTimeout.

// so after running below code -
// Thanks to Closure, it still has access to greeting three seconds later, eventhough longtime ago
// sayHiLater finished running.

// THe function only take milli second to run, but it still has access when this function is executed by the JS  engine.
// On a whole -

// A CLOSURE GIVES YOU ACCESS TO AN OUTER FUNCTIONS SCOPE FROM AN INNER FUNTION

function sayHiLater() {
  var greeting = 'Hi!';

  setTimeout(function () {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

// jQuery use the function expressions and first class functions.
// $('button').click(function() {

// });
