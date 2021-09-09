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
/* harmony export */   "getForecastData": function() { return /* binding */ getForecastData; }
/* harmony export */ });
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
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
    var request, response;
    return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            request = {
              method: 'GET',
              url: "".concat(BASE_URL, "/forecase.json?key=").concat("f3dd10a5b85d43bea96181956211608", "&q=").concat(location, "&days=7&aqi=yes&alerts=yes")
            };
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()(request);

          case 4:
            response = _context2.sent;
            return _context2.abrupt("return", (response === null || response === void 0 ? void 0 : response.data) || []);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getForecastData(_x2) {
    return _ref2.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTgwNDFkNWQ4MTM2OTRlZGRmNWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQyxRQUFRLEdBQUcsOEJBQWpCO0FBRU8sSUFBTUMsb0JBQW9CO0FBQUEsaVRBQUcsaUJBQU1DLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFdEJDLFlBQUFBLE9BRnNCLEdBRVo7QUFDWkMsY0FBQUEsTUFBTSxFQUFFLEtBREk7QUFFWkMsY0FBQUEsR0FBRyxZQUFLTCxRQUFMLDhCQUFpQ00saUNBQWpDLGdCQUFrRUosS0FBbEU7QUFGUyxhQUZZO0FBQUE7QUFBQSxtQkFNTEgsNENBQUssQ0FBQ0ksT0FBRCxDQU5BOztBQUFBO0FBTXRCTSxZQUFBQSxRQU5zQjtBQUFBLDZDQU9yQixDQUFBQSxRQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLFlBQUFBLFFBQVEsQ0FBRUMsSUFBVixLQUFrQixFQVBHOztBQUFBO0FBQUE7QUFBQTtBQVM1QkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSOztBQVQ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFwQlgsb0JBQW9CO0FBQUE7QUFBQTtBQUFBLEdBQTFCO0FBYUEsSUFBTVksZUFBZTtBQUFBLGtUQUFHLGtCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWpCWCxZQUFBQSxPQUZpQixHQUVQO0FBQ1pDLGNBQUFBLE1BQU0sRUFBRSxLQURJO0FBRVpDLGNBQUFBLEdBQUcsWUFBS0wsUUFBTCxnQ0FBbUNNLGlDQUFuQyxnQkFBb0VRLFFBQXBFO0FBRlMsYUFGTztBQUFBO0FBQUEsbUJBTUFmLDRDQUFLLENBQUNJLE9BQUQsQ0FOTDs7QUFBQTtBQU1qQk0sWUFBQUEsUUFOaUI7QUFBQSw4Q0FPaEIsQ0FBQUEsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVDLElBQVYsS0FBa0IsRUFQRjs7QUFBQTtBQUFBO0FBQUE7QUFTdkJDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFUdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZkMsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9hcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MSdcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVMb2NhdGlvblNlYXJjaCA9IGFzeW5jIHZhbHVlID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBgJHtCQVNFX1VSTH0vc2VhcmNoLmpzb24/a2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJfSZxPSR7dmFsdWV9YFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHJlcXVlc3QpXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlPy5kYXRhIHx8IFtdXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9yZWNhc3REYXRhID0gYXN5bmMgbG9jYXRpb24gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGAke0JBU0VfVVJMfS9mb3JlY2FzZS5qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSX0mcT0ke2xvY2F0aW9ufSZkYXlzPTcmYXFpPXllcyZhbGVydHM9eWVzYFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHJlcXVlc3QpXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlPy5kYXRhIHx8IFtdXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkJBU0VfVVJMIiwiaGFuZGxlTG9jYXRpb25TZWFyY2giLCJ2YWx1ZSIsInJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldEZvcmVjYXN0RGF0YSIsImxvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==