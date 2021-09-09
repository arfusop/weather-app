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
        onSearch: onLocationChange // options={locations}
        ,
        style: {
          width: 200
        },
        onSelect: function onSelect(e) {
          return console.log(e);
        },
        placeholder: "Search for places...",
        children: locations !== null && locations !== void 0 && locations.length ? locations.map(function (location) {
          console.log("location: ", location);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Option, {
            value: location.name,
            children: location.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzViYTk4ZTkyM2ViZGE3ZjMzYjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFRSSxNQUFSLEdBQW1CRCxxREFBbkI7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLElBQU1LLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFDZCxrQkFBZ0NQLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWtDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPVSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLE1BQU1DLGdCQUFnQjtBQUFBLG1UQUFHLGlCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ01SLGdFQUFvQixDQUFDUSxLQUFELENBRDFCOztBQUFBO0FBQ2ZDLGNBQUFBLFlBRGU7O0FBQUEsa0JBRWhCQSxZQUZnQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUdyQkgsY0FBQUEsWUFBWSxDQUFDRyxZQUFELENBQVo7O0FBSHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCRixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBTUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVOLGdFQUFoQjtBQUFBLDRCQUNJO0FBQUEsNkJBQ0ksOERBQUMsOENBQUQ7QUFDSSxpQkFBUyxFQUFFQSxtRUFEZjtBQUVJLGdCQUFRLEVBQUVNLGdCQUZkLENBR0k7QUFISjtBQUlJLGFBQUssRUFBRTtBQUNISSxVQUFBQSxLQUFLLEVBQUU7QUFESixTQUpYO0FBT0ksZ0JBQVEsRUFBRSxrQkFBQUMsQ0FBQztBQUFBLGlCQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWixDQUFKO0FBQUEsU0FQZjtBQVFJLG1CQUFXLEVBQUMsc0JBUmhCO0FBQUEsa0JBU0tQLFNBQVMsU0FBVCxJQUFBQSxTQUFTLFdBQVQsSUFBQUEsU0FBUyxDQUFFVSxNQUFYLEdBQ0tWLFNBQVMsQ0FBQ1csR0FBVixDQUFjLFVBQUFiLFFBQVEsRUFBSTtBQUN0QlUsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQTBCWCxRQUExQjtBQUNBLDhCQUNJLDhEQUFDLE1BQUQ7QUFBUSxpQkFBSyxFQUFFQSxRQUFRLENBQUNjLElBQXhCO0FBQUEsc0JBQ0tkLFFBQVEsQ0FBQ2M7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBS0gsU0FQRCxDQURMLEdBU0s7QUFsQlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQXVCSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCSixlQTJCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCSixlQTRCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVCSixlQTZCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9DSCxDQTlDRDs7R0FBTWY7O0tBQUFBO0FBZ0ROLCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L05hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXQsIEF1dG9Db21wbGV0ZSB9IGZyb20gJ2FudGQnXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBBdXRvQ29tcGxldGVcclxuaW1wb3J0IHsgU2VhcmNoT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuXHJcbmltcG9ydCB7IGhhbmRsZUxvY2F0aW9uU2VhcmNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IG9uTG9jYXRpb25DaGFuZ2UgPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TG9jYXRpb25zID0gYXdhaXQgaGFuZGxlTG9jYXRpb25TZWFyY2godmFsdWUpXHJcbiAgICAgICAgaWYgKCFuZXdMb2NhdGlvbnMpIHJldHVyblxyXG4gICAgICAgIHNldExvY2F0aW9ucyhuZXdMb2NhdGlvbnMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLk5hdn0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvbkxvY2F0aW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbnM9e2xvY2F0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17ZSA9PiBjb25zb2xlLmxvZyhlKX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgcGxhY2VzLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvY2F0aW9ucz8ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbG9jYXRpb25zLm1hcChsb2NhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBsb2NhdGlvbjogYCwgbG9jYXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtsb2NhdGlvbi5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9jYXRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5jdXJyZW50IHdlYXRoZXIgZGlzcGxheS9pY29uIGdvZXMgaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5jdXJyZW50IGRhdGUvdGltZSBnb2VzIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+ZGl2aWRlciBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+c21hbGxlciBmb290bm90ZSBkZXRhaWxzIGdvIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIGNsb3NlIG91dCB3aXRoIGltYWdlIG9mIGxvY2F0aW9uICYgdGV4dCBsYWJlbCBpZiBpbWFnZSBpc1xyXG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbnB1dCIsIkF1dG9Db21wbGV0ZSIsIk9wdGlvbiIsIlNlYXJjaE91dGxpbmVkIiwiaGFuZGxlTG9jYXRpb25TZWFyY2giLCJzdHlsZXMiLCJOYXYiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwibG9jYXRpb25zIiwic2V0TG9jYXRpb25zIiwib25Mb2NhdGlvbkNoYW5nZSIsInZhbHVlIiwibmV3TG9jYXRpb25zIiwic2VhcmNoIiwid2lkdGgiLCJlIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9