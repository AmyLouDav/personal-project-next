"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5101);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);
/* harmony import */ var _styles_index_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3498);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_1__]);
react_markdown__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const space = "jnyuf76defm3";
const accessToken = "7_j7mZ2UJoZ0s7eoO7_YGXPlunS4tuOcta1bxXvl6zM";
function Post({
  infoData
}) {
  const {
    content: {
      title,
      description,
      image: {
        url
      }
    }
  } = infoData;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_styles_index_styles_js__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_styles_index_styles_js__WEBPACK_IMPORTED_MODULE_2__/* .StyledH1 */ .XU, {
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_styles_index_styles_js__WEBPACK_IMPORTED_MODULE_2__/* .ContentContainer */ .OO, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_styles_index_styles_js__WEBPACK_IMPORTED_MODULE_2__/* .InfoPageImg */ .R_, {
          children: url && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_styles_index_styles_js__WEBPACK_IMPORTED_MODULE_2__/* .StyledImg */ .L6, {
            src: url,
            placeholder: "",
            layout: "responsive",
            width: "500px",
            height: "650px",
            alt: description
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_styles_index_styles_js__WEBPACK_IMPORTED_MODULE_2__/* .TextContainer */ .lU, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_styles_index_styles_js__WEBPACK_IMPORTED_MODULE_2__/* .StyledText */ .qY, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
              children: description
            })
          })
        })]
      })]
    })]
  });
}
async function getStaticProps() {
  const slug = `/home`;

  try {
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        query: `
            query GetPost($slug: String!) {
              infoPageCollection(
                where: {
                  slug: $slug
                },
                limit: 1
              ) {
                items {
                  content {
                    slug
                    title
                    description
                    image{
                      url
                      description
                    }
                  }
                }
              }
            }
          `,
        variables: {
          slug
        }
      })
    });

    if (!res.ok) {
      console.error(res);
      return {};
    }

    const {
      data
    } = await res.json();
    const [infoData] = data.infoPageCollection.items;
    return {
      props: {
        infoData
      }
    };
  } catch (e) {
    console.log("error", e);
    return {
      props: {
        notFound: true
      }
    };
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L6": () => (/* binding */ StyledImg),
/* harmony export */   "OO": () => (/* binding */ ContentContainer),
/* harmony export */   "R_": () => (/* binding */ InfoPageImg),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "XU": () => (/* binding */ StyledH1),
/* harmony export */   "lU": () => (/* binding */ TextContainer),
/* harmony export */   "qY": () => (/* binding */ StyledText)
/* harmony export */ });
/* unused harmony export Wrapper */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3703);



const StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "indexstyles__StyledH1",
  componentId: "sc-1d074ub-0"
})(["font-size:40px;font-family:", ";color:", ";font-weight:lighter;display:flex;justify-content:center;margin-top:30px;@media ", "{font-size:50px;}@media ", "{font-size:60px;}"], _lib_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .PrimaryFont */ .eW, _lib_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .PrimaryColour */ .xk, _lib_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .Tablet */ .YD, _lib_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .Laptop */ .Iz);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "indexstyles__Wrapper",
  componentId: "sc-1d074ub-1"
})(["width:100%;"]);
const StyledImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "indexstyles__StyledImg",
  componentId: "sc-1d074ub-2"
})(["display:flex;justify-content:center;"]);
const InfoPageImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "indexstyles__InfoPageImg",
  componentId: "sc-1d074ub-3"
})(["margin-top:30px;"]);
const StyledText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "indexstyles__StyledText",
  componentId: "sc-1d074ub-4"
})(["color:", ";font-family:", ";margin-top:30px;a{color:", ";text-decoration:none;}"], _lib_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .PrimaryColour */ .xk, _lib_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .SecondaryFont */ .Vm, _lib_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .PrimaryColour */ .xk);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "indexstyles__Container",
  componentId: "sc-1d074ub-5"
})(["max-width:1000px;margin:80px auto 100px auto;"]);
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "indexstyles__ContentContainer",
  componentId: "sc-1d074ub-6"
})(["margin:0 auto 100px auto;max-width:300px;"]);
const TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "indexstyles__TextContainer",
  componentId: "sc-1d074ub-7"
})(["margin:0 auto;"]);

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,986], () => (__webpack_exec__(2748)));
module.exports = __webpack_exports__;

})();