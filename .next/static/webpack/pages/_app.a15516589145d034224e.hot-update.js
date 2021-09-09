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
      var city, forecast, astronomy;
      return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              city = value.split(',')[0];
              _context.next = 4;
              return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getForecastData)(city);

            case 4:
              forecast = _context.sent;
              _context.next = 7;
              return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getAstronomyData)(city);

            case 7:
              astronomy = _context.sent;
              console.log("forecast: ", forecast);
              console.log("astronomy: ", astronomy); // query:
              // forecast: 7 days, air quality, and alerts
              // astronomy
              // store location separate from the actual data

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              // trigger off alert -> forecast data could not be reached
              console.log(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
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
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hMTU1MTY1ODkxNDVkMDM0MjI0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFTyxJQUFNSyxjQUFjLGdCQUFHSCxvREFBYSxDQUFDLElBQUQsQ0FBcEM7O0FBRVAsSUFBTUkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDNUMsa0JBQWdDTiwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCLGdCQUQ0QyxDQUc1Qzs7O0FBRUEsTUFBTUMsbUJBQW1CO0FBQUEsb1RBQUcsaUJBQU1DLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZEMsY0FBQUEsSUFGYyxHQUVQRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBRk87QUFBQTtBQUFBLHFCQUdHViwyREFBZSxDQUFDUyxJQUFELENBSGxCOztBQUFBO0FBR2RFLGNBQUFBLFFBSGM7QUFBQTtBQUFBLHFCQUlJViw0REFBZ0IsQ0FBQ1EsSUFBRCxDQUpwQjs7QUFBQTtBQUlkRyxjQUFBQSxTQUpjO0FBS3BCQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsZUFBMEJILFFBQTFCO0FBQ0FFLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBMkJGLFNBQTNCLEVBTm9CLENBT3BCO0FBQ0E7QUFDQTtBQUVBOztBQVhvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWFwQjtBQUNBQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBZG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5CUCxtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBa0JBLHNCQUNJLDhEQUFDLGNBQUQsQ0FBZ0IsUUFBaEI7QUFDSSxTQUFLLEVBQUU7QUFDSEYsTUFBQUEsUUFBUSxFQUFFO0FBQUVVLFFBQUFBLE1BQU0sRUFBRVIsbUJBQVY7QUFBK0JTLFFBQUFBLElBQUksRUFBRVg7QUFBckM7QUFEUCxLQURYO0FBQUEsY0FJS0Q7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQS9CRDs7R0FBTUQ7O0tBQUFBO0FBaUNOLCtEQUFlQSxxQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZXRGb3JlY2FzdERhdGEsIGdldEFzdHJvbm9teURhdGEgfSBmcm9tICcuLi91dGlscy9hcGknXHJcblxyXG5leHBvcnQgY29uc3QgV2VhdGhlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXHJcblxyXG5jb25zdCBXZWF0aGVyQ29udGV4dFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgLy8gaW1wbGVtZW50IGFsZXJ0c1xyXG5cclxuICAgIGNvbnN0IG9uTG9jYXRpb25TZWxlY3Rpb24gPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgY2l0eSA9IHZhbHVlLnNwbGl0KCcsJylbMF1cclxuICAgICAgICAgICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBnZXRGb3JlY2FzdERhdGEoY2l0eSlcclxuICAgICAgICAgICAgY29uc3QgYXN0cm9ub215ID0gYXdhaXQgZ2V0QXN0cm9ub215RGF0YShjaXR5KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZm9yZWNhc3Q6IGAsIGZvcmVjYXN0KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgYXN0cm9ub215OiBgLCBhc3Ryb25vbXkpXHJcbiAgICAgICAgICAgIC8vIHF1ZXJ5OlxyXG4gICAgICAgICAgICAvLyBmb3JlY2FzdDogNyBkYXlzLCBhaXIgcXVhbGl0eSwgYW5kIGFsZXJ0c1xyXG4gICAgICAgICAgICAvLyBhc3Ryb25vbXlcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3JlIGxvY2F0aW9uIHNlcGFyYXRlIGZyb20gdGhlIGFjdHVhbCBkYXRhXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gdHJpZ2dlciBvZmYgYWxlcnQgLT4gZm9yZWNhc3QgZGF0YSBjb3VsZCBub3QgYmUgcmVhY2hlZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2VhdGhlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7IHVwZGF0ZTogb25Mb2NhdGlvblNlbGVjdGlvbiwgZGF0YTogbG9jYXRpb24gfVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvV2VhdGhlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJDb250ZXh0V3JhcHBlclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJnZXRGb3JlY2FzdERhdGEiLCJnZXRBc3Ryb25vbXlEYXRhIiwiV2VhdGhlckNvbnRleHQiLCJXZWF0aGVyQ29udGV4dFdyYXBwZXIiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJvbkxvY2F0aW9uU2VsZWN0aW9uIiwidmFsdWUiLCJjaXR5Iiwic3BsaXQiLCJmb3JlY2FzdCIsImFzdHJvbm9teSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==