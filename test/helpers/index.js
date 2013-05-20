process.env.NODE_ENV = "test"

var Browser = require("zombie"),
    Chai = require('chai'),
    server = require("./server");

var listening = false;
var listen = function (callback) {
  if (listening) {
    process.nextTick(callback);
    return;
  }
  server.listen(4321, function(){
    listening = true;
    process.nextTick(callback);
  });
};

Browser.site = "http://localhost:4321";

exports.listen = listen;
exports.assert = Chai.assert;
exports.Browser = Browser;