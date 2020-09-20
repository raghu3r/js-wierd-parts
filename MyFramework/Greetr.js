// 1. When given a first name, last name and optional language,
// it generates formal and informal greetings.

// 2. Supports English and Spanish Languages

// 3. Reusable library/Framework

// 4. Easy to type G$ structure

// 5. Support jQuery

(function (global, $) {
  var Greetr = function (firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  };

  var supportedLangs = ['en', 'es'];

  var greetings = {
    en: 'Hello',
    es: 'Hola',
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos',
  };

  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion',
  };

  Greetr.prototype = {
    fullname: function () {
      return this.firstname + ' ' + this.lastname;
    },

    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid Language';
      }
    },

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
      return this;
    },

    setLang: function (lang) {
      this.language = lang;
      this.validate();
      return this;
    },
  };

  Greetr.init = function (firstname, lastname, language) {
    this.firstname = firstname || '';
    this.lastname = lastname || '';
    this.language = language || 'en';
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);