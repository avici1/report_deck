"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classController = _interopRequireDefault(require("../controllers/classController"));

var _express = require("express");

//import ClassController from '../controllers/classController';
var router = (0, _express.Router)();
router.get('/class', _classController["default"].getListClass);
router.get('/class/:id', _classController["default"].getOneClass_);
router.post('/class', _classController["default"].addClasses);
router.put('/class/:id', _classController["default"].updateClass);
router["delete"]('/class/:id', _classController["default"].deleteClasses);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=classRouter.js.map