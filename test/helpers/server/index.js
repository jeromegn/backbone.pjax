var Express = require("express"),
    server = Express(),
    EJS = require("ejs");

server.use(Express.bodyParser());
server.use(Express.methodOverride());

server.set("views", __dirname + "/views");
server.set("view engine", "ejs");

server.use("/assets", Express.static(__dirname + "/assets"));
server.use("/assets/vendor", Express.static(__dirname + "/../../../"));
server.use(server.router);

server.use(function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
});

server.get("/", function (req, res, next){
  res.render("index");
});

server.get("/test", function (req, res, next){
  res.render("test");
});

module.exports = server