"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[...slug]",{

/***/ "./pages/posts/[...slug].js":
/*!**********************************!*\
  !*** ./pages/posts/[...slug].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var _components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/nav-bar/nav-bar */ \"./components/nav-bar/nav-bar.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _blog_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.styles */ \"./pages/posts/blog.styles.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/posts/[...slug].js\";\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  var blogData = _ref.blogData;\n  var _blogData$content = blogData.content,\n      title = _blogData$content.title,\n      description = _blogData$content.description,\n      url = _blogData$content.image.url;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_blog_styles__WEBPACK_IMPORTED_MODULE_2__.StyledH1, {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), url && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: url,\n      placeholder: \"\",\n      layout: \"responsive\",\n      width: \"500px\",\n      height: \"400px\",\n      alt: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bLi4uc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLZSxTQUFTSSxJQUFULE9BQTRCO0VBQUEsSUFBWkMsUUFBWSxRQUFaQSxRQUFZO0VBQ3pDLHdCQU1JQSxRQU5KLENBQ0VDLE9BREY7RUFBQSxJQUVJQyxLQUZKLHFCQUVJQSxLQUZKO0VBQUEsSUFHSUMsV0FISixxQkFHSUEsV0FISjtFQUFBLElBSWFDLEdBSmIscUJBSUlDLEtBSkosQ0FJYUQsR0FKYjtFQVFBLG9CQUNFO0lBQUEsd0JBQ0UsOERBQUMsbUVBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBRUUsOERBQUMsa0RBQUQ7TUFBQSxVQUFXRjtJQUFYO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGRixFQUlHRSxHQUFHLGlCQUNGLDhEQUFDLG1EQUFEO01BQ0UsR0FBRyxFQUFFQSxHQURQO01BRUUsV0FBVyxFQUFDLEVBRmQ7TUFHRSxNQUFNLEVBQUMsWUFIVDtNQUlFLEtBQUssRUFBQyxPQUpSO01BS0UsTUFBTSxFQUFDLE9BTFQ7TUFNRSxHQUFHLEVBQUVEO0lBTlA7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUxKLGVBY0UsOERBQUMsc0RBQUQ7TUFBQSxVQUFnQkE7SUFBaEI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQWRGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBa0JEO0tBM0J1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvWy4uLnNsdWddLmpzP2E5MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9JbWFnZVwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBTdHlsZWRIMX0gZnJvbSAnLi9ibG9nLnN0eWxlcydcblxuY29uc3Qgc3BhY2UgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX1NQQUNFX0lEO1xuY29uc3QgYWNjZXNzVG9rZW4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IGJsb2dEYXRhIH0pIHtcbiAgY29uc3Qge1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBpbWFnZTogeyB1cmwgfSxcbiAgICB9LFxuICB9ID0gYmxvZ0RhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPFN0eWxlZEgxPnt0aXRsZX08L1N0eWxlZEgxPlxuICAgICAgXG4gICAgICB7dXJsICYmIChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXt1cmx9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIHdpZHRoPVwiNTAwcHhcIlxuICAgICAgICAgIGhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgICBhbHQ9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxSZWFjdE1hcmtkb3duPntkZXNjcmlwdGlvbn08L1JlYWN0TWFya2Rvd24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2dyYXBocWwuY29udGVudGZ1bC5jb20vY29udGVudC92MS9zcGFjZXMvJHtzcGFjZX0vZW52aXJvbm1lbnRzL21hc3RlcmAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgcXVlcnkge1xuICAgICAgICAgICAgYmxvZ1BhZ2VzQ29sbGVjdGlvbntcbiAgICAgICAgICAgICAgaXRlbXN7XG4gICAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICAgIH0pLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgY29uc29sZS5lcnJvcihyZXMpO1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zdCBibG9nU2x1Z3MgPSBkYXRhLmJsb2dQYWdlc0NvbGxlY3Rpb24uaXRlbXM7XG4gICAgY29uc3QgcGF0aHMgPSBibG9nU2x1Z3MubWFwKChibG9nU2x1ZykgPT4ge1xuICAgICAgY29uc3QgeyBzbHVnIH0gPSBibG9nU2x1ZztcbiAgICAgIGNvbnN0IGZ1bGxTbHVnID0gYGFydGljbGUke3NsdWd9YDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczogeyBzbHVnOiBmdWxsU2x1Zy5zcGxpdChcIi9cIikgfSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGF0aHMsXG4gICAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHNsdWcgPSBgLyR7cGFyYW1zLnNsdWdbMV19YDtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZ3JhcGhxbC5jb250ZW50ZnVsLmNvbS9jb250ZW50L3YxL3NwYWNlcy8ke3NwYWNlfS9lbnZpcm9ubWVudHMvbWFzdGVyYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgIHF1ZXJ5IEdldFBvc3QoJHNsdWc6IFN0cmluZyEpIHtcbiAgICAgICAgICAgICAgYmxvZ1BhZ2VzQ29sbGVjdGlvbihcbiAgICAgICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgICAgc2x1ZzogJHNsdWdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxpbWl0OiAxXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIGltYWdle1xuICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgLFxuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgc2x1ZyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocmVzKTtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc3QgW2Jsb2dEYXRhXSA9IGRhdGEuYmxvZ1BhZ2VzQ29sbGVjdGlvbi5pdGVtcztcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBibG9nRGF0YSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiSW1hZ2UiLCJSZWFjdE1hcmtkb3duIiwiU3R5bGVkSDEiLCJQb3N0IiwiYmxvZ0RhdGEiLCJjb250ZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybCIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[...slug].js\n"));

/***/ })

});