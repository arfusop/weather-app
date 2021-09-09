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
      var response;
      return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getForecastData)(value);

            case 3:
              response = _context.sent;
              console.log("response: ", response); // query:
              // forecast: 7 days, air quality, and alerts
              // astronomy
              // store location separate from the actual data

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zNTc3MzQ4NzZjYzE1M2Q3ZDA0MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFTyxJQUFNSSxjQUFjLGdCQUFHRixvREFBYSxDQUFDLElBQUQsQ0FBcEM7O0FBRVAsSUFBTUcscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDNUMsa0JBQWdDTCwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPTSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCLGdCQUQ0QyxDQUc1Qzs7O0FBRUEsTUFBTUMsbUJBQW1CO0FBQUEsb1RBQUcsaUJBQU1DLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdHUCwyREFBZSxDQUFDTyxLQUFELENBSGxCOztBQUFBO0FBR2RDLGNBQUFBLFFBSGM7QUFJcEJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUEwQkYsUUFBMUIsRUFKb0IsQ0FLcEI7QUFDQTtBQUNBO0FBRUE7O0FBVG9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV3BCQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBWG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5CSixtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBZUEsc0JBQ0ksOERBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUNJLFNBQUssRUFBRTtBQUNIRixNQUFBQSxRQUFRLEVBQUU7QUFBRU8sUUFBQUEsTUFBTSxFQUFFTCxtQkFBVjtBQUErQk0sUUFBQUEsSUFBSSxFQUFFUjtBQUFyQztBQURQLEtBRFg7QUFBQSxjQUlLRDtBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBNUJEOztHQUFNRDs7S0FBQUE7QUE4Qk4sK0RBQWVBLHFCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGdldEZvcmVjYXN0RGF0YSB9IGZyb20gJy4uL3V0aWxzL2FwaSdcclxuXHJcbmV4cG9ydCBjb25zdCBXZWF0aGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbClcclxuXHJcbmNvbnN0IFdlYXRoZXJDb250ZXh0V3JhcHBlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICAvLyBpbXBsZW1lbnQgYWxlcnRzXHJcblxyXG4gICAgY29uc3Qgb25Mb2NhdGlvblNlbGVjdGlvbiA9IGFzeW5jIHZhbHVlID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEZvcmVjYXN0RGF0YSh2YWx1ZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHJlc3BvbnNlOiBgLCByZXNwb25zZSlcclxuICAgICAgICAgICAgLy8gcXVlcnk6XHJcbiAgICAgICAgICAgIC8vIGZvcmVjYXN0OiA3IGRheXMsIGFpciBxdWFsaXR5LCBhbmQgYWxlcnRzXHJcbiAgICAgICAgICAgIC8vIGFzdHJvbm9teVxyXG5cclxuICAgICAgICAgICAgLy8gc3RvcmUgbG9jYXRpb24gc2VwYXJhdGUgZnJvbSB0aGUgYWN0dWFsIGRhdGFcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2VhdGhlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7IHVwZGF0ZTogb25Mb2NhdGlvblNlbGVjdGlvbiwgZGF0YTogbG9jYXRpb24gfVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvV2VhdGhlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJDb250ZXh0V3JhcHBlclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJnZXRGb3JlY2FzdERhdGEiLCJXZWF0aGVyQ29udGV4dCIsIldlYXRoZXJDb250ZXh0V3JhcHBlciIsImNoaWxkcmVuIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsIm9uTG9jYXRpb25TZWxlY3Rpb24iLCJ2YWx1ZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9