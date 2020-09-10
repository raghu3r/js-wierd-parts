function greet(whatToSay) {
  return function (name) {
    console.log(whatToSay + ' ' + name);
  };
}
// greet('Hi')('Tony');
var sayHi = greet('Hi');
sayHi('Tony');

// funtion factories

//Here, make greeting fucntion is acting as a factory function,

function makeGreeting(language) {
  return function (firstName, lastname) {
    if (language === 'en') {
      console.log('Hello ' + firstName + ' ' + lastname);
    }
    if (language === 'es') {
      console.log('Hollaaa ' + firstName + ' ' + lastname);
    }
  };
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Raghu ', 'reddy');
greetSpanish('Raghu ', 'reddy');
