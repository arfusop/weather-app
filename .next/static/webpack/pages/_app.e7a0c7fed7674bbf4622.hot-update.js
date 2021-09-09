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
      setLocation = _useState[1];

  var onLocationSelection = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(value) {
      var response;
      return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.handleLocationSearch)(value);

            case 2:
              response = _context.sent;
              console.log("response: ", response);

            case 4:
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
    lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lN2EwYzdmZWQ3Njc0YmJmNDYyMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFTyxJQUFNSSxjQUFjLGdCQUFHRixvREFBYSxDQUFDLElBQUQsQ0FBcEM7O0FBRVAsSUFBTUcscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDNUMsa0JBQWdDTCwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPTSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBLE1BQU1DLG1CQUFtQjtBQUFBLG9UQUFHLGlCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRURQLGdFQUFvQixDQUFDTyxLQUFELENBRm5COztBQUFBO0FBRWxCQyxjQUFBQSxRQUZrQjtBQUd4QkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQTBCRixRQUExQjs7QUFId0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbkJGLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFNQSxzQkFDSSw4REFBQyxjQUFELENBQWdCLFFBQWhCO0FBQ0ksU0FBSyxFQUFFO0FBQ0hGLE1BQUFBLFFBQVEsRUFBRTtBQUFFTyxRQUFBQSxNQUFNLEVBQUVMLG1CQUFWO0FBQStCTSxRQUFBQSxJQUFJLEVBQUVSO0FBQXJDO0FBRFAsS0FEWDtBQUFBLGNBSUtEO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FqQkQ7O0dBQU1EOztLQUFBQTtBQW1CTiwrREFBZUEscUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgaGFuZGxlTG9jYXRpb25TZWFyY2ggfSBmcm9tICcuLi91dGlscy9hcGknXHJcblxyXG5leHBvcnQgY29uc3QgV2VhdGhlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXHJcblxyXG5jb25zdCBXZWF0aGVyQ29udGV4dFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3Qgb25Mb2NhdGlvblNlbGVjdGlvbiA9IGFzeW5jIHZhbHVlID0+IHtcclxuICAgICAgICAvLyBxdWVyeSBsb2NhdGlvbiwgc2V0XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVMb2NhdGlvblNlYXJjaCh2YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVzcG9uc2U6IGAsIHJlc3BvbnNlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdlYXRoZXJDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogeyB1cGRhdGU6IG9uTG9jYXRpb25TZWxlY3Rpb24sIGRhdGE6IGxvY2F0aW9uIH1cclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1dlYXRoZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyQ29udGV4dFdyYXBwZXJcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiaGFuZGxlTG9jYXRpb25TZWFyY2giLCJXZWF0aGVyQ29udGV4dCIsIldlYXRoZXJDb250ZXh0V3JhcHBlciIsImNoaWxkcmVuIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsIm9uTG9jYXRpb25TZWxlY3Rpb24iLCJ2YWx1ZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9