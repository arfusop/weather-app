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
      location = _useContext.location;

  console.log("current: ", current);
  console.log("location: ", location);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: "current weather display/icon goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: "current date/time goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [current.condition.text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: current.condition.icon,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [location.data.name, ", ", location.data.region, ",", ' ', location.data.country]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

_s(CurrentWeather, "zrtX/YjFnDAgyQ/aYTeMTepR2bg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDE3MjVlMzU5ZTQ4ZjMwNzNjMmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUN6QixvQkFBOEJGLGlEQUFVLENBQUNDLG9EQUFELENBQXhDO0FBQUEsTUFBUUUsT0FBUixlQUFRQSxPQUFSO0FBQUEsTUFBaUJDLFFBQWpCLGVBQWlCQSxRQUFqQjs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGNBQXlCSCxPQUF6QjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsZUFBMEJGLFFBQTFCO0FBQ0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KLGVBT0k7QUFBQSxpQkFDS0QsT0FBTyxDQUFDSSxTQUFSLENBQWtCQyxJQUR2QixlQUVJO0FBQUssV0FBRyxFQUFFTCxPQUFPLENBQUNJLFNBQVIsQ0FBa0JFLElBQTVCO0FBQWtDLFdBQUcsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEosZUFXSTtBQUFBLGlCQUNLTCxRQUFRLENBQUNNLElBQVQsQ0FBY0MsSUFEbkIsUUFDMkJQLFFBQVEsQ0FBQ00sSUFBVCxDQUFjRSxNQUR6QyxPQUNrRCxHQURsRCxFQUVLUixRQUFRLENBQUNNLElBQVQsQ0FBY0csT0FGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0F0QkQ7O0dBQU1YOztLQUFBQTtBQXdCTiwrREFBZUEsY0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2N1cnJlbnQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgV2VhdGhlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0J1xyXG5cclxuY29uc3QgQ3VycmVudFdlYXRoZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGN1cnJlbnQsIGxvY2F0aW9uIH0gPSB1c2VDb250ZXh0KFdlYXRoZXJDb250ZXh0KVxyXG4gICAgY29uc29sZS5sb2coYGN1cnJlbnQ6IGAsIGN1cnJlbnQpXHJcbiAgICBjb25zb2xlLmxvZyhgbG9jYXRpb246IGAsIGxvY2F0aW9uKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5jdXJyZW50IHdlYXRoZXIgZGlzcGxheS9pY29uIGdvZXMgaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5jdXJyZW50IGRhdGUvdGltZSBnb2VzIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2PmRpdmlkZXIgaGVyZTwvZGl2PiAqL31cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudC5jb25kaXRpb24udGV4dH1cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50LmNvbmRpdGlvbi5pY29ufSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtsb2NhdGlvbi5kYXRhLm5hbWV9LCB7bG9jYXRpb24uZGF0YS5yZWdpb259LHsnICd9XHJcbiAgICAgICAgICAgICAgICB7bG9jYXRpb24uZGF0YS5jb3VudHJ5fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudFdlYXRoZXJcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIldlYXRoZXJDb250ZXh0IiwiQ3VycmVudFdlYXRoZXIiLCJjdXJyZW50IiwibG9jYXRpb24iLCJjb25zb2xlIiwibG9nIiwiY29uZGl0aW9uIiwidGV4dCIsImljb24iLCJkYXRhIiwibmFtZSIsInJlZ2lvbiIsImNvdW50cnkiXSwic291cmNlUm9vdCI6IiJ9