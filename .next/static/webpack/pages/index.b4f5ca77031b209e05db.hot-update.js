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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
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
              return (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.handleLocationSearch)(value);

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


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().Nav),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.AutoComplete, {
        onSearch: onLocationChange // options={locations}
        ,
        onSelect: function onSelect(e) {
          return console.log(e);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
          value: location // onChange={onLocationChange}
          ,
          placeholder: "Search for places..." // prefix={<SearchOutlined />}
          ,
          suffix: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.SearchOutlined, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this), locations !== null && locations !== void 0 && locations.length ? locations.map(function (location) {
          console.log("location: ", location);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Option, {
            children: location.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 38
          }, _this);
        }) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: "current weather display/icon goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: "current date/time goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "divider here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "smaller footnote details go here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "close out with image of location & text label if image is available"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjRmNWNhNzcwMzFiMjA5ZTA1ZGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBUUksTUFBUixHQUFtQkQscURBQW5CO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxJQUFNSyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQ2Qsa0JBQWdDUCwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPUSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFrQ1QsK0NBQVEsQ0FBQyxJQUFELENBQTFDO0FBQUEsTUFBT1UsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxNQUFNQyxnQkFBZ0I7QUFBQSxtVEFBRyxpQkFBTUMsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVNUixnRUFBb0IsQ0FBQ1EsS0FBRCxDQUYxQjs7QUFBQTtBQUVmQyxjQUFBQSxZQUZlO0FBR3JCSCxjQUFBQSxZQUFZLENBQUNHLFlBQUQsQ0FBWjs7QUFIcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJGLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0QixDQUpjLENBVWQ7OztBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFTixnRUFBaEI7QUFBQSw0QkFDSTtBQUFBLDZCQUNJLDhEQUFDLDhDQUFEO0FBQ0ksZ0JBQVEsRUFBRU0sZ0JBRGQsQ0FFSTtBQUZKO0FBR0ksZ0JBQVEsRUFBRSxrQkFBQUcsQ0FBQztBQUFBLGlCQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWixDQUFKO0FBQUEsU0FIZjtBQUFBLGdDQUlJLDhEQUFDLHVDQUFEO0FBQ0ksZUFBSyxFQUFFUCxRQURYLENBRUk7QUFGSjtBQUdJLHFCQUFXLEVBQUMsc0JBSGhCLENBSUk7QUFKSjtBQUtJLGdCQUFNLGVBQUUsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosRUFXS0UsU0FBUyxTQUFULElBQUFBLFNBQVMsV0FBVCxJQUFBQSxTQUFTLENBQUVRLE1BQVgsR0FDS1IsU0FBUyxDQUFDUyxHQUFWLENBQWMsVUFBQVgsUUFBUSxFQUFJO0FBQ3RCUSxVQUFBQSxPQUFPLENBQUNDLEdBQVIsZUFBMEJULFFBQTFCO0FBQ0EsOEJBQU8sOERBQUMsTUFBRDtBQUFBLHNCQUFTQSxRQUFRLENBQUNZO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDSCxTQUhELENBREwsR0FLSyxJQWhCVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFxQkk7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkosZUF5Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QkosZUEwQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkosZUEyQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQ0gsQ0E5Q0Q7O0dBQU1iOztLQUFBQTtBQWdETiwrREFBZUEsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9OYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElucHV0LCBBdXRvQ29tcGxldGUgfSBmcm9tICdhbnRkJ1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gQXV0b0NvbXBsZXRlXHJcbmltcG9ydCB7IFNlYXJjaE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcblxyXG5pbXBvcnQgeyBoYW5kbGVMb2NhdGlvblNlYXJjaCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtsb2NhdGlvbnMsIHNldExvY2F0aW9uc10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IG9uTG9jYXRpb25DaGFuZ2UgPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgLy8gc2V0TG9jYXRpb24odmFsdWUpXHJcbiAgICAgICAgY29uc3QgbmV3TG9jYXRpb25zID0gYXdhaXQgaGFuZGxlTG9jYXRpb25TZWFyY2godmFsdWUpXHJcbiAgICAgICAgc2V0TG9jYXRpb25zKG5ld0xvY2F0aW9ucylcclxuICAgIH1cclxuXHJcbiAgICAvLyB1c2UgYXV0b2NvbXBsZXRlIGNvbXBvbmVudFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZ9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvbkxvY2F0aW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbnM9e2xvY2F0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17ZSA9PiBjb25zb2xlLmxvZyhlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e29uTG9jYXRpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBwbGFjZXMuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmVmaXg9ezxTZWFyY2hPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4PXs8U2VhcmNoT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7bG9jYXRpb25zPy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBsb2NhdGlvbnMubWFwKGxvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGxvY2F0aW9uOiBgLCBsb2NhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24+e2xvY2F0aW9uLm5hbWV9PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5jdXJyZW50IHdlYXRoZXIgZGlzcGxheS9pY29uIGdvZXMgaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5jdXJyZW50IGRhdGUvdGltZSBnb2VzIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+ZGl2aWRlciBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+c21hbGxlciBmb290bm90ZSBkZXRhaWxzIGdvIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIGNsb3NlIG91dCB3aXRoIGltYWdlIG9mIGxvY2F0aW9uICYgdGV4dCBsYWJlbCBpZiBpbWFnZSBpc1xyXG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbnB1dCIsIkF1dG9Db21wbGV0ZSIsIk9wdGlvbiIsIlNlYXJjaE91dGxpbmVkIiwiaGFuZGxlTG9jYXRpb25TZWFyY2giLCJzdHlsZXMiLCJOYXYiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwibG9jYXRpb25zIiwic2V0TG9jYXRpb25zIiwib25Mb2NhdGlvbkNoYW5nZSIsInZhbHVlIiwibmV3TG9jYXRpb25zIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==