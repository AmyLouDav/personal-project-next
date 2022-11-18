"use strict";
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 5101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/nav-bar/styles.js


const Tablet = (/* unused pure expression or super */ null && (`768px`));
const Laptop = (/* unused pure expression or super */ null && (`1024px`));
const PrimaryColour = `#f25731`;
const PrimaryFont = (/* unused pure expression or super */ null && (`Abril Fatface`));
const SecondaryFont = `Signika`;
const NavBarLink = external_styled_components_default()((link_default())).withConfig({
  displayName: "styles__NavBarLink",
  componentId: "sc-18olijw-0"
})(["margin-right:40px;margin-top:10px;padding-right:30px;font-family:", ";"], SecondaryFont);
const NavBarContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__NavBarContainer",
  componentId: "sc-18olijw-1"
})(["position:fixed;top:0;background-color:white;border-bottom:1px solid ", ";padding:14px;padding-left:35px;margin:0;width:100%;display:flex;flex-direction:row;z-index:1;"], PrimaryColour);
const StyledLink = external_styled_components_default().a.withConfig({
  displayName: "styles__StyledLink",
  componentId: "sc-18olijw-2"
})(["color:", ";font-family:", ";text-decoration:none;font-size:13px;padding-right:30px;font-weight:bold;list-style-type:none;&:hover,&:focus{color:pink;}&:active{color:violet;}"], PrimaryColour, SecondaryFont);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/nav-bar/nav-bar.js




function Navbar() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavBarContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(NavBarLink, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx(StyledLink, {
        children: "Home"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(NavBarLink, {
      href: "/info/info/sayhello",
      children: /*#__PURE__*/jsx_runtime_.jsx(StyledLink, {
        children: "Contact Us"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(NavBarLink, {
      href: "/list",
      children: /*#__PURE__*/jsx_runtime_.jsx(StyledLink, {
        children: "Blog Posts"
      })
    })]
  });
}

/***/ }),

/***/ 3703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Iz": () => (/* binding */ Laptop),
/* harmony export */   "Vm": () => (/* binding */ SecondaryFont),
/* harmony export */   "YD": () => (/* binding */ Tablet),
/* harmony export */   "eW": () => (/* binding */ PrimaryFont),
/* harmony export */   "xk": () => (/* binding */ PrimaryColour)
/* harmony export */ });
const Tablet = `768px`;
const Laptop = `1024px`;
const PrimaryColour = `#f25731`;
const PrimaryFont = `Abril Fatface`;
const SecondaryFont = `Signika`; // //objects called media and fonts etc and export the obj
// //not each var is an export

/***/ })

};
;