"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleLocationSearch": function() { return /* binding */ handleLocationSearch; },
/* harmony export */   "getForecastData": function() { return /* binding */ getForecastData; },
/* harmony export */   "getAstronomyData": function() { return /* binding */ getAstronomyData; }
/* harmony export */ });
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var BASE_URL = 'http://api.weatherapi.com/v1';
var handleLocationSearch = /*#__PURE__*/function () {
  var _ref = (0,C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(value) {
    var request, response;
    return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            request = {
              method: 'GET',
              url: "".concat(BASE_URL, "/search.json?key=").concat("f3dd10a5b85d43bea96181956211608", "&q=").concat(value)
            };
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()(request);

          case 4:
            response = _context.sent;
            return _context.abrupt("return", (response === null || response === void 0 ? void 0 : response.data) || []);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function handleLocationSearch(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getForecastData = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(location) {
    var url, request, response;
    return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            url = "".concat(BASE_URL, "/forecast.json?key=").concat("f3dd10a5b85d43bea96181956211608", "&q=").concat(location, "&days=7&aqi=yes&alerts=yes");
            request = {
              method: 'GET',
              url: url
            };
            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()(request);

          case 5:
            response = _context2.sent;
            return _context2.abrupt("return", (response === null || response === void 0 ? void 0 : response.data) || []);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function getForecastData(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getAstronomyData = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(location) {
    var day, url, request, response;
    return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            day = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date(), 'yyyy-MM-dd');
            url = "".concat(BASE_URL, "/astronomy.json?key=").concat("f3dd10a5b85d43bea96181956211608", "&q=").concat(location, "&dt=").concat(day);
            request = {
              method: 'GET',
              url: url
            };
            _context3.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()(request);

          case 6:
            response = _context3.sent;
            return _context3.abrupt("return", (response === null || response === void 0 ? void 0 : response.data) || []);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function getAstronomyData(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTUzMzk1MmI4N2U3MjllMWFiNTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUUsUUFBUSxHQUFHLDhCQUFqQjtBQUVPLElBQU1DLG9CQUFvQjtBQUFBLGlUQUFHLGlCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXRCQyxZQUFBQSxPQUZzQixHQUVaO0FBQ1pDLGNBQUFBLE1BQU0sRUFBRSxLQURJO0FBRVpDLGNBQUFBLEdBQUcsWUFBS0wsUUFBTCw4QkFBaUNNLGlDQUFqQyxnQkFBa0VKLEtBQWxFO0FBRlMsYUFGWTtBQUFBO0FBQUEsbUJBTUxKLDRDQUFLLENBQUNLLE9BQUQsQ0FOQTs7QUFBQTtBQU10Qk0sWUFBQUEsUUFOc0I7QUFBQSw2Q0FPckIsQ0FBQUEsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVDLElBQVYsS0FBa0IsRUFQRzs7QUFBQTtBQUFBO0FBQUE7QUFTNUJDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFUNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBcEJYLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxHQUExQjtBQWFBLElBQU1ZLGVBQWU7QUFBQSxrVEFBRyxrQkFBTUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVqQlQsWUFBQUEsR0FGaUIsYUFFUkwsUUFGUSxnQ0FFc0JNLGlDQUZ0QixnQkFFdURRLFFBRnZEO0FBSWpCWCxZQUFBQSxPQUppQixHQUlQO0FBQ1pDLGNBQUFBLE1BQU0sRUFBRSxLQURJO0FBRVpDLGNBQUFBLEdBQUcsRUFBSEE7QUFGWSxhQUpPO0FBQUE7QUFBQSxtQkFRQVAsNENBQUssQ0FBQ0ssT0FBRCxDQVJMOztBQUFBO0FBUWpCTSxZQUFBQSxRQVJpQjtBQUFBLDhDQVVoQixDQUFBQSxRQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLFlBQUFBLFFBQVEsQ0FBRUMsSUFBVixLQUFrQixFQVZGOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWZHLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7QUFnQkEsSUFBTUUsZ0JBQWdCO0FBQUEsa1RBQUcsa0JBQU1ELFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFbEJFLFlBQUFBLEdBRmtCLEdBRVpqQixnREFBTSxDQUFDLElBQUlrQixJQUFKLEVBQUQsRUFBYSxZQUFiLENBRk07QUFHbEJaLFlBQUFBLEdBSGtCLGFBR1RMLFFBSFMsaUNBR3NCTSxpQ0FIdEIsZ0JBR3VEUSxRQUh2RCxpQkFHc0VFLEdBSHRFO0FBS2xCYixZQUFBQSxPQUxrQixHQUtSO0FBQ1pDLGNBQUFBLE1BQU0sRUFBRSxLQURJO0FBRVpDLGNBQUFBLEdBQUcsRUFBSEE7QUFGWSxhQUxRO0FBQUE7QUFBQSxtQkFTRFAsNENBQUssQ0FBQ0ssT0FBRCxDQVRKOztBQUFBO0FBU2xCTSxZQUFBQSxRQVRrQjtBQUFBLDhDQVdqQixDQUFBQSxRQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLFlBQUFBLFFBQVEsQ0FBRUMsSUFBVixLQUFrQixFQVhEOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCSyxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXHJcblxyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvY2F0aW9uU2VhcmNoID0gYXN5bmMgdmFsdWUgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGAke0JBU0VfVVJMfS9zZWFyY2guanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9JnE9JHt2YWx1ZX1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MocmVxdWVzdClcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgfHwgW11cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGb3JlY2FzdERhdGEgPSBhc3luYyBsb2NhdGlvbiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke0JBU0VfVVJMfS9mb3JlY2FzdC5qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSX0mcT0ke2xvY2F0aW9ufSZkYXlzPTcmYXFpPXllcyZhbGVydHM9eWVzYFxyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhyZXF1ZXN0KVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgfHwgW11cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBc3Ryb25vbXlEYXRhID0gYXN5bmMgbG9jYXRpb24gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXkgPSBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKVxyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke0JBU0VfVVJMfS9hc3Ryb25vbXkuanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9JnE9JHtsb2NhdGlvbn0mZHQ9JHtkYXl9YFxyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhyZXF1ZXN0KVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgfHwgW11cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZm9ybWF0IiwiQkFTRV9VUkwiLCJoYW5kbGVMb2NhdGlvblNlYXJjaCIsInZhbHVlIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0Rm9yZWNhc3REYXRhIiwibG9jYXRpb24iLCJnZXRBc3Ryb25vbXlEYXRhIiwiZGF5IiwiRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=