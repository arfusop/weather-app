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
  const {
    0: current,
    1: setCurrent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: weatherAlerts,
    1: setWeatherAlerts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: forecast,
    1: setForecast
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: astronomy,
    1: setAstronomy
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // implement error alerts

  const onLocationSelection = async value => {
    try {
      const city = value.split(',')[0];
      const forecastRes = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.getForecastData)(city);
      const astronomyRes = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.getAstronomyData)(city);
      setLocation(forecastRes.location);
      setCurrent(forecastRes.current);
      setWeatherAlerts(forecastRes.alerts);
      setForecast(forecastRes.forecast);
      setAstronomy(astronomyRes.astronomy);
    } catch (error) {
      // trigger off alert -> forecast data could not be reached
      console.log(error);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(WeatherContext.Provider, {
    value: {
      location: {
        update: onLocationSelection,
        data: location
      },
      current,
      weatherAlerts,
      forecast,
      astronomy
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
/* harmony export */   "handleLocationSearch": () => (/* binding */ handleLocationSearch),
/* harmony export */   "getForecastData": () => (/* binding */ getForecastData),
/* harmony export */   "getAstronomyData": () => (/* binding */ getAstronomyData)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


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
const getForecastData = async location => {
  try {
    const url = `${BASE_URL}/forecast.json?key=${"f3dd10a5b85d43bea96181956211608"}&q=${location}&days=7&aqi=yes&alerts=yes`;
    const request = {
      method: 'GET',
      url
    };
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(request);
    return (response === null || response === void 0 ? void 0 : response.data) || [];
  } catch (error) {
    return error;
  }
};
const getAstronomyData = async location => {
  try {
    const day = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(), 'yyyy-MM-dd');
    const url = `${BASE_URL}/astronomy.json?key=${"f3dd10a5b85d43bea96181956211608"}&q=${location}&dt=${day}`;
    const request = {
      method: 'GET',
      url
    };
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(request);
    return (response === null || response === void 0 ? void 0 : response.data) || [];
  } catch (error) {
    return error;
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

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEdBQUcsTUFBTVYsNENBQUssQ0FBQ0ksT0FBRCxDQUE1QjtBQUVBLFdBQU8sQ0FBQU0sUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUViLElBQVYsS0FBa0IsRUFBekI7QUFDSCxHQVhELENBV0UsT0FBT0osS0FBUCxFQUFjO0FBQ1osV0FBT0EsS0FBUDtBQUNIO0FBQ0osQ0FmTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDUDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL2NvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXBwLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9hcHAvLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vYXBwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9hcHAvZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovL2FwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGdldEZvcmVjYXN0RGF0YSwgZ2V0QXN0cm9ub215RGF0YSB9IGZyb20gJy4uL3V0aWxzL2FwaSdcclxuXHJcbmV4cG9ydCBjb25zdCBXZWF0aGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbClcclxuXHJcbmNvbnN0IFdlYXRoZXJDb250ZXh0V3JhcHBlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbd2VhdGhlckFsZXJ0cywgc2V0V2VhdGhlckFsZXJ0c10gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2ZvcmVjYXN0LCBzZXRGb3JlY2FzdF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2FzdHJvbm9teSwgc2V0QXN0cm9ub215XSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgLy8gaW1wbGVtZW50IGVycm9yIGFsZXJ0c1xyXG5cclxuICAgIGNvbnN0IG9uTG9jYXRpb25TZWxlY3Rpb24gPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgY2l0eSA9IHZhbHVlLnNwbGl0KCcsJylbMF1cclxuICAgICAgICAgICAgY29uc3QgZm9yZWNhc3RSZXMgPSBhd2FpdCBnZXRGb3JlY2FzdERhdGEoY2l0eSlcclxuICAgICAgICAgICAgY29uc3QgYXN0cm9ub215UmVzID0gYXdhaXQgZ2V0QXN0cm9ub215RGF0YShjaXR5KVxyXG5cclxuICAgICAgICAgICAgc2V0TG9jYXRpb24oZm9yZWNhc3RSZXMubG9jYXRpb24pXHJcbiAgICAgICAgICAgIHNldEN1cnJlbnQoZm9yZWNhc3RSZXMuY3VycmVudClcclxuICAgICAgICAgICAgc2V0V2VhdGhlckFsZXJ0cyhmb3JlY2FzdFJlcy5hbGVydHMpXHJcbiAgICAgICAgICAgIHNldEZvcmVjYXN0KGZvcmVjYXN0UmVzLmZvcmVjYXN0KVxyXG4gICAgICAgICAgICBzZXRBc3Ryb25vbXkoYXN0cm9ub215UmVzLmFzdHJvbm9teSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIG9mZiBhbGVydCAtPiBmb3JlY2FzdCBkYXRhIGNvdWxkIG5vdCBiZSByZWFjaGVkXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXZWF0aGVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHsgdXBkYXRlOiBvbkxvY2F0aW9uU2VsZWN0aW9uLCBkYXRhOiBsb2NhdGlvbiB9LFxyXG4gICAgICAgICAgICAgICAgY3VycmVudCxcclxuICAgICAgICAgICAgICAgIHdlYXRoZXJBbGVydHMsXHJcbiAgICAgICAgICAgICAgICBmb3JlY2FzdCxcclxuICAgICAgICAgICAgICAgIGFzdHJvbm9teVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvV2VhdGhlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJDb250ZXh0V3JhcHBlclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXZWF0aGVyQ29udGV4dFdyYXBwZXIgZnJvbSAnLi4vY29udGV4dCdcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnXHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2VhdGhlckNvbnRleHRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC9XZWF0aGVyQ29udGV4dFdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5cclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MSdcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVMb2NhdGlvblNlYXJjaCA9IGFzeW5jIHZhbHVlID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBgJHtCQVNFX1VSTH0vc2VhcmNoLmpzb24/a2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJfSZxPSR7dmFsdWV9YFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHJlcXVlc3QpXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlPy5kYXRhIHx8IFtdXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9yZWNhc3REYXRhID0gYXN5bmMgbG9jYXRpb24gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1VSTH0vZm9yZWNhc3QuanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9JnE9JHtsb2NhdGlvbn0mZGF5cz03JmFxaT15ZXMmYWxlcnRzPXllc2BcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MocmVxdWVzdClcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlPy5kYXRhIHx8IFtdXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QXN0cm9ub215RGF0YSA9IGFzeW5jIGxvY2F0aW9uID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF5ID0gZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJylcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1VSTH0vYXN0cm9ub215Lmpzb24/a2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJfSZxPSR7bG9jYXRpb259JmR0PSR7ZGF5fWBcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MocmVxdWVzdClcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlPy5kYXRhIHx8IFtdXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJnZXRGb3JlY2FzdERhdGEiLCJnZXRBc3Ryb25vbXlEYXRhIiwiV2VhdGhlckNvbnRleHQiLCJXZWF0aGVyQ29udGV4dFdyYXBwZXIiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsIndlYXRoZXJBbGVydHMiLCJzZXRXZWF0aGVyQWxlcnRzIiwiZm9yZWNhc3QiLCJzZXRGb3JlY2FzdCIsImFzdHJvbm9teSIsInNldEFzdHJvbm9teSIsIm9uTG9jYXRpb25TZWxlY3Rpb24iLCJ2YWx1ZSIsImNpdHkiLCJzcGxpdCIsImZvcmVjYXN0UmVzIiwiYXN0cm9ub215UmVzIiwiYWxlcnRzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiZGF0YSIsIkFwcCIsIkNvbXBvbmVudCIsImF4aW9zIiwiZm9ybWF0IiwiQkFTRV9VUkwiLCJoYW5kbGVMb2NhdGlvblNlYXJjaCIsInJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwicmVzcG9uc2UiLCJkYXkiLCJEYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==