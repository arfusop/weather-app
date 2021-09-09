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
            value: location,
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
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: "current date/time goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: "divider here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: "smaller footnote details go here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: "close out with image of location & text label if image is available"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGNiNjA1MWEzN2ZjMDE1OWYxYmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBUUksTUFBUixHQUFtQkQscURBQW5CO0FBRUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQ2Qsb0JBQXFCTixpREFBVSxDQUFDSSxvREFBRCxDQUEvQjtBQUFBLE1BQVFHLFFBQVIsZUFBUUEsUUFBUjs7QUFDQSxrQkFBa0NSLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9TLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsZ0JBQWdCO0FBQUEsbVRBQUcsaUJBQU1DLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTVIsZ0VBQW9CLENBQUNRLEtBQUQsQ0FEMUI7O0FBQUE7QUFDZkMsY0FBQUEsWUFEZTs7QUFBQSxrQkFFaEJBLFlBRmdCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBR3JCSCxjQUFBQSxZQUFZLENBQUNHLFlBQUQsQ0FBWjs7QUFIcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJGLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFNQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUwsZ0VBQWhCO0FBQUEsNEJBQ0k7QUFBQSw2QkFDSSw4REFBQyw4Q0FBRDtBQUNJLGlCQUFTLEVBQUVBLG1FQURmO0FBRUksZ0JBQVEsRUFBRUssZ0JBRmQ7QUFHSSxnQkFBUSxFQUFFLGtCQUFDQyxLQUFELEVBQVFHLE1BQVI7QUFBQSxpQkFBbUJQLFFBQVEsQ0FBQ1EsTUFBVCxDQUFnQkosS0FBaEIsQ0FBbkI7QUFBQSxTQUhkO0FBSUksbUJBQVcsRUFBQyxzQkFKaEI7QUFBQSxrQkFLS0gsU0FBUyxTQUFULElBQUFBLFNBQVMsV0FBVCxJQUFBQSxTQUFTLENBQUVRLE1BQVgsR0FDS1IsU0FBUyxDQUFDUyxHQUFWLENBQWMsVUFBQVYsUUFBUSxFQUFJO0FBQ3RCLDhCQUNJLDhEQUFDLE1BQUQ7QUFBNEIsaUJBQUssRUFBRUEsUUFBbkM7QUFBQSxzQkFDS0EsUUFBUSxDQUFDVztBQURkLGFBQWFYLFFBQVEsQ0FBQ1csSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQUtILFNBTkQsQ0FETCxHQVFLO0FBYlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQWtCSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCSixlQXNCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCSixlQXVCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCSixlQXdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQStCSCxDQXpDRDs7R0FBTVo7O0tBQUFBO0FBMkNOLCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L05hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXV0b0NvbXBsZXRlIH0gZnJvbSAnYW50ZCdcclxuY29uc3QgeyBPcHRpb24gfSA9IEF1dG9Db21wbGV0ZVxyXG5cclxuaW1wb3J0IHsgaGFuZGxlTG9jYXRpb25TZWFyY2ggfSBmcm9tICcuLi8uLi91dGlscy9hcGknXHJcbmltcG9ydCB7IFdlYXRoZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbG9jYXRpb24gfSA9IHVzZUNvbnRleHQoV2VhdGhlckNvbnRleHQpXHJcbiAgICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3Qgb25Mb2NhdGlvbkNoYW5nZSA9IGFzeW5jIHZhbHVlID0+IHtcclxuICAgICAgICBjb25zdCBuZXdMb2NhdGlvbnMgPSBhd2FpdCBoYW5kbGVMb2NhdGlvblNlYXJjaCh2YWx1ZSlcclxuICAgICAgICBpZiAoIW5ld0xvY2F0aW9ucykgcmV0dXJuXHJcbiAgICAgICAgc2V0TG9jYXRpb25zKG5ld0xvY2F0aW9ucylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBdXRvQ29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e29uTG9jYXRpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyh2YWx1ZSwgb3B0aW9uKSA9PiBsb2NhdGlvbi51cGRhdGUodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBwbGFjZXMuLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICB7bG9jYXRpb25zPy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBsb2NhdGlvbnMubWFwKGxvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtsb2NhdGlvbi5uYW1lfSB2YWx1ZT17bG9jYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0F1dG9Db21wbGV0ZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PmN1cnJlbnQgd2VhdGhlciBkaXNwbGF5L2ljb24gZ29lcyBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PmN1cnJlbnQgZGF0ZS90aW1lIGdvZXMgaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5kaXZpZGVyIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5zbWFsbGVyIGZvb3Rub3RlIGRldGFpbHMgZ28gaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgY2xvc2Ugb3V0IHdpdGggaW1hZ2Ugb2YgbG9jYXRpb24gJiB0ZXh0IGxhYmVsIGlmIGltYWdlIGlzXHJcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJBdXRvQ29tcGxldGUiLCJPcHRpb24iLCJoYW5kbGVMb2NhdGlvblNlYXJjaCIsIldlYXRoZXJDb250ZXh0Iiwic3R5bGVzIiwiTmF2IiwibG9jYXRpb24iLCJsb2NhdGlvbnMiLCJzZXRMb2NhdGlvbnMiLCJvbkxvY2F0aW9uQ2hhbmdlIiwidmFsdWUiLCJuZXdMb2NhdGlvbnMiLCJzZWFyY2giLCJvcHRpb24iLCJ1cGRhdGUiLCJsZW5ndGgiLCJtYXAiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==