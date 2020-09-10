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
var logPersonName = logName.bind(person);

logPersonName('ENGLISH', 'VINGLISH');

logName.call(person, 'Eng', 'British');

logName.apply(person, ['Eng', 'Brit']);
