var g = G$('John', 'Doe');

console.log(g);

// Properties and chainable methods

g.greet(); // This will print normal Greeting!

g.greet().greet(true); // This will print normal Greeting and Formal Greeting

g.greet().setLang('es').greet(true); // This will print normal Greeting and Formal Greeting in Spanish!

// Using  our framework

$('#login').click(function () {
  var loginGreeter = G$('Raghu', 'Reddy');
  //hides on click of login
  $('#logindiv').hide();
  // Print the desired output in console
  loginGreeter.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
