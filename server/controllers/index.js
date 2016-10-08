var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      res.statusCode = 200;
      models.messages.get(function(rows) {
        var results = [];
        rows.forEach(function (row) {
          var obj = {
            username: row.id_Users,
            text: row.message_text,
            roommname: row.id_Rooms,
            objectId: row.message_id
          };
          results.push(obj);
        });
        res.end(JSON.stringify({results: results}));
      });      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('messages post hello');
      var body = '';
      req.on('data', function (chunk) {
        body += chunk;
      });
      req.on('end', function () {
        models.messages.post(body, function () {
          res.writeHead(201);
          res.end(body);
        });
      });
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
