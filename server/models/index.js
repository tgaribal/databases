var db = require('../db');
var counter = 2;

module.exports = {
  messages: {
    get: function () {
      db.connection.query('SELECT * FROM messages', function (err, rows, fields) {
        if (err) { throw (err); }
        // console.log(rows)
        return rows;
      });
    }, // a function which produces all the messages
    post: function (message) {
      counter++;
      console.log('post')
      db.connection.query('INSERT INTO messages values (' 
        + counter 
        + ', ' 
        + message.text 
        + ', ' 
        + message.username 
        + ', ' 
        + message.roomname 
        + ')', function (err, result) {
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
