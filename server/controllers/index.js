var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      res.statusCode = 200;
      models.messages.get(req);
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('messages post hello');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users get hello');
    },
    post: function (req, res) {
      console.log('users post hello;');
    }
  }
};

