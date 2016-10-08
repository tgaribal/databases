var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', function (err, rows, fields) {
        if (err) { throw (err); }
        console.log(rows);
        return callback(rows);
      });
    }, // a function which produces all the messages
    post: function (message) {
      message = JSON.parse(message);
      console.log(typeof message);
      db.connection.query('INSERT INTO messages values ("' 
        + new Date().getTime().toString().slice(-5) + '", "' 
        + message.text + '", "' 
        + message.username + '", "' 
        + message.roomname + '")', function (err, result) {
        if (err) { throw (err); }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
