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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/info/[...slug].js\";\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  var _infoData$content, _infoData$content$ima;\n\n  var infoData = _ref.infoData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: infoData.content.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: infoData.content.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), infoData.content.image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_0___default()), {\n      src: infoData.content.image.url,\n      placeholder: \"\",\n      layout: \"responsive\",\n      width: \"1000px\",\n      height: \"\",\n      alt: infoData === null || infoData === void 0 ? void 0 : (_infoData$content = infoData.content) === null || _infoData$content === void 0 ? void 0 : (_infoData$content$ima = _infoData$content.image) === null || _infoData$content$ima === void 0 ? void 0 : _infoData$content$ima.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmZvL1suLi5zbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUtlLFNBQVNDLElBQVQsT0FBNEI7RUFBQTs7RUFBQSxJQUFaQyxRQUFZLFFBQVpBLFFBQVk7RUFDekMsb0JBQ0U7SUFBQSx3QkFDRTtNQUFBLFVBQUtBLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkM7SUFBdEI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBRUU7TUFBQSxVQUFJRixRQUFRLENBQUNDLE9BQVQsQ0FBaUJFO0lBQXJCO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGRixFQUdHSCxRQUFRLENBQUNDLE9BQVQsQ0FBaUJHLEtBQWpCLGlCQUNDLDhEQUFDLG1EQUFEO01BQ0UsR0FBRyxFQUFFSixRQUFRLENBQUNDLE9BQVQsQ0FBaUJHLEtBQWpCLENBQXVCQyxHQUQ5QjtNQUVFLFdBQVcsRUFBQyxFQUZkO01BR0UsTUFBTSxFQUFDLFlBSFQ7TUFJRSxLQUFLLEVBQUMsUUFKUjtNQUtFLE1BQU0sRUFBQyxFQUxUO01BTUUsR0FBRyxFQUFFTCxRQUFGLGFBQUVBLFFBQUYsNENBQUVBLFFBQVEsQ0FBRUMsT0FBWiwrRUFBRSxrQkFBbUJHLEtBQXJCLDBEQUFFLHNCQUEwQkQ7SUFOakM7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUpKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBZ0JEO0tBakJ1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5mby9bLi4uc2x1Z10uanM/OWIzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvSW1hZ2VcIjtcblxuY29uc3Qgc3BhY2UgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX1NQQUNFX0lEO1xuY29uc3QgYWNjZXNzVG9rZW4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IGluZm9EYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPntpbmZvRGF0YS5jb250ZW50LnRpdGxlfTwvaDE+XG4gICAgICA8cD57aW5mb0RhdGEuY29udGVudC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICB7aW5mb0RhdGEuY29udGVudC5pbWFnZSAmJiAoXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17aW5mb0RhdGEuY29udGVudC5pbWFnZS51cmx9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIHdpZHRoPVwiMTAwMHB4XCJcbiAgICAgICAgICBoZWlnaHQ9XCJcIlxuICAgICAgICAgIGFsdD17aW5mb0RhdGE/LmNvbnRlbnQ/LmltYWdlPy5kZXNjcmlwdGlvbn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vZ3JhcGhxbC5jb250ZW50ZnVsLmNvbS9jb250ZW50L3YxL3NwYWNlcy8ke3NwYWNlfS9lbnZpcm9ubWVudHMvbWFzdGVyYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBxdWVyeTogYFxuICAgICAgICAgIHF1ZXJ5IHtcbiAgICAgICAgICAgIGluZm9QYWdlQ29sbGVjdGlvbntcbiAgICAgICAgICAgICAgaXRlbXN7XG4gICAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICB9KSxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zdCBpbmZvUGFnZVNsdWdzID0gZGF0YS5pbmZvUGFnZUNvbGxlY3Rpb24uaXRlbXM7XG4gIGNvbnN0IHBhdGhzID0gaW5mb1BhZ2VTbHVncy5tYXAoKHBhZ2VTbHVnKSA9PiB7XG4gICAgY29uc3QgeyBzbHVnIH0gPSBwYWdlU2x1ZztcbiAgICBjb25zdCBmdWxsU2x1ZyA9IGBpbmZvJHtzbHVnfWA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczogeyBzbHVnOiBmdWxsU2x1Zy5zcGxpdChcIi9cIikgfSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3Qgc2x1ZyA9IGAvJHtwYXJhbXMuc2x1Z1sxXX1gO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9ncmFwaHFsLmNvbnRlbnRmdWwuY29tL2NvbnRlbnQvdjEvc3BhY2VzLyR7c3BhY2V9L2Vudmlyb25tZW50cy9tYXN0ZXJgLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgICAgIH0sXG5cbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICBxdWVyeSBHZXRQb3N0KCRzbHVnOiBTdHJpbmchKSB7XG4gICAgICAgICAgICAgIGluZm9QYWdlQ29sbGVjdGlvbihcbiAgICAgICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgICAgc2x1ZzogJHNsdWdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxpbWl0OiAxXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIGltYWdle1xuICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgLFxuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgc2x1ZyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocmVzKTtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zdCBbaW5mb0RhdGFdID0gZGF0YS5pbmZvUGFnZUNvbGxlY3Rpb24uaXRlbXM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgaW5mb0RhdGEsXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGUpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUG9zdCIsImluZm9EYXRhIiwiY29udGVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/info/[...slug].js\n"));

/***/ })

});