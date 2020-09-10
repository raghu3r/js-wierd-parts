var person = {
  firstName: 'Raghu',
  lastName: 'Reddy',
  getFullname: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
};

var logName = function (lang1, lang2) {
  console.log('Logged' + ' ' + this.getFullname());
  console.log('Arguments ---- ' + lang1 + ' ' + lang2);
  console.log('---------');
};

//Bind creates a copy of whatever function you're calling it on.
var logPersonName = logName.bind(person);

logPersonName('ENGLISH', 'VINGLISH');

// call() executes the function and decides what the this variable should be and the rest
// is just the parameters that would normally pass to a function.

logName.call(person, 'Eng', 'British');

// Does the same as above, but the only difference is parameters to be passed in an Array format.
logName.apply(person, ['Eng', 'Brit']);
