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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.module.scss */ "./components/layout/layout.module.scss");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\arfus\\apps\\weather-app\\components\\layout\\Nav.js",
    _this = undefined,
    _s = $RefreshSig$();




var Option = antd__WEBPACK_IMPORTED_MODULE_3__.AutoComplete.Option;





var Nav = function Nav() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      location = _useState[0],
      setLocation = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      locations = _useState2[0],
      setLocations = _useState2[1];

  var onLocationChange = /*#__PURE__*/function () {
    var _ref = (0,C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(value) {
      var newLocations;
      return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.handleLocationSearch)(value);

            case 2:
              newLocations = _context.sent;

              if (newLocations) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              setLocations(newLocations);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onLocationChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().Nav),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.AutoComplete, {
        className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().search),
        onSearch: onLocationChange,
        onSelect: function onSelect(e) {
          return console.log(e);
        },
        placeholder: "Search for places...",
        children: locations !== null && locations !== void 0 && locations.length ? locations.map(function (location) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Option, {
            value: location.name,
            children: location.name
          }, location.name, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 35
          }, _this);
        }) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: "current weather display/icon goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: "current date/time goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "divider here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "smaller footnote details go here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "close out with image of location & text label if image is available"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this);
};

_s(Nav, "TASkAkPNrqKFxh8NWxDMNbfRRD4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTI1NjZmNmM0YmExODFlZjQxODEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFRSSxNQUFSLEdBQW1CRCxxREFBbkI7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLElBQU1LLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFDZCxrQkFBZ0NQLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWtDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPVSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLE1BQU1DLGdCQUFnQjtBQUFBLG1UQUFHLGlCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ01SLGdFQUFvQixDQUFDUSxLQUFELENBRDFCOztBQUFBO0FBQ2ZDLGNBQUFBLFlBRGU7O0FBQUEsa0JBRWhCQSxZQUZnQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUdyQkgsY0FBQUEsWUFBWSxDQUFDRyxZQUFELENBQVo7O0FBSHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCRixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBTUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVOLGdFQUFoQjtBQUFBLDRCQUNJO0FBQUEsNkJBQ0ksOERBQUMsOENBQUQ7QUFDSSxpQkFBUyxFQUFFQSxtRUFEZjtBQUVJLGdCQUFRLEVBQUVNLGdCQUZkO0FBR0ksZ0JBQVEsRUFBRSxrQkFBQUksQ0FBQztBQUFBLGlCQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWixDQUFKO0FBQUEsU0FIZjtBQUlJLG1CQUFXLEVBQUMsc0JBSmhCO0FBQUEsa0JBS0tOLFNBQVMsU0FBVCxJQUFBQSxTQUFTLFdBQVQsSUFBQUEsU0FBUyxDQUFFUyxNQUFYLEdBQ0tULFNBQVMsQ0FBQ1UsR0FBVixDQUFjLFVBQUFaLFFBQVEsRUFBSTtBQUN0Qiw4QkFDSSw4REFBQyxNQUFEO0FBRUksaUJBQUssRUFBRUEsUUFBUSxDQUFDYSxJQUZwQjtBQUFBLHNCQUdLYixRQUFRLENBQUNhO0FBSGQsYUFDU2IsUUFBUSxDQUFDYSxJQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBT0gsU0FSRCxDQURMLEdBVUs7QUFmVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBb0JJO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJKLGVBd0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJKLGVBeUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJKLGVBMEJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUNILENBM0NEOztHQUFNZDs7S0FBQUE7QUE2Q04sK0RBQWVBLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJbnB1dCwgQXV0b0NvbXBsZXRlIH0gZnJvbSAnYW50ZCdcclxuY29uc3QgeyBPcHRpb24gfSA9IEF1dG9Db21wbGV0ZVxyXG5pbXBvcnQgeyBTZWFyY2hPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5cclxuaW1wb3J0IHsgaGFuZGxlTG9jYXRpb25TZWFyY2ggfSBmcm9tICcuLi8uLi91dGlscy9hcGknXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3Qgb25Mb2NhdGlvbkNoYW5nZSA9IGFzeW5jIHZhbHVlID0+IHtcclxuICAgICAgICBjb25zdCBuZXdMb2NhdGlvbnMgPSBhd2FpdCBoYW5kbGVMb2NhdGlvblNlYXJjaCh2YWx1ZSlcclxuICAgICAgICBpZiAoIW5ld0xvY2F0aW9ucykgcmV0dXJuXHJcbiAgICAgICAgc2V0TG9jYXRpb25zKG5ld0xvY2F0aW9ucylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBdXRvQ29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e29uTG9jYXRpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e2UgPT4gY29uc29sZS5sb2coZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHBsYWNlcy4uLlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbnM/Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGxvY2F0aW9ucy5tYXAobG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bG9jYXRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYXRpb24ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2F0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Y3VycmVudCB3ZWF0aGVyIGRpc3BsYXkvaWNvbiBnb2VzIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Y3VycmVudCBkYXRlL3RpbWUgZ29lcyBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PmRpdmlkZXIgaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PnNtYWxsZXIgZm9vdG5vdGUgZGV0YWlscyBnbyBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBjbG9zZSBvdXQgd2l0aCBpbWFnZSBvZiBsb2NhdGlvbiAmIHRleHQgbGFiZWwgaWYgaW1hZ2UgaXNcclxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW5wdXQiLCJBdXRvQ29tcGxldGUiLCJPcHRpb24iLCJTZWFyY2hPdXRsaW5lZCIsImhhbmRsZUxvY2F0aW9uU2VhcmNoIiwic3R5bGVzIiwiTmF2IiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImxvY2F0aW9ucyIsInNldExvY2F0aW9ucyIsIm9uTG9jYXRpb25DaGFuZ2UiLCJ2YWx1ZSIsIm5ld0xvY2F0aW9ucyIsInNlYXJjaCIsImUiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=