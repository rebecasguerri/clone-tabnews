"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/v1/status";
exports.ids = ["pages/api/v1/status"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./infra/database.js":
/*!***************************!*\
  !*** ./infra/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    await client.connect(); //This command is asynchronous, it needs to go to the database to actually connect, so we use await at the beginning and async when declaring the function\n    const result = await client.query(queryObject);\n    await client.end();\n    return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQ2hDLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BLENBQUM7UUFDeEJJLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUMvQkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQy9CQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7UUFDL0JDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztRQUNqQ0MsVUFBVVQsUUFBUUMsR0FBRyxDQUFDUyxpQkFBaUI7SUFDekM7SUFDQSxNQUFNWixPQUFPYSxPQUFPLElBQUksMEpBQTBKO0lBQ2xMLE1BQU1DLFNBQVMsTUFBTWQsT0FBT0YsS0FBSyxDQUFDQztJQUNsQyxNQUFNQyxPQUFPZSxHQUFHO0lBQ2hCLE9BQU9EO0FBQ1Q7QUFDQSxpRUFBZTtJQUNiaEIsT0FBT0E7QUFDVCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZS10YWJuZXdzLy4vaW5mcmEvZGF0YWJhc2UuanM/ZTM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwicGdcIjtcblxuYXN5bmMgZnVuY3Rpb24gcXVlcnkocXVlcnlPYmplY3QpIHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7XG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfSE9TVCxcbiAgICBwb3J0OiBwcm9jZXNzLmVudi5QT1NUR1JFU19QT1JULFxuICAgIHVzZXI6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1VTRVIsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlBPU1RHUkVTX0RCLFxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QT1NUR1JFU19QQVNTV09SRCxcbiAgfSk7XG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7IC8vVGhpcyBjb21tYW5kIGlzIGFzeW5jaHJvbm91cywgaXQgbmVlZHMgdG8gZ28gdG8gdGhlIGRhdGFiYXNlIHRvIGFjdHVhbGx5IGNvbm5lY3QsIHNvIHdlIHVzZSBhd2FpdCBhdCB0aGUgYmVnaW5uaW5nIGFuZCBhc3luYyB3aGVuIGRlY2xhcmluZyB0aGUgZnVuY3Rpb25cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHF1ZXJ5T2JqZWN0KTtcbiAgYXdhaXQgY2xpZW50LmVuZCgpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGRlZmF1bHQge1xuICBxdWVyeTogcXVlcnksXG59O1xuIl0sIm5hbWVzIjpbIkNsaWVudCIsInF1ZXJ5IiwicXVlcnlPYmplY3QiLCJjbGllbnQiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIlBPU1RHUkVTX0hPU1QiLCJwb3J0IiwiUE9TVEdSRVNfUE9SVCIsInVzZXIiLCJQT1NUR1JFU19VU0VSIiwiZGF0YWJhc2UiLCJQT1NUR1JFU19EQiIsInBhc3N3b3JkIiwiUE9TVEdSRVNfUEFTU1dPUkQiLCJjb25uZWN0IiwicmVzdWx0IiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../infra/database.js */ \"(api)/./infra/database.js\");\n\nasync function status(request, response) {\n    const result = await _infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SELECT 1+1 as sum;\");\n    console.log(result.rows);\n    response.status(200).json({\n        chave: \"s\\xe3o acima da media\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status); //request its about bringing something from outside\n // response its about what we want respond to outside\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFEO0FBRXJELGVBQWVDLE9BQU9DLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU1DLFNBQVMsTUFBTUosZ0VBQWMsQ0FBQztJQUNwQ00sUUFBUUMsR0FBRyxDQUFDSCxPQUFPSSxJQUFJO0lBQ3ZCTCxTQUFTRixNQUFNLENBQUMsS0FBS1EsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBcUI7QUFDMUQ7QUFDQSxpRUFBZVQsTUFBTUEsRUFBQyxDQUN0QixtREFBbUQ7Q0FDbkQscURBQXFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL3BhZ2VzL2FwaS92MS9zdGF0dXMvaW5kZXguanM/ODRkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YWJhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL2luZnJhL2RhdGFiYXNlLmpzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXR1cyhyZXF1ZXN0LCByZXNwb25zZSkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYXRhYmFzZS5xdWVyeShcIlNFTEVDVCAxKzEgYXMgc3VtO1wiKTtcbiAgY29uc29sZS5sb2cocmVzdWx0LnJvd3MpO1xuICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHsgY2hhdmU6IFwic8OjbyBhY2ltYSBkYSBtZWRpYVwiIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RhdHVzO1xuLy9yZXF1ZXN0IGl0cyBhYm91dCBicmluZ2luZyBzb21ldGhpbmcgZnJvbSBvdXRzaWRlXG4vLyByZXNwb25zZSBpdHMgYWJvdXQgd2hhdCB3ZSB3YW50IHJlc3BvbmQgdG8gb3V0c2lkZVxuIl0sIm5hbWVzIjpbImRhdGFiYXNlIiwic3RhdHVzIiwicmVxdWVzdCIsInJlc3BvbnNlIiwicmVzdWx0IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicm93cyIsImpzb24iLCJjaGF2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/status/index.js"));
module.exports = __webpack_exports__;

})();