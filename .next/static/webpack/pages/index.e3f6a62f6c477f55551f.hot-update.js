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
      setLocation = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      weatherAlerts = _useState3[0],
      setWeatherAlerts = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      forecast = _useState4[0],
      setForecast = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      astronomy = _useState5[0],
      setAstronomy = _useState5[1]; // implement error alerts


  var onLocationSelection = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(value) {
      var city, forecastRes, astronomyRes;
      return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              city = value.split(',')[0];
              _context.next = 4;
              return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getForecastData)(city);

            case 4:
              forecastRes = _context.sent;
              _context.next = 7;
              return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getAstronomyData)(city);

            case 7:
              astronomyRes = _context.sent;
              setLocation(forecastRes.location);
              setCurrent(forecastRes.current);
              setWeatherAlerts(forecastRes.alerts);
              setForecast(forecastRes.forecast);
              setAstronomy(astronomyRes.astronomy);
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              // trigger off alert -> forecast data could not be reached
              console.log(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
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
      },
      current: {
        data: current
      },
      weatherAlerts: {
        data: weatherAlerts
      },
      forecast: {
        data: forecast
      },
      astronomy: {
        data: astronomy
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, _this);
};

_s(WeatherContextWrapper, "LOwQ+Fqd7E8964WLWlTXv2SDqD0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTNmNmE2MmY2YzQ3N2Y1NTU1MWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRU8sSUFBTUssY0FBYyxnQkFBR0gsb0RBQWEsQ0FBQyxJQUFELENBQXBDOztBQUVQLElBQU1JLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQzVDLGtCQUFnQ04sK0NBQVEsQ0FBQyxJQUFELENBQXhDO0FBQUEsTUFBT08sUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBOEJSLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUFBLE1BQU9TLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTBDViwrQ0FBUSxDQUFDLElBQUQsQ0FBbEQ7QUFBQSxNQUFPVyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBZ0NaLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU9hLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWtDZCwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPZSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCLGlCQUw0QyxDQU81Qzs7O0FBRUEsTUFBTUMsbUJBQW1CO0FBQUEsb1RBQUcsaUJBQU1DLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZEMsY0FBQUEsSUFGYyxHQUVQRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBRk87QUFBQTtBQUFBLHFCQUdNbEIsMkRBQWUsQ0FBQ2lCLElBQUQsQ0FIckI7O0FBQUE7QUFHZEUsY0FBQUEsV0FIYztBQUFBO0FBQUEscUJBSU9sQiw0REFBZ0IsQ0FBQ2dCLElBQUQsQ0FKdkI7O0FBQUE7QUFJZEcsY0FBQUEsWUFKYztBQU1wQmQsY0FBQUEsV0FBVyxDQUFDYSxXQUFXLENBQUNkLFFBQWIsQ0FBWDtBQUNBRyxjQUFBQSxVQUFVLENBQUNXLFdBQVcsQ0FBQ1osT0FBYixDQUFWO0FBQ0FHLGNBQUFBLGdCQUFnQixDQUFDUyxXQUFXLENBQUNFLE1BQWIsQ0FBaEI7QUFDQVQsY0FBQUEsV0FBVyxDQUFDTyxXQUFXLENBQUNSLFFBQWIsQ0FBWDtBQUNBRyxjQUFBQSxZQUFZLENBQUNNLFlBQVksQ0FBQ1AsU0FBZCxDQUFaO0FBVm9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBWXBCO0FBQ0FTLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFib0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbkJSLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFpQkEsc0JBQ0ksOERBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUNJLFNBQUssRUFBRTtBQUNIVixNQUFBQSxRQUFRLEVBQUU7QUFBRW1CLFFBQUFBLE1BQU0sRUFBRVQsbUJBQVY7QUFBK0JVLFFBQUFBLElBQUksRUFBRXBCO0FBQXJDLE9BRFA7QUFFSEUsTUFBQUEsT0FBTyxFQUFFO0FBQUVrQixRQUFBQSxJQUFJLEVBQUVsQjtBQUFSLE9BRk47QUFHSEUsTUFBQUEsYUFBYSxFQUFFO0FBQUVnQixRQUFBQSxJQUFJLEVBQUVoQjtBQUFSLE9BSFo7QUFJSEUsTUFBQUEsUUFBUSxFQUFFO0FBQUVjLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUpQO0FBS0hFLE1BQUFBLFNBQVMsRUFBRTtBQUFFWSxRQUFBQSxJQUFJLEVBQUVaO0FBQVI7QUFMUixLQURYO0FBQUEsY0FRS1Q7QUFSTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFZSCxDQXRDRDs7R0FBTUQ7O0tBQUFBO0FBd0NOLCtEQUFlQSxxQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZXRGb3JlY2FzdERhdGEsIGdldEFzdHJvbm9teURhdGEgfSBmcm9tICcuLi91dGlscy9hcGknXHJcblxyXG5leHBvcnQgY29uc3QgV2VhdGhlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXHJcblxyXG5jb25zdCBXZWF0aGVyQ29udGV4dFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW3dlYXRoZXJBbGVydHMsIHNldFdlYXRoZXJBbGVydHNdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtmb3JlY2FzdCwgc2V0Rm9yZWNhc3RdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFthc3Ryb25vbXksIHNldEFzdHJvbm9teV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIC8vIGltcGxlbWVudCBlcnJvciBhbGVydHNcclxuXHJcbiAgICBjb25zdCBvbkxvY2F0aW9uU2VsZWN0aW9uID0gYXN5bmMgdmFsdWUgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNpdHkgPSB2YWx1ZS5zcGxpdCgnLCcpWzBdXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0UmVzID0gYXdhaXQgZ2V0Rm9yZWNhc3REYXRhKGNpdHkpXHJcbiAgICAgICAgICAgIGNvbnN0IGFzdHJvbm9teVJlcyA9IGF3YWl0IGdldEFzdHJvbm9teURhdGEoY2l0eSlcclxuXHJcbiAgICAgICAgICAgIHNldExvY2F0aW9uKGZvcmVjYXN0UmVzLmxvY2F0aW9uKVxyXG4gICAgICAgICAgICBzZXRDdXJyZW50KGZvcmVjYXN0UmVzLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIHNldFdlYXRoZXJBbGVydHMoZm9yZWNhc3RSZXMuYWxlcnRzKVxyXG4gICAgICAgICAgICBzZXRGb3JlY2FzdChmb3JlY2FzdFJlcy5mb3JlY2FzdClcclxuICAgICAgICAgICAgc2V0QXN0cm9ub215KGFzdHJvbm9teVJlcy5hc3Ryb25vbXkpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gdHJpZ2dlciBvZmYgYWxlcnQgLT4gZm9yZWNhc3QgZGF0YSBjb3VsZCBub3QgYmUgcmVhY2hlZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2VhdGhlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7IHVwZGF0ZTogb25Mb2NhdGlvblNlbGVjdGlvbiwgZGF0YTogbG9jYXRpb24gfSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IHsgZGF0YTogY3VycmVudCB9LFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlckFsZXJ0czogeyBkYXRhOiB3ZWF0aGVyQWxlcnRzIH0sXHJcbiAgICAgICAgICAgICAgICBmb3JlY2FzdDogeyBkYXRhOiBmb3JlY2FzdCB9LFxyXG4gICAgICAgICAgICAgICAgYXN0cm9ub215OiB7IGRhdGE6IGFzdHJvbm9teSB9XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9XZWF0aGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckNvbnRleHRXcmFwcGVyXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsImdldEZvcmVjYXN0RGF0YSIsImdldEFzdHJvbm9teURhdGEiLCJXZWF0aGVyQ29udGV4dCIsIldlYXRoZXJDb250ZXh0V3JhcHBlciIsImNoaWxkcmVuIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwid2VhdGhlckFsZXJ0cyIsInNldFdlYXRoZXJBbGVydHMiLCJmb3JlY2FzdCIsInNldEZvcmVjYXN0IiwiYXN0cm9ub215Iiwic2V0QXN0cm9ub215Iiwib25Mb2NhdGlvblNlbGVjdGlvbiIsInZhbHVlIiwiY2l0eSIsInNwbGl0IiwiZm9yZWNhc3RSZXMiLCJhc3Ryb25vbXlSZXMiLCJhbGVydHMiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=