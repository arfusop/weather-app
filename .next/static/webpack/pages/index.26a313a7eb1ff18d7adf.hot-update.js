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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
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
              return (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.handleLocationSearch)(value);

            case 2:
              newLocations = _context.sent;
              setLocations(newLocations);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onLocationChange(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // use autocomplete component


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("nav", {
    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Nav),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.AutoComplete, {
        onSearch: onLocationChange,
        options: locations,
        onSelect: function onSelect(e) {
          return console.log(e);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Input, {
          value: location // onChange={onLocationChange}
          ,
          placeholder: "Search for places..." // prefix={<SearchOutlined />}
          ,
          suffix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.SearchOutlined, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "current weather display/icon goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "current date/time goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "divider here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "smaller footnote details go here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "close out with image of location & text label if image is available"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, _this);
};

_s(Nav, "8m9lqX/MA+Wy2o7FoCzxqPl8GJ4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjZhMzEzYTdlYjFmZjE4ZDdhZGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxJQUFNUSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQ2Qsa0JBQWdDUCwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPUSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFrQ1QsK0NBQVEsQ0FBQyxJQUFELENBQTFDO0FBQUEsTUFBT1UsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxNQUFNQyxnQkFBZ0I7QUFBQSxtVEFBRyxpQkFBTUMsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVNUixnRUFBb0IsQ0FBQ1EsS0FBRCxDQUYxQjs7QUFBQTtBQUVmQyxjQUFBQSxZQUZlO0FBR3JCSCxjQUFBQSxZQUFZLENBQUNHLFlBQUQsQ0FBWjs7QUFIcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJGLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0QixDQUpjLENBVWQ7OztBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFTixnRUFBaEI7QUFBQSw0QkFDSTtBQUFBLDZCQUNJLDhEQUFDLDhDQUFEO0FBQ0ksZ0JBQVEsRUFBRU0sZ0JBRGQ7QUFFSSxlQUFPLEVBQUVGLFNBRmI7QUFHSSxnQkFBUSxFQUFFLGtCQUFBSyxDQUFDO0FBQUEsaUJBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaLENBQUo7QUFBQSxTQUhmO0FBQUEsK0JBSUksOERBQUMsdUNBQUQ7QUFDSSxlQUFLLEVBQUVQLFFBRFgsQ0FFSTtBQUZKO0FBR0kscUJBQVcsRUFBQyxzQkFIaEIsQ0FJSTtBQUpKO0FBS0ksZ0JBQU0sZUFBRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFlSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKLGVBbUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJKLGVBb0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJKLGVBcUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNEJILENBeENEOztHQUFNRDs7S0FBQUE7QUEwQ04sK0RBQWVBLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJbnB1dCwgQXV0b0NvbXBsZXRlIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgU2VhcmNoT3V0bGluZWQsIENoZWNrQ2lyY2xlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcblxyXG5pbXBvcnQgeyBoYW5kbGVMb2NhdGlvblNlYXJjaCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtsb2NhdGlvbnMsIHNldExvY2F0aW9uc10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IG9uTG9jYXRpb25DaGFuZ2UgPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgLy8gc2V0TG9jYXRpb24odmFsdWUpXHJcbiAgICAgICAgY29uc3QgbmV3TG9jYXRpb25zID0gYXdhaXQgaGFuZGxlTG9jYXRpb25TZWFyY2godmFsdWUpXHJcbiAgICAgICAgc2V0TG9jYXRpb25zKG5ld0xvY2F0aW9ucylcclxuICAgIH1cclxuXHJcbiAgICAvLyB1c2UgYXV0b2NvbXBsZXRlIGNvbXBvbmVudFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZ9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvbkxvY2F0aW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xvY2F0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17ZSA9PiBjb25zb2xlLmxvZyhlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e29uTG9jYXRpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBwbGFjZXMuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmVmaXg9ezxTZWFyY2hPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4PXs8U2VhcmNoT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Y3VycmVudCB3ZWF0aGVyIGRpc3BsYXkvaWNvbiBnb2VzIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Y3VycmVudCBkYXRlL3RpbWUgZ29lcyBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PmRpdmlkZXIgaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PnNtYWxsZXIgZm9vdG5vdGUgZGV0YWlscyBnbyBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBjbG9zZSBvdXQgd2l0aCBpbWFnZSBvZiBsb2NhdGlvbiAmIHRleHQgbGFiZWwgaWYgaW1hZ2UgaXNcclxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW5wdXQiLCJBdXRvQ29tcGxldGUiLCJTZWFyY2hPdXRsaW5lZCIsIkNoZWNrQ2lyY2xlRmlsbGVkIiwiaGFuZGxlTG9jYXRpb25TZWFyY2giLCJzdHlsZXMiLCJOYXYiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwibG9jYXRpb25zIiwic2V0TG9jYXRpb25zIiwib25Mb2NhdGlvbkNoYW5nZSIsInZhbHVlIiwibmV3TG9jYXRpb25zIiwiZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9