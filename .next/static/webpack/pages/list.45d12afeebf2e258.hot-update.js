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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var _components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/nav-bar/nav-bar */ \"./components/nav-bar/nav-bar.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_list_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/list.styles */ \"./styles/list.styles.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/list.js\";\n\n\n\n\n\nvar __N_SSG = true;\nfunction List(_ref) {\n  var _this = this;\n\n  var blogData = _ref.blogData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_2__.StyledH1, {\n        children: \"Blog Posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), blogData.map(function (blog) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_2__.LinkCardContainer, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: \"posts/article\".concat(blog.content.slug),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n                children: blog.content.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 19,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 18,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 13\n          }, _this)\n        }, blog.content.slug, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = List;\n\nvar _c;\n\n$RefreshReg$(_c, \"List\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7OztBQUtlLFNBQVNLLElBQVQsT0FBNEI7RUFBQTs7RUFBQSxJQUFaQyxRQUFZLFFBQVpBLFFBQVk7RUFDekMsb0JBQ0U7SUFBQSx3QkFDRSw4REFBQyxtRUFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsZUFFRSw4REFBQywwREFBRDtNQUFBLHdCQUNFLDhEQUFDLHlEQUFEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsRUFFR0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRDtRQUFBLG9CQUNaO1VBQUEsdUJBQ0UsOERBQUMsa0VBQUQ7WUFBQSx1QkFDRSw4REFBQyxrREFBRDtjQUFNLElBQUkseUJBQWtCQSxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsSUFBL0IsQ0FBVjtjQUFBLHVCQUNFO2dCQUFBLFVBQUlGLElBQUksQ0FBQ0MsT0FBTCxDQUFhRTtjQUFqQjtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO1lBREY7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQURGO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFERixHQUFTSCxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsSUFBdEI7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURZO01BQUEsQ0FBYixDQUZIO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUZGO0VBQUEsZ0JBREY7QUFpQkQ7S0FsQnVCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9saXN0LmpzP2Q2ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHsgU3R5bGVkSDEsIExpbmtDYXJkQ29udGFpbmVyLCBDb250YWluZXIgfSBmcm9tIFwiLi4vc3R5bGVzL2xpc3Quc3R5bGVzXCI7XG5cbmNvbnN0IHNwYWNlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRDtcbmNvbnN0IGFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyBibG9nRGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdHlsZWRIMT5CbG9nIFBvc3RzPC9TdHlsZWRIMT5cbiAgICAgICAge2Jsb2dEYXRhLm1hcCgoYmxvZykgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2Jsb2cuY29udGVudC5zbHVnfT5cbiAgICAgICAgICAgIDxMaW5rQ2FyZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YHBvc3RzL2FydGljbGUke2Jsb2cuY29udGVudC5zbHVnfWB9PlxuICAgICAgICAgICAgICAgIDxhPntibG9nLmNvbnRlbnQudGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0xpbmtDYXJkQ29udGFpbmVyPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gc2VuZCBhIHJlcXVlc3QgdG8gQ29udGVudGZ1bCAodXNpbmcgdGhlIHNhbWUgVVJMIGZyb20gR3JhcGhpUUwpXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2dyYXBocWwuY29udGVudGZ1bC5jb20vY29udGVudC92MS9zcGFjZXMvJHtzcGFjZX0vZW52aXJvbm1lbnRzL21hc3RlcmAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgLy8gR3JhcGhRTCAqYWx3YXlzKiB1c2VzIFBPU1QgcmVxdWVzdHNcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLCAvLyBhZGQgYWNjZXNzIHRva2VuIGhlYWRlclxuICAgICAgfSxcbiAgICAgIC8vIHNlbmQgdGhlIHF1ZXJ5IHdyaXR0ZW4gaW4gR3JhcGhpUUwgYXMgYSBzdHJpbmdcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLy8gYWxsIHJlcXVlc3RzIHN0YXJ0IHdpdGggXCJxdWVyeTpcIiBzdHJpbmdpZnkgZm9yIGNvbnZlbmllbmNlXG4gICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgcXVlcnkge1xuICAgICAgICAgICAgICBibG9nUGFnZXNDb2xsZWN0aW9ue1xuICAgICAgICAgICAgICAgIGl0ZW1ze1xuICAgICAgICAgICAgICAgICAgY29udGVudHtcbiAgICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgfSksXG4gICAgfVxuICApO1xuICAvLyBncmFiIHRoZSBkYXRhIGZyb20gdGhlIHJlc3BvbnNlXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgYmxvZ0RhdGEgPSBkYXRhLmJsb2dQYWdlc0NvbGxlY3Rpb24uaXRlbXM7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYmxvZ0RhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJMaW5rIiwiU3R5bGVkSDEiLCJMaW5rQ2FyZENvbnRhaW5lciIsIkNvbnRhaW5lciIsIkxpc3QiLCJibG9nRGF0YSIsIm1hcCIsImJsb2ciLCJjb250ZW50Iiwic2x1ZyIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/list.js\n"));

/***/ })

});