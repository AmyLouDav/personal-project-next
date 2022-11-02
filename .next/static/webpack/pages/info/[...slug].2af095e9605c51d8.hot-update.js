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

/***/ "./pages/info/info.styles.js":
/*!***********************************!*\
  !*** ./pages/info/info.styles.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"ContentContainer\": function() { return /* binding */ ContentContainer; },\n/* harmony export */   \"InfoPageImg\": function() { return /* binding */ InfoPageImg; },\n/* harmony export */   \"StyledH1\": function() { return /* binding */ StyledH1; },\n/* harmony export */   \"StyledImg\": function() { return /* binding */ StyledImg; },\n/* harmony export */   \"StyledText\": function() { return /* binding */ StyledText; },\n/* harmony export */   \"TextContainer\": function() { return /* binding */ TextContainer; },\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextcss_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcss/reset */ \"./node_modules/@nextcss/reset/dist/reset.css\");\n/* harmony import */ var _nextcss_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcss_reset__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/constants.js */ \"./lib/constants.js\");\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__Container\",\n  componentId: \"sc-1ysmtrn-0\"\n})([\"max-width:1000px;margin:80px auto 100px auto;\"]);\nvar ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__ContentContainer\",\n  componentId: \"sc-1ysmtrn-1\"\n})([\"margin:0 auto 100px auto;max-width:300px;\"]);\nvar InfoPageImg = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__InfoPageImg\",\n  componentId: \"sc-1ysmtrn-2\"\n})([\"margin-top:30px;\"]);\nvar StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.withConfig({\n  displayName: \"infostyles__StyledH1\",\n  componentId: \"sc-1ysmtrn-3\"\n})([\"font-size:40px;font-family:\", \";color:\", \";font-weight:lighter;display:flex;justify-content:center;margin-top:30px;text-transform:\", \";\", \";@media \", \"{font-size:50px;}@media \", \"{font-size:60px;\", \"}\"], _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.PrimaryFont, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.PrimaryColour, function (isUppercase) {\n  return isUppercase ? \"uppercase\" : \"capitalize\";\n}, function (_ref) {\n  var isUppercase = _ref.isUppercase;\n  return isUppercase && \"\\n  text-transform: uppercase;\\n \";\n}, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.Tablet, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.Laptop, function (_ref2) {\n  var isUppercase = _ref2.isUppercase;\n  return isUppercase && \"\\n  text-transform: capitalize;\\n \";\n});\nvar StyledImg = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_Image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"infostyles__StyledImg\",\n  componentId: \"sc-1ysmtrn-4\"\n})([\"display:flex;justify-content:center;\"]);\nvar StyledText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__StyledText\",\n  componentId: \"sc-1ysmtrn-5\"\n})([\"color:\", \";font-family:\", \";margin-top:30px;a{color:\", \";text-decoration:none;}\"], _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.PrimaryColour, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.SecondaryFont, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.PrimaryColour);\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__TextContainer\",\n  componentId: \"sc-1ysmtrn-6\"\n})([\"margin:0 auto;\"]);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__Wrapper\",\n  componentId: \"sc-1ysmtrn-7\"\n})([\"width:100%;\"]);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmZvL2luZm8uc3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFRTyxJQUFNTyxTQUFTLEdBQUdQLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHFEQUFmO0FBS0EsSUFBTVMsZ0JBQWdCLEdBQUdULHdFQUFIO0VBQUE7RUFBQTtBQUFBLGlEQUF0QjtBQUtBLElBQU1VLFdBQVcsR0FBR1Ysd0VBQUg7RUFBQTtFQUFBO0FBQUEsd0JBQWpCO0FBSUEsSUFBTVcsUUFBUSxHQUFHWCx1RUFBSDtFQUFBO0VBQUE7QUFBQSxpTkFFSkksMERBRkksRUFHVkMsNERBSFUsRUFRRCxVQUFBUSxXQUFXO0VBQUEsT0FBSUEsV0FBVyxHQUFHLFdBQUgsR0FBaUIsWUFBaEM7QUFBQSxDQVJWLEVBVWpCO0VBQUEsSUFBR0EsV0FBSCxRQUFHQSxXQUFIO0VBQUEsT0FDQUEsV0FBVyx1Q0FEWDtBQUFBLENBVmlCLEVBZ0JWWCxxREFoQlUsRUFvQlZDLHFEQXBCVSxFQXVCZjtFQUFBLElBQUdVLFdBQUgsU0FBR0EsV0FBSDtFQUFBLE9BQ0FBLFdBQVcsd0NBRFg7QUFBQSxDQXZCZSxDQUFkO0FBK0JBLElBQU1DLFNBQVMsR0FBR2QsNkRBQU0sQ0FBQ0MsbURBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSw0Q0FBZjtBQUtBLElBQU1jLFVBQVUsR0FBR2Ysd0VBQUg7RUFBQTtFQUFBO0FBQUEsd0ZBQ1pLLDREQURZLEVBRU5DLDREQUZNLEVBS1ZELDREQUxVLENBQWhCO0FBVUEsSUFBTVcsYUFBYSxHQUFHaEIsd0VBQUg7RUFBQTtFQUFBO0FBQUEsc0JBQW5CO0FBSUEsSUFBTWlCLE9BQU8sR0FBR2pCLHdFQUFIO0VBQUE7RUFBQTtBQUFBLG1CQUFiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZm8vaW5mby5zdHlsZXMuanM/YmY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L0ltYWdlXCI7XG5pbXBvcnQgXCJAbmV4dGNzcy9yZXNldFwiO1xuXG5pbXBvcnQge1xuICBUYWJsZXQsXG4gIExhcHRvcCxcbiAgUHJpbWFyeUZvbnQsXG4gIFByaW1hcnlDb2xvdXIsXG4gIFNlY29uZGFyeUZvbnQsXG59IGZyb20gXCIuLi8uLi9saWIvY29uc3RhbnRzLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiA4MHB4IGF1dG8gMTAwcHggYXV0bztcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwIGF1dG8gMTAwcHggYXV0bztcbiAgbWF4LXdpZHRoOiAzMDBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbmZvUGFnZUltZyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDMwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSDEgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6ICR7UHJpbWFyeUZvbnR9O1xuICBjb2xvcjogJHtQcmltYXJ5Q29sb3VyfTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogJHtpc1VwcGVyY2FzZSA9PiBpc1VwcGVyY2FzZSA/IFwidXBwZXJjYXNlXCIgOiBcImNhcGl0YWxpemVcIn07XG5cbiAgJHsoeyBpc1VwcGVyY2FzZSB9KSA9PlxuICAgIGlzVXBwZXJjYXNlICYmXG4gICAgYFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuIGB9O1xuXG4gIEBtZWRpYSAke1RhYmxldH0ge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuXG4gIEBtZWRpYSAke0xhcHRvcH0ge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcblxuICAgICR7KHsgaXNVcHBlcmNhc2UgfSkgPT5cbiAgICAgIGlzVXBwZXJjYXNlICYmXG4gICAgICBgXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuIGB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbWcgPSBzdHlsZWQoSW1hZ2UpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7UHJpbWFyeUNvbG91cn07XG4gIGZvbnQtZmFtaWx5OiAke1NlY29uZGFyeUZvbnR9O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBhIHtcbiAgICBjb2xvcjogJHtQcmltYXJ5Q29sb3VyfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwIGF1dG87XG5gO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJJbWFnZSIsIlRhYmxldCIsIkxhcHRvcCIsIlByaW1hcnlGb250IiwiUHJpbWFyeUNvbG91ciIsIlNlY29uZGFyeUZvbnQiLCJDb250YWluZXIiLCJkaXYiLCJDb250ZW50Q29udGFpbmVyIiwiSW5mb1BhZ2VJbWciLCJTdHlsZWRIMSIsImgxIiwiaXNVcHBlcmNhc2UiLCJTdHlsZWRJbWciLCJTdHlsZWRUZXh0IiwiVGV4dENvbnRhaW5lciIsIldyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/info/info.styles.js\n"));

/***/ })

});