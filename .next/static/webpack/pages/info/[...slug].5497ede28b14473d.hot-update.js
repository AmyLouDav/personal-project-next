"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/info/[...slug]",{

/***/ "./pages/info/[...slug].js":
/*!*********************************!*\
  !*** ./pages/info/[...slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/info/[...slug].js\";\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  var _infoData$content, _infoData$content$ima;\n\n  var infoData = _ref.infoData;\n  var data = infoData.content.data;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: infoData.content.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), infoData.content.image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_0___default()), {\n      src: infoData.content.image.url,\n      placeholder: \"\",\n      layout: \"responsive\",\n      width: \"500px\",\n      height: \"400px\",\n      alt: infoData === null || infoData === void 0 ? void 0 : (_infoData$content = infoData.content) === null || _infoData$content === void 0 ? void 0 : (_infoData$content$ima = _infoData$content.image) === null || _infoData$content$ima === void 0 ? void 0 : _infoData$content$ima.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmZvL1suLi5zbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUtlLFNBQVNDLElBQVQsT0FBNEI7RUFBQTs7RUFBQSxJQUFaQyxRQUFZLFFBQVpBLFFBQVk7RUFDekMsSUFBUUMsSUFBUixHQUFpQkQsUUFBUSxDQUFDRSxPQUExQixDQUFRRCxJQUFSO0VBQ0Esb0JBQ0U7SUFBQSx3QkFDRTtNQUFBLFVBQUtBLElBQUksQ0FBQ0U7SUFBVjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsZUFFRTtNQUFBLFVBQUlILFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkU7SUFBckI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUZGLEVBR0dKLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkcsS0FBakIsaUJBQ0MsOERBQUMsbURBQUQ7TUFDRSxHQUFHLEVBQUVMLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkcsS0FBakIsQ0FBdUJDLEdBRDlCO01BRUUsV0FBVyxFQUFDLEVBRmQ7TUFHRSxNQUFNLEVBQUMsWUFIVDtNQUlFLEtBQUssRUFBQyxPQUpSO01BS0UsTUFBTSxFQUFDLE9BTFQ7TUFNRSxHQUFHLEVBQUVOLFFBQUYsYUFBRUEsUUFBRiw0Q0FBRUEsUUFBUSxDQUFFRSxPQUFaLCtFQUFFLGtCQUFtQkcsS0FBckIsMERBQUUsc0JBQTBCRDtJQU5qQztNQUFBO01BQUE7TUFBQTtJQUFBLFFBSko7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFnQkQ7S0FsQnVCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmZvL1suLi5zbHVnXS5qcz85YjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9JbWFnZVwiO1xuXG5jb25zdCBzcGFjZSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQ7XG5jb25zdCBhY2Nlc3NUb2tlbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgaW5mb0RhdGEgfSkge1xuICBjb25zdCB7IGRhdGEgfSA9IGluZm9EYXRhLmNvbnRlbnRcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICA8cD57aW5mb0RhdGEuY29udGVudC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICB7aW5mb0RhdGEuY29udGVudC5pbWFnZSAmJiAoXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17aW5mb0RhdGEuY29udGVudC5pbWFnZS51cmx9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIHdpZHRoPVwiNTAwcHhcIlxuICAgICAgICAgIGhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgICBhbHQ9e2luZm9EYXRhPy5jb250ZW50Py5pbWFnZT8uZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2dyYXBocWwuY29udGVudGZ1bC5jb20vY29udGVudC92MS9zcGFjZXMvJHtzcGFjZX0vZW52aXJvbm1lbnRzL21hc3RlcmAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICBxdWVyeSB7XG4gICAgICAgICAgICBpbmZvUGFnZUNvbGxlY3Rpb257XG4gICAgICAgICAgICAgIGl0ZW1ze1xuICAgICAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgfSksXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgaW5mb1BhZ2VTbHVncyA9IGRhdGEuaW5mb1BhZ2VDb2xsZWN0aW9uLml0ZW1zO1xuICBjb25zdCBwYXRocyA9IGluZm9QYWdlU2x1Z3MubWFwKChwYWdlU2x1ZykgPT4ge1xuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcGFnZVNsdWc7XG4gICAgY29uc3QgZnVsbFNsdWcgPSBgaW5mbyR7c2x1Z31gO1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHsgc2x1ZzogZnVsbFNsdWcuc3BsaXQoXCIvXCIpIH0sXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHNsdWcgPSBgLyR7cGFyYW1zLnNsdWdbMV19YDtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZ3JhcGhxbC5jb250ZW50ZnVsLmNvbS9jb250ZW50L3YxL3NwYWNlcy8ke3NwYWNlfS9lbnZpcm9ubWVudHMvbWFzdGVyYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgICB9LFxuXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgcXVlcnkgR2V0UG9zdCgkc2x1ZzogU3RyaW5nISkge1xuICAgICAgICAgICAgICBpbmZvUGFnZUNvbGxlY3Rpb24oXG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgIHNsdWc6ICRzbHVnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsaW1pdDogMVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICAgICAgICBjb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICBpbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYCxcbiAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIHNsdWcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHJlcyk7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc3QgW2luZm9EYXRhXSA9IGRhdGEuaW5mb1BhZ2VDb2xsZWN0aW9uLml0ZW1zO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGluZm9EYXRhLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlBvc3QiLCJpbmZvRGF0YSIsImRhdGEiLCJjb250ZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/info/[...slug].js\n"));

/***/ })

});