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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var _components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/nav-bar/nav-bar */ \"./components/nav-bar/nav-bar.js\");\n/* harmony import */ var _styles_list_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/list.styles */ \"./styles/list.styles.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/list.js\";\n\n\n\n\nvar __N_SSG = true;\nfunction List(_ref) {\n  var blogData = _ref.blogData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_1__.StyledH1, {\n        children: \"Blog Posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), blogData.map({\n        slug: {\n          slug: content.slug,\n          title: content.title\n        }\n      }( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_1__.StyledLi, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_1__.TitleContainer, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_1__.StyledLink, {\n            href: \"posts/article\".concat(slug),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_list_styles__WEBPACK_IMPORTED_MODULE_1__.StyledA, {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, this)\n      }, slug, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this)))]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = List;\n\nvar _c;\n\n$RefreshReg$(_c, \"List\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBWWUsU0FBU08sSUFBVCxPQUE0QjtFQUFBLElBQVpDLFFBQVksUUFBWkEsUUFBWTtFQUN6QyxvQkFDRTtJQUFBLHdCQUNFLDhEQUFDLG1FQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUVFLDhEQUFDLDBEQUFEO01BQUEsd0JBQ0UsOERBQUMseURBQUQ7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixFQUdHQSxRQUFRLENBQUNDLEdBQVQsQ0FDRTtRQUFDQyxJQUFJLEVBQUU7VUFDTkEsSUFBSSxFQUFFQyxPQUFPLENBQUNELElBRFI7VUFFTkUsS0FBSyxFQUFFRCxPQUFPLENBQUNDO1FBRlQ7TUFBUCxDQUFELGVBR0EsOERBQUMseURBQUQ7UUFBQSx1QkFDRSw4REFBQywrREFBRDtVQUFBLHVCQUNFLDhEQUFDLDJEQUFEO1lBQVksSUFBSSx5QkFBa0JGLElBQWxCLENBQWhCO1lBQUEsdUJBQ0UsOERBQUMsd0RBQUQ7Y0FBQSxVQUFVRTtZQUFWO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFERjtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBREY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGLEdBQWVGLElBQWY7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUhBLENBREQsQ0FISDtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGRjtFQUFBLGdCQURGO0FBcUJEO0tBdEJ1QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdC5qcz9kNmQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyXCI7XG5pbXBvcnQge1xuICBTdHlsZWRIMSxcbiAgU3R5bGVkTGluayxcbiAgQ29udGFpbmVyLFxuICBTdHlsZWRBLFxuICBTdHlsZWRMaSxcbiAgVGl0bGVDb250YWluZXIsXG59IGZyb20gXCIuLi9zdHlsZXMvbGlzdC5zdHlsZXNcIjtcblxuY29uc3Qgc3BhY2UgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX1NQQUNFX0lEO1xuY29uc3QgYWNjZXNzVG9rZW4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGJsb2dEYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0eWxlZEgxPkJsb2cgUG9zdHM8L1N0eWxlZEgxPlxuXG4gICAgICAgIHtibG9nRGF0YS5tYXAoXG4gICAgICAgICAgKHtzbHVnOiB7XG4gICAgICAgICAgICBzbHVnOiBjb250ZW50LnNsdWcsXG4gICAgICAgICAgICB0aXRsZTogY29udGVudC50aXRsZX0sIH0pIChcbiAgICAgICAgICA8U3R5bGVkTGkga2V5PXtzbHVnfT5cbiAgICAgICAgICAgIDxUaXRsZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPFN0eWxlZExpbmsgaHJlZj17YHBvc3RzL2FydGljbGUke3NsdWd9YH0+XG4gICAgICAgICAgICAgICAgPFN0eWxlZEE+e3RpdGxlfTwvU3R5bGVkQT5cbiAgICAgICAgICAgICAgPC9TdHlsZWRMaW5rPlxuICAgICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cbiAgICAgICAgICA8L1N0eWxlZExpPlxuICAgICAgICApKX1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2dyYXBocWwuY29udGVudGZ1bC5jb20vY29udGVudC92MS9zcGFjZXMvJHtzcGFjZX0vZW52aXJvbm1lbnRzL21hc3RlcmAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgfSxcblxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBxdWVyeTogYFxuICAgICAgICAgIHF1ZXJ5IHtcbiAgICAgICAgICAgIGJsb2dQYWdlc0NvbGxlY3Rpb257XG4gICAgICAgICAgICAgIGl0ZW1ze1xuICAgICAgICAgICAgICAgIGNvbnRlbnR7XG4gICAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIGltYWdle1xuICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICB9KSxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zdCBibG9nRGF0YSA9IGRhdGEuYmxvZ1BhZ2VzQ29sbGVjdGlvbi5pdGVtcztcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBibG9nRGF0YSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIlN0eWxlZEgxIiwiU3R5bGVkTGluayIsIkNvbnRhaW5lciIsIlN0eWxlZEEiLCJTdHlsZWRMaSIsIlRpdGxlQ29udGFpbmVyIiwiTGlzdCIsImJsb2dEYXRhIiwibWFwIiwic2x1ZyIsImNvbnRlbnQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/list.js\n"));

/***/ })

});