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

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_index__ = __webpack_require__(3);


__WEBPACK_IMPORTED_MODULE_0__http_index__["a" /* default */].listen(3000, function () {
  return 'server is running';
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middlewares__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_index__ = __webpack_require__(7);




var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

/* MIDDLEWARES  */
Object(__WEBPACK_IMPORTED_MODULE_1__middlewares__["a" /* default */])(app);

/* ROUTES */
app.use('/', __WEBPACK_IMPORTED_MODULE_2__routes_index__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (app);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cors__);



/* harmony default export */ __webpack_exports__["a"] = (function (app) {
  app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.json());
  app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.urlencoded({ extended: true }));
  app.use(__WEBPACK_IMPORTED_MODULE_1_cors___default()());
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_dzuqueto_github_com_estacionamento_api_node_modules_babel_runtime_regenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_dzuqueto_github_com_estacionamento_api_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_dzuqueto_github_com_estacionamento_api_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sdk_build_main__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sdk_build_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__sdk_build_main__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* MODEL */


/* ROUTES */
var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.get('/vagas', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_dzuqueto_github_com_estacionamento_api_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var vagas;
    return __WEBPACK_IMPORTED_MODULE_0__home_dzuqueto_github_com_estacionamento_api_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__sdk_build_main__["Vagas"].all();

          case 3:
            vagas = _context.sent;

            res.json(vagas);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            res.json(_context.t0.message);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/vagas/:id', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_dzuqueto_github_com_estacionamento_api_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var id, vaga, state, vagas;
    return __WEBPACK_IMPORTED_MODULE_0__home_dzuqueto_github_com_estacionamento_api_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__sdk_build_main__["Vagas"].find(id);

          case 4:
            vaga = _context2.sent;
            state = !vaga.state;
            _context2.next = 8;
            return __WEBPACK_IMPORTED_MODULE_2__sdk_build_main__["Vagas"].update(id, { state: state });

          case 8:
            vagas = _context2.sent;

            res.json(vagas);
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2['catch'](0);

            res.json(_context2.t0.message);

          case 15:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 12]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);
module.exports =
/******/function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "/";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 1);
  /******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

  module.exports = __webpack_require__(12);

  /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

  module.exports = __webpack_require__(2);

  /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__vagas__ = __webpack_require__(3);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "Vagas", function () {
    return __WEBPACK_IMPORTED_MODULE_0__vagas__["a"];
  });

  /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__db_model__ = __webpack_require__(4);

  var TABLE_NAME = 'vagas';

  /* harmony default export */__webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_0__db_model__["a" /* Model */](TABLE_NAME);

  /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, "a", function () {
    return Model;
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_rethinkdb__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_rethinkdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rethinkdb__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__db__ = __webpack_require__(5);
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0_rethinkdb__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_rethinkdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rethinkdb__);

  /* harmony default export */__webpack_exports__["a"] = function () {
    return __WEBPACK_IMPORTED_MODULE_0_rethinkdb___default.a.connect({ host: 'db', port: 28015, db: 'estacionamento' });
  };

  /***/
}]
/******/);
//# sourceMappingURL=main.map

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("rethinkdb");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map