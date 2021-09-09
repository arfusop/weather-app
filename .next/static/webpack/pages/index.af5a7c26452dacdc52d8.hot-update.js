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
    var _ref = (0,C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.handleLocationSearch)(location);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onLocationChange() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("nav", {
    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Nav),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Input, {
        value: location,
        onChange: function onChange(e) {
          return setLocation(e.target.value);
        },
        placeholder: "Search for places...",
        prefix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.SearchOutlined, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 29
        }, _this),
        suffix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CheckCircleFilled, {
          onClick: onLocationChange
        }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWY1YTdjMjY0NTJkYWNkYzUyZDguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxJQUFNTyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQ2Qsa0JBQWdDTiwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBLE1BQU1DLGdCQUFnQjtBQUFBLG1UQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNmTCxnRUFBb0IsQ0FBQ0csUUFBRCxDQURMOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCRSxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBSUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVKLGdFQUFoQjtBQUFBLDRCQUNJO0FBQUEsNkJBQ0ksOERBQUMsdUNBQUQ7QUFDSSxhQUFLLEVBQUVFLFFBRFg7QUFFSSxnQkFBUSxFQUFFLGtCQUFBRyxDQUFDO0FBQUEsaUJBQUlGLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLFNBRmY7QUFHSSxtQkFBVyxFQUFDLHNCQUhoQjtBQUlJLGNBQU0sZUFBRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpaO0FBS0ksY0FBTSxlQUFFLDhEQUFDLGdFQUFEO0FBQW1CLGlCQUFPLEVBQUVIO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBVUk7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSixlQWNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEosZUFlSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKLGVBZ0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJILENBOUJEOztHQUFNSDs7S0FBQUE7QUFnQ04sK0RBQWVBLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IFNlYXJjaE91dGxpbmVkLCBDaGVja0NpcmNsZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5cclxuaW1wb3J0IHsgaGFuZGxlTG9jYXRpb25TZWFyY2ggfSBmcm9tICcuLi8uLi91dGlscy9hcGknXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3Qgb25Mb2NhdGlvbkNoYW5nZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBoYW5kbGVMb2NhdGlvblNlYXJjaChsb2NhdGlvbilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRMb2NhdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHBsYWNlcy4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4PXs8U2VhcmNoT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgc3VmZml4PXs8Q2hlY2tDaXJjbGVGaWxsZWQgb25DbGljaz17b25Mb2NhdGlvbkNoYW5nZX0gLz59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Y3VycmVudCB3ZWF0aGVyIGRpc3BsYXkvaWNvbiBnb2VzIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Y3VycmVudCBkYXRlL3RpbWUgZ29lcyBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PmRpdmlkZXIgaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PnNtYWxsZXIgZm9vdG5vdGUgZGV0YWlscyBnbyBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBjbG9zZSBvdXQgd2l0aCBpbWFnZSBvZiBsb2NhdGlvbiAmIHRleHQgbGFiZWwgaWYgaW1hZ2UgaXNcclxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW5wdXQiLCJTZWFyY2hPdXRsaW5lZCIsIkNoZWNrQ2lyY2xlRmlsbGVkIiwiaGFuZGxlTG9jYXRpb25TZWFyY2giLCJzdHlsZXMiLCJOYXYiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwib25Mb2NhdGlvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=