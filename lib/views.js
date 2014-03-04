var render = require ("./render");

module.exports = function (options) {
  options = options || {};
  options.index = options.index || "index";

  return function * (next) {
    this.body = yield render(options.index);
  }
}
