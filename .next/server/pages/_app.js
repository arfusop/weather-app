(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherContext": () => (/* binding */ WeatherContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\arfus\\apps\\weather-app\\context\\index.js";



const WeatherContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

const WeatherContextWrapper = ({
  children
}) => {
  const {
    0: location,
    1: setLocation
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const onLocationSelection = async (value, option) => {
    // query location, set
    console.log(`value: `, value);
    console.log(`option: `, option); // const response = await handleLocationSearch(value)
    // console.log(`response: `, response)
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(WeatherContext.Provider, {
    value: {
      location: {
        update: onLocationSelection,
        data: location
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherContextWrapper);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.scss */ "./styles/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\arfus\\apps\\weather-app\\pages\\_app.js";






const App = ({
  Component
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleLocationSearch": () => (/* binding */ handleLocationSearch)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const BASE_URL = 'http://api.weatherapi.com/v1';
const handleLocationSearch = async value => {
  try {
    const request = {
      method: 'GET',
      url: `${BASE_URL}/search.json?key=${"f3dd10a5b85d43bea96181956211608"}&q=${value}`
    };
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(request);
    return (response === null || response === void 0 ? void 0 : response.data) || [];
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVPLE1BQU1JLGNBQWMsZ0JBQUdGLG9EQUFhLENBQUMsSUFBRCxDQUFwQzs7QUFFUCxNQUFNRyxxQkFBcUIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQjtBQUM1QyxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJQLCtDQUFRLENBQUMsSUFBRCxDQUF4Qzs7QUFFQSxRQUFNUSxtQkFBbUIsR0FBRyxPQUFPQyxLQUFQLEVBQWNDLE1BQWQsS0FBeUI7QUFDakQ7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsU0FBYixFQUF1QkgsS0FBdkI7QUFDQUUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBYixFQUF3QkYsTUFBeEIsRUFIaUQsQ0FJakQ7QUFDQTtBQUNILEdBTkQ7O0FBUUEsc0JBQ0ksOERBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUNJLFNBQUssRUFBRTtBQUNISixNQUFBQSxRQUFRLEVBQUU7QUFBRU8sUUFBQUEsTUFBTSxFQUFFTCxtQkFBVjtBQUErQk0sUUFBQUEsSUFBSSxFQUFFUjtBQUFyQztBQURQLEtBRFg7QUFBQSxjQUlLRDtBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFILENBbkJEOztBQXFCQSxpRUFBZUQscUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBRUE7OztBQUVBLE1BQU1XLEdBQUcsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFtQjtBQUMzQixzQkFDSSw4REFBQyw2Q0FBRDtBQUFBLDJCQUNJLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBTkQ7O0FBUUEsaUVBQWVELEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFQSxNQUFNRyxRQUFRLEdBQUcsOEJBQWpCO0FBRU8sTUFBTWhCLG9CQUFvQixHQUFHLE1BQU1PLEtBQU4sSUFBZTtBQUMvQyxNQUFJO0FBQ0EsVUFBTVUsT0FBTyxHQUFHO0FBQ1pDLE1BQUFBLE1BQU0sRUFBRSxLQURJO0FBRVpDLE1BQUFBLEdBQUcsRUFBRyxHQUFFSCxRQUFTLG9CQUFtQkksaUNBQTRCLE1BQUtiLEtBQU07QUFGL0QsS0FBaEI7QUFJQSxVQUFNZ0IsUUFBUSxHQUFHLE1BQU1SLDRDQUFLLENBQUNFLE9BQUQsQ0FBNUI7QUFDQSxXQUFPLENBQUFNLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFWCxJQUFWLEtBQWtCLEVBQXpCO0FBQ0gsR0FQRCxDQU9FLE9BQU9ZLEtBQVAsRUFBYztBQUNaZixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWMsS0FBWjtBQUNIO0FBQ0osQ0FYTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pQOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vY29udGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2FwcC8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9hcHAvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2FwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGhhbmRsZUxvY2F0aW9uU2VhcmNoIH0gZnJvbSAnLi4vdXRpbHMvYXBpJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFdlYXRoZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxyXG5cclxuY29uc3QgV2VhdGhlckNvbnRleHRXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IG9uTG9jYXRpb25TZWxlY3Rpb24gPSBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgIC8vIHF1ZXJ5IGxvY2F0aW9uLCBzZXRcclxuICAgICAgICBjb25zb2xlLmxvZyhgdmFsdWU6IGAsIHZhbHVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBvcHRpb246IGAsIG9wdGlvbilcclxuICAgICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZUxvY2F0aW9uU2VhcmNoKHZhbHVlKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGByZXNwb25zZTogYCwgcmVzcG9uc2UpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2VhdGhlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7IHVwZGF0ZTogb25Mb2NhdGlvblNlbGVjdGlvbiwgZGF0YTogbG9jYXRpb24gfVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvV2VhdGhlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJDb250ZXh0V3JhcHBlclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXZWF0aGVyQ29udGV4dFdyYXBwZXIgZnJvbSAnLi4vY29udGV4dCdcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnXHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2VhdGhlckNvbnRleHRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9XZWF0aGVyQ29udGV4dFdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvY2F0aW9uU2VhcmNoID0gYXN5bmMgdmFsdWUgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGAke0JBU0VfVVJMfS9zZWFyY2guanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9JnE9JHt2YWx1ZX1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MocmVxdWVzdClcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgfHwgW11cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsImhhbmRsZUxvY2F0aW9uU2VhcmNoIiwiV2VhdGhlckNvbnRleHQiLCJXZWF0aGVyQ29udGV4dFdyYXBwZXIiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJvbkxvY2F0aW9uU2VsZWN0aW9uIiwidmFsdWUiLCJvcHRpb24iLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiZGF0YSIsIkFwcCIsIkNvbXBvbmVudCIsImF4aW9zIiwiQkFTRV9VUkwiLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsInJlc3BvbnNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9