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
  }(); // use autocomplete component


  console.log("locations: ", locations);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().Nav),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.AutoComplete, {
        onSearch: onLocationChange // options={locations}
        ,
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
            lineNumber: 41,
            columnNumber: 35
          }, _this);
        }) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: "current weather display/icon goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: "current date/time goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "divider here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "smaller footnote details go here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "close out with image of location & text label if image is available"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzY2MjUyMWQ1NzUxMzQ5ODIyNWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFRSSxNQUFSLEdBQW1CRCxxREFBbkI7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLElBQU1LLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFDZCxrQkFBZ0NQLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWtDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPVSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLE1BQU1DLGdCQUFnQjtBQUFBLG1UQUFHLGlCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRU1SLGdFQUFvQixDQUFDUSxLQUFELENBRjFCOztBQUFBO0FBRWZDLGNBQUFBLFlBRmU7O0FBQUEsa0JBR2hCQSxZQUhnQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUlyQkgsY0FBQUEsWUFBWSxDQUFDRyxZQUFELENBQVo7O0FBSnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCRixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEIsQ0FKYyxDQVdkOzs7QUFDQUcsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGdCQUEyQk4sU0FBM0I7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUosZ0VBQWhCO0FBQUEsNEJBQ0k7QUFBQSw2QkFDSSw4REFBQyw4Q0FBRDtBQUNJLGdCQUFRLEVBQUVNLGdCQURkLENBRUk7QUFGSjtBQUdJLGdCQUFRLEVBQUUsa0JBQUFLLENBQUM7QUFBQSxpQkFBSUYsT0FBTyxDQUFDQyxHQUFSLENBQVlDLENBQVosQ0FBSjtBQUFBLFNBSGY7QUFJSSxtQkFBVyxFQUFDLHNCQUpoQjtBQUFBLGtCQVlLUCxTQUFTLFNBQVQsSUFBQUEsU0FBUyxXQUFULElBQUFBLFNBQVMsQ0FBRVEsTUFBWCxHQUNLUixTQUFTLENBQUNTLEdBQVYsQ0FBYyxVQUFBWCxRQUFRLEVBQUk7QUFDdEJPLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUEwQlIsUUFBMUI7QUFDQSw4QkFDSSw4REFBQyxNQUFEO0FBQVEsaUJBQUssRUFBRUEsUUFBUSxDQUFDWSxJQUF4QjtBQUFBLHNCQUNLWixRQUFRLENBQUNZO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQUtILFNBUEQsQ0FETCxHQVNLO0FBckJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUEwQkk7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkosZUE4Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5QkosZUErQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvQkosZUFnQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1Q0gsQ0FwREQ7O0dBQU1iOztLQUFBQTtBQXNETiwrREFBZUEsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9OYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElucHV0LCBBdXRvQ29tcGxldGUgfSBmcm9tICdhbnRkJ1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gQXV0b0NvbXBsZXRlXHJcbmltcG9ydCB7IFNlYXJjaE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcblxyXG5pbXBvcnQgeyBoYW5kbGVMb2NhdGlvblNlYXJjaCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtsb2NhdGlvbnMsIHNldExvY2F0aW9uc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBvbkxvY2F0aW9uQ2hhbmdlID0gYXN5bmMgdmFsdWUgPT4ge1xyXG4gICAgICAgIC8vIHNldExvY2F0aW9uKHZhbHVlKVxyXG4gICAgICAgIGNvbnN0IG5ld0xvY2F0aW9ucyA9IGF3YWl0IGhhbmRsZUxvY2F0aW9uU2VhcmNoKHZhbHVlKVxyXG4gICAgICAgIGlmICghbmV3TG9jYXRpb25zKSByZXR1cm5cclxuICAgICAgICBzZXRMb2NhdGlvbnMobmV3TG9jYXRpb25zKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVzZSBhdXRvY29tcGxldGUgY29tcG9uZW50XHJcbiAgICBjb25zb2xlLmxvZyhgbG9jYXRpb25zOiBgLCBsb2NhdGlvbnMpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBdXRvQ29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17b25Mb2NhdGlvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25zPXtsb2NhdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e2UgPT4gY29uc29sZS5sb2coZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHBsYWNlcy4uLlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17b25Mb2NhdGlvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHBsYWNlcy4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZWZpeD17PFNlYXJjaE91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWZmaXg9ezxTZWFyY2hPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7bG9jYXRpb25zPy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBsb2NhdGlvbnMubWFwKGxvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGxvY2F0aW9uOiBgLCBsb2NhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xvY2F0aW9uLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0F1dG9Db21wbGV0ZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PmN1cnJlbnQgd2VhdGhlciBkaXNwbGF5L2ljb24gZ29lcyBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PmN1cnJlbnQgZGF0ZS90aW1lIGdvZXMgaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5kaXZpZGVyIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5zbWFsbGVyIGZvb3Rub3RlIGRldGFpbHMgZ28gaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgY2xvc2Ugb3V0IHdpdGggaW1hZ2Ugb2YgbG9jYXRpb24gJiB0ZXh0IGxhYmVsIGlmIGltYWdlIGlzXHJcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIklucHV0IiwiQXV0b0NvbXBsZXRlIiwiT3B0aW9uIiwiU2VhcmNoT3V0bGluZWQiLCJoYW5kbGVMb2NhdGlvblNlYXJjaCIsInN0eWxlcyIsIk5hdiIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJsb2NhdGlvbnMiLCJzZXRMb2NhdGlvbnMiLCJvbkxvY2F0aW9uQ2hhbmdlIiwidmFsdWUiLCJuZXdMb2NhdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZSIsImxlbmd0aCIsIm1hcCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9