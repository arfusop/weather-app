"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/current/index.js":
/*!*************************************!*\
  !*** ./components/current/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var _Current_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Current.module.scss */ "./components/current/Current.module.scss");
/* harmony import */ var _Current_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Current_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\arfus\\apps\\weather-app\\components\\current\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var CurrentWeather = function CurrentWeather() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.WeatherContext),
      current = _useContext.current,
      location = _useContext.location,
      forecast = _useContext.forecast;

  console.log("current: ", current);
  console.log("location: ", location);
  console.log("forecast: ", forecast);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_Current_module_scss__WEBPACK_IMPORTED_MODULE_3___default().CurrentWeather),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: "current weather display/icon goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: "current date/time goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_Current_module_scss__WEBPACK_IMPORTED_MODULE_3___default().divider)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [current.condition.text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: current.condition.icon,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [location.data.name, ", ", location.data.region, ",", ' ', location.data.country]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(CurrentWeather, "VASqFfEvOhNiqiEUPBFDV+sftfQ=");

_c = CurrentWeather;
/* harmony default export */ __webpack_exports__["default"] = (CurrentWeather);

var _c;

$RefreshReg$(_c, "CurrentWeather");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzRmZDhlNmQwNGYwNjkwNDBkNTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFDekIsb0JBQXdDSCxpREFBVSxDQUFDQyxvREFBRCxDQUFsRDtBQUFBLE1BQVFHLE9BQVIsZUFBUUEsT0FBUjtBQUFBLE1BQWlCQyxRQUFqQixlQUFpQkEsUUFBakI7QUFBQSxNQUEyQkMsUUFBM0IsZUFBMkJBLFFBQTNCOztBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsY0FBeUJKLE9BQXpCO0FBQ0FHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUEwQkgsUUFBMUI7QUFDQUUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQTBCRixRQUExQjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFFSiw0RUFBaEI7QUFBQSw0QkFDSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBSyxlQUFTLEVBQUVBLHFFQUFjTztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkosZUFPSTtBQUFBLGlCQUNLTCxPQUFPLENBQUNNLFNBQVIsQ0FBa0JDLElBRHZCLGVBRUk7QUFBSyxXQUFHLEVBQUVQLE9BQU8sQ0FBQ00sU0FBUixDQUFrQkUsSUFBNUI7QUFBa0MsV0FBRyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixlQVdJO0FBQUEsaUJBQ0tQLFFBQVEsQ0FBQ1EsSUFBVCxDQUFjQyxJQURuQixRQUMyQlQsUUFBUSxDQUFDUSxJQUFULENBQWNFLE1BRHpDLE9BQ2tELEdBRGxELEVBRUtWLFFBQVEsQ0FBQ1EsSUFBVCxDQUFjRyxPQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtCSCxDQXZCRDs7R0FBTWI7O0tBQUFBO0FBeUJOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY3VycmVudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBXZWF0aGVyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DdXJyZW50Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgQ3VycmVudFdlYXRoZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGN1cnJlbnQsIGxvY2F0aW9uLCBmb3JlY2FzdCB9ID0gdXNlQ29udGV4dChXZWF0aGVyQ29udGV4dClcclxuICAgIGNvbnNvbGUubG9nKGBjdXJyZW50OiBgLCBjdXJyZW50KVxyXG4gICAgY29uc29sZS5sb2coYGxvY2F0aW9uOiBgLCBsb2NhdGlvbilcclxuICAgIGNvbnNvbGUubG9nKGBmb3JlY2FzdDogYCwgZm9yZWNhc3QpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ3VycmVudFdlYXRoZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5jdXJyZW50IHdlYXRoZXIgZGlzcGxheS9pY29uIGdvZXMgaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5jdXJyZW50IGRhdGUvdGltZSBnb2VzIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2PmRpdmlkZXIgaGVyZTwvZGl2PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZpZGVyfSAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnQuY29uZGl0aW9uLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudC5jb25kaXRpb24uaWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bG9jYXRpb24uZGF0YS5uYW1lfSwge2xvY2F0aW9uLmRhdGEucmVnaW9ufSx7JyAnfVxyXG4gICAgICAgICAgICAgICAge2xvY2F0aW9uLmRhdGEuY291bnRyeX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRXZWF0aGVyXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJXZWF0aGVyQ29udGV4dCIsInN0eWxlcyIsIkN1cnJlbnRXZWF0aGVyIiwiY3VycmVudCIsImxvY2F0aW9uIiwiZm9yZWNhc3QiLCJjb25zb2xlIiwibG9nIiwiZGl2aWRlciIsImNvbmRpdGlvbiIsInRleHQiLCJpY29uIiwiZGF0YSIsIm5hbWUiLCJyZWdpb24iLCJjb3VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==