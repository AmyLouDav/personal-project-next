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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/list.js\";\n\n\n\nvar __N_SSG = true;\nfunction List(_ref) {\n  var _this = this;\n\n  var blogData = _ref.blogData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: \"This is the blog list page.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n      children: blogData.map(function (blog) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n            href: \"/posts\".concat(blog.content.slug),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n              children: blog.content.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 13\n          }, _this)\n        }, blog.content.slug, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = List;\n\nvar _c;\n\n$RefreshReg$(_c, \"List\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUtlLFNBQVNDLElBQVQsT0FBNEI7RUFBQTs7RUFBQSxJQUFaQyxRQUFZLFFBQVpBLFFBQVk7RUFDekMsb0JBQ0U7SUFBQSx3QkFDRTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBRUU7TUFBQSxVQUNHQSxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxJQUFEO1FBQUEsb0JBQ1o7VUFBQSx1QkFDRSw4REFBQyxrREFBRDtZQUFNLElBQUksa0JBQVdBLElBQUksQ0FBQ0MsT0FBTCxDQUFhQyxJQUF4QixDQUFWO1lBQUEsdUJBQ0U7Y0FBQSxVQUFJRixJQUFJLENBQUNDLE9BQUwsQ0FBYUU7WUFBakI7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQURGO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFERixHQUFTSCxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsSUFBdEI7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURZO01BQUEsQ0FBYjtJQURIO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGRjtFQUFBLGdCQURGO0FBY0Q7S0FmdUJMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xpc3QuanM/ZDZkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IHNwYWNlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRDtcbmNvbnN0IGFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyBibG9nRGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+VGhpcyBpcyB0aGUgYmxvZyBsaXN0IHBhZ2UuPC9kaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHtibG9nRGF0YS5tYXAoKGJsb2cpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtibG9nLmNvbnRlbnQuc2x1Z30+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzJHtibG9nLmNvbnRlbnQuc2x1Z31gfT5cbiAgICAgICAgICAgICAgPGE+e2Jsb2cuY29udGVudC50aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIHNlbmQgYSByZXF1ZXN0IHRvIENvbnRlbnRmdWwgKHVzaW5nIHRoZSBzYW1lIFVSTCBmcm9tIEdyYXBoaVFMKVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9ncmFwaHFsLmNvbnRlbnRmdWwuY29tL2NvbnRlbnQvdjEvc3BhY2VzLyR7c3BhY2V9L2Vudmlyb25tZW50cy9tYXN0ZXJgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsIC8vIEdyYXBoUUwgKmFsd2F5cyogdXNlcyBQT1NUIHJlcXVlc3RzXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCwgLy8gYWRkIGFjY2VzcyB0b2tlbiBoZWFkZXJcbiAgICAgIH0sXG4gICAgICAvLyBzZW5kIHRoZSBxdWVyeSB3cml0dGVuIGluIEdyYXBoaVFMIGFzIGEgc3RyaW5nXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIC8vIGFsbCByZXF1ZXN0cyBzdGFydCB3aXRoIFwicXVlcnk6XCIgc3RyaW5naWZ5IGZvciBjb252ZW5pZW5jZVxuICAgICAgICBxdWVyeTogYFxuICAgICAgICAgIHF1ZXJ5IHtcbiAgICAgICAgICAgICAgYmxvZ1BhZ2VzQ29sbGVjdGlvbntcbiAgICAgICAgICAgICAgICBpdGVtc3tcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgIH0pLFxuICAgIH1cbiAgKTtcbiAgLy8gZ3JhYiB0aGUgZGF0YSBmcm9tIHRoZSByZXNwb25zZVxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnN0IGJsb2dEYXRhID0gZGF0YS5ibG9nUGFnZXNDb2xsZWN0aW9uLml0ZW1zO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJsb2dEYXRhLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkxpc3QiLCJibG9nRGF0YSIsIm1hcCIsImJsb2ciLCJjb250ZW50Iiwic2x1ZyIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/list.js\n"));

/***/ })

});