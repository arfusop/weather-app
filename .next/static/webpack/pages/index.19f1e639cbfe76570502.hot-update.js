"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleLocationSearch": function() { return /* binding */ handleLocationSearch; }
/* harmony export */ });
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var BASE_URL = 'http://api.weatherapi.com/v1';
var handleLocationSearch = /*#__PURE__*/function () {
  var _ref = (0,C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(value) {
    var request, locations;
    return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log("value: ", value);
            request = {
              method: 'GET',
              url: "".concat(BASE_URL, "/search.json?key=").concat("f3dd10a5b85d43bea96181956211608", "&q=").concat(value)
            };
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()(request);

          case 5:
            locations = _context.sent;
            console.log("locations: ", locations);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function handleLocationSearch(_x) {
    return _ref.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTlmMWU2MzljYmZlNzY1NzA1MDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1DLFFBQVEsR0FBRyw4QkFBakI7QUFFTyxJQUFNQyxvQkFBb0I7QUFBQSxpVEFBRyxpQkFBTUMsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUU1QkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLFlBQXVCRixLQUF2QjtBQUNNRyxZQUFBQSxPQUhzQixHQUdaO0FBQ1pDLGNBQUFBLE1BQU0sRUFBRSxLQURJO0FBRVpDLGNBQUFBLEdBQUcsWUFBS1AsUUFBTCw4QkFBaUNRLGlDQUFqQyxnQkFBa0VOLEtBQWxFO0FBRlMsYUFIWTtBQUFBO0FBQUEsbUJBT0pILDRDQUFLLENBQUNNLE9BQUQsQ0FQRDs7QUFBQTtBQU90Qk0sWUFBQUEsU0FQc0I7QUFRNUJSLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBMkJPLFNBQTNCO0FBUjRCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVTVCUixZQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBVjRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXBCSCxvQkFBb0I7QUFBQTtBQUFBO0FBQUEsR0FBMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEnXHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlTG9jYXRpb25TZWFyY2ggPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGB2YWx1ZTogYCwgdmFsdWUpXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBgJHtCQVNFX1VSTH0vc2VhcmNoLmpzb24/a2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJfSZxPSR7dmFsdWV9YFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBheGlvcyhyZXF1ZXN0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBsb2NhdGlvbnM6IGAsIGxvY2F0aW9ucylcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQkFTRV9VUkwiLCJoYW5kbGVMb2NhdGlvblNlYXJjaCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwibG9jYXRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==