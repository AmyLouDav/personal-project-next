"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Image */ \"next/Image\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_1__]);\nreact_markdown__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/index.js\";\n\n\n\nconst space = \"jnyuf76defm3\";\nconst accessToken = \"7_j7mZ2UJoZ0s7eoO7_YGXPlunS4tuOcta1bxXvl6zM\";\nfunction Post({\n  infoData\n}) {\n  const {\n    content\n  } = infoData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      children: content.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), content.image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_0___default()), {\n      src: content.image.url,\n      placeholder: \"\",\n      layout: \"responsive\",\n      width: \"500px\",\n      height: \"400px\",\n      alt: content?.image?.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      children: content.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\nasync function getStaticProps() {\n  // this is inefficient as it can only be this value\n  const slug = `/home`;\n\n  try {\n    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`, {\n      method: \"POST\",\n      headers: {\n        \"content-type\": \"application/json\",\n        authorization: `Bearer ${accessToken}`\n      },\n      body: JSON.stringify({\n        query: `\n            query GetPost($slug: String!) {\n              infoPageCollection(\n                where: {\n                  slug: $slug\n                },\n                limit: 1\n              ) {\n                items {\n                  content {\n                    slug\n                    title\n                    description\n                    image{\n                      url\n                      description\n                    }\n                  }\n                }\n              }\n            }\n          `,\n        variables: {\n          slug\n        }\n      })\n    });\n\n    if (!res.ok) {\n      console.error(res);\n      return {};\n    }\n\n    const {\n      data\n    } = await res.json();\n    const [infoData] = data.infoPageCollection.items;\n    return {\n      props: {\n        infoData\n      }\n    };\n  } catch (e) {\n    console.log(\"error\", e);\n    return {\n      props: {\n        notFound: true\n      }\n    };\n  }\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUUsS0FBSyxHQUFHQyxjQUFkO0FBQ0EsTUFBTUcsV0FBVyxHQUFHSCw2Q0FBcEI7QUFFZSxTQUFTSyxJQUFULENBQWM7RUFBRUM7QUFBRixDQUFkLEVBQTRCO0VBQ3pDLE1BQU07SUFBRUM7RUFBRixJQUFjRCxRQUFwQjtFQUNBLG9CQUNFO0lBQUEsd0JBQ0U7TUFBQSxVQUFLQyxPQUFPLENBQUNDO0lBQWI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLEVBR0dELE9BQU8sQ0FBQ0UsS0FBUixpQkFDQyw4REFBQyxtREFBRDtNQUNFLEdBQUcsRUFBRUYsT0FBTyxDQUFDRSxLQUFSLENBQWNDLEdBRHJCO01BRUUsV0FBVyxFQUFDLEVBRmQ7TUFHRSxNQUFNLEVBQUMsWUFIVDtNQUlFLEtBQUssRUFBQyxPQUpSO01BS0UsTUFBTSxFQUFDLE9BTFQ7TUFNRSxHQUFHLEVBQUVILE9BQU8sRUFBRUUsS0FBVCxFQUFnQkU7SUFOdkI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUpKLGVBYUUsOERBQUMsc0RBQUQ7TUFBQSxVQUNDSixPQUFPLENBQUNJO0lBRFQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQWJGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBb0JEO0FBRU0sZUFBZUMsY0FBZixHQUFnQztFQUNyQztFQUNBLE1BQU1DLElBQUksR0FBSSxPQUFkOztFQUVBLElBQUk7SUFDRixNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUNwQixvREFBbURoQixLQUFNLHNCQURyQyxFQUVyQjtNQUNFaUIsTUFBTSxFQUFFLE1BRFY7TUFFRUMsT0FBTyxFQUFFO1FBQ1AsZ0JBQWdCLGtCQURUO1FBRVBDLGFBQWEsRUFBRyxVQUFTZixXQUFZO01BRjlCLENBRlg7TUFPRWdCLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7UUFDbkJDLEtBQUssRUFBRztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0F0QjZCO1FBdUJuQkMsU0FBUyxFQUFFO1VBQ1RWO1FBRFM7TUF2QlEsQ0FBZjtJQVBSLENBRnFCLENBQXZCOztJQXVDQSxJQUFJLENBQUNDLEdBQUcsQ0FBQ1UsRUFBVCxFQUFhO01BQ1hDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjWixHQUFkO01BQ0EsT0FBTyxFQUFQO0lBQ0Q7O0lBRUQsTUFBTTtNQUFFYTtJQUFGLElBQVcsTUFBTWIsR0FBRyxDQUFDYyxJQUFKLEVBQXZCO0lBRUEsTUFBTSxDQUFDdEIsUUFBRCxJQUFhcUIsSUFBSSxDQUFDRSxrQkFBTCxDQUF3QkMsS0FBM0M7SUFFQSxPQUFPO01BQ0xDLEtBQUssRUFBRTtRQUNMekI7TUFESztJQURGLENBQVA7RUFLRCxDQXRERCxDQXNERSxPQUFPMEIsQ0FBUCxFQUFVO0lBQ1ZQLE9BQU8sQ0FBQ1EsR0FBUixDQUFZLE9BQVosRUFBcUJELENBQXJCO0lBQ0EsT0FBTztNQUNMRCxLQUFLLEVBQUU7UUFDTEcsUUFBUSxFQUFFO01BREw7SUFERixDQUFQO0VBS0Q7QUFDRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcHJvamVjdC1uZXh0Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvSW1hZ2VcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuXG5jb25zdCBzcGFjZSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQ7XG5jb25zdCBhY2Nlc3NUb2tlbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgaW5mb0RhdGEgfSkge1xuICBjb25zdCB7IGNvbnRlbnQgfSA9IGluZm9EYXRhO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2NvbnRlbnQudGl0bGV9PC9oMT5cbiAgICAgXG4gICAgICB7Y29udGVudC5pbWFnZSAmJiAoXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17Y29udGVudC5pbWFnZS51cmx9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgIHdpZHRoPVwiNTAwcHhcIlxuICAgICAgICAgIGhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgICBhbHQ9e2NvbnRlbnQ/LmltYWdlPy5kZXNjcmlwdGlvbn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8UmVhY3RNYXJrZG93bj5cbiAgICAgIHtjb250ZW50LmRlc2NyaXB0aW9ufVxuICAgICAgPC9SZWFjdE1hcmtkb3duPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gdGhpcyBpcyBpbmVmZmljaWVudCBhcyBpdCBjYW4gb25seSBiZSB0aGlzIHZhbHVlXG4gIGNvbnN0IHNsdWcgPSBgL2hvbWVgO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9ncmFwaHFsLmNvbnRlbnRmdWwuY29tL2NvbnRlbnQvdjEvc3BhY2VzLyR7c3BhY2V9L2Vudmlyb25tZW50cy9tYXN0ZXJgLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgICAgIH0sXG5cbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICBxdWVyeSBHZXRQb3N0KCRzbHVnOiBTdHJpbmchKSB7XG4gICAgICAgICAgICAgIGluZm9QYWdlQ29sbGVjdGlvbihcbiAgICAgICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgICAgc2x1ZzogJHNsdWdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxpbWl0OiAxXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIGltYWdle1xuICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgLFxuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgc2x1ZyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocmVzKTtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zdCBbaW5mb0RhdGFdID0gZGF0YS5pbmZvUGFnZUNvbGxlY3Rpb24uaXRlbXM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgaW5mb0RhdGEsXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGUpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3RNYXJrZG93biIsInNwYWNlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQiLCJhY2Nlc3NUb2tlbiIsIk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOIiwiUG9zdCIsImluZm9EYXRhIiwiY29udGVudCIsInRpdGxlIiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiIsImdldFN0YXRpY1Byb3BzIiwic2x1ZyIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJkYXRhIiwianNvbiIsImluZm9QYWdlQ29sbGVjdGlvbiIsIml0ZW1zIiwicHJvcHMiLCJlIiwibG9nIiwibm90Rm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/Image":
/*!*****************************!*\
  !*** external "next/Image" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("next/Image");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();