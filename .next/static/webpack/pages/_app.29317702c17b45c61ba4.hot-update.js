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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      forecast = _useState2[0],
      setForecast = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      astronomy = _useState3[0],
      setAstronomy = _useState3[1]; // implement alerts


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
              setForecast(forecastRes.forecast);
              setAstronomy(astronomyRes.astronomy);
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              // trigger off alert -> forecast data could not be reached
              console.log(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
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
    lineNumber: 29,
    columnNumber: 9
  }, _this);
};

_s(WeatherContextWrapper, "VFHQzYDD9gqEvOSIFdGenGQK7oQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yOTMxNzcwMmMxN2I0NWM2MWJhNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFTyxJQUFNSyxjQUFjLGdCQUFHSCxvREFBYSxDQUFDLElBQUQsQ0FBcEM7O0FBRVAsSUFBTUkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDNUMsa0JBQWdDTiwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFnQ1IsK0NBQVEsQ0FBQyxJQUFELENBQXhDO0FBQUEsTUFBT1MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBa0NWLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU9XLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEIsaUJBSDRDLENBSzVDOzs7QUFFQSxNQUFNQyxtQkFBbUI7QUFBQSxvVEFBRyxpQkFBTUMsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVkQyxjQUFBQSxJQUZjLEdBRVBELEtBQUssQ0FBQ0UsS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FGTztBQUFBO0FBQUEscUJBR01kLDJEQUFlLENBQUNhLElBQUQsQ0FIckI7O0FBQUE7QUFHZEUsY0FBQUEsV0FIYztBQUFBO0FBQUEscUJBSU9kLDREQUFnQixDQUFDWSxJQUFELENBSnZCOztBQUFBO0FBSWRHLGNBQUFBLFlBSmM7QUFNcEJWLGNBQUFBLFdBQVcsQ0FBQ1MsV0FBVyxDQUFDVixRQUFiLENBQVg7QUFDQUcsY0FBQUEsV0FBVyxDQUFDTyxXQUFXLENBQUNSLFFBQWIsQ0FBWDtBQUNBRyxjQUFBQSxZQUFZLENBQUNNLFlBQVksQ0FBQ1AsU0FBZCxDQUFaO0FBUm9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVXBCO0FBQ0FRLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFYb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbkJQLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFlQSxzQkFDSSw4REFBQyxjQUFELENBQWdCLFFBQWhCO0FBQ0ksU0FBSyxFQUFFO0FBQ0hOLE1BQUFBLFFBQVEsRUFBRTtBQUFFYyxRQUFBQSxNQUFNLEVBQUVSLG1CQUFWO0FBQStCUyxRQUFBQSxJQUFJLEVBQUVmO0FBQXJDLE9BRFA7QUFFSEUsTUFBQUEsUUFBUSxFQUFFO0FBQUVhLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUZQO0FBR0hFLE1BQUFBLFNBQVMsRUFBRTtBQUFFVyxRQUFBQSxJQUFJLEVBQUVYO0FBQVI7QUFIUixLQURYO0FBQUEsY0FNS0w7QUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQWhDRDs7R0FBTUQ7O0tBQUFBO0FBa0NOLCtEQUFlQSxxQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZXRGb3JlY2FzdERhdGEsIGdldEFzdHJvbm9teURhdGEgfSBmcm9tICcuLi91dGlscy9hcGknXHJcblxyXG5leHBvcnQgY29uc3QgV2VhdGhlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXHJcblxyXG5jb25zdCBXZWF0aGVyQ29udGV4dFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbZm9yZWNhc3QsIHNldEZvcmVjYXN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbYXN0cm9ub215LCBzZXRBc3Ryb25vbXldID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICAvLyBpbXBsZW1lbnQgYWxlcnRzXHJcblxyXG4gICAgY29uc3Qgb25Mb2NhdGlvblNlbGVjdGlvbiA9IGFzeW5jIHZhbHVlID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjaXR5ID0gdmFsdWUuc3BsaXQoJywnKVswXVxyXG4gICAgICAgICAgICBjb25zdCBmb3JlY2FzdFJlcyA9IGF3YWl0IGdldEZvcmVjYXN0RGF0YShjaXR5KVxyXG4gICAgICAgICAgICBjb25zdCBhc3Ryb25vbXlSZXMgPSBhd2FpdCBnZXRBc3Ryb25vbXlEYXRhKGNpdHkpXHJcblxyXG4gICAgICAgICAgICBzZXRMb2NhdGlvbihmb3JlY2FzdFJlcy5sb2NhdGlvbilcclxuICAgICAgICAgICAgc2V0Rm9yZWNhc3QoZm9yZWNhc3RSZXMuZm9yZWNhc3QpXHJcbiAgICAgICAgICAgIHNldEFzdHJvbm9teShhc3Ryb25vbXlSZXMuYXN0cm9ub215KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgb2ZmIGFsZXJ0IC0+IGZvcmVjYXN0IGRhdGEgY291bGQgbm90IGJlIHJlYWNoZWRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdlYXRoZXJDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogeyB1cGRhdGU6IG9uTG9jYXRpb25TZWxlY3Rpb24sIGRhdGE6IGxvY2F0aW9uIH0sXHJcbiAgICAgICAgICAgICAgICBmb3JlY2FzdDogeyBkYXRhOiBmb3JlY2FzdCB9LFxyXG4gICAgICAgICAgICAgICAgYXN0cm9ub215OiB7IGRhdGE6IGFzdHJvbm9teSB9XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9XZWF0aGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckNvbnRleHRXcmFwcGVyXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsImdldEZvcmVjYXN0RGF0YSIsImdldEFzdHJvbm9teURhdGEiLCJXZWF0aGVyQ29udGV4dCIsIldlYXRoZXJDb250ZXh0V3JhcHBlciIsImNoaWxkcmVuIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImZvcmVjYXN0Iiwic2V0Rm9yZWNhc3QiLCJhc3Ryb25vbXkiLCJzZXRBc3Ryb25vbXkiLCJvbkxvY2F0aW9uU2VsZWN0aW9uIiwidmFsdWUiLCJjaXR5Iiwic3BsaXQiLCJmb3JlY2FzdFJlcyIsImFzdHJvbm9teVJlcyIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==