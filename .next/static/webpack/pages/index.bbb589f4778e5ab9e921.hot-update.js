"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/Nav.js":
/*!**********************************!*\
  !*** ./components/layout/Nav.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.module.scss */ "./components/layout/layout.module.scss");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\arfus\\apps\\weather-app\\components\\layout\\Nav.js",
    _this = undefined,
    _s = $RefreshSig$();









var Nav = function Nav() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      location = _useState[0],
      setLocation = _useState[1];

  var onLocationChange = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref) {
      var value;
      return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = _ref.target.value;
              _context.next = 3;
              return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.handleLocationSearch)(value);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onLocationChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("nav", {
    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Nav),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Input, {
        value: location,
        onChange: onLocationChange,
        placeholder: "Search for places...",
        prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.SearchOutlined, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 29
        }, _this),
        suffix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CheckCircleFilled, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "current weather display/icon goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "current date/time goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "divider here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "smaller footnote details go here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "close out with image of location & text label if image is available"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, _this);
};

_s(Nav, "oqKkKXuEMFy/klxDqCY5G3vHULI=");

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmJiNTg5ZjQ3NzhlNWFiOWU5MjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxJQUFNTyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQ2Qsa0JBQWdDTiwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBLE1BQU1DLGdCQUFnQjtBQUFBLG9UQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQkMsY0FBQUEsS0FBbkIsUUFBU0MsTUFBVCxDQUFtQkQsS0FBbkI7QUFBQTtBQUFBLHFCQUNmTixnRUFBb0IsQ0FBQ00sS0FBRCxDQURMOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCRCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBSUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVKLGdFQUFoQjtBQUFBLDRCQUNJO0FBQUEsNkJBQ0ksOERBQUMsdUNBQUQ7QUFDSSxhQUFLLEVBQUVFLFFBRFg7QUFFSSxnQkFBUSxFQUFFRSxnQkFGZDtBQUdJLG1CQUFXLEVBQUMsc0JBSGhCO0FBSUksY0FBTSxlQUFFLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSlo7QUFLSSxjQUFNLGVBQUUsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFVSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKLGVBY0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSixlQWVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkosZUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1QkgsQ0E5QkQ7O0dBQU1IOztLQUFBQTtBQWdDTiwrREFBZUEsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9OYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgU2VhcmNoT3V0bGluZWQsIENoZWNrQ2lyY2xlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcblxyXG5pbXBvcnQgeyBoYW5kbGVMb2NhdGlvblNlYXJjaCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICBjb25zdCBvbkxvY2F0aW9uQ2hhbmdlID0gYXN5bmMgKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGhhbmRsZUxvY2F0aW9uU2VhcmNoKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZ9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkxvY2F0aW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBwbGFjZXMuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeD17PFNlYXJjaE91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIHN1ZmZpeD17PENoZWNrQ2lyY2xlRmlsbGVkIC8+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PmN1cnJlbnQgd2VhdGhlciBkaXNwbGF5L2ljb24gZ29lcyBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PmN1cnJlbnQgZGF0ZS90aW1lIGdvZXMgaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5kaXZpZGVyIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5zbWFsbGVyIGZvb3Rub3RlIGRldGFpbHMgZ28gaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgY2xvc2Ugb3V0IHdpdGggaW1hZ2Ugb2YgbG9jYXRpb24gJiB0ZXh0IGxhYmVsIGlmIGltYWdlIGlzXHJcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIklucHV0IiwiU2VhcmNoT3V0bGluZWQiLCJDaGVja0NpcmNsZUZpbGxlZCIsImhhbmRsZUxvY2F0aW9uU2VhcmNoIiwic3R5bGVzIiwiTmF2IiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsIm9uTG9jYXRpb25DaGFuZ2UiLCJ2YWx1ZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=