"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _classRouter = _interopRequireDefault(require("./server/routes/classRouter"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use('/api', _classRouter["default"]);
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
var port = process.env.PORT || 8001;
app.get('*', function (req, res) {
  return res.status(200).send({
    message: "Entrance"
  });
});
app.listen(port, function () {
  console.log("Entrance done, We are running at port " + port);
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map