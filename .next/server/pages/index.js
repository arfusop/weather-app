(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/current/index.js":
/*!*************************************!*\
  !*** ./components/current/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var _Current_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Current.module.scss */ "./components/current/Current.module.scss");
/* harmony import */ var _Current_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Current_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\arfus\\apps\\weather-app\\components\\current\\index.js";





const CurrentWeather = () => {
  const {
    current,
    location,
    forecast
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.WeatherContext);
  console.log(`current: `, current);
  console.log(`location: `, location);
  console.log(`forecast: `, forecast);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_Current_module_scss__WEBPACK_IMPORTED_MODULE_3___default().CurrentWeather),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: "current weather display/icon goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: "current date/time goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_Current_module_scss__WEBPACK_IMPORTED_MODULE_3___default().divider)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [current.condition.text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: current.condition.icon,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [location.data.name, ", ", location.data.region, ",", ' ', location.data.country]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentWeather);

/***/ }),

/***/ "./components/layout/Content.js":
/*!**************************************!*\
  !*** ./components/layout/Content.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\arfus\\apps\\weather-app\\components\\layout\\Content.js";



const Content = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("main", {
    children: "day/week forecasts"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./components/layout/Nav.js":
/*!**********************************!*\
  !*** ./components/layout/Nav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _current__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../current */ "./components/current/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.module.scss */ "./components/layout/layout.module.scss");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\arfus\\apps\\weather-app\\components\\layout\\Nav.js";


const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__.AutoComplete;






const Nav = () => {
  const {
    location
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.WeatherContext);
  const {
    0: locations,
    1: setLocations
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const onLocationChange = async value => {
    const newLocations = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.handleLocationSearch)(value);
    if (!newLocations) return;
    setLocations(newLocations);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().Nav),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.AutoComplete, {
      className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().search),
      onSearch: onLocationChange,
      onSelect: value => location.update(value),
      placeholder: "Search for places...",
      children: locations !== null && locations !== void 0 && locations.length ? locations.map(location => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Option, {
          value: location.name,
          children: location.name
        }, location.name, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 31
        }, undefined);
      }) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_current__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Nav */ "./components/layout/Nav.js");
/* harmony import */ var _components_layout_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Content */ "./components/layout/Content.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\arfus\\apps\\weather-app\\pages\\index.js";





const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "WeatherHome",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_layout_Nav__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_layout_Content__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ "./components/current/Current.module.scss":
/*!************************************************!*\
  !*** ./components/current/Current.module.scss ***!
  \************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"CurrentWeather": "Current_CurrentWeather__IVi-Y",
	"divider": "Current_divider__2Gj-f"
};


/***/ }),

/***/ "./components/layout/layout.module.scss":
/*!**********************************************!*\
  !*** ./components/layout/layout.module.scss ***!
  \**********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"Nav": "layout_Nav__oMzM4",
	"search": "layout_search__32vpf"
};


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNaLFdBQU9BLEtBQVA7QUFDSDtBQUNKLENBZE07QUFnQkEsTUFBTWhCLGdCQUFnQixHQUFHLE1BQU03QixRQUFOLElBQWtCO0FBQzlDLE1BQUk7QUFDQSxVQUFNeUQsR0FBRyxHQUFHVCxnREFBTSxDQUFDLElBQUlVLElBQUosRUFBRCxFQUFhLFlBQWIsQ0FBbEI7QUFDQSxVQUFNTixHQUFHLEdBQUksR0FBRUgsUUFBUyx1QkFBc0JJLGlDQUE0QixNQUFLckQsUUFBUyxPQUFNeUQsR0FBSSxFQUFsRztBQUVBLFVBQU1QLE9BQU8sR0FBRztBQUNaQyxNQUFBQSxNQUFNLEVBQUUsS0FESTtBQUVaQyxNQUFBQTtBQUZZLEtBQWhCO0FBSUEsVUFBTUksUUFBUSxHQUFHLE1BQU1ULDRDQUFLLENBQUNHLE9BQUQsQ0FBNUI7QUFFQSxXQUFPLENBQUFNLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFaEQsSUFBVixLQUFrQixFQUF6QjtBQUNILEdBWEQsQ0FXRSxPQUFPcUMsS0FBUCxFQUFjO0FBQ1osV0FBT0EsS0FBUDtBQUNIO0FBQ0osQ0FmTTs7Ozs7Ozs7OztBQ2xDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vY29tcG9uZW50cy9jdXJyZW50L2luZGV4LmpzIiwid2VicGFjazovL2FwcC8uL2NvbXBvbmVudHMvbGF5b3V0L0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2LmpzIiwid2VicGFjazovL2FwcC8uL2NvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXBwLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXBwLy4vdXRpbHMvYXBpLmpzIiwid2VicGFjazovL2FwcC8uL2NvbXBvbmVudHMvY3VycmVudC9DdXJyZW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2FwcC8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9hcHAvZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vYXBwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9hcHAvZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovL2FwcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgV2VhdGhlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ3VycmVudC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IEN1cnJlbnRXZWF0aGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjdXJyZW50LCBsb2NhdGlvbiwgZm9yZWNhc3QgfSA9IHVzZUNvbnRleHQoV2VhdGhlckNvbnRleHQpXHJcbiAgICBjb25zb2xlLmxvZyhgY3VycmVudDogYCwgY3VycmVudClcclxuICAgIGNvbnNvbGUubG9nKGBsb2NhdGlvbjogYCwgbG9jYXRpb24pXHJcbiAgICBjb25zb2xlLmxvZyhgZm9yZWNhc3Q6IGAsIGZvcmVjYXN0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkN1cnJlbnRXZWF0aGVyfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Y3VycmVudCB3ZWF0aGVyIGRpc3BsYXkvaWNvbiBnb2VzIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Y3VycmVudCBkYXRlL3RpbWUgZ29lcyBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdj5kaXZpZGVyIGhlcmU8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlcn0gLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50LmNvbmRpdGlvbi50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2N1cnJlbnQuY29uZGl0aW9uLmljb259IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2xvY2F0aW9uLmRhdGEubmFtZX0sIHtsb2NhdGlvbi5kYXRhLnJlZ2lvbn0seycgJ31cclxuICAgICAgICAgICAgICAgIHtsb2NhdGlvbi5kYXRhLmNvdW50cnl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50V2VhdGhlclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxtYWluPmRheS93ZWVrIGZvcmVjYXN0czwvbWFpbj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXV0b0NvbXBsZXRlIH0gZnJvbSAnYW50ZCdcclxuY29uc3QgeyBPcHRpb24gfSA9IEF1dG9Db21wbGV0ZVxyXG5cclxuaW1wb3J0IEN1cnJlbnRXZWF0aGVyIGZyb20gJy4uL2N1cnJlbnQnXHJcbmltcG9ydCB7IGhhbmRsZUxvY2F0aW9uU2VhcmNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJ1xyXG5pbXBvcnQgeyBXZWF0aGVyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB1c2VDb250ZXh0KFdlYXRoZXJDb250ZXh0KVxyXG4gICAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IG9uTG9jYXRpb25DaGFuZ2UgPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TG9jYXRpb25zID0gYXdhaXQgaGFuZGxlTG9jYXRpb25TZWFyY2godmFsdWUpXHJcbiAgICAgICAgaWYgKCFuZXdMb2NhdGlvbnMpIHJldHVyblxyXG4gICAgICAgIHNldExvY2F0aW9ucyhuZXdMb2NhdGlvbnMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLk5hdn0+XHJcbiAgICAgICAgICAgIDxBdXRvQ29tcGxldGVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH1cclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvbkxvY2F0aW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e3ZhbHVlID0+IGxvY2F0aW9uLnVwZGF0ZSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgcGxhY2VzLi4uXCI+XHJcbiAgICAgICAgICAgICAgICB7bG9jYXRpb25zPy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICA/IGxvY2F0aW9ucy5tYXAobG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtsb2NhdGlvbi5uYW1lfSB2YWx1ZT17bG9jYXRpb24ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9jYXRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICAgICAgICA8Q3VycmVudFdlYXRoZXIgLz5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZXRGb3JlY2FzdERhdGEsIGdldEFzdHJvbm9teURhdGEgfSBmcm9tICcuLi91dGlscy9hcGknXHJcblxyXG5leHBvcnQgY29uc3QgV2VhdGhlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXHJcblxyXG5jb25zdCBXZWF0aGVyQ29udGV4dFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW3dlYXRoZXJBbGVydHMsIHNldFdlYXRoZXJBbGVydHNdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtmb3JlY2FzdCwgc2V0Rm9yZWNhc3RdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFthc3Ryb25vbXksIHNldEFzdHJvbm9teV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIC8vIGltcGxlbWVudCBlcnJvciBhbGVydHNcclxuXHJcbiAgICBjb25zdCBvbkxvY2F0aW9uU2VsZWN0aW9uID0gYXN5bmMgdmFsdWUgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNpdHkgPSB2YWx1ZS5zcGxpdCgnLCcpWzBdXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0UmVzID0gYXdhaXQgZ2V0Rm9yZWNhc3REYXRhKGNpdHkpXHJcbiAgICAgICAgICAgIGNvbnN0IGFzdHJvbm9teVJlcyA9IGF3YWl0IGdldEFzdHJvbm9teURhdGEoY2l0eSlcclxuXHJcbiAgICAgICAgICAgIHNldExvY2F0aW9uKGZvcmVjYXN0UmVzLmxvY2F0aW9uKVxyXG4gICAgICAgICAgICBzZXRDdXJyZW50KGZvcmVjYXN0UmVzLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIHNldFdlYXRoZXJBbGVydHMoZm9yZWNhc3RSZXMuYWxlcnRzKVxyXG4gICAgICAgICAgICBzZXRGb3JlY2FzdChmb3JlY2FzdFJlcy5mb3JlY2FzdClcclxuICAgICAgICAgICAgc2V0QXN0cm9ub215KGFzdHJvbm9teVJlcy5hc3Ryb25vbXkpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gdHJpZ2dlciBvZmYgYWxlcnQgLT4gZm9yZWNhc3QgZGF0YSBjb3VsZCBub3QgYmUgcmVhY2hlZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V2VhdGhlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7IHVwZGF0ZTogb25Mb2NhdGlvblNlbGVjdGlvbiwgZGF0YTogbG9jYXRpb24gfSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyQWxlcnRzLFxyXG4gICAgICAgICAgICAgICAgZm9yZWNhc3QsXHJcbiAgICAgICAgICAgICAgICBhc3Ryb25vbXlcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1dlYXRoZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyQ29udGV4dFdyYXBwZXJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L05hdidcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvQ29udGVudCdcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiV2VhdGhlckhvbWVcIj5cclxuICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICA8Q29udGVudCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXHJcblxyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvY2F0aW9uU2VhcmNoID0gYXN5bmMgdmFsdWUgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGAke0JBU0VfVVJMfS9zZWFyY2guanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9JnE9JHt2YWx1ZX1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MocmVxdWVzdClcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgfHwgW11cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGb3JlY2FzdERhdGEgPSBhc3luYyBsb2NhdGlvbiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke0JBU0VfVVJMfS9mb3JlY2FzdC5qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSX0mcT0ke2xvY2F0aW9ufSZkYXlzPTcmYXFpPXllcyZhbGVydHM9eWVzYFxyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhyZXF1ZXN0KVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgfHwgW11cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBc3Ryb25vbXlEYXRhID0gYXN5bmMgbG9jYXRpb24gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXkgPSBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKVxyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke0JBU0VfVVJMfS9hc3Ryb25vbXkuanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9JnE9JHtsb2NhdGlvbn0mZHQ9JHtkYXl9YFxyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhyZXF1ZXN0KVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgfHwgW11cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ3VycmVudFdlYXRoZXJcIjogXCJDdXJyZW50X0N1cnJlbnRXZWF0aGVyX19JVmktWVwiLFxuXHRcImRpdmlkZXJcIjogXCJDdXJyZW50X2RpdmlkZXJfXzJHai1mXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJOYXZcIjogXCJsYXlvdXRfTmF2X19vTXpNNFwiLFxuXHRcInNlYXJjaFwiOiBcImxheW91dF9zZWFyY2hfXzMydnBmXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiV2VhdGhlckNvbnRleHQiLCJzdHlsZXMiLCJDdXJyZW50V2VhdGhlciIsImN1cnJlbnQiLCJsb2NhdGlvbiIsImZvcmVjYXN0IiwiY29uc29sZSIsImxvZyIsImRpdmlkZXIiLCJjb25kaXRpb24iLCJ0ZXh0IiwiaWNvbiIsImRhdGEiLCJuYW1lIiwicmVnaW9uIiwiY291bnRyeSIsIkNvbnRlbnQiLCJ1c2VTdGF0ZSIsIkF1dG9Db21wbGV0ZSIsIk9wdGlvbiIsImhhbmRsZUxvY2F0aW9uU2VhcmNoIiwiTmF2IiwibG9jYXRpb25zIiwic2V0TG9jYXRpb25zIiwib25Mb2NhdGlvbkNoYW5nZSIsInZhbHVlIiwibmV3TG9jYXRpb25zIiwic2VhcmNoIiwidXBkYXRlIiwibGVuZ3RoIiwibWFwIiwiY3JlYXRlQ29udGV4dCIsImdldEZvcmVjYXN0RGF0YSIsImdldEFzdHJvbm9teURhdGEiLCJXZWF0aGVyQ29udGV4dFdyYXBwZXIiLCJjaGlsZHJlbiIsInNldExvY2F0aW9uIiwic2V0Q3VycmVudCIsIndlYXRoZXJBbGVydHMiLCJzZXRXZWF0aGVyQWxlcnRzIiwic2V0Rm9yZWNhc3QiLCJhc3Ryb25vbXkiLCJzZXRBc3Ryb25vbXkiLCJvbkxvY2F0aW9uU2VsZWN0aW9uIiwiY2l0eSIsInNwbGl0IiwiZm9yZWNhc3RSZXMiLCJhc3Ryb25vbXlSZXMiLCJhbGVydHMiLCJlcnJvciIsIkhvbWUiLCJheGlvcyIsImZvcm1hdCIsIkJBU0VfVVJMIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJyZXNwb25zZSIsImRheSIsIkRhdGUiXSwic291cmNlUm9vdCI6IiJ9