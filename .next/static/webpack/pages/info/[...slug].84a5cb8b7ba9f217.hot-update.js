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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/info/[...slug].js\";\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  var _content$image;\n\n  var infoData = _ref.infoData;\n  var content = infoData.content;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: content.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), content.image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_0___default()), {\n      src: content.image.url,\n      placeholder: \"\",\n      layout: \"responsive\",\n      width: \"500px\",\n      height: \"400px\",\n      alt: content === null || content === void 0 ? void 0 : (_content$image = content.image) === null || _content$image === void 0 ? void 0 : _content$image.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: content.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmZvL1suLi5zbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUtlLFNBQVNDLElBQVQsT0FBNEI7RUFBQTs7RUFBQSxJQUFaQyxRQUFZLFFBQVpBLFFBQVk7RUFDekMsSUFBUUMsT0FBUixHQUFvQkQsUUFBcEIsQ0FBUUMsT0FBUjtFQUNBLG9CQUNFO0lBQUEsd0JBQ0U7TUFBQSxVQUFLQSxPQUFPLENBQUNDO0lBQWI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLEVBR0dELE9BQU8sQ0FBQ0UsS0FBUixpQkFDQyw4REFBQyxtREFBRDtNQUNFLEdBQUcsRUFBRUYsT0FBTyxDQUFDRSxLQUFSLENBQWNDLEdBRHJCO01BRUUsV0FBVyxFQUFDLEVBRmQ7TUFHRSxNQUFNLEVBQUMsWUFIVDtNQUlFLEtBQUssRUFBQyxPQUpSO01BS0UsTUFBTSxFQUFDLE9BTFQ7TUFNRSxHQUFHLEVBQUVILE9BQUYsYUFBRUEsT0FBRix5Q0FBRUEsT0FBTyxDQUFFRSxLQUFYLG1EQUFFLGVBQWdCRTtJQU52QjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBSkosZUFhRTtNQUFBLFVBQUlKLE9BQU8sQ0FBQ0k7SUFBWjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBYkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFpQkQ7S0FuQnVCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmZvL1suLi5zbHVnXS5qcz85YjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9JbWFnZVwiO1xuXG5jb25zdCBzcGFjZSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQ7XG5jb25zdCBhY2Nlc3NUb2tlbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgaW5mb0RhdGEgfSkge1xuICBjb25zdCB7IGNvbnRlbnQgfSA9IGluZm9EYXRhO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2NvbnRlbnQudGl0bGV9PC9oMT5cblxuICAgICAge2NvbnRlbnQuaW1hZ2UgJiYgKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e2NvbnRlbnQuaW1hZ2UudXJsfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICB3aWR0aD1cIjUwMHB4XCJcbiAgICAgICAgICBoZWlnaHQ9XCI0MDBweFwiXG4gICAgICAgICAgYWx0PXtjb250ZW50Py5pbWFnZT8uZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPHA+e2NvbnRlbnQuZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9ncmFwaHFsLmNvbnRlbnRmdWwuY29tL2NvbnRlbnQvdjEvc3BhY2VzLyR7c3BhY2V9L2Vudmlyb25tZW50cy9tYXN0ZXJgLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgIHF1ZXJ5IHtcbiAgICAgICAgICAgIGluZm9QYWdlQ29sbGVjdGlvbntcbiAgICAgICAgICAgICAgaXRlbXN7XG4gICAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICAgIH0pLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc3QgaW5mb1BhZ2VTbHVncyA9IGRhdGEuaW5mb1BhZ2VDb2xsZWN0aW9uLml0ZW1zO1xuICAgIGNvbnN0IHBhdGhzID0gaW5mb1BhZ2VTbHVncy5tYXAoKHBhZ2VTbHVnKSA9PiB7XG4gICAgICBjb25zdCB7IHNsdWcgfSA9IHBhZ2VTbHVnO1xuICAgICAgY29uc3QgZnVsbFNsdWcgPSBgaW5mbyR7c2x1Z31gO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHsgc2x1ZzogZnVsbFNsdWcuc3BsaXQoXCIvXCIpIH0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGhzLFxuICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGUpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBzbHVnID0gYC8ke3BhcmFtcy5zbHVnWzFdfWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2dyYXBocWwuY29udGVudGZ1bC5jb20vY29udGVudC92MS9zcGFjZXMvJHtzcGFjZX0vZW52aXJvbm1lbnRzL21hc3RlcmAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgICAgfSxcblxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgIHF1ZXJ5IEdldFBvc3QoJHNsdWc6IFN0cmluZyEpIHtcbiAgICAgICAgICAgICAgaW5mb1BhZ2VDb2xsZWN0aW9uKFxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgICBzbHVnOiAkc2x1Z1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGltaXQ6IDFcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGAsXG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBzbHVnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgY29uc29sZS5lcnJvcihyZXMpO1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnN0IFtpbmZvRGF0YV0gPSBkYXRhLmluZm9QYWdlQ29sbGVjdGlvbi5pdGVtcztcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBpbmZvRGF0YSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJQb3N0IiwiaW5mb0RhdGEiLCJjb250ZW50IiwidGl0bGUiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/info/[...slug].js\n"));

/***/ })

});