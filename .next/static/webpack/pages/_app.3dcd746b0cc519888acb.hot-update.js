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
      current: current,
      weatherAlerts: weatherAlerts,
      forecast: forecast,
      astronomy: astronomy
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zZGNkNzQ2YjBjYzUxOTg4OGFjYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFTyxJQUFNSyxjQUFjLGdCQUFHSCxvREFBYSxDQUFDLElBQUQsQ0FBcEM7O0FBRVAsSUFBTUkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDNUMsa0JBQWdDTiwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE4QlIsK0NBQVEsQ0FBQyxJQUFELENBQXRDO0FBQUEsTUFBT1MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBMENWLCtDQUFRLENBQUMsSUFBRCxDQUFsRDtBQUFBLE1BQU9XLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUFnQ1osK0NBQVEsQ0FBQyxJQUFELENBQXhDO0FBQUEsTUFBT2EsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBa0NkLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU9lLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEIsaUJBTDRDLENBTzVDOzs7QUFFQSxNQUFNQyxtQkFBbUI7QUFBQSxvVEFBRyxpQkFBTUMsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVkQyxjQUFBQSxJQUZjLEdBRVBELEtBQUssQ0FBQ0UsS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FGTztBQUFBO0FBQUEscUJBR01sQiwyREFBZSxDQUFDaUIsSUFBRCxDQUhyQjs7QUFBQTtBQUdkRSxjQUFBQSxXQUhjO0FBQUE7QUFBQSxxQkFJT2xCLDREQUFnQixDQUFDZ0IsSUFBRCxDQUp2Qjs7QUFBQTtBQUlkRyxjQUFBQSxZQUpjO0FBTXBCZCxjQUFBQSxXQUFXLENBQUNhLFdBQVcsQ0FBQ2QsUUFBYixDQUFYO0FBQ0FHLGNBQUFBLFVBQVUsQ0FBQ1csV0FBVyxDQUFDWixPQUFiLENBQVY7QUFDQUcsY0FBQUEsZ0JBQWdCLENBQUNTLFdBQVcsQ0FBQ0UsTUFBYixDQUFoQjtBQUNBVCxjQUFBQSxXQUFXLENBQUNPLFdBQVcsQ0FBQ1IsUUFBYixDQUFYO0FBQ0FHLGNBQUFBLFlBQVksQ0FBQ00sWUFBWSxDQUFDUCxTQUFkLENBQVo7QUFWb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZcEI7QUFDQVMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQWJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQlIsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEtBQXpCOztBQWlCQSxzQkFDSSw4REFBQyxjQUFELENBQWdCLFFBQWhCO0FBQ0ksU0FBSyxFQUFFO0FBQ0hWLE1BQUFBLFFBQVEsRUFBRTtBQUFFbUIsUUFBQUEsTUFBTSxFQUFFVCxtQkFBVjtBQUErQlUsUUFBQUEsSUFBSSxFQUFFcEI7QUFBckMsT0FEUDtBQUVIRSxNQUFBQSxPQUFPLEVBQVBBLE9BRkc7QUFHSEUsTUFBQUEsYUFBYSxFQUFiQSxhQUhHO0FBSUhFLE1BQUFBLFFBQVEsRUFBUkEsUUFKRztBQUtIRSxNQUFBQSxTQUFTLEVBQVRBO0FBTEcsS0FEWDtBQUFBLGNBUUtUO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBWUgsQ0F0Q0Q7O0dBQU1EOztLQUFBQTtBQXdDTiwrREFBZUEscUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ2V0Rm9yZWNhc3REYXRhLCBnZXRBc3Ryb25vbXlEYXRhIH0gZnJvbSAnLi4vdXRpbHMvYXBpJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFdlYXRoZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxyXG5cclxuY29uc3QgV2VhdGhlckNvbnRleHRXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFt3ZWF0aGVyQWxlcnRzLCBzZXRXZWF0aGVyQWxlcnRzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbZm9yZWNhc3QsIHNldEZvcmVjYXN0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbYXN0cm9ub215LCBzZXRBc3Ryb25vbXldID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICAvLyBpbXBsZW1lbnQgZXJyb3IgYWxlcnRzXHJcblxyXG4gICAgY29uc3Qgb25Mb2NhdGlvblNlbGVjdGlvbiA9IGFzeW5jIHZhbHVlID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjaXR5ID0gdmFsdWUuc3BsaXQoJywnKVswXVxyXG4gICAgICAgICAgICBjb25zdCBmb3JlY2FzdFJlcyA9IGF3YWl0IGdldEZvcmVjYXN0RGF0YShjaXR5KVxyXG4gICAgICAgICAgICBjb25zdCBhc3Ryb25vbXlSZXMgPSBhd2FpdCBnZXRBc3Ryb25vbXlEYXRhKGNpdHkpXHJcblxyXG4gICAgICAgICAgICBzZXRMb2NhdGlvbihmb3JlY2FzdFJlcy5sb2NhdGlvbilcclxuICAgICAgICAgICAgc2V0Q3VycmVudChmb3JlY2FzdFJlcy5jdXJyZW50KVxyXG4gICAgICAgICAgICBzZXRXZWF0aGVyQWxlcnRzKGZvcmVjYXN0UmVzLmFsZXJ0cylcclxuICAgICAgICAgICAgc2V0Rm9yZWNhc3QoZm9yZWNhc3RSZXMuZm9yZWNhc3QpXHJcbiAgICAgICAgICAgIHNldEFzdHJvbm9teShhc3Ryb25vbXlSZXMuYXN0cm9ub215KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgb2ZmIGFsZXJ0IC0+IGZvcmVjYXN0IGRhdGEgY291bGQgbm90IGJlIHJlYWNoZWRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdlYXRoZXJDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogeyB1cGRhdGU6IG9uTG9jYXRpb25TZWxlY3Rpb24sIGRhdGE6IGxvY2F0aW9uIH0sXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlckFsZXJ0cyxcclxuICAgICAgICAgICAgICAgIGZvcmVjYXN0LFxyXG4gICAgICAgICAgICAgICAgYXN0cm9ub215XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9XZWF0aGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckNvbnRleHRXcmFwcGVyXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsImdldEZvcmVjYXN0RGF0YSIsImdldEFzdHJvbm9teURhdGEiLCJXZWF0aGVyQ29udGV4dCIsIldlYXRoZXJDb250ZXh0V3JhcHBlciIsImNoaWxkcmVuIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwid2VhdGhlckFsZXJ0cyIsInNldFdlYXRoZXJBbGVydHMiLCJmb3JlY2FzdCIsInNldEZvcmVjYXN0IiwiYXN0cm9ub215Iiwic2V0QXN0cm9ub215Iiwib25Mb2NhdGlvblNlbGVjdGlvbiIsInZhbHVlIiwiY2l0eSIsInNwbGl0IiwiZm9yZWNhc3RSZXMiLCJhc3Ryb25vbXlSZXMiLCJhbGVydHMiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=