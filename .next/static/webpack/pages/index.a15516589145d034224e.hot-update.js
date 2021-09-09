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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTE1NTE2NTg5MTQ1ZDAzNDIyNGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRU8sSUFBTUssY0FBYyxnQkFBR0gsb0RBQWEsQ0FBQyxJQUFELENBQXBDOztBQUVQLElBQU1JLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQzVDLGtCQUFnQ04sK0NBQVEsQ0FBQyxJQUFELENBQXhDO0FBQUEsTUFBT08sUUFBUDtBQUFBLE1BQWlCQyxXQUFqQixnQkFENEMsQ0FHNUM7OztBQUVBLE1BQU1DLG1CQUFtQjtBQUFBLG9UQUFHLGlCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWRDLGNBQUFBLElBRmMsR0FFUEQsS0FBSyxDQUFDRSxLQUFOLENBQVksR0FBWixFQUFpQixDQUFqQixDQUZPO0FBQUE7QUFBQSxxQkFHR1YsMkRBQWUsQ0FBQ1MsSUFBRCxDQUhsQjs7QUFBQTtBQUdkRSxjQUFBQSxRQUhjO0FBQUE7QUFBQSxxQkFJSVYsNERBQWdCLENBQUNRLElBQUQsQ0FKcEI7O0FBQUE7QUFJZEcsY0FBQUEsU0FKYztBQUtwQkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQTBCSCxRQUExQjtBQUNBRSxjQUFBQSxPQUFPLENBQUNDLEdBQVIsZ0JBQTJCRixTQUEzQixFQU5vQixDQU9wQjtBQUNBO0FBQ0E7QUFFQTs7QUFYb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFhcEI7QUFDQUMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQWRvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQlAsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEtBQXpCOztBQWtCQSxzQkFDSSw4REFBQyxjQUFELENBQWdCLFFBQWhCO0FBQ0ksU0FBSyxFQUFFO0FBQ0hGLE1BQUFBLFFBQVEsRUFBRTtBQUFFVSxRQUFBQSxNQUFNLEVBQUVSLG1CQUFWO0FBQStCUyxRQUFBQSxJQUFJLEVBQUVYO0FBQXJDO0FBRFAsS0FEWDtBQUFBLGNBSUtEO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0EvQkQ7O0dBQU1EOztLQUFBQTtBQWlDTiwrREFBZUEscUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ2V0Rm9yZWNhc3REYXRhLCBnZXRBc3Ryb25vbXlEYXRhIH0gZnJvbSAnLi4vdXRpbHMvYXBpJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFdlYXRoZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxyXG5cclxuY29uc3QgV2VhdGhlckNvbnRleHRXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIC8vIGltcGxlbWVudCBhbGVydHNcclxuXHJcbiAgICBjb25zdCBvbkxvY2F0aW9uU2VsZWN0aW9uID0gYXN5bmMgdmFsdWUgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNpdHkgPSB2YWx1ZS5zcGxpdCgnLCcpWzBdXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgZ2V0Rm9yZWNhc3REYXRhKGNpdHkpXHJcbiAgICAgICAgICAgIGNvbnN0IGFzdHJvbm9teSA9IGF3YWl0IGdldEFzdHJvbm9teURhdGEoY2l0eSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGZvcmVjYXN0OiBgLCBmb3JlY2FzdClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGFzdHJvbm9teTogYCwgYXN0cm9ub215KVxyXG4gICAgICAgICAgICAvLyBxdWVyeTpcclxuICAgICAgICAgICAgLy8gZm9yZWNhc3Q6IDcgZGF5cywgYWlyIHF1YWxpdHksIGFuZCBhbGVydHNcclxuICAgICAgICAgICAgLy8gYXN0cm9ub215XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9yZSBsb2NhdGlvbiBzZXBhcmF0ZSBmcm9tIHRoZSBhY3R1YWwgZGF0YVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgb2ZmIGFsZXJ0IC0+IGZvcmVjYXN0IGRhdGEgY291bGQgbm90IGJlIHJlYWNoZWRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdlYXRoZXJDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogeyB1cGRhdGU6IG9uTG9jYXRpb25TZWxlY3Rpb24sIGRhdGE6IGxvY2F0aW9uIH1cclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1dlYXRoZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyQ29udGV4dFdyYXBwZXJcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiZ2V0Rm9yZWNhc3REYXRhIiwiZ2V0QXN0cm9ub215RGF0YSIsIldlYXRoZXJDb250ZXh0IiwiV2VhdGhlckNvbnRleHRXcmFwcGVyIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwib25Mb2NhdGlvblNlbGVjdGlvbiIsInZhbHVlIiwiY2l0eSIsInNwbGl0IiwiZm9yZWNhc3QiLCJhc3Ryb25vbXkiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=