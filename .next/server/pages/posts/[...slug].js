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
exports.id = "pages/posts/[...slug]";
exports.ids = ["pages/posts/[...slug]"];
exports.modules = {

/***/ "./pages/posts/[...slug].js":
/*!**********************************!*\
  !*** ./pages/posts/[...slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Image */ \"next/Image\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/a0834762/Documents/personal-project-next/pages/posts/[...slug].js\";\n\n\nconst space = \"jnyuf76defm3\";\nconst accessToken = \"7_j7mZ2UJoZ0s7eoO7_YGXPlunS4tuOcta1bxXvl6zM\";\nfunction Post({\n  blogData\n}) {\n  const {\n    content\n  } = blogData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: content.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: content.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), content.image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_0___default()), {\n      src: content.image.url,\n      placeholder: \"\",\n      layout: \"responsive\",\n      width: \"500px\",\n      height: \"400px\",\n      alt: content?.image?.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\nasync function getStaticPaths() {\n  try {\n    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`, {\n      method: \"POST\",\n      headers: {\n        \"content-type\": \"application/json\",\n        authorization: `Bearer ${accessToken}`\n      },\n      body: JSON.stringify({\n        query: `\n          query {\n            blogPagesCollection{\n              items{\n                  slug\n              }\n            }\n          }\n        `\n      })\n    });\n\n    if (!res.ok) {\n      console.error(res);\n      return {};\n    }\n\n    const {\n      data\n    } = await res.json();\n    const blogSlugs = data.blogPagesCollection.items;\n    const paths = blogSlugs.map(blogSlug => {\n      const {\n        slug\n      } = blogSlug;\n      const fullSlug = `article${slug}`;\n      return {\n        params: {\n          slug: fullSlug.split(\"/\")\n        }\n      };\n    });\n    return {\n      paths,\n      fallback: false\n    };\n  } catch (e) {\n    console.log(\"error\", e);\n    return {\n      props: {\n        notFound: true\n      }\n    };\n  }\n}\nasync function getStaticProps({\n  params\n}) {\n  const slug = `/${params.slug[1]}`;\n\n  try {\n    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`, {\n      method: \"POST\",\n      headers: {\n        \"content-type\": \"application/json\",\n        authorization: `Bearer ${accessToken}`\n      },\n      body: JSON.stringify({\n        query: `\n            query GetPost($slug: String!) {\n              blogPagesCollection(\n                where: {\n                  slug: $slug\n                },\n                limit: 1\n              ) {\n                items {\n                  content {\n                    slug\n                    title\n                    description\n                    image{\n                      url\n                      description\n                    }\n                  }\n                }\n              }\n            }\n          `,\n        variables: {\n          slug\n        }\n      })\n    });\n\n    if (!res.ok) {\n      console.error(res);\n      return {};\n    }\n\n    const {\n      data\n    } = await res.json();\n    const [blogData] = data.blogPagesCollection.items;\n    return {\n      props: {\n        blogData\n      }\n    };\n  } catch (e) {\n    console.log(\"error\", e);\n    return {\n      props: {\n        notFound: true\n      }\n    };\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bLi4uc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLGNBQWQ7QUFDQSxNQUFNRyxXQUFXLEdBQUdILDZDQUFwQjtBQUVlLFNBQVNLLElBQVQsQ0FBYztFQUFFQztBQUFGLENBQWQsRUFBNEI7RUFDekMsTUFBTTtJQUFFQztFQUFGLElBQWNELFFBQXBCO0VBQ0Esb0JBQ0U7SUFBQSx3QkFDRTtNQUFBLFVBQUtDLE9BQU8sQ0FBQ0M7SUFBYjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsZUFFRTtNQUFBLFVBQUlELE9BQU8sQ0FBQ0U7SUFBWjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBRkYsRUFHR0YsT0FBTyxDQUFDRyxLQUFSLGlCQUNDLDhEQUFDLG1EQUFEO01BQ0UsR0FBRyxFQUFFSCxPQUFPLENBQUNHLEtBQVIsQ0FBY0MsR0FEckI7TUFFRSxXQUFXLEVBQUMsRUFGZDtNQUdFLE1BQU0sRUFBQyxZQUhUO01BSUUsS0FBSyxFQUFDLE9BSlI7TUFLRSxNQUFNLEVBQUMsT0FMVDtNQU1FLEdBQUcsRUFBRUosT0FBTyxFQUFFRyxLQUFULEVBQWdCRDtJQU52QjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBSko7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFnQkQ7QUFFTSxlQUFlRyxjQUFmLEdBQWdDO0VBQ3JDLElBQUk7SUFDRixNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUNwQixvREFBbURmLEtBQU0sc0JBRHJDLEVBRXJCO01BQ0VnQixNQUFNLEVBQUUsTUFEVjtNQUVFQyxPQUFPLEVBQUU7UUFDUCxnQkFBZ0Isa0JBRFQ7UUFFUEMsYUFBYSxFQUFHLFVBQVNkLFdBQVk7TUFGOUIsQ0FGWDtNQU1FZSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO1FBQ25CQyxLQUFLLEVBQUc7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtNQVQ2QixDQUFmO0lBTlIsQ0FGcUIsQ0FBdkI7O0lBc0JBLElBQUksQ0FBQ1IsR0FBRyxDQUFDUyxFQUFULEVBQWE7TUFDWEMsT0FBTyxDQUFDQyxLQUFSLENBQWNYLEdBQWQ7TUFDQSxPQUFPLEVBQVA7SUFDRDs7SUFFRCxNQUFNO01BQUVZO0lBQUYsSUFBVyxNQUFNWixHQUFHLENBQUNhLElBQUosRUFBdkI7SUFDQSxNQUFNQyxTQUFTLEdBQUdGLElBQUksQ0FBQ0csbUJBQUwsQ0FBeUJDLEtBQTNDO0lBQ0EsTUFBTUMsS0FBSyxHQUFHSCxTQUFTLENBQUNJLEdBQVYsQ0FBZUMsUUFBRCxJQUFjO01BQ3hDLE1BQU07UUFBRUM7TUFBRixJQUFXRCxRQUFqQjtNQUNBLE1BQU1FLFFBQVEsR0FBSSxVQUFTRCxJQUFLLEVBQWhDO01BQ0EsT0FBTztRQUNMRSxNQUFNLEVBQUU7VUFBRUYsSUFBSSxFQUFFQyxRQUFRLENBQUNFLEtBQVQsQ0FBZSxHQUFmO1FBQVI7TUFESCxDQUFQO0lBR0QsQ0FOYSxDQUFkO0lBUUEsT0FBTztNQUNMTixLQURLO01BRUxPLFFBQVEsRUFBRTtJQUZMLENBQVA7RUFJRCxDQTFDRCxDQTBDRSxPQUFPQyxDQUFQLEVBQVU7SUFDVmYsT0FBTyxDQUFDZ0IsR0FBUixDQUFZLE9BQVosRUFBcUJELENBQXJCO0lBQ0EsT0FBTztNQUNMRSxLQUFLLEVBQUU7UUFDTEMsUUFBUSxFQUFFO01BREw7SUFERixDQUFQO0VBS0Q7QUFDRjtBQUVNLGVBQWVDLGNBQWYsQ0FBOEI7RUFBRVA7QUFBRixDQUE5QixFQUEwQztFQUMvQyxNQUFNRixJQUFJLEdBQUksSUFBR0UsTUFBTSxDQUFDRixJQUFQLENBQVksQ0FBWixDQUFlLEVBQWhDOztFQUVBLElBQUk7SUFDRixNQUFNcEIsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDcEIsb0RBQW1EZixLQUFNLHNCQURyQyxFQUVyQjtNQUNFZ0IsTUFBTSxFQUFFLE1BRFY7TUFFRUMsT0FBTyxFQUFFO1FBQ1AsZ0JBQWdCLGtCQURUO1FBRVBDLGFBQWEsRUFBRyxVQUFTZCxXQUFZO01BRjlCLENBRlg7TUFNRWUsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtRQUNuQkMsS0FBSyxFQUFHO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQXRCNkI7UUF1Qm5Cc0IsU0FBUyxFQUFFO1VBQ1RWO1FBRFM7TUF2QlEsQ0FBZjtJQU5SLENBRnFCLENBQXZCOztJQXNDQSxJQUFJLENBQUNwQixHQUFHLENBQUNTLEVBQVQsRUFBYTtNQUNYQyxPQUFPLENBQUNDLEtBQVIsQ0FBY1gsR0FBZDtNQUNBLE9BQU8sRUFBUDtJQUNEOztJQUVELE1BQU07TUFBRVk7SUFBRixJQUFXLE1BQU1aLEdBQUcsQ0FBQ2EsSUFBSixFQUF2QjtJQUVBLE1BQU0sQ0FBQ3BCLFFBQUQsSUFBYW1CLElBQUksQ0FBQ0csbUJBQUwsQ0FBeUJDLEtBQTVDO0lBRUEsT0FBTztNQUNMVyxLQUFLLEVBQUU7UUFDTGxDO01BREs7SUFERixDQUFQO0VBS0QsQ0FyREQsQ0FxREUsT0FBT2dDLENBQVAsRUFBVTtJQUNWZixPQUFPLENBQUNnQixHQUFSLENBQVksT0FBWixFQUFxQkQsQ0FBckI7SUFDQSxPQUFPO01BQ0xFLEtBQUssRUFBRTtRQUNMQyxRQUFRLEVBQUU7TUFETDtJQURGLENBQVA7RUFLRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcHJvamVjdC1uZXh0Ly4vcGFnZXMvcG9zdHMvWy4uLnNsdWddLmpzP2E5MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L0ltYWdlXCI7XG5cbmNvbnN0IHNwYWNlID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRDtcbmNvbnN0IGFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBibG9nRGF0YSB9KSB7XG4gIGNvbnN0IHsgY29udGVudCB9ID0gYmxvZ0RhdGE7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57Y29udGVudC50aXRsZX08L2gxPlxuICAgICAgPHA+e2NvbnRlbnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAge2NvbnRlbnQuaW1hZ2UgJiYgKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e2NvbnRlbnQuaW1hZ2UudXJsfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICB3aWR0aD1cIjUwMHB4XCJcbiAgICAgICAgICBoZWlnaHQ9XCI0MDBweFwiXG4gICAgICAgICAgYWx0PXtjb250ZW50Py5pbWFnZT8uZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9ncmFwaHFsLmNvbnRlbnRmdWwuY29tL2NvbnRlbnQvdjEvc3BhY2VzLyR7c3BhY2V9L2Vudmlyb25tZW50cy9tYXN0ZXJgLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgIHF1ZXJ5IHtcbiAgICAgICAgICAgIGJsb2dQYWdlc0NvbGxlY3Rpb257XG4gICAgICAgICAgICAgIGl0ZW1ze1xuICAgICAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgICB9KSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocmVzKTtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc3QgYmxvZ1NsdWdzID0gZGF0YS5ibG9nUGFnZXNDb2xsZWN0aW9uLml0ZW1zO1xuICAgIGNvbnN0IHBhdGhzID0gYmxvZ1NsdWdzLm1hcCgoYmxvZ1NsdWcpID0+IHtcbiAgICAgIGNvbnN0IHsgc2x1ZyB9ID0gYmxvZ1NsdWc7XG4gICAgICBjb25zdCBmdWxsU2x1ZyA9IGBhcnRpY2xlJHtzbHVnfWA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHsgc2x1ZzogZnVsbFNsdWcuc3BsaXQoXCIvXCIpIH0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGhzLFxuICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGUpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBzbHVnID0gYC8ke3BhcmFtcy5zbHVnWzFdfWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2dyYXBocWwuY29udGVudGZ1bC5jb20vY29udGVudC92MS9zcGFjZXMvJHtzcGFjZX0vZW52aXJvbm1lbnRzL21hc3RlcmAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICBxdWVyeSBHZXRQb3N0KCRzbHVnOiBTdHJpbmchKSB7XG4gICAgICAgICAgICAgIGJsb2dQYWdlc0NvbGxlY3Rpb24oXG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgIHNsdWc6ICRzbHVnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsaW1pdDogMVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICAgICAgICBjb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICBpbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYCxcbiAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIHNsdWcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHJlcyk7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc3QgW2Jsb2dEYXRhXSA9IGRhdGEuYmxvZ1BhZ2VzQ29sbGVjdGlvbi5pdGVtcztcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBibG9nRGF0YSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzcGFjZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DT05URU5URlVMX1NQQUNFX0lEIiwiYWNjZXNzVG9rZW4iLCJORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTiIsIlBvc3QiLCJibG9nRGF0YSIsImNvbnRlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ1cmwiLCJnZXRTdGF0aWNQYXRocyIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5Iiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJkYXRhIiwianNvbiIsImJsb2dTbHVncyIsImJsb2dQYWdlc0NvbGxlY3Rpb24iLCJpdGVtcyIsInBhdGhzIiwibWFwIiwiYmxvZ1NsdWciLCJzbHVnIiwiZnVsbFNsdWciLCJwYXJhbXMiLCJzcGxpdCIsImZhbGxiYWNrIiwiZSIsImxvZyIsInByb3BzIiwibm90Rm91bmQiLCJnZXRTdGF0aWNQcm9wcyIsInZhcmlhYmxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[...slug].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[...slug].js"));
module.exports = __webpack_exports__;

})();