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
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.module.scss */ "./components/layout/layout.module.scss");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\arfus\\apps\\weather-app\\components\\layout\\Nav.js",
    _this = undefined,
    _s = $RefreshSig$();




var Option = antd__WEBPACK_IMPORTED_MODULE_3__.AutoComplete.Option;





var Nav = function Nav() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.WeatherContext),
      location = _useContext.location;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      locations = _useState[0],
      setLocations = _useState[1];

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("nav", {
    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Nav),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.AutoComplete, {
        className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_7___default().search),
        onSearch: onLocationChange,
        onSelect: function onSelect(value, option) {
          return location.update(value);
        },
        placeholder: "Search for places...",
        children: locations !== null && locations !== void 0 && locations.length ? locations.map(function (location) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Option, {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: "current weather display/icon goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: "divider here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: "smaller footnote details go here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
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

_s(Nav, "l/YwXsnILpvBq+JRzEWbhha4tpg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDk2MWJlNjRmYjNhMGRjNGQ0YjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBUUksTUFBUixHQUFtQkQscURBQW5CO0FBRUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQ2Qsb0JBQXFCTixpREFBVSxDQUFDSSxvREFBRCxDQUEvQjtBQUFBLE1BQVFHLFFBQVIsZUFBUUEsUUFBUjs7QUFDQSxrQkFBa0NSLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9TLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsZ0JBQWdCO0FBQUEsbVRBQUcsaUJBQU1DLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTVIsZ0VBQW9CLENBQUNRLEtBQUQsQ0FEMUI7O0FBQUE7QUFDZkMsY0FBQUEsWUFEZTs7QUFBQSxrQkFFaEJBLFlBRmdCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBR3JCSCxjQUFBQSxZQUFZLENBQUNHLFlBQUQsQ0FBWjs7QUFIcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJGLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFNQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUwsZ0VBQWhCO0FBQUEsNEJBQ0k7QUFBQSw2QkFDSSw4REFBQyw4Q0FBRDtBQUNJLGlCQUFTLEVBQUVBLG1FQURmO0FBRUksZ0JBQVEsRUFBRUssZ0JBRmQ7QUFHSSxnQkFBUSxFQUFFLGtCQUFDQyxLQUFELEVBQVFHLE1BQVI7QUFBQSxpQkFBbUJQLFFBQVEsQ0FBQ1EsTUFBVCxDQUFnQkosS0FBaEIsQ0FBbkI7QUFBQSxTQUhkO0FBSUksbUJBQVcsRUFBQyxzQkFKaEI7QUFBQSxrQkFLS0gsU0FBUyxTQUFULElBQUFBLFNBQVMsV0FBVCxJQUFBQSxTQUFTLENBQUVRLE1BQVgsR0FDS1IsU0FBUyxDQUFDUyxHQUFWLENBQWMsVUFBQVYsUUFBUSxFQUFJO0FBQ3RCLDhCQUNJLDhEQUFDLE1BQUQ7QUFFSSxpQkFBSyxFQUFFQSxRQUFRLENBQUNXLElBRnBCO0FBQUEsc0JBR0tYLFFBQVEsQ0FBQ1c7QUFIZCxhQUNTWCxRQUFRLENBQUNXLElBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFPSCxTQVJELENBREwsR0FVSztBQWZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFvQkk7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkosZUF3Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkosZUF5Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QkosZUEwQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQ0gsQ0EzQ0Q7O0dBQU1aOztLQUFBQTtBQTZDTiwrREFBZUEsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9OYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSB9IGZyb20gJ2FudGQnXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBBdXRvQ29tcGxldGVcclxuXHJcbmltcG9ydCB7IGhhbmRsZUxvY2F0aW9uU2VhcmNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQgeyBXZWF0aGVyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB1c2VDb250ZXh0KFdlYXRoZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IG9uTG9jYXRpb25DaGFuZ2UgPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TG9jYXRpb25zID0gYXdhaXQgaGFuZGxlTG9jYXRpb25TZWFyY2godmFsdWUpXHJcbiAgICAgICAgaWYgKCFuZXdMb2NhdGlvbnMpIHJldHVyblxyXG4gICAgICAgIHNldExvY2F0aW9ucyhuZXdMb2NhdGlvbnMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLk5hdn0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvbkxvY2F0aW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsodmFsdWUsIG9wdGlvbikgPT4gbG9jYXRpb24udXBkYXRlKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgcGxhY2VzLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvY2F0aW9ucz8ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbG9jYXRpb25zLm1hcChsb2NhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2NhdGlvbi5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9jYXRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5jdXJyZW50IHdlYXRoZXIgZGlzcGxheS9pY29uIGdvZXMgaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5jdXJyZW50IGRhdGUvdGltZSBnb2VzIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+ZGl2aWRlciBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+c21hbGxlciBmb290bm90ZSBkZXRhaWxzIGdvIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIGNsb3NlIG91dCB3aXRoIGltYWdlIG9mIGxvY2F0aW9uICYgdGV4dCBsYWJlbCBpZiBpbWFnZSBpc1xyXG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiQXV0b0NvbXBsZXRlIiwiT3B0aW9uIiwiaGFuZGxlTG9jYXRpb25TZWFyY2giLCJXZWF0aGVyQ29udGV4dCIsInN0eWxlcyIsIk5hdiIsImxvY2F0aW9uIiwibG9jYXRpb25zIiwic2V0TG9jYXRpb25zIiwib25Mb2NhdGlvbkNoYW5nZSIsInZhbHVlIiwibmV3TG9jYXRpb25zIiwic2VhcmNoIiwib3B0aW9uIiwidXBkYXRlIiwibGVuZ3RoIiwibWFwIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=