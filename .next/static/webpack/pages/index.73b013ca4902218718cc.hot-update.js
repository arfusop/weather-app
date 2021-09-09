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
            lineNumber: 44,
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
        lineNumber: 53,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: "current date/time goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "divider here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "smaller footnote details go here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "close out with image of location & text label if image is available"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzNiMDEzY2E0OTAyMjE4NzE4Y2MuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFRSSxNQUFSLEdBQW1CRCxxREFBbkI7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLElBQU1LLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFDZCxrQkFBZ0NQLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWtDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPVSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLE1BQU1DLGdCQUFnQjtBQUFBLG1UQUFHLGlCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRU1SLGdFQUFvQixDQUFDUSxLQUFELENBRjFCOztBQUFBO0FBRWZDLGNBQUFBLFlBRmU7O0FBQUEsa0JBR2hCQSxZQUhnQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUlyQkgsY0FBQUEsWUFBWSxDQUFDRyxZQUFELENBQVo7O0FBSnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCRixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEIsQ0FKYyxDQVdkOzs7QUFDQUcsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGdCQUEyQk4sU0FBM0I7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUosZ0VBQWhCO0FBQUEsNEJBQ0k7QUFBQSw2QkFDSSw4REFBQyw4Q0FBRDtBQUNJLGdCQUFRLEVBQUVNLGdCQURkLENBRUk7QUFGSjtBQUdJLGFBQUssRUFBRTtBQUNISyxVQUFBQSxLQUFLLEVBQUU7QUFESixTQUhYO0FBTUksZ0JBQVEsRUFBRSxrQkFBQUMsQ0FBQztBQUFBLGlCQUFJSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsQ0FBWixDQUFKO0FBQUEsU0FOZjtBQU9JLG1CQUFXLEVBQUMsc0JBUGhCO0FBQUEsa0JBZUtSLFNBQVMsU0FBVCxJQUFBQSxTQUFTLFdBQVQsSUFBQUEsU0FBUyxDQUFFUyxNQUFYLEdBQ0tULFNBQVMsQ0FBQ1UsR0FBVixDQUFjLFVBQUFaLFFBQVEsRUFBSTtBQUN0Qk8sVUFBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQTBCUixRQUExQjtBQUNBLDhCQUNJLDhEQUFDLE1BQUQ7QUFBUSxpQkFBSyxFQUFFQSxRQUFRLENBQUNhLElBQXhCO0FBQUEsc0JBQ0tiLFFBQVEsQ0FBQ2E7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBS0gsU0FQRCxDQURMLEdBU0s7QUF4QlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQTZCSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCSixlQWlDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDSixlQWtDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxDSixlQW1DSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBDSCxDQXZERDs7R0FBTWQ7O0tBQUFBO0FBeUROLCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L05hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXQsIEF1dG9Db21wbGV0ZSB9IGZyb20gJ2FudGQnXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBBdXRvQ29tcGxldGVcclxuaW1wb3J0IHsgU2VhcmNoT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuXHJcbmltcG9ydCB7IGhhbmRsZUxvY2F0aW9uU2VhcmNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IG9uTG9jYXRpb25DaGFuZ2UgPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgLy8gc2V0TG9jYXRpb24odmFsdWUpXHJcbiAgICAgICAgY29uc3QgbmV3TG9jYXRpb25zID0gYXdhaXQgaGFuZGxlTG9jYXRpb25TZWFyY2godmFsdWUpXHJcbiAgICAgICAgaWYgKCFuZXdMb2NhdGlvbnMpIHJldHVyblxyXG4gICAgICAgIHNldExvY2F0aW9ucyhuZXdMb2NhdGlvbnMpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlIGF1dG9jb21wbGV0ZSBjb21wb25lbnRcclxuICAgIGNvbnNvbGUubG9nKGBsb2NhdGlvbnM6IGAsIGxvY2F0aW9ucylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZ9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvbkxvY2F0aW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbnM9e2xvY2F0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17ZSA9PiBjb25zb2xlLmxvZyhlKX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgcGxhY2VzLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtvbkxvY2F0aW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgcGxhY2VzLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJlZml4PXs8U2VhcmNoT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1ZmZpeD17PFNlYXJjaE91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbnM/Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGxvY2F0aW9ucy5tYXAobG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbG9jYXRpb246IGAsIGxvY2F0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17bG9jYXRpb24ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2F0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Y3VycmVudCB3ZWF0aGVyIGRpc3BsYXkvaWNvbiBnb2VzIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Y3VycmVudCBkYXRlL3RpbWUgZ29lcyBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PmRpdmlkZXIgaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PnNtYWxsZXIgZm9vdG5vdGUgZGV0YWlscyBnbyBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBjbG9zZSBvdXQgd2l0aCBpbWFnZSBvZiBsb2NhdGlvbiAmIHRleHQgbGFiZWwgaWYgaW1hZ2UgaXNcclxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW5wdXQiLCJBdXRvQ29tcGxldGUiLCJPcHRpb24iLCJTZWFyY2hPdXRsaW5lZCIsImhhbmRsZUxvY2F0aW9uU2VhcmNoIiwic3R5bGVzIiwiTmF2IiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImxvY2F0aW9ucyIsInNldExvY2F0aW9ucyIsIm9uTG9jYXRpb25DaGFuZ2UiLCJ2YWx1ZSIsIm5ld0xvY2F0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImUiLCJsZW5ndGgiLCJtYXAiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==