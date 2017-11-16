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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(3);



var io = __WEBPACK_IMPORTED_MODULE_0_socket_io___default()(8000);

Object(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */])(io);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_dzuqueto_github_com_estacionamento_io_node_modules_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_dzuqueto_github_com_estacionamento_io_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_dzuqueto_github_com_estacionamento_io_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sdk_build_main__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sdk_build_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__sdk_build_main__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* harmony default export */ __webpack_exports__["a"] = (function (io) {
  io.on('connection', function (socket) {
    console.log('User is connected ', socket.id);
    socket.on('disconnect', onDisconnect);
    socket.on('vagas.update', onUpdateVaga);
    socket.on('subscriber.vagas.change', function (payload) {
      return socket.broadcast.emit('vagas.change', payload);
    });
  });
});

var onDisconnect = function onDisconnect(socket) {
  return console.log('User is disconnected...', socket);
};
var onUpdateVaga = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_dzuqueto_github_com_estacionamento_io_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(payload) {
    var id, vaga, state;
    return __WEBPACK_IMPORTED_MODULE_0__home_dzuqueto_github_com_estacionamento_io_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = payload.id;

            console.log(id);

            _context.prev = 2;
            _context.next = 5;
            return __WEBPACK_IMPORTED_MODULE_1__sdk_build_main__["Vagas"].find(id);

          case 5:
            vaga = _context.sent;
            state = !vaga.state;
            _context.next = 9;
            return __WEBPACK_IMPORTED_MODULE_1__sdk_build_main__["Vagas"].update(id, { state: state });

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](2);

            console.error(_context.t0.message);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[2, 11]]);
  }));

  return function onUpdateVaga(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
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

  module.exports = __webpack_require__(8);

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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("rethinkdb");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map