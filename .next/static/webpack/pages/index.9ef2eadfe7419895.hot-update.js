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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/index.js\";\n// import Link from \"next/link\";\n// const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;\n// const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;\n// export default function Home({ infoData }) {\n//   const { content } = infoData;\n//   return (\n//     <>\n//       <p>This is the index page</p>\n//     </>\n//   );\n// }\n// // export default function Home({ infoData }) {\n// //   return (\n// //     <>\n// //       <p>This is the index page it shouldn't be a list</p>\n// //       <ul>\n// //         {infoData.map((info) => (\n// //           <li key={info.content.slug}>\n// //             <Link href={`${info.content.slug}`}>\n// //               <a>{info.content.title}</a>\n// //             </Link>\n// //           </li>\n// //         ))}\n// //       </ul>\n// //     </>\n// //   );\n// // }\n// export async function getStaticProps() {\n//   // send a request to Contentful (using the same URL from GraphiQL)\n//   try {\n//     const res = await fetch(\n//       `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`,\n//       {\n//         method: \"POST\", // GraphQL *always* uses POST requests\n//         headers: {\n//           \"content-type\": \"application/json\",\n//           authorization: `Bearer ${accessToken}`, // add access token header\n//         },\n//         // send the query written in GraphiQL as a string\n//         body: JSON.stringify({\n//           // all requests start with \"query:\" stringify for convenience\n//           query: `\n//           query {\n//               infoPageCollection{\n//                 items{\n//                   content{\n//                   slug\n//                   title\n//                   }\n//                 }\n//               }\n//             }\n//         `,\n//         }),\n//       }\n//     );\n//     // grab the data from the response\n//     const { data } = await res.json();\n//     console.log(\"data\", data);\n//     const infoData = data.infoPageCollection.items;\n//     return {\n//       props: {\n//         infoData,\n//       },\n//     };\n//   } catch (e) {\n//     console.log(\"error\", e);\n//     return {\n//       props: {\n//         notFound: true,\n//       },\n//     };\n//   }\n// }\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  var _content$image;\n\n  var infoData = _ref.infoData;\n  var content = infoData.content;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: content.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: content.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, this), content.image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_0___default()), {\n      src: content.image.url,\n      placeholder: \"\",\n      layout: \"responsive\",\n      width: \"500px\",\n      height: \"400px\",\n      alt: content === null || content === void 0 ? void 0 : (_content$image = content.image) === null || _content$image === void 0 ? void 0 : _content$image.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 88,\n    columnNumber: 5\n  }, this);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLZSxTQUFTQyxJQUFULE9BQTRCO0VBQUE7O0VBQUEsSUFBWkMsUUFBWSxRQUFaQSxRQUFZO0VBQ3pDLElBQU9DLE9BQVAsR0FBa0JELFFBQWxCLENBQU9DLE9BQVA7RUFDQSxvQkFDRTtJQUFBLHdCQUNFO01BQUEsVUFBS0EsT0FBTyxDQUFDQztJQUFiO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUVFO01BQUEsVUFBSUQsT0FBTyxDQUFDRTtJQUFaO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGRixFQUdHRixPQUFPLENBQUNHLEtBQVIsaUJBQ0MsOERBQUMsbURBQUQ7TUFDRSxHQUFHLEVBQUVILE9BQU8sQ0FBQ0csS0FBUixDQUFjQyxHQURyQjtNQUVFLFdBQVcsRUFBQyxFQUZkO01BR0UsTUFBTSxFQUFDLFlBSFQ7TUFJRSxLQUFLLEVBQUMsT0FKUjtNQUtFLE1BQU0sRUFBQyxPQUxUO01BTUUsR0FBRyxFQUFFSixPQUFGLGFBQUVBLE9BQUYseUNBQUVBLE9BQU8sQ0FBRUcsS0FBWCxtREFBRSxlQUFnQkQ7SUFOdkI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUpKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBZ0JEO0tBbEJ1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbi8vIGNvbnN0IHNwYWNlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRDtcbi8vIGNvbnN0IGFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU47XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBpbmZvRGF0YSB9KSB7XG4vLyAgIGNvbnN0IHsgY29udGVudCB9ID0gaW5mb0RhdGE7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxwPlRoaXMgaXMgdGhlIGluZGV4IHBhZ2U8L3A+XG4vLyAgICAgPC8+XG4vLyAgICk7XG4vLyB9XG5cbi8vIC8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBpbmZvRGF0YSB9KSB7XG4vLyAvLyAgIHJldHVybiAoXG4vLyAvLyAgICAgPD5cbi8vIC8vICAgICAgIDxwPlRoaXMgaXMgdGhlIGluZGV4IHBhZ2UgaXQgc2hvdWxkbid0IGJlIGEgbGlzdDwvcD5cbi8vIC8vICAgICAgIDx1bD5cbi8vIC8vICAgICAgICAge2luZm9EYXRhLm1hcCgoaW5mbykgPT4gKFxuLy8gLy8gICAgICAgICAgIDxsaSBrZXk9e2luZm8uY29udGVudC5zbHVnfT5cbi8vIC8vICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake2luZm8uY29udGVudC5zbHVnfWB9PlxuLy8gLy8gICAgICAgICAgICAgICA8YT57aW5mby5jb250ZW50LnRpdGxlfTwvYT5cbi8vIC8vICAgICAgICAgICAgIDwvTGluaz5cbi8vIC8vICAgICAgICAgICA8L2xpPlxuLy8gLy8gICAgICAgICApKX1cbi8vIC8vICAgICAgIDwvdWw+XG4vLyAvLyAgICAgPC8+XG4vLyAvLyAgICk7XG4vLyAvLyB9XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbi8vICAgLy8gc2VuZCBhIHJlcXVlc3QgdG8gQ29udGVudGZ1bCAodXNpbmcgdGhlIHNhbWUgVVJMIGZyb20gR3JhcGhpUUwpXG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgICBgaHR0cHM6Ly9ncmFwaHFsLmNvbnRlbnRmdWwuY29tL2NvbnRlbnQvdjEvc3BhY2VzLyR7c3BhY2V9L2Vudmlyb25tZW50cy9tYXN0ZXJgLFxuLy8gICAgICAge1xuLy8gICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBHcmFwaFFMICphbHdheXMqIHVzZXMgUE9TVCByZXF1ZXN0c1xuLy8gICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4vLyAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsIC8vIGFkZCBhY2Nlc3MgdG9rZW4gaGVhZGVyXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIC8vIHNlbmQgdGhlIHF1ZXJ5IHdyaXR0ZW4gaW4gR3JhcGhpUUwgYXMgYSBzdHJpbmdcbi8vICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgICAgICAgIC8vIGFsbCByZXF1ZXN0cyBzdGFydCB3aXRoIFwicXVlcnk6XCIgc3RyaW5naWZ5IGZvciBjb252ZW5pZW5jZVxuLy8gICAgICAgICAgIHF1ZXJ5OiBgXG4vLyAgICAgICAgICAgcXVlcnkge1xuLy8gICAgICAgICAgICAgICBpbmZvUGFnZUNvbGxlY3Rpb257XG4vLyAgICAgICAgICAgICAgICAgaXRlbXN7XG4vLyAgICAgICAgICAgICAgICAgICBjb250ZW50e1xuLy8gICAgICAgICAgICAgICAgICAgc2x1Z1xuLy8gICAgICAgICAgICAgICAgICAgdGl0bGVcbi8vICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgYCxcbi8vICAgICAgICAgfSksXG4vLyAgICAgICB9XG4vLyAgICAgKTtcbi8vICAgICAvLyBncmFiIHRoZSBkYXRhIGZyb20gdGhlIHJlc3BvbnNlXG4vLyAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcbi8vICAgICBjb25zdCBpbmZvRGF0YSA9IGRhdGEuaW5mb1BhZ2VDb2xsZWN0aW9uLml0ZW1zO1xuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgIGluZm9EYXRhLFxuLy8gICAgICAgfSxcbi8vICAgICB9O1xuLy8gICB9IGNhdGNoIChlKSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlKTtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcHJvcHM6IHtcbi8vICAgICAgICAgbm90Rm91bmQ6IHRydWUsXG4vLyAgICAgICB9LFxuLy8gICAgIH07XG4vLyAgIH1cbi8vIH1cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9JbWFnZVwiO1xuXG5jb25zdCBzcGFjZSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQ7XG5jb25zdCBhY2Nlc3NUb2tlbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgaW5mb0RhdGEgfSkge1xuICBjb25zdCB7Y29udGVudH0gPSBpbmZvRGF0YTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPntjb250ZW50LnRpdGxlfTwvaDE+XG4gICAgICA8cD57Y29udGVudC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICB7Y29udGVudC5pbWFnZSAmJiAoXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17Y29udGVudC5pbWFnZS51cmx9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIHdpZHRoPVwiNTAwcHhcIlxuICAgICAgICAgIGhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgICBhbHQ9e2NvbnRlbnQ/LmltYWdlPy5kZXNjcmlwdGlvbn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3Qgc2x1ZyA9IGAvaG9tZWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2dyYXBocWwuY29udGVudGZ1bC5jb20vY29udGVudC92MS9zcGFjZXMvJHtzcGFjZX0vZW52aXJvbm1lbnRzL21hc3RlcmAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgICAgfSxcblxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgIHF1ZXJ5IEdldFBvc3QoJHNsdWc6IFN0cmluZyEpIHtcbiAgICAgICAgICAgICAgaW5mb1BhZ2VDb2xsZWN0aW9uKFxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgICBzbHVnOiAkc2x1Z1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGltaXQ6IDFcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGAsXG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBzbHVnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgY29uc29sZS5lcnJvcihyZXMpO1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnN0IFtpbmZvRGF0YV0gPSBkYXRhLmluZm9QYWdlQ29sbGVjdGlvbi5pdGVtcztcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBpbmZvRGF0YSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59Il0sIm5hbWVzIjpbIkltYWdlIiwiUG9zdCIsImluZm9EYXRhIiwiY29udGVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});