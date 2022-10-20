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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Image */ \"next/Image\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/index.js\";\n\n\nconst space = \"jnyuf76defm3\";\nconst accessToken = \"7_j7mZ2UJoZ0s7eoO7_YGXPlunS4tuOcta1bxXvl6zM\";\nfunction Post({\n  infoData\n}) {\n  const {\n    content\n  } = infoData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: content.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), content.image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_0___default()), {\n      src: content.image.url,\n      placeholder: \"\",\n      layout: \"responsive\",\n      width: \"500px\",\n      height: \"400px\",\n      alt: content?.image?.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: content.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\nasync function getStaticProps() {\n  // this is inefficient as it can only be this value\n  const slug = `/home`;\n\n  try {\n    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`, {\n      method: \"POST\",\n      headers: {\n        \"content-type\": \"application/json\",\n        authorization: `Bearer ${accessToken}`\n      },\n      body: JSON.stringify({\n        query: `\n            query GetPost($slug: String!) {\n              infoPageCollection(\n                where: {\n                  slug: $slug\n                },\n                limit: 1\n              ) {\n                items {\n                  content {\n                    slug\n                    title\n                    description\n                    image{\n                      url\n                      description\n                    }\n                  }\n                }\n              }\n            }\n          `,\n        variables: {\n          slug\n        }\n      })\n    });\n\n    if (!res.ok) {\n      console.error(res);\n      return {};\n    }\n\n    const {\n      data\n    } = await res.json();\n    const [infoData] = data.infoPageCollection.items;\n    return {\n      props: {\n        infoData\n      }\n    };\n  } catch (e) {\n    console.log(\"error\", e);\n    return {\n      props: {\n        notFound: true\n      }\n    };\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUMsS0FBSyxHQUFHQyxjQUFkO0FBQ0EsTUFBTUcsV0FBVyxHQUFHSCw2Q0FBcEI7QUFFZSxTQUFTSyxJQUFULENBQWM7RUFBRUM7QUFBRixDQUFkLEVBQTRCO0VBQ3pDLE1BQU07SUFBRUM7RUFBRixJQUFjRCxRQUFwQjtFQUNBLG9CQUNFO0lBQUEsd0JBQ0U7TUFBQSxVQUFLQyxPQUFPLENBQUNDO0lBQWI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLEVBR0dELE9BQU8sQ0FBQ0UsS0FBUixpQkFDQyw4REFBQyxtREFBRDtNQUNFLEdBQUcsRUFBRUYsT0FBTyxDQUFDRSxLQUFSLENBQWNDLEdBRHJCO01BRUUsV0FBVyxFQUFDLEVBRmQ7TUFHRSxNQUFNLEVBQUMsWUFIVDtNQUlFLEtBQUssRUFBQyxPQUpSO01BS0UsTUFBTSxFQUFDLE9BTFQ7TUFNRSxHQUFHLEVBQUVILE9BQU8sRUFBRUUsS0FBVCxFQUFnQkU7SUFOdkI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUpKLGVBYUU7TUFBQSxVQUFJSixPQUFPLENBQUNJO0lBQVo7TUFBQTtNQUFBO01BQUE7SUFBQSxRQWJGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBaUJEO0FBRU0sZUFBZUMsY0FBZixHQUFnQztFQUNyQztFQUNBLE1BQU1DLElBQUksR0FBSSxPQUFkOztFQUVBLElBQUk7SUFDRixNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUNwQixvREFBbURoQixLQUFNLHNCQURyQyxFQUVyQjtNQUNFaUIsTUFBTSxFQUFFLE1BRFY7TUFFRUMsT0FBTyxFQUFFO1FBQ1AsZ0JBQWdCLGtCQURUO1FBRVBDLGFBQWEsRUFBRyxVQUFTZixXQUFZO01BRjlCLENBRlg7TUFPRWdCLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7UUFDbkJDLEtBQUssRUFBRztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0F0QjZCO1FBdUJuQkMsU0FBUyxFQUFFO1VBQ1RWO1FBRFM7TUF2QlEsQ0FBZjtJQVBSLENBRnFCLENBQXZCOztJQXVDQSxJQUFJLENBQUNDLEdBQUcsQ0FBQ1UsRUFBVCxFQUFhO01BQ1hDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjWixHQUFkO01BQ0EsT0FBTyxFQUFQO0lBQ0Q7O0lBRUQsTUFBTTtNQUFFYTtJQUFGLElBQVcsTUFBTWIsR0FBRyxDQUFDYyxJQUFKLEVBQXZCO0lBRUEsTUFBTSxDQUFDdEIsUUFBRCxJQUFhcUIsSUFBSSxDQUFDRSxrQkFBTCxDQUF3QkMsS0FBM0M7SUFFQSxPQUFPO01BQ0xDLEtBQUssRUFBRTtRQUNMekI7TUFESztJQURGLENBQVA7RUFLRCxDQXRERCxDQXNERSxPQUFPMEIsQ0FBUCxFQUFVO0lBQ1ZQLE9BQU8sQ0FBQ1EsR0FBUixDQUFZLE9BQVosRUFBcUJELENBQXJCO0lBQ0EsT0FBTztNQUNMRCxLQUFLLEVBQUU7UUFDTEcsUUFBUSxFQUFFO01BREw7SUFERixDQUFQO0VBS0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXByb2plY3QtbmV4dC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L0ltYWdlXCI7XG5cbmNvbnN0IHNwYWNlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRDtcbmNvbnN0IGFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBpbmZvRGF0YSB9KSB7XG4gIGNvbnN0IHsgY29udGVudCB9ID0gaW5mb0RhdGE7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57Y29udGVudC50aXRsZX08L2gxPlxuICAgICBcbiAgICAgIHtjb250ZW50LmltYWdlICYmIChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtjb250ZW50LmltYWdlLnVybH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgd2lkdGg9XCI1MDBweFwiXG4gICAgICAgICAgaGVpZ2h0PVwiNDAwcHhcIlxuICAgICAgICAgIGFsdD17Y29udGVudD8uaW1hZ2U/LmRlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxwPntjb250ZW50LmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyB0aGlzIGlzIGluZWZmaWNpZW50IGFzIGl0IGNhbiBvbmx5IGJlIHRoaXMgdmFsdWVcbiAgY29uc3Qgc2x1ZyA9IGAvaG9tZWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2dyYXBocWwuY29udGVudGZ1bC5jb20vY29udGVudC92MS9zcGFjZXMvJHtzcGFjZX0vZW52aXJvbm1lbnRzL21hc3RlcmAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgICAgfSxcblxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgIHF1ZXJ5IEdldFBvc3QoJHNsdWc6IFN0cmluZyEpIHtcbiAgICAgICAgICAgICAgaW5mb1BhZ2VDb2xsZWN0aW9uKFxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgICBzbHVnOiAkc2x1Z1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGltaXQ6IDFcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgICAgICAgY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGAsXG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBzbHVnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgY29uc29sZS5lcnJvcihyZXMpO1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnN0IFtpbmZvRGF0YV0gPSBkYXRhLmluZm9QYWdlQ29sbGVjdGlvbi5pdGVtcztcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBpbmZvRGF0YSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzcGFjZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DT05URU5URlVMX1NQQUNFX0lEIiwiYWNjZXNzVG9rZW4iLCJORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTiIsIlBvc3QiLCJpbmZvRGF0YSIsImNvbnRlbnQiLCJ0aXRsZSIsImltYWdlIiwidXJsIiwiZGVzY3JpcHRpb24iLCJnZXRTdGF0aWNQcm9wcyIsInNsdWciLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInZhcmlhYmxlcyIsIm9rIiwiY29uc29sZSIsImVycm9yIiwiZGF0YSIsImpzb24iLCJpbmZvUGFnZUNvbGxlY3Rpb24iLCJpdGVtcyIsInByb3BzIiwiZSIsImxvZyIsIm5vdEZvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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