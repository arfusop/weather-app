"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherContext": function() { return /* binding */ WeatherContext; }
/* harmony export */ });
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\arfus\\apps\\weather-app\\context\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





var WeatherContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);

var WeatherContextWrapper = function WeatherContextWrapper(_ref) {
  _s();

  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      location = _useState[0],
      setLocation = _useState[1]; // implement alerts


  var onLocationSelection = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(value) {
      var city, response;
      return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              city = value.split(',')[0];
              _context.next = 4;
              return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getForecastData)(city);

            case 4:
              response = _context.sent;
              console.log("response: ", response); // query:
              // forecast: 7 days, air quality, and alerts
              // astronomy
              // store location separate from the actual data

              _context.next = 11;
              break;

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

    return function onLocationSelection(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(WeatherContext.Provider, {
    value: {
      location: {
        update: onLocationSelection,
        data: location
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, _this);
};

_s(WeatherContextWrapper, "oqKkKXuEMFy/klxDqCY5G3vHULI=");

_c = WeatherContextWrapper;
/* harmony default export */ __webpack_exports__["default"] = (WeatherContextWrapper);

var _c;

$RefreshReg$(_c, "WeatherContextWrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xN2E5ZjUwNTc0Njk2NWJiNzgzZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFTyxJQUFNSSxjQUFjLGdCQUFHRixvREFBYSxDQUFDLElBQUQsQ0FBcEM7O0FBRVAsSUFBTUcscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDNUMsa0JBQWdDTCwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPTSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCLGdCQUQ0QyxDQUc1Qzs7O0FBRUEsTUFBTUMsbUJBQW1CO0FBQUEsb1RBQUcsaUJBQU1DLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZEMsY0FBQUEsSUFGYyxHQUVQRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBRk87QUFBQTtBQUFBLHFCQUdHVCwyREFBZSxDQUFDUSxJQUFELENBSGxCOztBQUFBO0FBR2RFLGNBQUFBLFFBSGM7QUFJcEJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUEwQkYsUUFBMUIsRUFKb0IsQ0FLcEI7QUFDQTtBQUNBO0FBRUE7O0FBVG9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV3BCQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBWG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5CTixtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBZUEsc0JBQ0ksOERBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUNJLFNBQUssRUFBRTtBQUNIRixNQUFBQSxRQUFRLEVBQUU7QUFBRVMsUUFBQUEsTUFBTSxFQUFFUCxtQkFBVjtBQUErQlEsUUFBQUEsSUFBSSxFQUFFVjtBQUFyQztBQURQLEtBRFg7QUFBQSxjQUlLRDtBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBNUJEOztHQUFNRDs7S0FBQUE7QUE4Qk4sK0RBQWVBLHFCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGdldEZvcmVjYXN0RGF0YSB9IGZyb20gJy4uL3V0aWxzL2FwaSdcclxuXHJcbmV4cG9ydCBjb25zdCBXZWF0aGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbClcclxuXHJcbmNvbnN0IFdlYXRoZXJDb250ZXh0V3JhcHBlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICAvLyBpbXBsZW1lbnQgYWxlcnRzXHJcblxyXG4gICAgY29uc3Qgb25Mb2NhdGlvblNlbGVjdGlvbiA9IGFzeW5jIHZhbHVlID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjaXR5ID0gdmFsdWUuc3BsaXQoJywnKVswXVxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEZvcmVjYXN0RGF0YShjaXR5KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2U6IGAsIHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAvLyBxdWVyeTpcclxuICAgICAgICAgICAgLy8gZm9yZWNhc3Q6IDcgZGF5cywgYWlyIHF1YWxpdHksIGFuZCBhbGVydHNcclxuICAgICAgICAgICAgLy8gYXN0cm9ub215XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9yZSBsb2NhdGlvbiBzZXBhcmF0ZSBmcm9tIHRoZSBhY3R1YWwgZGF0YVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXZWF0aGVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHsgdXBkYXRlOiBvbkxvY2F0aW9uU2VsZWN0aW9uLCBkYXRhOiBsb2NhdGlvbiB9XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9XZWF0aGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckNvbnRleHRXcmFwcGVyXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsImdldEZvcmVjYXN0RGF0YSIsIldlYXRoZXJDb250ZXh0IiwiV2VhdGhlckNvbnRleHRXcmFwcGVyIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwib25Mb2NhdGlvblNlbGVjdGlvbiIsInZhbHVlIiwiY2l0eSIsInNwbGl0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=