// 1. When given a first name, last name and optional language,
// it generates formal and informal greetings.

// 2. Supports English and Spanish Languages

// 3. Reusable library/Framework

// 4. Easy to type G$ structure

// 5. Support jQuery

(function (global, $) {
  // 'new' an object
  var Greetr = function (firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  };

  // hidden within the scope of IIFE and never directly accessible
  var supportedLangs = ['en', 'es'];

  // Informal greetings
  var greetings = {
    en: 'Hello',
    es: 'Hola',
  };

  // Formal Greetings
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos',
  };

  // Logger messages
  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion',
  };

  // Prototype holds methods (to save the memory space)
  Greetr.prototype = {
    // this refers to the calling object at the excution time
    fullname: function () {
      return this.firstname + ' ' + this.lastname;
    },

    validate: function () {
      // Check that is a valid language
      // references the externally inaccessible 'supportedLangs' within the closure
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid Language';
      }
    },

    // retrieve messages from object by referring to properties using [] syntax
    greeting: function () {
      return greetings[this.language] + ' ' + this.firstname + '!';
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ', ' + this.fullname();
    },

    greet: function (formal) {
      var msg;
      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }

      // this refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullname());
      }

      //makes chainable
      return this;
    },

    setLang: function (lang) {
      // set the language
      this.language = lang;

      //validate
      this.validate();

      // make chainable
      return this;
    },

    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }
      if (!selector) {
        throw 'Missing Jquery selector';
      }

      // determine the message
      var msg;
      if (formal) {
        msg: this.formalGreeting();
      } else {
        msg: this.greeting();
      }

      // inject the message in the chosen place in the DOM
      $(selector).html(msg);

      // make chainable
      return this;
    },
  };

  // the actual object is created here allowing us to 'new' an object without calling 'new'
  Greetr.init = function (firstname, lastname, language) {
    this.firstname = firstname || '';
    this.lastname = lastname || '';
    this.language = language || 'en';

    this.validate();
  };

  // This is the trick borrowed from Jquery, so we dont have to use the 'new' keyword
  Greetr.init.prototype = Greetr.prototype;

  //attach our Greetr to the global object and provide a shorthand '$G' for ease our fingers
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
