"use strict";
(() => {
var exports = {};
exports.id = 50;
exports.ids = [50];
exports.modules = {

/***/ 5222:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5101);
/* harmony import */ var _styles_blog_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2886);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles_blog_styles__WEBPACK_IMPORTED_MODULE_1__]);
_styles_blog_styles__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const space = "jnyuf76defm3";
const accessToken = "7_j7mZ2UJoZ0s7eoO7_YGXPlunS4tuOcta1bxXvl6zM";
function Post({
  blogData
}) {
  const {
    content: {
      title,
      description,
      image: {
        url
      }
    }
  } = blogData;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_nav_bar_nav_bar__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_styles_blog_styles__WEBPACK_IMPORTED_MODULE_1__/* .H1Container */ .cj, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_styles_blog_styles__WEBPACK_IMPORTED_MODULE_1__/* .StyledH1 */ .XU, {
        children: title
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_styles_blog_styles__WEBPACK_IMPORTED_MODULE_1__/* .ContentContainer */ .OO, {
      children: [url && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_styles_blog_styles__WEBPACK_IMPORTED_MODULE_1__/* .StyledImg */ .L6, {
        src: url,
        placeholder: "",
        layout: "responsive",
        width: "300px",
        height: "200px",
        alt: description
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_styles_blog_styles__WEBPACK_IMPORTED_MODULE_1__/* .TextContainer */ .lU, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_styles_blog_styles__WEBPACK_IMPORTED_MODULE_1__/* .StyledText */ .qY, {
          children: description
        })
      })]
    })]
  });
}
async function getStaticPaths() {
  try {
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        query: `
            query {
              blogPagesCollection{
                items{
                    slug
                }
              }
            }
          `
      })
    });

    if (!res.ok) {
      console.error(res);
      return {};
    }

    const {
      data
    } = await res.json();
    const blogSlugs = data.blogPagesCollection.items;
    const paths = blogSlugs.map(blogSlug => {
      const {
        slug
      } = blogSlug;
      const fullSlug = `article${slug}`;
      return {
        params: {
          slug: fullSlug.split("/")
        }
      };
    });
    return {
      paths,
      fallback: false
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
async function getStaticProps({
  params
}) {
  const slug = `/${params.slug[1]}`;

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
              blogPagesCollection(
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
    const [blogData] = data.blogPagesCollection.items;
    return {
      props: {
        blogData
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

/***/ 2886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L6": () => (/* binding */ StyledImg),
/* harmony export */   "OO": () => (/* binding */ ContentContainer),
/* harmony export */   "XU": () => (/* binding */ StyledH1),
/* harmony export */   "cj": () => (/* binding */ H1Container),
/* harmony export */   "lU": () => (/* binding */ TextContainer),
/* harmony export */   "qY": () => (/* binding */ StyledText)
/* harmony export */ });
/* unused harmony export Wrapper */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3703);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_1__]);
react_markdown__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const StyledH1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "blogstyles__StyledH1",
  componentId: "sc-1ltdgwa-0"
})(["font-size:20px;font-family:", ";color:", ";font-weight:lighter;display:flex;justify-content:center;margin-top:80px;margin-bottom:30px;@media (", "){font-size:30px;}@media (", "){font-size:50px;}"], _lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .PrimaryFont */ .eW, _lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .PrimaryColour */ .xk, _lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .Tablet */ .YD, _lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .Laptop */ .Iz);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "blogstyles__Wrapper",
  componentId: "sc-1ltdgwa-1"
})(["width:100%;"]);
const StyledImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "blogstyles__StyledImg",
  componentId: "sc-1ltdgwa-2"
})(["display:flex;justify-content:center;padding-bottom:20px;"]);
const StyledText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "blogstyles__StyledText",
  componentId: "sc-1ltdgwa-3"
})(["color:black;font-size:12px;font-family:", ";"], _lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .SecondaryFont */ .Vm);
const TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "blogstyles__TextContainer",
  componentId: "sc-1ltdgwa-4"
})(["margin:0 auto;"]);
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "blogstyles__ContentContainer",
  componentId: "sc-1ltdgwa-5"
})(["margin:0 auto 100px auto;max-width:300px;"]);
const H1Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "blogstyles__H1Container",
  componentId: "sc-1ltdgwa-6"
})(["display:flex;justify-content:center;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,986], () => (__webpack_exec__(5222)));
module.exports = __webpack_exports__;

})();