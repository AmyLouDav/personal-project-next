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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var _components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/nav-bar/nav-bar */ \"./components/nav-bar/nav-bar.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _blog_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.styles */ \"./pages/posts/blog.styles.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/posts/[...slug].js\";\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  var blogData = _ref.blogData;\n  var _blogData$content = blogData.content,\n      title = _blogData$content.title,\n      description = _blogData$content.description,\n      url = _blogData$content.image.url;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_blog_styles__WEBPACK_IMPORTED_MODULE_2__.StyledH1, {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_blog_styles__WEBPACK_IMPORTED_MODULE_2__.ContentContainer, {\n      children: [url && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_blog_styles__WEBPACK_IMPORTED_MODULE_2__.StyledImg, {\n        src: url,\n        placeholder: \"\",\n        layout: \"responsive\",\n        width: \"300px\",\n        height: \"200px\",\n        alt: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(TextContainer, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bLi4uc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLZSxTQUFTTSxJQUFULE9BQTRCO0VBQUEsSUFBWkMsUUFBWSxRQUFaQSxRQUFZO0VBQ3pDLHdCQU1JQSxRQU5KLENBQ0VDLE9BREY7RUFBQSxJQUVJQyxLQUZKLHFCQUVJQSxLQUZKO0VBQUEsSUFHSUMsV0FISixxQkFHSUEsV0FISjtFQUFBLElBSWFDLEdBSmIscUJBSUlDLEtBSkosQ0FJYUQsR0FKYjtFQVFBLG9CQUNFO0lBQUEsd0JBQ0UsOERBQUMsbUVBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBRUUsOERBQUMsa0RBQUQ7TUFBQSxVQUFXRjtJQUFYO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGRixlQUdFLDhEQUFDLDBEQUFEO01BQUEsV0FDQ0UsR0FBRyxpQkFDRiw4REFBQyxtREFBRDtRQUNFLEdBQUcsRUFBRUEsR0FEUDtRQUVFLFdBQVcsRUFBQyxFQUZkO1FBR0UsTUFBTSxFQUFDLFlBSFQ7UUFJRSxLQUFLLEVBQUUsT0FKVDtRQUtFLE1BQU0sRUFBQyxPQUxUO1FBTUUsR0FBRyxFQUFFRDtNQU5QO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFGRixlQVdBLDhEQUFDLGFBQUQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVhBLGVBWUEsOERBQUMsc0RBQUQ7UUFBQSxVQUFnQkE7TUFBaEI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVpBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUhGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBb0JEO0tBN0J1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvWy4uLnNsdWddLmpzP2E5MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9JbWFnZVwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBTdHlsZWRIMSwgQ29udGVudENvbnRhaW5lciwgU3R5bGVkSW1nfSBmcm9tICcuL2Jsb2cuc3R5bGVzJ1xuXG5jb25zdCBzcGFjZSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQ7XG5jb25zdCBhY2Nlc3NUb2tlbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgYmxvZ0RhdGEgfSkge1xuICBjb25zdCB7XG4gICAgY29udGVudDoge1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGltYWdlOiB7IHVybCB9LFxuICAgIH0sXG4gIH0gPSBibG9nRGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8U3R5bGVkSDE+e3RpdGxlfTwvU3R5bGVkSDE+XG4gICAgICA8Q29udGVudENvbnRhaW5lcj5cbiAgICAgIHt1cmwgJiYgKFxuICAgICAgICA8U3R5bGVkSW1nXG4gICAgICAgICAgc3JjPXt1cmx9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIHdpZHRoPSBcIjMwMHB4XCJcbiAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXG4gICAgICAgICAgYWx0PXtkZXNjcmlwdGlvbn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8VGV4dENvbnRhaW5lcj48L1RleHRDb250YWluZXI+XG4gICAgICA8UmVhY3RNYXJrZG93bj57ZGVzY3JpcHRpb259PC9SZWFjdE1hcmtkb3duPlxuICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9ncmFwaHFsLmNvbnRlbnRmdWwuY29tL2NvbnRlbnQvdjEvc3BhY2VzLyR7c3BhY2V9L2Vudmlyb25tZW50cy9tYXN0ZXJgLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgIHF1ZXJ5IHtcbiAgICAgICAgICAgIGJsb2dQYWdlc0NvbGxlY3Rpb257XG4gICAgICAgICAgICAgIGl0ZW1ze1xuICAgICAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgICB9KSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocmVzKTtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc3QgYmxvZ1NsdWdzID0gZGF0YS5ibG9nUGFnZXNDb2xsZWN0aW9uLml0ZW1zO1xuICAgIGNvbnN0IHBhdGhzID0gYmxvZ1NsdWdzLm1hcCgoYmxvZ1NsdWcpID0+IHtcbiAgICAgIGNvbnN0IHsgc2x1ZyB9ID0gYmxvZ1NsdWc7XG4gICAgICBjb25zdCBmdWxsU2x1ZyA9IGBhcnRpY2xlJHtzbHVnfWA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHsgc2x1ZzogZnVsbFNsdWcuc3BsaXQoXCIvXCIpIH0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGhzLFxuICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGUpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBzbHVnID0gYC8ke3BhcmFtcy5zbHVnWzFdfWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2dyYXBocWwuY29udGVudGZ1bC5jb20vY29udGVudC92MS9zcGFjZXMvJHtzcGFjZX0vZW52aXJvbm1lbnRzL21hc3RlcmAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICBxdWVyeSBHZXRQb3N0KCRzbHVnOiBTdHJpbmchKSB7XG4gICAgICAgICAgICAgIGJsb2dQYWdlc0NvbGxlY3Rpb24oXG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgIHNsdWc6ICRzbHVnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsaW1pdDogMVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICAgICAgICBjb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICBpbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYCxcbiAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIHNsdWcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHJlcyk7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnN0IFtibG9nRGF0YV0gPSBkYXRhLmJsb2dQYWdlc0NvbGxlY3Rpb24uaXRlbXM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYmxvZ0RhdGEsXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGUpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIkltYWdlIiwiUmVhY3RNYXJrZG93biIsIlN0eWxlZEgxIiwiQ29udGVudENvbnRhaW5lciIsIlN0eWxlZEltZyIsIlBvc3QiLCJibG9nRGF0YSIsImNvbnRlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXJsIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[...slug].js\n"));

/***/ })

});