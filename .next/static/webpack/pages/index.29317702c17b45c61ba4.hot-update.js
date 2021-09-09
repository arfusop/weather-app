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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjkzMTc3MDJjMTdiNDVjNjFiYTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRU8sSUFBTUssY0FBYyxnQkFBR0gsb0RBQWEsQ0FBQyxJQUFELENBQXBDOztBQUVQLElBQU1JLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQzVDLGtCQUFnQ04sK0NBQVEsQ0FBQyxJQUFELENBQXhDO0FBQUEsTUFBT08sUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBZ0NSLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU9TLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWtDViwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPVyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCLGlCQUg0QyxDQUs1Qzs7O0FBRUEsTUFBTUMsbUJBQW1CO0FBQUEsb1RBQUcsaUJBQU1DLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZEMsY0FBQUEsSUFGYyxHQUVQRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBRk87QUFBQTtBQUFBLHFCQUdNZCwyREFBZSxDQUFDYSxJQUFELENBSHJCOztBQUFBO0FBR2RFLGNBQUFBLFdBSGM7QUFBQTtBQUFBLHFCQUlPZCw0REFBZ0IsQ0FBQ1ksSUFBRCxDQUp2Qjs7QUFBQTtBQUlkRyxjQUFBQSxZQUpjO0FBTXBCVixjQUFBQSxXQUFXLENBQUNTLFdBQVcsQ0FBQ1YsUUFBYixDQUFYO0FBQ0FHLGNBQUFBLFdBQVcsQ0FBQ08sV0FBVyxDQUFDUixRQUFiLENBQVg7QUFDQUcsY0FBQUEsWUFBWSxDQUFDTSxZQUFZLENBQUNQLFNBQWQsQ0FBWjtBQVJvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVVwQjtBQUNBUSxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBWG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5CUCxtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBZUEsc0JBQ0ksOERBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUNJLFNBQUssRUFBRTtBQUNITixNQUFBQSxRQUFRLEVBQUU7QUFBRWMsUUFBQUEsTUFBTSxFQUFFUixtQkFBVjtBQUErQlMsUUFBQUEsSUFBSSxFQUFFZjtBQUFyQyxPQURQO0FBRUhFLE1BQUFBLFFBQVEsRUFBRTtBQUFFYSxRQUFBQSxJQUFJLEVBQUViO0FBQVIsT0FGUDtBQUdIRSxNQUFBQSxTQUFTLEVBQUU7QUFBRVcsUUFBQUEsSUFBSSxFQUFFWDtBQUFSO0FBSFIsS0FEWDtBQUFBLGNBTUtMO0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0FoQ0Q7O0dBQU1EOztLQUFBQTtBQWtDTiwrREFBZUEscUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ2V0Rm9yZWNhc3REYXRhLCBnZXRBc3Ryb25vbXlEYXRhIH0gZnJvbSAnLi4vdXRpbHMvYXBpJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFdlYXRoZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxyXG5cclxuY29uc3QgV2VhdGhlckNvbnRleHRXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2ZvcmVjYXN0LCBzZXRGb3JlY2FzdF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2FzdHJvbm9teSwgc2V0QXN0cm9ub215XSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgLy8gaW1wbGVtZW50IGFsZXJ0c1xyXG5cclxuICAgIGNvbnN0IG9uTG9jYXRpb25TZWxlY3Rpb24gPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgY2l0eSA9IHZhbHVlLnNwbGl0KCcsJylbMF1cclxuICAgICAgICAgICAgY29uc3QgZm9yZWNhc3RSZXMgPSBhd2FpdCBnZXRGb3JlY2FzdERhdGEoY2l0eSlcclxuICAgICAgICAgICAgY29uc3QgYXN0cm9ub215UmVzID0gYXdhaXQgZ2V0QXN0cm9ub215RGF0YShjaXR5KVxyXG5cclxuICAgICAgICAgICAgc2V0TG9jYXRpb24oZm9yZWNhc3RSZXMubG9jYXRpb24pXHJcbiAgICAgICAgICAgIHNldEZvcmVjYXN0KGZvcmVjYXN0UmVzLmZvcmVjYXN0KVxyXG4gICAgICAgICAgICBzZXRBc3Ryb25vbXkoYXN0cm9ub215UmVzLmFzdHJvbm9teSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIG9mZiBhbGVydCAtPiBmb3JlY2FzdCBkYXRhIGNvdWxkIG5vdCBiZSByZWFjaGVkXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXZWF0aGVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHsgdXBkYXRlOiBvbkxvY2F0aW9uU2VsZWN0aW9uLCBkYXRhOiBsb2NhdGlvbiB9LFxyXG4gICAgICAgICAgICAgICAgZm9yZWNhc3Q6IHsgZGF0YTogZm9yZWNhc3QgfSxcclxuICAgICAgICAgICAgICAgIGFzdHJvbm9teTogeyBkYXRhOiBhc3Ryb25vbXkgfVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvV2VhdGhlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJDb250ZXh0V3JhcHBlclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJnZXRGb3JlY2FzdERhdGEiLCJnZXRBc3Ryb25vbXlEYXRhIiwiV2VhdGhlckNvbnRleHQiLCJXZWF0aGVyQ29udGV4dFdyYXBwZXIiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJmb3JlY2FzdCIsInNldEZvcmVjYXN0IiwiYXN0cm9ub215Iiwic2V0QXN0cm9ub215Iiwib25Mb2NhdGlvblNlbGVjdGlvbiIsInZhbHVlIiwiY2l0eSIsInNwbGl0IiwiZm9yZWNhc3RSZXMiLCJhc3Ryb25vbXlSZXMiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=