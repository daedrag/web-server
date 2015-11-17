// use module exports to export middleware

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

module.exports = middleware;
