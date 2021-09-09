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
/* harmony export */   "getForecastData": function() { return /* binding */ getForecastData; },
/* harmony export */   "getAstronomyData": function() { return /* binding */ getAstronomyData; }
/* harmony export */ });
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
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
            url = "".concat(BASE_URL, "/forecast.json?key=").concat("f3dd10a5b85d43bea96181956211608", "&q=").concat(location, "&days=7&aqi=yes&alerts=yes");
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
            return _context2.abrupt("return", _context2.t0);

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
var getAstronomyData = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(location) {
    var day, url, request, response;
    return C_Users_arfus_apps_weather_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            day = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date(), 'yyyy-MM-dd');
            url = "".concat(BASE_URL, "/astronomy.json?key=").concat("f3dd10a5b85d43bea96181956211608", "&q=").concat(location, "&dt=").concat(day);
            request = {
              method: 'GET',
              url: url
            };
            _context3.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()(request);

          case 6:
            response = _context3.sent;
            return _context3.abrupt("return", (response === null || response === void 0 ? void 0 : response.data) || []);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function getAstronomyData(_x3) {
    return _ref3.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hNTMzOTUyYjg3ZTcyOWUxYWI1MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNRSxRQUFRLEdBQUcsOEJBQWpCO0FBRU8sSUFBTUMsb0JBQW9CO0FBQUEsaVRBQUcsaUJBQU1DLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFdEJDLFlBQUFBLE9BRnNCLEdBRVo7QUFDWkMsY0FBQUEsTUFBTSxFQUFFLEtBREk7QUFFWkMsY0FBQUEsR0FBRyxZQUFLTCxRQUFMLDhCQUFpQ00saUNBQWpDLGdCQUFrRUosS0FBbEU7QUFGUyxhQUZZO0FBQUE7QUFBQSxtQkFNTEosNENBQUssQ0FBQ0ssT0FBRCxDQU5BOztBQUFBO0FBTXRCTSxZQUFBQSxRQU5zQjtBQUFBLDZDQU9yQixDQUFBQSxRQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLFlBQUFBLFFBQVEsQ0FBRUMsSUFBVixLQUFrQixFQVBHOztBQUFBO0FBQUE7QUFBQTtBQVM1QkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSOztBQVQ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFwQlgsb0JBQW9CO0FBQUE7QUFBQTtBQUFBLEdBQTFCO0FBYUEsSUFBTVksZUFBZTtBQUFBLGtUQUFHLGtCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWpCVCxZQUFBQSxHQUZpQixhQUVSTCxRQUZRLGdDQUVzQk0saUNBRnRCLGdCQUV1RFEsUUFGdkQ7QUFJakJYLFlBQUFBLE9BSmlCLEdBSVA7QUFDWkMsY0FBQUEsTUFBTSxFQUFFLEtBREk7QUFFWkMsY0FBQUEsR0FBRyxFQUFIQTtBQUZZLGFBSk87QUFBQTtBQUFBLG1CQVFBUCw0Q0FBSyxDQUFDSyxPQUFELENBUkw7O0FBQUE7QUFRakJNLFlBQUFBLFFBUmlCO0FBQUEsOENBVWhCLENBQUFBLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFQyxJQUFWLEtBQWtCLEVBVkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZkcsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjtBQWdCQSxJQUFNRSxnQkFBZ0I7QUFBQSxrVEFBRyxrQkFBTUQsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVsQkUsWUFBQUEsR0FGa0IsR0FFWmpCLGdEQUFNLENBQUMsSUFBSWtCLElBQUosRUFBRCxFQUFhLFlBQWIsQ0FGTTtBQUdsQlosWUFBQUEsR0FIa0IsYUFHVEwsUUFIUyxpQ0FHc0JNLGlDQUh0QixnQkFHdURRLFFBSHZELGlCQUdzRUUsR0FIdEU7QUFLbEJiLFlBQUFBLE9BTGtCLEdBS1I7QUFDWkMsY0FBQUEsTUFBTSxFQUFFLEtBREk7QUFFWkMsY0FBQUEsR0FBRyxFQUFIQTtBQUZZLGFBTFE7QUFBQTtBQUFBLG1CQVNEUCw0Q0FBSyxDQUFDSyxPQUFELENBVEo7O0FBQUE7QUFTbEJNLFlBQUFBLFFBVGtCO0FBQUEsOENBV2pCLENBQUFBLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFQyxJQUFWLEtBQWtCLEVBWEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJLLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9hcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEnXHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlTG9jYXRpb25TZWFyY2ggPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogYCR7QkFTRV9VUkx9L3NlYXJjaC5qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSX0mcT0ke3ZhbHVlfWBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhyZXF1ZXN0KVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZT8uZGF0YSB8fCBbXVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZvcmVjYXN0RGF0YSA9IGFzeW5jIGxvY2F0aW9uID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7QkFTRV9VUkx9L2ZvcmVjYXN0Lmpzb24/a2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJfSZxPSR7bG9jYXRpb259JmRheXM9NyZhcWk9eWVzJmFsZXJ0cz15ZXNgXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHJlcXVlc3QpXHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZT8uZGF0YSB8fCBbXVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFzdHJvbm9teURhdGEgPSBhc3luYyBsb2NhdGlvbiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRheSA9IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpXHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7QkFTRV9VUkx9L2FzdHJvbm9teS5qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSX0mcT0ke2xvY2F0aW9ufSZkdD0ke2RheX1gXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHJlcXVlc3QpXHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZT8uZGF0YSB8fCBbXVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJmb3JtYXQiLCJCQVNFX1VSTCIsImhhbmRsZUxvY2F0aW9uU2VhcmNoIiwidmFsdWUiLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRGb3JlY2FzdERhdGEiLCJsb2NhdGlvbiIsImdldEFzdHJvbm9teURhdGEiLCJkYXkiLCJEYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==