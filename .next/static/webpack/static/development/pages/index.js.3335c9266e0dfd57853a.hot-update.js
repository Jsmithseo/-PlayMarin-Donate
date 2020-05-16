webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/prebuilt/DonutShop.jsx":
/*!*******************************************!*\
  !*** ./components/prebuilt/DonutShop.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image */ \"./components/prebuilt/Image.jsx\");\n/* harmony import */ var _DonutQuantity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DonutQuantity */ \"./components/prebuilt/DonutQuantity.jsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jeremysmith/Development/Playmarin-Donate/components/prebuilt/DonutShop.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 40px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 18px;\\n  font-style: normal;\\n  font-variant: normal;\\n  font-weight: 400;\\n  line-height: 26.4px;\\n  margin-bottom: 20px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 10px 20px 40px 20px;\\n  background-color: #efefef;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar Shop = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = Shop;\nvar ShopName = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h1(_templateObject2());\n_c2 = ShopName;\nvar Controls = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c3 = Controls;\n\nvar DonutShop = function DonutShop(_ref) {\n  var onAddDonut = _ref.onAddDonut,\n      onRemoveDonut = _ref.onRemoveDonut,\n      numDonuts = _ref.numDonuts;\n  return __jsx(Shop, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(ShopName, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, \"Play Marin\"), __jsx(_Image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), __jsx(Controls, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(_DonutQuantity__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onAdd: onAddDonut,\n    onRemove: onRemoveDonut,\n    quantity: numDonuts,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c4 = DonutShop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DonutShop);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Shop\");\n$RefreshReg$(_c2, \"ShopName\");\n$RefreshReg$(_c3, \"Controls\");\n$RefreshReg$(_c4, \"DonutShop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ByZWJ1aWx0L0RvbnV0U2hvcC5qc3g/YWIwMiJdLCJuYW1lcyI6WyJTaG9wIiwic3R5bGVkIiwiZGl2IiwiU2hvcE5hbWUiLCJoMSIsIkNvbnRyb2xzIiwiRG9udXRTaG9wIiwib25BZGREb251dCIsIm9uUmVtb3ZlRG9udXQiLCJudW1Eb251dHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBLElBQU1BLElBQUksR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBVjtLQUFNRixJO0FBS04sSUFBTUcsUUFBUSxHQUFHRix1REFBTSxDQUFDRyxFQUFWLG9CQUFkO01BQU1ELFE7QUFTTixJQUFNRSxRQUFRLEdBQUdKLHVEQUFNLENBQUNDLEdBQVYsb0JBQWQ7TUFBTUcsUTs7QUFPTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUE4QztBQUFBLE1BQTNDQyxVQUEyQyxRQUEzQ0EsVUFBMkM7QUFBQSxNQUEvQkMsYUFBK0IsUUFBL0JBLGFBQStCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUM5RCxTQUNFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLFNBQUssRUFBRUYsVUFEVDtBQUVFLFlBQVEsRUFBRUMsYUFGWjtBQUdFLFlBQVEsRUFBRUMsU0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixDQURGO0FBYUQsQ0FkRDs7TUFBTUgsUztBQWdCU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3ByZWJ1aWx0L0RvbnV0U2hvcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCIuL0ltYWdlXCI7XG5pbXBvcnQgRG9udXRRdWFudGl0eSBmcm9tIFwiLi9Eb251dFF1YW50aXR5XCI7XG5cblxuY29uc3QgU2hvcCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDEwcHggMjBweCA0MHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG5gO1xuXG5jb25zdCBTaG9wTmFtZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjYuNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuYDtcblxuY29uc3QgQ29udHJvbHMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG5gO1xuXG5jb25zdCBEb251dFNob3AgPSAoeyBvbkFkZERvbnV0LCBvblJlbW92ZURvbnV0LCBudW1Eb251dHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTaG9wPlxuICAgICAgPFNob3BOYW1lPlBsYXkgTWFyaW48L1Nob3BOYW1lPlxuICAgICAgPEltYWdlLz5cbiAgICAgIDxDb250cm9scz5cbiAgICAgICAgPERvbnV0UXVhbnRpdHlcbiAgICAgICAgICBvbkFkZD17b25BZGREb251dH1cbiAgICAgICAgICBvblJlbW92ZT17b25SZW1vdmVEb251dH1cbiAgICAgICAgICBxdWFudGl0eT17bnVtRG9udXRzfVxuICAgICAgICAvPlxuICAgICAgPC9Db250cm9scz5cbiAgICA8L1Nob3A+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb251dFNob3A7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/prebuilt/DonutShop.jsx\n");

/***/ })

})