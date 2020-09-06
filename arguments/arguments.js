function greet(firstname, middlename, lastname) {
  lastname = lastname || 'Reddy';

  if (arguments.length === 0) {
    console.log('Missing Parameters!');
    return;
  }
  console.log('Firstname', firstname);
  console.log('middlename', middlename);
  console.log('lastname', lastname);
  console.log('arguments', arguments);
  console.log('-------');
}

greet();
greet('Raghu');
greet('Raghu', 'Siddhu');
greet('Raghu', 'Siddhu', 'Chaitu');
