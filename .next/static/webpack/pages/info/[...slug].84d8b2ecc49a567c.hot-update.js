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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"ContentContainer\": function() { return /* binding */ ContentContainer; },\n/* harmony export */   \"InfoPageImg\": function() { return /* binding */ InfoPageImg; },\n/* harmony export */   \"StyledH1\": function() { return /* binding */ StyledH1; },\n/* harmony export */   \"StyledImg\": function() { return /* binding */ StyledImg; },\n/* harmony export */   \"StyledText\": function() { return /* binding */ StyledText; },\n/* harmony export */   \"TextContainer\": function() { return /* binding */ TextContainer; },\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextcss_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcss/reset */ \"./node_modules/@nextcss/reset/dist/reset.css\");\n/* harmony import */ var _nextcss_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcss_reset__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/constants.js */ \"./lib/constants.js\");\n\n\n\nvar Laptop = \"1024px\";\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__Container\",\n  componentId: \"sc-1ysmtrn-0\"\n})([\"max-width:1000px;margin:80px auto 100px auto;\"]);\nvar ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__ContentContainer\",\n  componentId: \"sc-1ysmtrn-1\"\n})([\"margin:0 auto 100px auto;max-width:300px;\"]);\nvar InfoPageImg = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__InfoPageImg\",\n  componentId: \"sc-1ysmtrn-2\"\n})([\"margin-top:30px;\"]);\nvar StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.withConfig({\n  displayName: \"infostyles__StyledH1\",\n  componentId: \"sc-1ysmtrn-3\"\n})([\"font-size:40px;font-family:\", \";color:\", \";font-weight:lighter;display:flex;justify-content:center;margin-top:30px;text-transform:\", \";@media \", \"{font-size:50px;text-transform:capitalize;}@media (max-width){font-size:60px;text-transform:capitalize;}\"], _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.PrimaryFont, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.PrimaryColour, function (isUppercase) {\n  return isUppercase ? \"uppercase\" : \"capitalize\";\n}, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.Tablet);\nvar StyledImg = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_Image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"infostyles__StyledImg\",\n  componentId: \"sc-1ysmtrn-4\"\n})([\"display:flex;justify-content:center;\"]);\nvar StyledText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__StyledText\",\n  componentId: \"sc-1ysmtrn-5\"\n})([\"color:\", \";font-family:\", \";margin-top:30px;a{color:\", \";text-decoration:none;}\"], _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.PrimaryColour, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.SecondaryFont, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.PrimaryColour);\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__TextContainer\",\n  componentId: \"sc-1ysmtrn-6\"\n})([\"margin:0 auto;\"]);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__Wrapper\",\n  componentId: \"sc-1ysmtrn-7\"\n})([\"width:100%;\"]);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmZvL2luZm8uc3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUUsTUFBTSxHQUFHLFFBQWY7QUFFQTtBQVFPLElBQU1LLFNBQVMsR0FBR1Asd0VBQUg7RUFBQTtFQUFBO0FBQUEscURBQWY7QUFLQSxJQUFNUyxnQkFBZ0IsR0FBR1Qsd0VBQUg7RUFBQTtFQUFBO0FBQUEsaURBQXRCO0FBS0EsSUFBTVUsV0FBVyxHQUFHVix3RUFBSDtFQUFBO0VBQUE7QUFBQSx3QkFBakI7QUFJQSxJQUFNVyxRQUFRLEdBQUdYLHVFQUFIO0VBQUE7RUFBQTtBQUFBLG1RQUVKSSwwREFGSSxFQUdWQyw0REFIVSxFQVFELFVBQUNRLFdBQUQ7RUFBQSxPQUNoQkEsV0FBVyxHQUFHLFdBQUgsR0FBaUIsWUFEWjtBQUFBLENBUkMsRUFXVlYscURBWFUsQ0FBZDtBQXNCQSxJQUFNVyxTQUFTLEdBQUdkLDZEQUFNLENBQUNDLG1EQUFELENBQVQ7RUFBQTtFQUFBO0FBQUEsNENBQWY7QUFLQSxJQUFNYyxVQUFVLEdBQUdmLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHdGQUNaSyw0REFEWSxFQUVOQyw0REFGTSxFQUtWRCw0REFMVSxDQUFoQjtBQVVBLElBQU1XLGFBQWEsR0FBR2hCLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHNCQUFuQjtBQUlBLElBQU1pQixPQUFPLEdBQUdqQix3RUFBSDtFQUFBO0VBQUE7QUFBQSxtQkFBYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmZvL2luZm8uc3R5bGVzLmpzP2JmN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9JbWFnZVwiO1xuaW1wb3J0IFwiQG5leHRjc3MvcmVzZXRcIjtcblxuY29uc3QgTGFwdG9wID0gXCIxMDI0cHhcIjtcblxuaW1wb3J0IHtcbiAgVGFibGV0LFxuICAvLyBMYXB0b3AsXG4gIFByaW1hcnlGb250LFxuICBQcmltYXJ5Q29sb3VyLFxuICBTZWNvbmRhcnlGb250LFxufSBmcm9tIFwiLi4vLi4vbGliL2NvbnN0YW50cy5qc1wiO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogODBweCBhdXRvIDEwMHB4IGF1dG87XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMCBhdXRvIDEwMHB4IGF1dG87XG4gIG1heC13aWR0aDogMzAwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSW5mb1BhZ2VJbWcgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAzMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEgxID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiAke1ByaW1hcnlGb250fTtcbiAgY29sb3I6ICR7UHJpbWFyeUNvbG91cn07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06ICR7KGlzVXBwZXJjYXNlKSA9PlxuICAgIGlzVXBwZXJjYXNlID8gXCJ1cHBlcmNhc2VcIiA6IFwiY2FwaXRhbGl6ZVwifTtcblxuICBAbWVkaWEgJHtUYWJsZXR9IHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aCkge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZChJbWFnZSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtQcmltYXJ5Q29sb3VyfTtcbiAgZm9udC1mYW1pbHk6ICR7U2Vjb25kYXJ5Rm9udH07XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGEge1xuICAgIGNvbG9yOiAke1ByaW1hcnlDb2xvdXJ9O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRleHRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgYXV0bztcbmA7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkltYWdlIiwiTGFwdG9wIiwiVGFibGV0IiwiUHJpbWFyeUZvbnQiLCJQcmltYXJ5Q29sb3VyIiwiU2Vjb25kYXJ5Rm9udCIsIkNvbnRhaW5lciIsImRpdiIsIkNvbnRlbnRDb250YWluZXIiLCJJbmZvUGFnZUltZyIsIlN0eWxlZEgxIiwiaDEiLCJpc1VwcGVyY2FzZSIsIlN0eWxlZEltZyIsIlN0eWxlZFRleHQiLCJUZXh0Q29udGFpbmVyIiwiV3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/info/info.styles.js\n"));

/***/ })

});