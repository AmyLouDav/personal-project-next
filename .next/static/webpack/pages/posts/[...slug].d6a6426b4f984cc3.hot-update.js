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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var _components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/nav-bar/nav-bar */ \"./components/nav-bar/nav-bar.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _blog_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.styles */ \"./pages/posts/blog.styles.js\");\n/* harmony import */ var _blog_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blog_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/posts/[...slug].js\";\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  var blogData = _ref.blogData;\n  var _blogData$content = blogData.content,\n      title = _blogData$content.title,\n      description = _blogData$content.description,\n      url = _blogData$content.image.url;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_blog_styles__WEBPACK_IMPORTED_MODULE_2__.StyledH1, {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), url && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: url,\n      placeholder: \"\",\n      layout: \"responsive\",\n      width: \"500px\",\n      height: \"400px\",\n      alt: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bLi4uc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS2UsU0FBU0ksSUFBVCxPQUE0QjtFQUFBLElBQVpDLFFBQVksUUFBWkEsUUFBWTtFQUN6Qyx3QkFNSUEsUUFOSixDQUNFQyxPQURGO0VBQUEsSUFFSUMsS0FGSixxQkFFSUEsS0FGSjtFQUFBLElBR0lDLFdBSEoscUJBR0lBLFdBSEo7RUFBQSxJQUlhQyxHQUpiLHFCQUlJQyxLQUpKLENBSWFELEdBSmI7RUFRQSxvQkFDRTtJQUFBLHdCQUNFLDhEQUFDLG1FQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUVFLDhEQUFDLGtEQUFEO01BQUEsVUFBV0Y7SUFBWDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBRkYsRUFHR0UsR0FBRyxpQkFDRiw4REFBQyxtREFBRDtNQUNFLEdBQUcsRUFBRUEsR0FEUDtNQUVFLFdBQVcsRUFBQyxFQUZkO01BR0UsTUFBTSxFQUFDLFlBSFQ7TUFJRSxLQUFLLEVBQUMsT0FKUjtNQUtFLE1BQU0sRUFBQyxPQUxUO01BTUUsR0FBRyxFQUFFRDtJQU5QO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFKSixlQWFFLDhEQUFDLHNEQUFEO01BQUEsVUFBZ0JBO0lBQWhCO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFiRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQWlCRDtLQTFCdUJKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1suLi5zbHVnXS5qcz9hOTE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvSW1hZ2VcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHsgU3R5bGVkSDF9IGZyb20gJy4vYmxvZy5zdHlsZXMnXG5cbmNvbnN0IHNwYWNlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRDtcbmNvbnN0IGFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBibG9nRGF0YSB9KSB7XG4gIGNvbnN0IHtcbiAgICBjb250ZW50OiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgaW1hZ2U6IHsgdXJsIH0sXG4gICAgfSxcbiAgfSA9IGJsb2dEYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxTdHlsZWRIMT57dGl0bGV9PC9TdHlsZWRIMT5cbiAgICAgIHt1cmwgJiYgKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e3VybH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgd2lkdGg9XCI1MDBweFwiXG4gICAgICAgICAgaGVpZ2h0PVwiNDAwcHhcIlxuICAgICAgICAgIGFsdD17ZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPFJlYWN0TWFya2Rvd24+e2Rlc2NyaXB0aW9ufTwvUmVhY3RNYXJrZG93bj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZ3JhcGhxbC5jb250ZW50ZnVsLmNvbS9jb250ZW50L3YxL3NwYWNlcy8ke3NwYWNlfS9lbnZpcm9ubWVudHMvbWFzdGVyYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICBxdWVyeSB7XG4gICAgICAgICAgICBibG9nUGFnZXNDb2xsZWN0aW9ue1xuICAgICAgICAgICAgICBpdGVtc3tcbiAgICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgICAgfSksXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHJlcyk7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnN0IGJsb2dTbHVncyA9IGRhdGEuYmxvZ1BhZ2VzQ29sbGVjdGlvbi5pdGVtcztcbiAgICBjb25zdCBwYXRocyA9IGJsb2dTbHVncy5tYXAoKGJsb2dTbHVnKSA9PiB7XG4gICAgICBjb25zdCB7IHNsdWcgfSA9IGJsb2dTbHVnO1xuICAgICAgY29uc3QgZnVsbFNsdWcgPSBgYXJ0aWNsZSR7c2x1Z31gO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zOiB7IHNsdWc6IGZ1bGxTbHVnLnNwbGl0KFwiL1wiKSB9LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBwYXRocyxcbiAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3Qgc2x1ZyA9IGAvJHtwYXJhbXMuc2x1Z1sxXX1gO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9ncmFwaHFsLmNvbnRlbnRmdWwuY29tL2NvbnRlbnQvdjEvc3BhY2VzLyR7c3BhY2V9L2Vudmlyb25tZW50cy9tYXN0ZXJgLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgcXVlcnkgR2V0UG9zdCgkc2x1ZzogU3RyaW5nISkge1xuICAgICAgICAgICAgICBibG9nUGFnZXNDb2xsZWN0aW9uKFxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgICBzbHVnOiAkc2x1Z1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGltaXQ6IDFcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGAsXG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBzbHVnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgY29uc29sZS5lcnJvcihyZXMpO1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zdCBbYmxvZ0RhdGFdID0gZGF0YS5ibG9nUGFnZXNDb2xsZWN0aW9uLml0ZW1zO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGJsb2dEYXRhLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJJbWFnZSIsIlJlYWN0TWFya2Rvd24iLCJTdHlsZWRIMSIsIlBvc3QiLCJibG9nRGF0YSIsImNvbnRlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXJsIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[...slug].js\n"));

/***/ }),

/***/ "./pages/posts/blog.styles.js":
/*!************************************!*\
  !*** ./pages/posts/blog.styles.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});