"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/index.js\";\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var _this = this;\n\n  var infoData = _ref.infoData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: \"This is the index page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n      children: infoData.map(function (info) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n            href: \"/article1\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n              children: \"article 1\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 13\n          }, _this)\n        }, info.content.slug, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFLZSxTQUFTQyxJQUFULE9BQTRCO0VBQUE7O0VBQUEsSUFBWkMsUUFBWSxRQUFaQSxRQUFZO0VBQ3pDLG9CQUNFO0lBQUEsd0JBQ0U7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUVFO01BQUEsVUFDR0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRDtRQUFBLG9CQUNaO1VBQUEsdUJBQ0UsOERBQUMsa0RBQUQ7WUFBTSxJQUFJLEVBQUUsV0FBWjtZQUFBLHVCQUNFO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBO1VBREY7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQURGLEdBQVNBLElBQUksQ0FBQ0MsT0FBTCxDQUFhQyxJQUF0QjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRFk7TUFBQSxDQUFiO0lBREg7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUZGO0VBQUEsZ0JBREY7QUFjRDtLQWZ1QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IHNwYWNlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRDtcbmNvbnN0IGFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBpbmZvRGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwPlRoaXMgaXMgdGhlIGluZGV4IHBhZ2U8L3A+XG4gICAgICA8dWw+XG4gICAgICAgIHtpbmZvRGF0YS5tYXAoKGluZm8pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmZvLmNvbnRlbnQuc2x1Z30+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9hcnRpY2xlMVwifT5cbiAgICAgICAgICAgICAgPGE+YXJ0aWNsZSAxPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBzZW5kIGEgcmVxdWVzdCB0byBDb250ZW50ZnVsICh1c2luZyB0aGUgc2FtZSBVUkwgZnJvbSBHcmFwaGlRTClcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vZ3JhcGhxbC5jb250ZW50ZnVsLmNvbS9jb250ZW50L3YxL3NwYWNlcy8ke3NwYWNlfS9lbnZpcm9ubWVudHMvbWFzdGVyYCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBHcmFwaFFMICphbHdheXMqIHVzZXMgUE9TVCByZXF1ZXN0c1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsIC8vIGFkZCBhY2Nlc3MgdG9rZW4gaGVhZGVyXG4gICAgICB9LFxuICAgICAgLy8gc2VuZCB0aGUgcXVlcnkgd3JpdHRlbiBpbiBHcmFwaGlRTCBhcyBhIHN0cmluZ1xuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAvLyBhbGwgcmVxdWVzdHMgc3RhcnQgd2l0aCBcInF1ZXJ5OlwiIHN0cmluZ2lmeSBmb3IgY29udmVuaWVuY2VcbiAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICBxdWVyeSB7XG4gICAgICAgICAgICAgIGluZm9QYWdlQ29sbGVjdGlvbntcbiAgICAgICAgICAgICAgICBpdGVtc3tcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgfSksXG4gICAgfVxuICApO1xuICAvLyBncmFiIHRoZSBkYXRhIGZyb20gdGhlIHJlc3BvbnNlXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgaW5mb0RhdGEgPSBkYXRhLmluZm9QYWdlQ29sbGVjdGlvbi5pdGVtcztcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBpbmZvRGF0YSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJIb21lIiwiaW5mb0RhdGEiLCJtYXAiLCJpbmZvIiwiY29udGVudCIsInNsdWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});