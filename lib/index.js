var koa = require ("koa");
var views = require ("./views");
var route = require ("koa-route");
var serve = require ("koa-static");

module.exports = function (policy) {
  
  var app = koa();
  
  // the App
  // put { defer : true } to use index.html inside the build directory
  app.use (route.get("/", views()));
  app.use (serve(__dirname + "/../build"));

  return app;
}