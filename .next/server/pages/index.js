(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

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
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.module.scss */ "./components/layout/layout.module.scss");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\arfus\\apps\\weather-app\\components\\layout\\Nav.js";


const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__.AutoComplete;





const Nav = () => {
  const {
    location
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.WeatherContext);
  const {
    0: locations,
    1: setLocations
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const onLocationChange = async value => {
    const newLocations = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.handleLocationSearch)(value);
    if (!newLocations) return;
    setLocations(newLocations);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("nav", {
    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Nav),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.AutoComplete, {
        className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().search),
        onSearch: onLocationChange,
        onSelect: (value, option) => location.update(value),
        placeholder: "Search for places...",
        children: locations !== null && locations !== void 0 && locations.length ? locations.map(location => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Option, {
            value: location.name,
            children: location.name
          }, location.name, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 35
          }, undefined);
        }) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "current weather display/icon goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "current date/time goes here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "divider here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "smaller footnote details go here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "close out with image of location & text label if image is available"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFaO0FBQ0g7QUFDSixDQVhNOzs7Ozs7Ozs7O0FDSlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9jb21wb25lbnRzL2xheW91dC9Db250ZW50LmpzIiwid2VicGFjazovL2FwcC8uL2NvbXBvbmVudHMvbGF5b3V0L05hdi5qcyIsIndlYnBhY2s6Ly9hcHAvLi9jb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovL2FwcC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2FwcC8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9hcHAvLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXBwL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL2FwcC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxtYWluPmRheS93ZWVrIGZvcmVjYXN0czwvbWFpbj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXV0b0NvbXBsZXRlIH0gZnJvbSAnYW50ZCdcclxuY29uc3QgeyBPcHRpb24gfSA9IEF1dG9Db21wbGV0ZVxyXG5cclxuaW1wb3J0IHsgaGFuZGxlTG9jYXRpb25TZWFyY2ggfSBmcm9tICcuLi8uLi91dGlscy9hcGknXHJcbmltcG9ydCB7IFdlYXRoZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbG9jYXRpb24gfSA9IHVzZUNvbnRleHQoV2VhdGhlckNvbnRleHQpXHJcbiAgICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3Qgb25Mb2NhdGlvbkNoYW5nZSA9IGFzeW5jIHZhbHVlID0+IHtcclxuICAgICAgICBjb25zdCBuZXdMb2NhdGlvbnMgPSBhd2FpdCBoYW5kbGVMb2NhdGlvblNlYXJjaCh2YWx1ZSlcclxuICAgICAgICBpZiAoIW5ld0xvY2F0aW9ucykgcmV0dXJuXHJcbiAgICAgICAgc2V0TG9jYXRpb25zKG5ld0xvY2F0aW9ucylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBdXRvQ29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e29uTG9jYXRpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyh2YWx1ZSwgb3B0aW9uKSA9PiBsb2NhdGlvbi51cGRhdGUodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBwbGFjZXMuLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICB7bG9jYXRpb25zPy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBsb2NhdGlvbnMubWFwKGxvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xvY2F0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xvY2F0aW9uLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0F1dG9Db21wbGV0ZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PmN1cnJlbnQgd2VhdGhlciBkaXNwbGF5L2ljb24gZ29lcyBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PmN1cnJlbnQgZGF0ZS90aW1lIGdvZXMgaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5kaXZpZGVyIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5zbWFsbGVyIGZvb3Rub3RlIGRldGFpbHMgZ28gaGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgY2xvc2Ugb3V0IHdpdGggaW1hZ2Ugb2YgbG9jYXRpb24gJiB0ZXh0IGxhYmVsIGlmIGltYWdlIGlzXHJcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgaGFuZGxlTG9jYXRpb25TZWFyY2ggfSBmcm9tICcuLi91dGlscy9hcGknXHJcblxyXG5leHBvcnQgY29uc3QgV2VhdGhlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXHJcblxyXG5jb25zdCBXZWF0aGVyQ29udGV4dFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3Qgb25Mb2NhdGlvblNlbGVjdGlvbiA9IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICAgICAgLy8gcXVlcnkgbG9jYXRpb24sIHNldFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGB2YWx1ZTogYCwgdmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coYG9wdGlvbjogYCwgb3B0aW9uKVxyXG4gICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlTG9jYXRpb25TZWFyY2godmFsdWUpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHJlc3BvbnNlOiBgLCByZXNwb25zZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXZWF0aGVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHsgdXBkYXRlOiBvbkxvY2F0aW9uU2VsZWN0aW9uLCBkYXRhOiBsb2NhdGlvbiB9XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9XZWF0aGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckNvbnRleHRXcmFwcGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9OYXYnXHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0NvbnRlbnQnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYXRoZXJIb21lXCI+XHJcbiAgICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgICAgPENvbnRlbnQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvY2F0aW9uU2VhcmNoID0gYXN5bmMgdmFsdWUgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGAke0JBU0VfVVJMfS9zZWFyY2guanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9JnE9JHt2YWx1ZX1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MocmVxdWVzdClcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgfHwgW11cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTmF2XCI6IFwibGF5b3V0X05hdl9fb016TTRcIixcblx0XCJzZWFyY2hcIjogXCJsYXlvdXRfc2VhcmNoX18zMnZwZlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGVudCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkF1dG9Db21wbGV0ZSIsIk9wdGlvbiIsImhhbmRsZUxvY2F0aW9uU2VhcmNoIiwiV2VhdGhlckNvbnRleHQiLCJzdHlsZXMiLCJOYXYiLCJsb2NhdGlvbiIsImxvY2F0aW9ucyIsInNldExvY2F0aW9ucyIsIm9uTG9jYXRpb25DaGFuZ2UiLCJ2YWx1ZSIsIm5ld0xvY2F0aW9ucyIsInNlYXJjaCIsIm9wdGlvbiIsInVwZGF0ZSIsImxlbmd0aCIsIm1hcCIsIm5hbWUiLCJjcmVhdGVDb250ZXh0IiwiV2VhdGhlckNvbnRleHRXcmFwcGVyIiwiY2hpbGRyZW4iLCJzZXRMb2NhdGlvbiIsIm9uTG9jYXRpb25TZWxlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIkhvbWUiLCJheGlvcyIsIkJBU0VfVVJMIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJyZXNwb25zZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==