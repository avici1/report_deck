"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classServices = _interopRequireDefault(require("../services/classServices"));

var _Util = _interopRequireDefault(require("../utils/Util"));

var util = new _Util["default"]();

var ClassController =
/*#__PURE__*/
function () {
  function ClassController() {
    (0, _classCallCheck2["default"])(this, ClassController);
  }

  (0, _createClass2["default"])(ClassController, null, [{
    key: "getListClass",
    value: function () {
      var _getListClass = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var classList;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _classServices["default"].getAllClasses();

              case 3:
                classList = _context.sent;

                if (classList.length > 0) {
                  util.setSuccess("Classes Found", 200, classList);
                } else {
                  util.setSuccess("Classes Not Found", 200, {});
                }

                return _context.abrupt("return", util.send(res));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0.message);
                return _context.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function getListClass(_x, _x2) {
        return _getListClass.apply(this, arguments);
      }

      return getListClass;
    }()
  }, {
    key: "addClasses",
    value: function () {
      var _addClasses = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var newClass, addingClass;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!(!req.body.classYear || !req.body.classId || !req.body.classMasterTeacher || !req.body.classSection || !req.body.classLevel)) {
                  _context2.next = 6;
                  break;
                }

                util.setError(400, 'Please send accurate info');
                return _context2.abrupt("return", util.send(res));

              case 6:
                newClass = req.body;
                _context2.next = 9;
                return _classServices["default"].AddClass(newClass);

              case 9:
                addingClass = _context2.sent;
                util.setSuccess('Class added', 201, addingClass);
                return _context2.abrupt("return", util.send(res));

              case 12:
                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 14]]);
      }));

      function addClasses(_x3, _x4) {
        return _addClasses.apply(this, arguments);
      }

      return addClasses;
    }()
  }, {
    key: "deleteClasses",
    value: function () {
      var _deleteClasses = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var id, deletedClass;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context3.next = 6;
                  break;
                }

                util.setError(404, 'Please provide a valid parameter');
                return _context3.abrupt("return", util.send(res));

              case 6:
                _context3.prev = 6;
                _context3.next = 9;
                return _classServices["default"].deleteClass(id);

              case 9:
                deletedClass = _context3.sent;

                if (deletedClass) {
                  _context3.next = 15;
                  break;
                }

                util.setError(404, "Class with Id ".concat(id, " not found"));
                return _context3.abrupt("return", util.send(res));

              case 15:
                util.setSuccess("Class with Id ".concat(id, " deleted successfully"), 200, deletedClass);
                return _context3.abrupt("return", util.send(res));

              case 17:
                _context3.next = 23;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](6);
                util.setError(404, "can't delete the class");
                return _context3.abrupt("return", util.send(res));

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[6, 19]]);
      }));

      function deleteClasses(_x5, _x6) {
        return _deleteClasses.apply(this, arguments);
      }

      return deleteClasses;
    }()
  }, {
    key: "updateClass",
    value: function () {
      var _updateClass = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var id, updated, updated_class;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;
                updated = req.body;

                if (Number(id)) {
                  _context4.next = 7;
                  break;
                }

                util.setError(404, 'Please provide a valid parameter');
                return _context4.abrupt("return", util.send(res));

              case 7:
                _context4.prev = 7;

                if (!(Object.values(updated).length >= 1 == false)) {
                  _context4.next = 13;
                  break;
                }

                util.setError(404, "sent empty fields");
                return _context4.abrupt("return", util.send(res));

              case 13:
                _context4.next = 15;
                return _classServices["default"].updateClass(id, updated);

              case 15:
                updated_class = _context4.sent;

                if (updated_class) {
                  _context4.next = 21;
                  break;
                }

                util.setError(404, "cant update a class");
                return _context4.abrupt("return", util.send(res));

              case 21:
                util.setSuccess('Classes updated successfully', 200, updated_class);
                return _context4.abrupt("return", util.send(res));

              case 23:
                _context4.next = 29;
                break;

              case 25:
                _context4.prev = 25;
                _context4.t0 = _context4["catch"](7);
                util.setError(404, 'Oops something Went wrong cant update the book');
                return _context4.abrupt("return", util.send(res));

              case 29:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[7, 25]]);
      }));

      function updateClass(_x7, _x8) {
        return _updateClass.apply(this, arguments);
      }

      return updateClass;
    }()
  }, {
    key: "getOneClass_",
    value: function () {
      var _getOneClass_ = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var id, oneClass;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;
                _context5.prev = 1;

                if (Number(id)) {
                  _context5.next = 7;
                  break;
                }

                util.setError(404, 'Please provide a valid parameter for search');
                return _context5.abrupt("return", util.send(res));

              case 7:
                _context5.next = 9;
                return _classServices["default"].getOneClass(id);

              case 9:
                oneClass = _context5.sent;
                util.setSuccess("Class is found", 200, oneClass);
                return _context5.abrupt("return", util.send(res));

              case 12:
                _context5.next = 18;
                break;

              case 14:
                _context5.prev = 14;
                _context5.t0 = _context5["catch"](1);
                util.setError(404, "Can't find the class woth Id ".concat(id));
                return _context5.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 14]]);
      }));

      function getOneClass_(_x9, _x10) {
        return _getOneClass_.apply(this, arguments);
      }

      return getOneClass_;
    }()
  }]);
  return ClassController;
}();

var _default = ClassController;
exports["default"] = _default;
//# sourceMappingURL=classController.js.map