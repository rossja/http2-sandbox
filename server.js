var fs = require("fs"),
    http2 = require("http2"),
    morgan = require("morgan"),
    debug = require("debug")("http2-server"),
    options = {
      key: fs.readFileSync('./lib/keys/key.pem'),
      cert: fs.readFileSync('./lib/keys/cert.pem')
    };

var logger = morgan("combined");

http2.createServer(options, function(req, res) {
    logger(req, res, function (err) {
        if(err) {
            debug("error: %s", err);
        } else {
            res.end('HTTP/2 enabled!');
        }
    })
}).listen(8080);

debug("listening on port 8080...");
