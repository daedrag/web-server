var express = require('express');
var app = express();

var middleware = {
    requireAuthentication: function (req, res, next) {
      console.log('private route hit!');
      next();
    },
    logger: function (req, res, next) {
      console.log(new Date().toISOString() + ' | Request: ' + req.method + ' ' + req.originalUrl);
      next();
    }
};

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About us!');
});

// console.log(__dirname);
app.use(express.static(__dirname + '/public'));

var PORT = 3000;

app.listen(PORT, function () {
  console.log('Express server started at port ' + PORT + '!');
});
