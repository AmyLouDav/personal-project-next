"use strict";
(() => {
var exports = {};
exports.id = 34;
exports.ids = [34];
exports.modules = {

/***/ 670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ List),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./components/nav-bar/nav-bar.js + 1 modules
var nav_bar = __webpack_require__(5101);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(3703);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./styles/list.styles.js




const StyledH1 = external_styled_components_default().h1.withConfig({
  displayName: "liststyles__StyledH1",
  componentId: "sc-1ukxuho-0"
})(["font-size:40px;font-family:", ";color:", ";font-weight:lighter;display:flex;justify-content:center;margin:40px 0 0;@media ", "{font-size:50px;}@media ", "{font-size:60px;}"], constants/* PrimaryFont */.eW, constants/* PrimaryColour */.xk, constants/* Tablet */.YD, constants/* Laptop */.Iz);
const StyledA = external_styled_components_default().a.withConfig({
  displayName: "liststyles__StyledA",
  componentId: "sc-1ukxuho-1"
})(["color:", ";", " text-decoration:none;", " list-style-type:none;&:hover,&:focus{color:pink;}"], constants/* PrimaryColour */.xk, ""
/* font-family: ${PrimaryFont}; */
, ''
/* margin-top: 50px; */
);
const StyledLi = external_styled_components_default().li.withConfig({
  displayName: "liststyles__StyledLi",
  componentId: "sc-1ukxuho-2"
})(["list-style-type:none;"]);
const StyledLink = external_styled_components_default()((link_default())).withConfig({
  displayName: "liststyles__StyledLink",
  componentId: "sc-1ukxuho-3"
})(["color:", ";text-decoration:none;list-style:none;font-weight:bold;margin-top:50px;list-style-type:none;&:hover,&:focus{color:pink;}"], constants/* PrimaryColour */.xk);
const StyledImg = external_styled_components_default().img.withConfig({
  displayName: "liststyles__StyledImg",
  componentId: "sc-1ukxuho-4"
})(["width:200px;height:300px;object-fit:cover;padding:20px 0;"]);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "liststyles__Wrapper",
  componentId: "sc-1ukxuho-5"
})(["width:100%;"]);
const LinkCardContainer = external_styled_components_default().div.withConfig({
  displayName: "liststyles__LinkCardContainer",
  componentId: "sc-1ukxuho-6"
})(["@media ", "{display:inline-block;height:300px;width:300px;}@media ", "{display:inline-block;height:300px;width:300px;}"], constants/* Tablet */.YD, constants/* Laptop */.Iz);
const Container = external_styled_components_default().div.withConfig({
  displayName: "liststyles__Container",
  componentId: "sc-1ukxuho-7"
})(["max-width:1000px;margin:80px auto 100px auto;"]);
const TitleContainer = external_styled_components_default().div.withConfig({
  displayName: "liststyles__TitleContainer",
  componentId: "sc-1ukxuho-8"
})(["display:flex;justify-content:center;"]);
const ListImage = external_styled_components_default().img.withConfig({
  displayName: "liststyles__ListImage",
  componentId: "sc-1ukxuho-9"
})(["width:100px;"]);
const ImgContainer = external_styled_components_default().div.withConfig({
  displayName: "liststyles__ImgContainer",
  componentId: "sc-1ukxuho-10"
})(["margin:30px;display:flex;justify-content:center;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/list.js





const space = "jnyuf76defm3";
const accessToken = "7_j7mZ2UJoZ0s7eoO7_YGXPlunS4tuOcta1bxXvl6zM";
function List({
  blogData
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(nav_bar/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(StyledH1, {
        children: "Blog Posts"
      }), blogData.map(blog => /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledLi, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: `posts/article${blog.content.slug}`,
          children: /*#__PURE__*/jsx_runtime_.jsx(ImgContainer, {
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledImg, {
              src: blog.content.image.url,
              width: "200px",
              height: "300px"
            }, blog.content.sys.id)
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(StyledLink, {
          href: `posts/article${blog.content.slug}`,
          children: /*#__PURE__*/jsx_runtime_.jsx(TitleContainer, {
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledA, {
              children: blog.content.title
            })
          })
        })]
      }, blog.content.slug))]
    })]
  });
}
async function getStaticProps() {
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
                content{
                  sys{
                    id
                  }
                slug
                title
                description
                  image{
                    url
                  }
                }
              }
            }
          }
        `
    })
  });
  const {
    data
  } = await res.json();
  const blogData = data.blogPagesCollection.items;
  return {
    props: {
      blogData
    }
  };
}

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,986], () => (__webpack_exec__(670)));
module.exports = __webpack_exports__;

})();