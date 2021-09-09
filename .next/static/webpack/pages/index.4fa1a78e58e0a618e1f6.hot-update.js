"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
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
      setLocation = _useState[1];

  var onLocationSelection = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(value) {
      return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // query location, set
              console.log("value: ", value);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onLocationSelection(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(WeatherContext.Provider, {
    value: {
      location: {
        update: onLocationSelection,
        data: location
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGZhMWE3OGU1OGUwYTYxOGUxZjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRU8sSUFBTUcsY0FBYyxnQkFBR0Qsb0RBQWEsQ0FBQyxJQUFELENBQXBDOztBQUVQLElBQU1FLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQzVDLGtCQUFnQ0osK0NBQVEsQ0FBQyxJQUFELENBQXhDO0FBQUEsTUFBT0ssUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFFQSxNQUFNQyxtQkFBbUI7QUFBQSxvVEFBRyxpQkFBTUMsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hCO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixZQUF1QkYsS0FBdkI7O0FBRndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5CRCxtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBS0Esc0JBQ0ksOERBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUNJLFNBQUssRUFBRTtBQUNIRixNQUFBQSxRQUFRLEVBQUU7QUFBRU0sUUFBQUEsTUFBTSxFQUFFSixtQkFBVjtBQUErQkssUUFBQUEsSUFBSSxFQUFFUDtBQUFyQztBQURQLEtBRFg7QUFBQSxjQUlLRDtBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBaEJEOztHQUFNRDs7S0FBQUE7QUFrQk4sK0RBQWVBLHFCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgV2VhdGhlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXHJcblxyXG5jb25zdCBXZWF0aGVyQ29udGV4dFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3Qgb25Mb2NhdGlvblNlbGVjdGlvbiA9IGFzeW5jIHZhbHVlID0+IHtcclxuICAgICAgICAvLyBxdWVyeSBsb2NhdGlvbiwgc2V0XHJcbiAgICAgICAgY29uc29sZS5sb2coYHZhbHVlOiBgLCB2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXZWF0aGVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHsgdXBkYXRlOiBvbkxvY2F0aW9uU2VsZWN0aW9uLCBkYXRhOiBsb2NhdGlvbiB9XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9XZWF0aGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckNvbnRleHRXcmFwcGVyXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsIldlYXRoZXJDb250ZXh0IiwiV2VhdGhlckNvbnRleHRXcmFwcGVyIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwib25Mb2NhdGlvblNlbGVjdGlvbiIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9