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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// import Link from \"next/link\";\n// const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;\n// const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;\n// export default function Home({ infoData }) {\n//   const { content } = infoData;\n//   return (\n//     <>\n//       <p>This is the index page</p>\n//     </>\n//   );\n// }\n// // export default function Home({ infoData }) {\n// //   return (\n// //     <>\n// //       <p>This is the index page it shouldn't be a list</p>\n// //       <ul>\n// //         {infoData.map((info) => (\n// //           <li key={info.content.slug}>\n// //             <Link href={`${info.content.slug}`}>\n// //               <a>{info.content.title}</a>\n// //             </Link>\n// //           </li>\n// //         ))}\n// //       </ul>\n// //     </>\n// //   );\n// // }\n// export async function getStaticProps() {\n//   // send a request to Contentful (using the same URL from GraphiQL)\n//   try {\n//     const res = await fetch(\n//       `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`,\n//       {\n//         method: \"POST\", // GraphQL *always* uses POST requests\n//         headers: {\n//           \"content-type\": \"application/json\",\n//           authorization: `Bearer ${accessToken}`, // add access token header\n//         },\n//         // send the query written in GraphiQL as a string\n//         body: JSON.stringify({\n//           // all requests start with \"query:\" stringify for convenience\n//           query: `\n//           query {\n//               infoPageCollection{\n//                 items{\n//                   content{\n//                   slug\n//                   title\n//                   }\n//                 }\n//               }\n//             }\n//         `,\n//         }),\n//       }\n//     );\n//     // grab the data from the response\n//     const { data } = await res.json();\n//     console.log(\"data\", data);\n//     const infoData = data.infoPageCollection.items;\n//     return {\n//       props: {\n//         infoData,\n//       },\n//     };\n//   } catch (e) {\n//     console.log(\"error\", e);\n//     return {\n//       props: {\n//         notFound: true,\n//       },\n//     };\n//   }\n// }\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG4vLyBjb25zdCBzcGFjZSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQ7XG4vLyBjb25zdCBhY2Nlc3NUb2tlbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgaW5mb0RhdGEgfSkge1xuLy8gICBjb25zdCB7IGNvbnRlbnQgfSA9IGluZm9EYXRhO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8cD5UaGlzIGlzIHRoZSBpbmRleCBwYWdlPC9wPlxuLy8gICAgIDwvPlxuLy8gICApO1xuLy8gfVxuXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgaW5mb0RhdGEgfSkge1xuLy8gLy8gICByZXR1cm4gKFxuLy8gLy8gICAgIDw+XG4vLyAvLyAgICAgICA8cD5UaGlzIGlzIHRoZSBpbmRleCBwYWdlIGl0IHNob3VsZG4ndCBiZSBhIGxpc3Q8L3A+XG4vLyAvLyAgICAgICA8dWw+XG4vLyAvLyAgICAgICAgIHtpbmZvRGF0YS5tYXAoKGluZm8pID0+IChcbi8vIC8vICAgICAgICAgICA8bGkga2V5PXtpbmZvLmNvbnRlbnQuc2x1Z30+XG4vLyAvLyAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtpbmZvLmNvbnRlbnQuc2x1Z31gfT5cbi8vIC8vICAgICAgICAgICAgICAgPGE+e2luZm8uY29udGVudC50aXRsZX08L2E+XG4vLyAvLyAgICAgICAgICAgICA8L0xpbms+XG4vLyAvLyAgICAgICAgICAgPC9saT5cbi8vIC8vICAgICAgICAgKSl9XG4vLyAvLyAgICAgICA8L3VsPlxuLy8gLy8gICAgIDwvPlxuLy8gLy8gICApO1xuLy8gLy8gfVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyAgIC8vIHNlbmQgYSByZXF1ZXN0IHRvIENvbnRlbnRmdWwgKHVzaW5nIHRoZSBzYW1lIFVSTCBmcm9tIEdyYXBoaVFMKVxuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuLy8gICAgICAgYGh0dHBzOi8vZ3JhcGhxbC5jb250ZW50ZnVsLmNvbS9jb250ZW50L3YxL3NwYWNlcy8ke3NwYWNlfS9lbnZpcm9ubWVudHMvbWFzdGVyYCxcbi8vICAgICAgIHtcbi8vICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgLy8gR3JhcGhRTCAqYWx3YXlzKiB1c2VzIFBPU1QgcmVxdWVzdHNcbi8vICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuLy8gICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLCAvLyBhZGQgYWNjZXNzIHRva2VuIGhlYWRlclxuLy8gICAgICAgICB9LFxuLy8gICAgICAgICAvLyBzZW5kIHRoZSBxdWVyeSB3cml0dGVuIGluIEdyYXBoaVFMIGFzIGEgc3RyaW5nXG4vLyAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgICAvLyBhbGwgcmVxdWVzdHMgc3RhcnQgd2l0aCBcInF1ZXJ5OlwiIHN0cmluZ2lmeSBmb3IgY29udmVuaWVuY2Vcbi8vICAgICAgICAgICBxdWVyeTogYFxuLy8gICAgICAgICAgIHF1ZXJ5IHtcbi8vICAgICAgICAgICAgICAgaW5mb1BhZ2VDb2xsZWN0aW9ue1xuLy8gICAgICAgICAgICAgICAgIGl0ZW1ze1xuLy8gICAgICAgICAgICAgICAgICAgY29udGVudHtcbi8vICAgICAgICAgICAgICAgICAgIHNsdWdcbi8vICAgICAgICAgICAgICAgICAgIHRpdGxlXG4vLyAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIGAsXG4vLyAgICAgICAgIH0pLFxuLy8gICAgICAgfVxuLy8gICAgICk7XG4vLyAgICAgLy8gZ3JhYiB0aGUgZGF0YSBmcm9tIHRoZSByZXNwb25zZVxuLy8gICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XG4vLyAgICAgY29uc3QgaW5mb0RhdGEgPSBkYXRhLmluZm9QYWdlQ29sbGVjdGlvbi5pdGVtcztcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wczoge1xuLy8gICAgICAgICBpbmZvRGF0YSxcbi8vICAgICAgIH0sXG4vLyAgICAgfTtcbi8vICAgfSBjYXRjaCAoZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZSk7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgIG5vdEZvdW5kOiB0cnVlLFxuLy8gICAgICAgfSxcbi8vICAgICB9O1xuLy8gICB9XG4vLyB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});