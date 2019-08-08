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

var _models = _interopRequireDefault(require("../../models"));

var classService =
/*#__PURE__*/
function () {
  function classService() {
    (0, _classCallCheck2["default"])(this, classService);
  }

  (0, _createClass2["default"])(classService, null, [{
    key: "getAllClasses",
    value: function () {
      var _getAllClasses = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].Classes.findAll();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function getAllClasses() {
        return _getAllClasses.apply(this, arguments);
      }

      return getAllClasses;
    }()
  }, {
    key: "getOneClass",
    value: function () {
      var _getOneClass = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        var ClassToFind;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].Classes.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                ClassToFind = _context2.sent;

                if (!ClassToFind) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", ClassToFind);

              case 6:
                return _context2.abrupt("return", null);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      function getOneClass(_x) {
        return _getOneClass.apply(this, arguments);
      }

      return getOneClass;
    }()
  }, {
    key: "AddClass",
    value: function () {
      var _AddClass = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(newClass) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].Classes.create(newClass);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }));

      function AddClass(_x2) {
        return _AddClass.apply(this, arguments);
      }

      return AddClass;
    }()
  }, {
    key: "updateClass",
    value: function () {
      var _updateClass = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(id, newClass) {
        var classToUpdate;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].Classes.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                classToUpdate = _context4.sent;

                if (!classToUpdate) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 7;
                return _models["default"].Classes.update(newClass, {
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                return _context4.abrupt("return", newClass);

              case 8:
                return _context4.abrupt("return", null);

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 11]]);
      }));

      function updateClass(_x3, _x4) {
        return _updateClass.apply(this, arguments);
      }

      return updateClass;
    }()
  }, {
    key: "deleteClass",
    value: function () {
      var _deleteClass = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id) {
        var classToDelete;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].Classes.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                classToDelete = _context5.sent;

                if (!classToDelete) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 7;
                return _models["default"].Classes.destroy({
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                return _context5.abrupt("return", classToDelete);

              case 8:
                return _context5.abrupt("return", null);

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 11]]);
      }));

      function deleteClass(_x5) {
        return _deleteClass.apply(this, arguments);
      }

      return deleteClass;
    }()
  }]);
  return classService;
}();

var _default = classService;
exports["default"] = _default;
//# sourceMappingURL=classServices.js.map