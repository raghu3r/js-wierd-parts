function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('Function is invoked');
}

Person.prototype.getFullname = function () {
  return this.firstname + ' ' + this.lastname;
};

var John = new Person('John', 'Dheere');
console.log(John);

var Raghu = new Person('Raghu', 'Reddy');
console.log(Raghu);

// Arrays and For in.

Array.prototype.myCustomFeature = 'Cool!';

var arr = ['John', 'Dheere', 'RAGHU'];

for (var prop in arr) {
  console.log(prop + ': ' + arr[prop]);
}

// Polyfill for Object.create

if (!Object.create) {
  Object.create = function (obj) {
    if (arguments.length > 1) {
      throw new Error(
        'Object.create implementation' + ' only accepts the first parameter'
      );
      function F() {}
      F.prototype = obj;
      return new F();
    }
  };
}

// Object.create and Prototypical inheritance
var Person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function () {
    return 'Hi ' + this.firstname;
  },
};

var John = Object.create(Person);
John.firstname = 'John';
John.lastname = 'Siddhu';
console.log(John);
