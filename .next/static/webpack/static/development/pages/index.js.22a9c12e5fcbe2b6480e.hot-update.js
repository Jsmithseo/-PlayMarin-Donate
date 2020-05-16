webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CheckoutForm.jsx":
/*!*************************************!*\
  !*** ./components/CheckoutForm.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _prebuilt_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prebuilt/Row */ \"./components/prebuilt/Row.jsx\");\n/* harmony import */ var _prebuilt_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prebuilt/BillingDetailsFields */ \"./components/prebuilt/BillingDetailsFields.jsx\");\n/* harmony import */ var _prebuilt_SubmitButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prebuilt/SubmitButton */ \"./components/prebuilt/SubmitButton.jsx\");\n/* harmony import */ var _prebuilt_CheckoutError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prebuilt/CheckoutError */ \"./components/prebuilt/CheckoutError.jsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jeremysmith/Development/Playmarin-Donate/components/CheckoutForm.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  height: 40px;\\n  display: flex;\\n  align-items: center;\\n\\n  & .StripeElement {\\n    width: 100%;\\n    padding: 15px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar CardElementContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = CardElementContainer;\n\nvar CheckoutForm = function CheckoutForm(_ref) {\n  _s();\n\n  var price = _ref.price,\n      onSuccessfulCheckout = _ref.onSuccessfulCheckout;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isProcessing = _useState[0],\n      setProcessingTo = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      checkoutError = _useState2[0],\n      setCheckoutError = _useState2[1];\n\n  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useStripe\"])();\n  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useElements\"])(); // TIP\n  // use the cardElements onChange prop to add a handler\n  // for setting any errors:\n\n  var handleCardDetailsChange = function handleCardDetailsChange(ev) {\n    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();\n  };\n\n  var handleFormSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ev) {\n      var billingDetails, cardElement, _yield$axios$post, clientSecret, paymentMethodReq, _yield$stripe$confirm, error;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              ev.preventDefault();\n              billingDetails = {\n                name: ev.target.name.value,\n                email: ev.target.email.value,\n                address: {\n                  city: ev.target.city.value,\n                  line1: ev.target.address.value,\n                  state: ev.target.state.value,\n                  postal_code: ev.target.zip.value\n                }\n              };\n              setProcessingTo(true);\n              cardElement = elements.getElement(\"card\");\n              _context.prev = 4;\n              _context.next = 7;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(\"/api/payment_intents\", {\n                amount: price * 100\n              });\n\n            case 7:\n              _yield$axios$post = _context.sent;\n              clientSecret = _yield$axios$post.data;\n              _context.next = 11;\n              return stripe.createPaymentMethod({\n                type: \"card\",\n                card: cardElement,\n                billing_details: billingDetails\n              });\n\n            case 11:\n              paymentMethodReq = _context.sent;\n\n              if (!paymentMethodReq.error) {\n                _context.next = 16;\n                break;\n              }\n\n              setCheckoutError(paymentMethodReq.error.message);\n              setProcessingTo(false);\n              return _context.abrupt(\"return\");\n\n            case 16:\n              _context.next = 18;\n              return stripe.confirmCardPayment(clientSecret, {\n                payment_method: paymentMethodReq.paymentMethod.id\n              });\n\n            case 18:\n              _yield$stripe$confirm = _context.sent;\n              error = _yield$stripe$confirm.error;\n\n              if (!error) {\n                _context.next = 24;\n                break;\n              }\n\n              setCheckoutError(error.message);\n              setProcessingTo(false);\n              return _context.abrupt(\"return\");\n\n            case 24:\n              onSuccessfulCheckout();\n              _context.next = 30;\n              break;\n\n            case 27:\n              _context.prev = 27;\n              _context.t0 = _context[\"catch\"](4);\n              setCheckoutError(_context.t0);\n\n            case 30:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[4, 27]]);\n    }));\n\n    return function handleFormSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // Learning\n  // A common ask/bug that users run into is:\n  // How do you change the color of the card element input text?\n  // How do you change the font-size of the card element input text?\n  // How do you change the placeholder color?\n  // The answer to all of the above is to use the `style` option.\n  // It's common to hear users confused why the card element appears impervious\n  // to all their styles. No matter what classes they add to the parent element\n  // nothing within the card element seems to change. The reason for this is that\n  // the card element is housed within an iframe and:\n  // > styles do not cascade from a parent window down into its iframes\n\n\n  var iframeStyles = {\n    base: {\n      fontSize: \"16px\",\n      iconColor: \"#efefe\",\n      \"::placeholder\": {\n        color: \"#87bbfd\"\n      }\n    },\n    invalid: {\n      iconColor: \"#FFC7EE\",\n      color: \"#FFC7EE\"\n    },\n    complete: {\n      iconColor: \"#cbf4c9\"\n    }\n  };\n  var cardElementOpts = {\n    iconStyle: \"solid\",\n    style: iframeStyles,\n    hidePostalCode: true\n  };\n  return __jsx(\"form\", {\n    onSubmit: handleFormSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 5\n    }\n  }, __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }\n  }, __jsx(_prebuilt_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  })), __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }\n  }, __jsx(CardElementContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 9\n    }\n  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"CardElement\"], {\n    options: cardElementOpts,\n    onChange: handleCardDetailsChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 11\n    }\n  }))), checkoutError && __jsx(_prebuilt_CheckoutError__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 25\n    }\n  }, checkoutError), __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }\n  }, __jsx(_prebuilt_SubmitButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    disabled: isProcessing || !stripe,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  }, isProcessing ? \"Processing...\" : \"Pay $\".concat(price))));\n};\n\n_s(CheckoutForm, \"2xw3RUxwBWLOQjltidPO4c7nnLg=\", false, function () {\n  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useStripe\"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useElements\"]];\n});\n\n_c2 = CheckoutForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckoutForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CardElementContainer\");\n$RefreshReg$(_c2, \"CheckoutForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrb3V0Rm9ybS5qc3g/Yzg3MCJdLCJuYW1lcyI6WyJDYXJkRWxlbWVudENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkNoZWNrb3V0Rm9ybSIsInByaWNlIiwib25TdWNjZXNzZnVsQ2hlY2tvdXQiLCJ1c2VTdGF0ZSIsImlzUHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmdUbyIsImNoZWNrb3V0RXJyb3IiLCJzZXRDaGVja291dEVycm9yIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImhhbmRsZUNhcmREZXRhaWxzQ2hhbmdlIiwiZXYiLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJiaWxsaW5nRGV0YWlscyIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtYWlsIiwiYWRkcmVzcyIsImNpdHkiLCJsaW5lMSIsInN0YXRlIiwicG9zdGFsX2NvZGUiLCJ6aXAiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJheGlvcyIsInBvc3QiLCJhbW91bnQiLCJjbGllbnRTZWNyZXQiLCJkYXRhIiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiYmlsbGluZ19kZXRhaWxzIiwicGF5bWVudE1ldGhvZFJlcSIsImNvbmZpcm1DYXJkUGF5bWVudCIsInBheW1lbnRfbWV0aG9kIiwicGF5bWVudE1ldGhvZCIsImlkIiwiaWZyYW1lU3R5bGVzIiwiYmFzZSIsImZvbnRTaXplIiwiaWNvbkNvbG9yIiwiY29sb3IiLCJpbnZhbGlkIiwiY29tcGxldGUiLCJjYXJkRWxlbWVudE9wdHMiLCJpY29uU3R5bGUiLCJzdHlsZSIsImhpZGVQb3N0YWxDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFD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QU8sRUFBRW9DLGVBRFg7QUFFRSxZQUFRLEVBQUV4Qyx1QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQUpGLEVBWUdOLGFBQWEsSUFBSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0JBLGFBQWhCLENBWnBCLEVBYUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyw4REFBRDtBQUFjLFlBQVEsRUFBRUYsWUFBWSxJQUFJLENBQUNJLE1BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osWUFBWSxHQUFHLGVBQUgsa0JBQTZCSCxLQUE3QixDQURmLENBRkYsQ0FiRixDQURGO0FBc0JELENBM0hEOztHQUFNRCxZO1VBSVdTLGlFLEVBQ0VFLG1FOzs7TUFMYlgsWTtBQTZIU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoZWNrb3V0Rm9ybS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZEVsZW1lbnQsIHVzZVN0cmlwZSwgdXNlRWxlbWVudHMgfSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgUm93IGZyb20gXCIuL3ByZWJ1aWx0L1Jvd1wiO1xuaW1wb3J0IEJpbGxpbmdEZXRhaWxzRmllbGRzIGZyb20gXCIuL3ByZWJ1aWx0L0JpbGxpbmdEZXRhaWxzRmllbGRzXCI7XG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCIuL3ByZWJ1aWx0L1N1Ym1pdEJ1dHRvblwiO1xuaW1wb3J0IENoZWNrb3V0RXJyb3IgZnJvbSBcIi4vcHJlYnVpbHQvQ2hlY2tvdXRFcnJvclwiO1xuXG5jb25zdCBDYXJkRWxlbWVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmIC5TdHJpcGVFbGVtZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5gO1xuXG5jb25zdCBDaGVja291dEZvcm0gPSAoeyBwcmljZSwgb25TdWNjZXNzZnVsQ2hlY2tvdXQgfSkgPT4ge1xuICBjb25zdCBbaXNQcm9jZXNzaW5nLCBzZXRQcm9jZXNzaW5nVG9dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2hlY2tvdXRFcnJvciwgc2V0Q2hlY2tvdXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG5cbiAgLy8gVElQXG4gIC8vIHVzZSB0aGUgY2FyZEVsZW1lbnRzIG9uQ2hhbmdlIHByb3AgdG8gYWRkIGEgaGFuZGxlclxuICAvLyBmb3Igc2V0dGluZyBhbnkgZXJyb3JzOlxuXG4gIGNvbnN0IGhhbmRsZUNhcmREZXRhaWxzQ2hhbmdlID0gZXYgPT4ge1xuICAgIGV2LmVycm9yID8gc2V0Q2hlY2tvdXRFcnJvcihldi5lcnJvci5tZXNzYWdlKSA6IHNldENoZWNrb3V0RXJyb3IoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgZXYgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBiaWxsaW5nRGV0YWlscyA9IHtcbiAgICAgIG5hbWU6IGV2LnRhcmdldC5uYW1lLnZhbHVlLFxuICAgICAgZW1haWw6IGV2LnRhcmdldC5lbWFpbC52YWx1ZSxcbiAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgY2l0eTogZXYudGFyZ2V0LmNpdHkudmFsdWUsXG4gICAgICAgIGxpbmUxOiBldi50YXJnZXQuYWRkcmVzcy52YWx1ZSxcbiAgICAgICAgc3RhdGU6IGV2LnRhcmdldC5zdGF0ZS52YWx1ZSxcbiAgICAgICAgcG9zdGFsX2NvZGU6IGV2LnRhcmdldC56aXAudmFsdWVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0UHJvY2Vzc2luZ1RvKHRydWUpO1xuXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBlbGVtZW50cy5nZXRFbGVtZW50KFwiY2FyZFwiKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGE6IGNsaWVudFNlY3JldCB9ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvcGF5bWVudF9pbnRlbnRzXCIsIHtcbiAgICAgICAgYW1vdW50OiBwcmljZSAqIDEwMFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RSZXEgPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XG4gICAgICAgIHR5cGU6IFwiY2FyZFwiLFxuICAgICAgICBjYXJkOiBjYXJkRWxlbWVudCxcbiAgICAgICAgYmlsbGluZ19kZXRhaWxzOiBiaWxsaW5nRGV0YWlsc1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChwYXltZW50TWV0aG9kUmVxLmVycm9yKSB7XG4gICAgICAgIHNldENoZWNrb3V0RXJyb3IocGF5bWVudE1ldGhvZFJlcS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgc2V0UHJvY2Vzc2luZ1RvKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50KGNsaWVudFNlY3JldCwge1xuICAgICAgICBwYXltZW50X21ldGhvZDogcGF5bWVudE1ldGhvZFJlcS5wYXltZW50TWV0aG9kLmlkXG4gICAgICB9KTtcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHNldENoZWNrb3V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHNldFByb2Nlc3NpbmdUbyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgb25TdWNjZXNzZnVsQ2hlY2tvdXQoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldENoZWNrb3V0RXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gTGVhcm5pbmdcbiAgLy8gQSBjb21tb24gYXNrL2J1ZyB0aGF0IHVzZXJzIHJ1biBpbnRvIGlzOlxuICAvLyBIb3cgZG8geW91IGNoYW5nZSB0aGUgY29sb3Igb2YgdGhlIGNhcmQgZWxlbWVudCBpbnB1dCB0ZXh0P1xuICAvLyBIb3cgZG8geW91IGNoYW5nZSB0aGUgZm9udC1zaXplIG9mIHRoZSBjYXJkIGVsZW1lbnQgaW5wdXQgdGV4dD9cbiAgLy8gSG93IGRvIHlvdSBjaGFuZ2UgdGhlIHBsYWNlaG9sZGVyIGNvbG9yP1xuICAvLyBUaGUgYW5zd2VyIHRvIGFsbCBvZiB0aGUgYWJvdmUgaXMgdG8gdXNlIHRoZSBgc3R5bGVgIG9wdGlvbi5cbiAgLy8gSXQncyBjb21tb24gdG8gaGVhciB1c2VycyBjb25mdXNlZCB3aHkgdGhlIGNhcmQgZWxlbWVudCBhcHBlYXJzIGltcGVydmlvdXNcbiAgLy8gdG8gYWxsIHRoZWlyIHN0eWxlcy4gTm8gbWF0dGVyIHdoYXQgY2xhc3NlcyB0aGV5IGFkZCB0byB0aGUgcGFyZW50IGVsZW1lbnRcbiAgLy8gbm90aGluZyB3aXRoaW4gdGhlIGNhcmQgZWxlbWVudCBzZWVtcyB0byBjaGFuZ2UuIFRoZSByZWFzb24gZm9yIHRoaXMgaXMgdGhhdFxuICAvLyB0aGUgY2FyZCBlbGVtZW50IGlzIGhvdXNlZCB3aXRoaW4gYW4gaWZyYW1lIGFuZDpcbiAgLy8gPiBzdHlsZXMgZG8gbm90IGNhc2NhZGUgZnJvbSBhIHBhcmVudCB3aW5kb3cgZG93biBpbnRvIGl0cyBpZnJhbWVzXG5cbiAgY29uc3QgaWZyYW1lU3R5bGVzID0ge1xuICAgIGJhc2U6IHtcbiAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgIGljb25Db2xvcjogXCIjZWZlZmVcIixcbiAgICAgIFwiOjpwbGFjZWhvbGRlclwiOiB7XG4gICAgICAgIGNvbG9yOiBcIiM4N2JiZmRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgaW52YWxpZDoge1xuICAgICAgaWNvbkNvbG9yOiBcIiNGRkM3RUVcIixcbiAgICAgIGNvbG9yOiBcIiNGRkM3RUVcIlxuICAgIH0sXG4gICAgY29tcGxldGU6IHtcbiAgICAgIGljb25Db2xvcjogXCIjY2JmNGM5XCJcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2FyZEVsZW1lbnRPcHRzID0ge1xuICAgIGljb25TdHlsZTogXCJzb2xpZFwiLFxuICAgIHN0eWxlOiBpZnJhbWVTdHlsZXMsXG4gICAgaGlkZVBvc3RhbENvZGU6IHRydWVcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fT5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxCaWxsaW5nRGV0YWlsc0ZpZWxkcyAvPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8Q2FyZEVsZW1lbnRDb250YWluZXI+XG4gICAgICAgICAgPENhcmRFbGVtZW50XG4gICAgICAgICAgICBvcHRpb25zPXtjYXJkRWxlbWVudE9wdHN9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2FyZERldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9DYXJkRWxlbWVudENvbnRhaW5lcj5cbiAgICAgIDwvUm93PlxuICAgICAge2NoZWNrb3V0RXJyb3IgJiYgPENoZWNrb3V0RXJyb3I+e2NoZWNrb3V0RXJyb3J9PC9DaGVja291dEVycm9yPn1cbiAgICAgIDxSb3c+XG4gICAgICAgIHsvKiBUSVAgYWx3YXlzIGRpc2FibGUgeW91ciBzdWJtaXQgYnV0dG9uIHdoaWxlIHByb2Nlc3NpbmcgcGF5bWVudHMgKi99XG4gICAgICAgIDxTdWJtaXRCdXR0b24gZGlzYWJsZWQ9e2lzUHJvY2Vzc2luZyB8fCAhc3RyaXBlfT5cbiAgICAgICAgICB7aXNQcm9jZXNzaW5nID8gXCJQcm9jZXNzaW5nLi4uXCIgOiBgUGF5ICQke3ByaWNlfWB9XG4gICAgICAgIDwvU3VibWl0QnV0dG9uPlxuICAgICAgPC9Sb3c+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CheckoutForm.jsx\n");

/***/ })

})