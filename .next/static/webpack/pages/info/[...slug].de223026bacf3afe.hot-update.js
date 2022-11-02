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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"ContentContainer\": function() { return /* binding */ ContentContainer; },\n/* harmony export */   \"InfoPageImg\": function() { return /* binding */ InfoPageImg; },\n/* harmony export */   \"StyledH1\": function() { return /* binding */ StyledH1; },\n/* harmony export */   \"StyledImg\": function() { return /* binding */ StyledImg; },\n/* harmony export */   \"StyledText\": function() { return /* binding */ StyledText; },\n/* harmony export */   \"TextContainer\": function() { return /* binding */ TextContainer; },\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextcss_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcss/reset */ \"./node_modules/@nextcss/reset/dist/reset.css\");\n/* harmony import */ var _nextcss_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcss_reset__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/constants.js */ \"./lib/constants.js\");\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__Container\",\n  componentId: \"sc-1ysmtrn-0\"\n})([\"max-width:1000px;margin:80px auto 100px auto;\"]);\nvar ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__ContentContainer\",\n  componentId: \"sc-1ysmtrn-1\"\n})([\"margin:0 auto 100px auto;max-width:300px;\"]);\nvar InfoPageImg = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__InfoPageImg\",\n  componentId: \"sc-1ysmtrn-2\"\n})([\"margin-top:30px;\"]);\nvar StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.withConfig({\n  displayName: \"infostyles__StyledH1\",\n  componentId: \"sc-1ysmtrn-3\"\n})([\"font-size:40px;font-family:\", \";color:\", \";font-weight:lighter;display:flex;justify-content:center;margin-top:30px;\", \";@media \", \"{font-size:50px;}@media \", \"{font-size:60px;\", \"}\"], _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.PrimaryFont, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.PrimaryColour, function (_ref) {\n  var isUppercase = _ref.isUppercase;\n  return isUppercase && \"\\n  text-transform: uppercase;\\n \";\n}, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.Tablet, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.Laptop, function (_ref2) {\n  var isUppercase = _ref2.isUppercase;\n  return isUppercase && \"\\n  text-transform: capitalize;\\n \";\n});\nvar StyledImg = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((next_Image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"infostyles__StyledImg\",\n  componentId: \"sc-1ysmtrn-4\"\n})([\"display:flex;justify-content:center;\"]);\nvar StyledText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__StyledText\",\n  componentId: \"sc-1ysmtrn-5\"\n})([\"color:\", \";font-family:\", \";margin-top:30px;a{color:\", \";text-decoration:none;}\"], _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.PrimaryColour, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.SecondaryFont, _lib_constants_js__WEBPACK_IMPORTED_MODULE_2__.PrimaryColour);\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__TextContainer\",\n  componentId: \"sc-1ysmtrn-6\"\n})([\"margin:0 auto;\"]);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"infostyles__Wrapper\",\n  componentId: \"sc-1ysmtrn-7\"\n})([\"width:100%;\"]);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmZvL2luZm8uc3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFRTyxJQUFNTyxTQUFTLEdBQUdQLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHFEQUFmO0FBS0EsSUFBTVMsZ0JBQWdCLEdBQUdULHdFQUFIO0VBQUE7RUFBQTtBQUFBLGlEQUF0QjtBQUtBLElBQU1VLFdBQVcsR0FBR1Ysd0VBQUg7RUFBQTtFQUFBO0FBQUEsd0JBQWpCO0FBSUEsSUFBTVcsUUFBUSxHQUFHWCx1RUFBSDtFQUFBO0VBQUE7QUFBQSw2TEFFSkksMERBRkksRUFHVkMsNERBSFUsRUFVakI7RUFBQSxJQUFHUSxXQUFILFFBQUdBLFdBQUg7RUFBQSxPQUNBQSxXQUFXLHVDQURYO0FBQUEsQ0FWaUIsRUFnQlZYLHFEQWhCVSxFQW9CVkMscURBcEJVLEVBdUJmO0VBQUEsSUFBR1UsV0FBSCxTQUFHQSxXQUFIO0VBQUEsT0FDQUEsV0FBVyx3Q0FEWDtBQUFBLENBdkJlLENBQWQ7QUErQkEsSUFBTUMsU0FBUyxHQUFHZCw2REFBTSxDQUFDQyxtREFBRCxDQUFUO0VBQUE7RUFBQTtBQUFBLDRDQUFmO0FBS0EsSUFBTWMsVUFBVSxHQUFHZix3RUFBSDtFQUFBO0VBQUE7QUFBQSx3RkFDWkssNERBRFksRUFFTkMsNERBRk0sRUFLVkQsNERBTFUsQ0FBaEI7QUFVQSxJQUFNVyxhQUFhLEdBQUdoQix3RUFBSDtFQUFBO0VBQUE7QUFBQSxzQkFBbkI7QUFJQSxJQUFNaUIsT0FBTyxHQUFHakIsd0VBQUg7RUFBQTtFQUFBO0FBQUEsbUJBQWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5mby9pbmZvLnN0eWxlcy5qcz9iZjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvSW1hZ2VcIjtcbmltcG9ydCBcIkBuZXh0Y3NzL3Jlc2V0XCI7XG5cbmltcG9ydCB7XG4gIFRhYmxldCxcbiAgTGFwdG9wLFxuICBQcmltYXJ5Rm9udCxcbiAgUHJpbWFyeUNvbG91cixcbiAgU2Vjb25kYXJ5Rm9udCxcbn0gZnJvbSBcIi4uLy4uL2xpYi9jb25zdGFudHMuanNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDgwcHggYXV0byAxMDBweCBhdXRvO1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgYXV0byAxMDBweCBhdXRvO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEluZm9QYWdlSW1nID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMzBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRIMSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LWZhbWlseTogJHtQcmltYXJ5Rm9udH07XG4gIGNvbG9yOiAke1ByaW1hcnlDb2xvdXJ9O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIFxuXG4gICR7KHsgaXNVcHBlcmNhc2UgfSkgPT5cbiAgICBpc1VwcGVyY2FzZSAmJlxuICAgIGBcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiBgfTtcblxuICBAbWVkaWEgJHtUYWJsZXR9IHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cblxuICBAbWVkaWEgJHtMYXB0b3B9IHtcbiAgICBmb250LXNpemU6IDYwcHg7XG5cbiAgICAkeyh7IGlzVXBwZXJjYXNlIH0pID0+XG4gICAgICBpc1VwcGVyY2FzZSAmJlxuICAgICAgYFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiBgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSW1nID0gc3R5bGVkKEltYWdlKWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke1ByaW1hcnlDb2xvdXJ9O1xuICBmb250LWZhbWlseTogJHtTZWNvbmRhcnlGb250fTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYSB7XG4gICAgY29sb3I6ICR7UHJpbWFyeUNvbG91cn07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMCBhdXRvO1xuYDtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiSW1hZ2UiLCJUYWJsZXQiLCJMYXB0b3AiLCJQcmltYXJ5Rm9udCIsIlByaW1hcnlDb2xvdXIiLCJTZWNvbmRhcnlGb250IiwiQ29udGFpbmVyIiwiZGl2IiwiQ29udGVudENvbnRhaW5lciIsIkluZm9QYWdlSW1nIiwiU3R5bGVkSDEiLCJoMSIsImlzVXBwZXJjYXNlIiwiU3R5bGVkSW1nIiwiU3R5bGVkVGV4dCIsIlRleHRDb250YWluZXIiLCJXcmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/info/info.styles.js\n"));

/***/ })

});