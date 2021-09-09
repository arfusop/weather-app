"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleLocationSearch": function() { return /* binding */ handleLocationSearch; },
/* harmony export */   "getForecastData": function() { return /* binding */ getForecastData; }
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
    var request, response;
    return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            request = {
              method: 'GET',
              url: "".concat(BASE_URL, "/search.json?key=").concat("f3dd10a5b85d43bea96181956211608", "&q=").concat(value)
            };
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()(request);

          case 4:
            response = _context.sent;
            return _context.abrupt("return", (response === null || response === void 0 ? void 0 : response.data) || []);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function handleLocationSearch(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getForecastData = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(location) {
    var url, request, response;
    return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            url = decodeURIComponent("".concat(BASE_URL, "/forecase.json?key=").concat("f3dd10a5b85d43bea96181956211608", "&q=").concat(location, "&days=7&aqi=yes&alerts=yes"));
            request = {
              method: 'GET',
              url: url
            };
            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()(request);

          case 5:
            response = _context2.sent;
            return _context2.abrupt("return", (response === null || response === void 0 ? void 0 : response.data) || []);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function getForecastData(_x2) {
    return _ref2.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xYjkzZWRhNWZkNzhlZmExMDZhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1DLFFBQVEsR0FBRyw4QkFBakI7QUFFTyxJQUFNQyxvQkFBb0I7QUFBQSxpVEFBRyxpQkFBTUMsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV0QkMsWUFBQUEsT0FGc0IsR0FFWjtBQUNaQyxjQUFBQSxNQUFNLEVBQUUsS0FESTtBQUVaQyxjQUFBQSxHQUFHLFlBQUtMLFFBQUwsOEJBQWlDTSxpQ0FBakMsZ0JBQWtFSixLQUFsRTtBQUZTLGFBRlk7QUFBQTtBQUFBLG1CQU1MSCw0Q0FBSyxDQUFDSSxPQUFELENBTkE7O0FBQUE7QUFNdEJNLFlBQUFBLFFBTnNCO0FBQUEsNkNBT3JCLENBQUFBLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFQyxJQUFWLEtBQWtCLEVBUEc7O0FBQUE7QUFBQTtBQUFBO0FBUzVCQyxZQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBVDRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXBCWCxvQkFBb0I7QUFBQTtBQUFBO0FBQUEsR0FBMUI7QUFhQSxJQUFNWSxlQUFlO0FBQUEsa1RBQUcsa0JBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFakJULFlBQUFBLEdBRmlCLEdBRVhVLGtCQUFrQixXQUN2QmYsUUFEdUIsZ0NBQ09NLGlDQURQLGdCQUN3Q1EsUUFEeEMsZ0NBRlA7QUFLakJYLFlBQUFBLE9BTGlCLEdBS1A7QUFDWkMsY0FBQUEsTUFBTSxFQUFFLEtBREk7QUFFWkMsY0FBQUEsR0FBRyxFQUFIQTtBQUZZLGFBTE87QUFBQTtBQUFBLG1CQVNBTiw0Q0FBSyxDQUFDSSxPQUFELENBVEw7O0FBQUE7QUFTakJNLFlBQUFBLFFBVGlCO0FBQUEsOENBVWhCLENBQUFBLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFQyxJQUFWLEtBQWtCLEVBVkY7O0FBQUE7QUFBQTtBQUFBO0FBWXZCQyxZQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBWnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWZDLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEnXHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlTG9jYXRpb25TZWFyY2ggPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogYCR7QkFTRV9VUkx9L3NlYXJjaC5qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSX0mcT0ke3ZhbHVlfWBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhyZXF1ZXN0KVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZT8uZGF0YSB8fCBbXVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZvcmVjYXN0RGF0YSA9IGFzeW5jIGxvY2F0aW9uID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gZGVjb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgICAgICAgICBgJHtCQVNFX1VSTH0vZm9yZWNhc2UuanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9JnE9JHtsb2NhdGlvbn0mZGF5cz03JmFxaT15ZXMmYWxlcnRzPXllc2BcclxuICAgICAgICApXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MocmVxdWVzdClcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgfHwgW11cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQkFTRV9VUkwiLCJoYW5kbGVMb2NhdGlvblNlYXJjaCIsInZhbHVlIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0Rm9yZWNhc3REYXRhIiwibG9jYXRpb24iLCJkZWNvZGVVUklDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9