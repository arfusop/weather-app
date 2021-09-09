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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lM2Y2YTYyZjZjNDc3ZjU1NTUxZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFTyxJQUFNSyxjQUFjLGdCQUFHSCxvREFBYSxDQUFDLElBQUQsQ0FBcEM7O0FBRVAsSUFBTUkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDNUMsa0JBQWdDTiwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE4QlIsK0NBQVEsQ0FBQyxJQUFELENBQXRDO0FBQUEsTUFBT1MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBMENWLCtDQUFRLENBQUMsSUFBRCxDQUFsRDtBQUFBLE1BQU9XLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUFnQ1osK0NBQVEsQ0FBQyxJQUFELENBQXhDO0FBQUEsTUFBT2EsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBa0NkLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU9lLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEIsaUJBTDRDLENBTzVDOzs7QUFFQSxNQUFNQyxtQkFBbUI7QUFBQSxvVEFBRyxpQkFBTUMsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVkQyxjQUFBQSxJQUZjLEdBRVBELEtBQUssQ0FBQ0UsS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FGTztBQUFBO0FBQUEscUJBR01sQiwyREFBZSxDQUFDaUIsSUFBRCxDQUhyQjs7QUFBQTtBQUdkRSxjQUFBQSxXQUhjO0FBQUE7QUFBQSxxQkFJT2xCLDREQUFnQixDQUFDZ0IsSUFBRCxDQUp2Qjs7QUFBQTtBQUlkRyxjQUFBQSxZQUpjO0FBTXBCZCxjQUFBQSxXQUFXLENBQUNhLFdBQVcsQ0FBQ2QsUUFBYixDQUFYO0FBQ0FHLGNBQUFBLFVBQVUsQ0FBQ1csV0FBVyxDQUFDWixPQUFiLENBQVY7QUFDQUcsY0FBQUEsZ0JBQWdCLENBQUNTLFdBQVcsQ0FBQ0UsTUFBYixDQUFoQjtBQUNBVCxjQUFBQSxXQUFXLENBQUNPLFdBQVcsQ0FBQ1IsUUFBYixDQUFYO0FBQ0FHLGNBQUFBLFlBQVksQ0FBQ00sWUFBWSxDQUFDUCxTQUFkLENBQVo7QUFWb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZcEI7QUFDQVMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQWJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQlIsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEtBQXpCOztBQWlCQSxzQkFDSSw4REFBQyxjQUFELENBQWdCLFFBQWhCO0FBQ0ksU0FBSyxFQUFFO0FBQ0hWLE1BQUFBLFFBQVEsRUFBRTtBQUFFbUIsUUFBQUEsTUFBTSxFQUFFVCxtQkFBVjtBQUErQlUsUUFBQUEsSUFBSSxFQUFFcEI7QUFBckMsT0FEUDtBQUVIRSxNQUFBQSxPQUFPLEVBQUU7QUFBRWtCLFFBQUFBLElBQUksRUFBRWxCO0FBQVIsT0FGTjtBQUdIRSxNQUFBQSxhQUFhLEVBQUU7QUFBRWdCLFFBQUFBLElBQUksRUFBRWhCO0FBQVIsT0FIWjtBQUlIRSxNQUFBQSxRQUFRLEVBQUU7QUFBRWMsUUFBQUEsSUFBSSxFQUFFZDtBQUFSLE9BSlA7QUFLSEUsTUFBQUEsU0FBUyxFQUFFO0FBQUVZLFFBQUFBLElBQUksRUFBRVo7QUFBUjtBQUxSLEtBRFg7QUFBQSxjQVFLVDtBQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVlILENBdENEOztHQUFNRDs7S0FBQUE7QUF3Q04sK0RBQWVBLHFCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGdldEZvcmVjYXN0RGF0YSwgZ2V0QXN0cm9ub215RGF0YSB9IGZyb20gJy4uL3V0aWxzL2FwaSdcclxuXHJcbmV4cG9ydCBjb25zdCBXZWF0aGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbClcclxuXHJcbmNvbnN0IFdlYXRoZXJDb250ZXh0V3JhcHBlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbd2VhdGhlckFsZXJ0cywgc2V0V2VhdGhlckFsZXJ0c10gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2ZvcmVjYXN0LCBzZXRGb3JlY2FzdF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2FzdHJvbm9teSwgc2V0QXN0cm9ub215XSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgLy8gaW1wbGVtZW50IGVycm9yIGFsZXJ0c1xyXG5cclxuICAgIGNvbnN0IG9uTG9jYXRpb25TZWxlY3Rpb24gPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgY2l0eSA9IHZhbHVlLnNwbGl0KCcsJylbMF1cclxuICAgICAgICAgICAgY29uc3QgZm9yZWNhc3RSZXMgPSBhd2FpdCBnZXRGb3JlY2FzdERhdGEoY2l0eSlcclxuICAgICAgICAgICAgY29uc3QgYXN0cm9ub215UmVzID0gYXdhaXQgZ2V0QXN0cm9ub215RGF0YShjaXR5KVxyXG5cclxuICAgICAgICAgICAgc2V0TG9jYXRpb24oZm9yZWNhc3RSZXMubG9jYXRpb24pXHJcbiAgICAgICAgICAgIHNldEN1cnJlbnQoZm9yZWNhc3RSZXMuY3VycmVudClcclxuICAgICAgICAgICAgc2V0V2VhdGhlckFsZXJ0cyhmb3JlY2FzdFJlcy5hbGVydHMpXHJcbiAgICAgICAgICAgIHNldEZvcmVjYXN0KGZvcmVjYXN0UmVzLmZvcmVjYXN0KVxyXG4gICAgICAgICAgICBzZXRBc3Ryb25vbXkoYXN0cm9ub215UmVzLmFzdHJvbm9teSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIG9mZiBhbGVydCAtPiBmb3JlY2FzdCBkYXRhIGNvdWxkIG5vdCBiZSByZWFjaGVkXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXZWF0aGVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHsgdXBkYXRlOiBvbkxvY2F0aW9uU2VsZWN0aW9uLCBkYXRhOiBsb2NhdGlvbiB9LFxyXG4gICAgICAgICAgICAgICAgY3VycmVudDogeyBkYXRhOiBjdXJyZW50IH0sXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyQWxlcnRzOiB7IGRhdGE6IHdlYXRoZXJBbGVydHMgfSxcclxuICAgICAgICAgICAgICAgIGZvcmVjYXN0OiB7IGRhdGE6IGZvcmVjYXN0IH0sXHJcbiAgICAgICAgICAgICAgICBhc3Ryb25vbXk6IHsgZGF0YTogYXN0cm9ub215IH1cclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1dlYXRoZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyQ29udGV4dFdyYXBwZXJcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiZ2V0Rm9yZWNhc3REYXRhIiwiZ2V0QXN0cm9ub215RGF0YSIsIldlYXRoZXJDb250ZXh0IiwiV2VhdGhlckNvbnRleHRXcmFwcGVyIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJ3ZWF0aGVyQWxlcnRzIiwic2V0V2VhdGhlckFsZXJ0cyIsImZvcmVjYXN0Iiwic2V0Rm9yZWNhc3QiLCJhc3Ryb25vbXkiLCJzZXRBc3Ryb25vbXkiLCJvbkxvY2F0aW9uU2VsZWN0aW9uIiwidmFsdWUiLCJjaXR5Iiwic3BsaXQiLCJmb3JlY2FzdFJlcyIsImFzdHJvbm9teVJlcyIsImFsZXJ0cyIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==