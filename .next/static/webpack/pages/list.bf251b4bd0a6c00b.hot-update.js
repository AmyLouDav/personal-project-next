"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/list",{

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var _components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/nav-bar/nav-bar */ \"./components/nav-bar/nav-bar.js\");\n/* harmony import */ var _styles_list_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/list.styles */ \"./styles/list.styles.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/list.js\";\n\n\n\n\nvar __N_SSG = true;\nfunction List(_ref) {\n  var _this = this;\n\n  var blogData = _ref.blogData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_1__.StyledH1, {\n        children: \"Blog Posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), blogData.map(function (blog) {\n        var slug = blog.content.slug;\n        var title = blog.content.title;\n        return {\n          slug: slug,\n          title: title\n        };\n\n        /*#__PURE__*/\n        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_1__.StyledLi, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_1__.TitleContainer, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_1__.StyledLink, {\n              href: \"posts/article\".concat(slug),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_1__.StyledA, {\n                children: title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, _this)\n        }, slug, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = List;\n\nvar _c;\n\n$RefreshReg$(_c, \"List\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBWWUsU0FBU08sSUFBVCxPQUE0QjtFQUFBOztFQUFBLElBQVpDLFFBQVksUUFBWkEsUUFBWTtFQUN6QyxvQkFDRTtJQUFBLHdCQUNFLDhEQUFDLG1FQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUVFLDhEQUFDLDBEQUFEO01BQUEsd0JBQ0UsOERBQUMseURBQUQ7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixFQUVHQSxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQVU7UUFDdEIsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUQsSUFBMUI7UUFDQSxJQUFNRSxLQUFLLEdBQUdILElBQUksQ0FBQ0UsT0FBTCxDQUFhQyxLQUEzQjtRQUNBLE9BQU87VUFBRUYsSUFBSSxFQUFKQSxJQUFGO1VBQVFFLEtBQUssRUFBTEE7UUFBUixDQUFQOztRQUVBO1FBQUEsOERBQUMseURBQUQ7VUFBQSx1QkFDRSw4REFBQywrREFBRDtZQUFBLHVCQUNFLDhEQUFDLDJEQUFEO2NBQVksSUFBSSx5QkFBa0JGLElBQWxCLENBQWhCO2NBQUEsdUJBQ0UsOERBQUMsd0RBQUQ7Z0JBQUEsVUFBVUU7Y0FBVjtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO1lBREY7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQURGO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFERixHQUFlRixJQUFmO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFPRCxDQVpBLENBRkg7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBRkY7RUFBQSxnQkFERjtBQXFCRDtLQXRCdUJKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xpc3QuanM/ZDZkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhclwiO1xuaW1wb3J0IHtcbiAgU3R5bGVkSDEsXG4gIFN0eWxlZExpbmssXG4gIENvbnRhaW5lcixcbiAgU3R5bGVkQSxcbiAgU3R5bGVkTGksXG4gIFRpdGxlQ29udGFpbmVyLFxufSBmcm9tIFwiLi4vc3R5bGVzL2xpc3Quc3R5bGVzXCI7XG5cbmNvbnN0IHNwYWNlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRDtcbmNvbnN0IGFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyBibG9nRGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdHlsZWRIMT5CbG9nIFBvc3RzPC9TdHlsZWRIMT5cbiAgICAgICAge2Jsb2dEYXRhLm1hcCgoYmxvZykgPT4ge1xuICAgICAgICAgIGNvbnN0IHNsdWcgPSBibG9nLmNvbnRlbnQuc2x1ZztcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IGJsb2cuY29udGVudC50aXRsZTtcbiAgICAgICAgICByZXR1cm4geyBzbHVnLCB0aXRsZSB9O1xuXG4gICAgICAgICAgPFN0eWxlZExpIGtleT17c2x1Z30+XG4gICAgICAgICAgICA8VGl0bGVDb250YWluZXI+XG4gICAgICAgICAgICAgIDxTdHlsZWRMaW5rIGhyZWY9e2Bwb3N0cy9hcnRpY2xlJHtzbHVnfWB9PlxuICAgICAgICAgICAgICAgIDxTdHlsZWRBPnt0aXRsZX08L1N0eWxlZEE+XG4gICAgICAgICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgICAgIDwvVGl0bGVDb250YWluZXI+XG4gICAgICAgICAgPC9TdHlsZWRMaT47XG4gICAgICAgIH0pfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vZ3JhcGhxbC5jb250ZW50ZnVsLmNvbS9jb250ZW50L3YxL3NwYWNlcy8ke3NwYWNlfS9lbnZpcm9ubWVudHMvbWFzdGVyYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgICB9LFxuXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgcXVlcnkge1xuICAgICAgICAgICAgYmxvZ1BhZ2VzQ29sbGVjdGlvbntcbiAgICAgICAgICAgICAgaXRlbXN7XG4gICAgICAgICAgICAgICAgY29udGVudHtcbiAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgIH0pLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnN0IGJsb2dEYXRhID0gZGF0YS5ibG9nUGFnZXNDb2xsZWN0aW9uLml0ZW1zO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJsb2dEYXRhLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiU3R5bGVkSDEiLCJTdHlsZWRMaW5rIiwiQ29udGFpbmVyIiwiU3R5bGVkQSIsIlN0eWxlZExpIiwiVGl0bGVDb250YWluZXIiLCJMaXN0IiwiYmxvZ0RhdGEiLCJtYXAiLCJibG9nIiwic2x1ZyIsImNvbnRlbnQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/list.js\n"));

/***/ })

});