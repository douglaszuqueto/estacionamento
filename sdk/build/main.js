require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("rethinkdb");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vagas__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Vagas", function() { return __WEBPACK_IMPORTED_MODULE_0__vagas__["a"]; });


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db_model__ = __webpack_require__(4);


var TABLE_NAME = 'vagas';

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__db_model__["a" /* Model */](TABLE_NAME));

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rethinkdb__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rethinkdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rethinkdb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Model = function () {
  function Model(table) {
    _classCallCheck(this, Model);

    this.table = table;
  }

  _createClass(Model, [{
    key: 'find',
    value: function find(id) {
      var _this = this;

      return Object(__WEBPACK_IMPORTED_MODULE_1__db__["a" /* default */])().then(function (conn) {
        return __WEBPACK_IMPORTED_MODULE_0_rethinkdb___default.a.table(_this.table).get(id).run(conn);
      });
    }
  }, {
    key: 'all',
    value: function all() {
      var _this2 = this;

      return Object(__WEBPACK_IMPORTED_MODULE_1__db__["a" /* default */])().then(function (conn) {
        return __WEBPACK_IMPORTED_MODULE_0_rethinkdb___default.a.table(_this2.table).run(conn);
      }).then(function (cursor) {
        return cursor.toArray();
      });
    }
  }, {
    key: 'findBy',
    value: function findBy(by) {
      var _this3 = this;

      return Object(__WEBPACK_IMPORTED_MODULE_1__db__["a" /* default */])().then(function (conn) {
        return __WEBPACK_IMPORTED_MODULE_0_rethinkdb___default.a.table(_this3.table).filter(by).run(conn);
      }).then(function (cursor) {
        return cursor.toArray();
      });
    }
  }, {
    key: 'changes',
    value: function changes() {
      var _this4 = this;

      return Object(__WEBPACK_IMPORTED_MODULE_1__db__["a" /* default */])().then(function (conn) {
        return __WEBPACK_IMPORTED_MODULE_0_rethinkdb___default.a.table(_this4.table).changes().run(conn);
      });
    }
  }, {
    key: 'update',
    value: function update(id, payload) {
      var _this5 = this;

      return Object(__WEBPACK_IMPORTED_MODULE_1__db__["a" /* default */])().then(function (conn) {
        return __WEBPACK_IMPORTED_MODULE_0_rethinkdb___default.a.table(_this5.table).get(id).update(payload).run(conn);
      });
    }
  }]);

  return Model;
}();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rethinkdb__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rethinkdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rethinkdb__);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_rethinkdb___default.a.connect({ host: 'db', port: 28015, db: 'estacionamento' });
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.map