webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CheckoutForm.jsx":
/*!*************************************!*\
  !*** ./components/CheckoutForm.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js?ba3a\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _prebuilt_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prebuilt/Row */ \"./components/prebuilt/Row.jsx\");\n/* harmony import */ var _prebuilt_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prebuilt/BillingDetailsFields */ \"./components/prebuilt/BillingDetailsFields.jsx\");\n/* harmony import */ var _prebuilt_SubmitButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prebuilt/SubmitButton */ \"./components/prebuilt/SubmitButton.jsx\");\n/* harmony import */ var _prebuilt_CheckoutError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prebuilt/CheckoutError */ \"./components/prebuilt/CheckoutError.jsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jeremysmith/Development/Playmarin-Donate/components/CheckoutForm.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  height: 40px;\\n  display: flex;\\n  align-items: center;\\n\\n  & .StripeElement {\\n    width: 100%;\\n    padding: 15px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar CardElementContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = CardElementContainer;\n\nvar CheckoutForm = function CheckoutForm(_ref) {\n  _s();\n\n  var price = _ref.price,\n      onSuccessfulCheckout = _ref.onSuccessfulCheckout;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isProcessing = _useState[0],\n      setProcessingTo = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      checkoutError = _useState2[0],\n      setCheckoutError = _useState2[1];\n\n  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useStripe\"])();\n  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useElements\"])(); // TIP\n  // use the cardElements onChange prop to add a handler\n  // for setting any errors:\n\n  var handleCardDetailsChange = function handleCardDetailsChange(ev) {\n    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();\n  };\n\n  var handleFormSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ev) {\n      var billingDetails, cardElement, _yield$axios$post, endpointSecret, paymentMethodReq, confirmCardPayment;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              ev.preventDefault();\n              billingDetails = {\n                name: ev.target.name.value,\n                email: ev.target.email.value,\n                address: {\n                  city: ev.target.city.value,\n                  line1: ev.target.address.value,\n                  state: ev.target.state.value,\n                  postal_code: ev.target.zip.value\n                }\n              };\n              setProcessingTo(true);\n              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"CardElement\"]);\n              _context.prev = 4;\n              _context.next = 7;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('api/payment_intents', {\n                amount: price * 100\n              });\n\n            case 7:\n              _yield$axios$post = _context.sent;\n              endpointSecret = _yield$axios$post.data;\n              console.log(endpointSecret);\n              _context.next = 12;\n              return stripe.createPaymentMethod({\n                type: \"card\",\n                card: cardElement,\n                billing_details: billingDetails\n              });\n\n            case 12:\n              paymentMethodReq = _context.sent;\n\n              if (!paymentMethodReq.error) {\n                _context.next = 17;\n                break;\n              }\n\n              setCheckoutError(paymentMethodReq.error.message);\n              setProcessingTo(false);\n              return _context.abrupt(\"return\");\n\n            case 17:\n              _context.next = 19;\n              return stripe.confirmCardPayment(clientSecret, {\n                payment_method: paymentMethodReq.paymentMethod.id\n              });\n\n            case 19:\n              confirmCardPayment = _context.sent;\n              console.log(confirmCardPayment);\n              onSuccessfulCheckout();\n              _context.next = 27;\n              break;\n\n            case 24:\n              _context.prev = 24;\n              _context.t0 = _context[\"catch\"](4);\n              setCheckoutError(_context.t0);\n\n            case 27:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[4, 24]]);\n    }));\n\n    return function handleFormSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // Learning\n  // A common ask/bug that users run into is:\n  // How do you change the color of the card element input text?\n  // How do you change the font-size of the card element input text?\n  // How do you change the placeholder color?\n  // The answer to all of the above is to use the `style` option.\n  // It's common to hear users confused why the card element appears impervious\n  // to all their styles. No matter what classes they add to the parent element\n  // nothing within the card element seems to change. The reason for this is that\n  // the card element is housed within an iframe and:\n  // > styles do not cascade from a parent window down into its iframes\n\n\n  var iframeStyles = {\n    base: {\n      fontSize: \"16px\",\n      iconColor: \"#efefe\",\n      \"::placeholder\": {\n        color: \"#000\"\n      }\n    },\n    invalid: {\n      iconColor: \"red\",\n      color: \"red\"\n    },\n    complete: {\n      iconColor: \"green\"\n    }\n  };\n  var cardElementOpts = {\n    iconStyle: \"solid\",\n    style: iframeStyles,\n    hidePostalCode: true\n  };\n  return __jsx(\"form\", {\n    onSubmit: handleFormSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 5\n    }\n  }, __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }\n  }, __jsx(_prebuilt_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 9\n    }\n  })), __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }\n  }, __jsx(CardElementContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 9\n    }\n  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"CardElement\"], {\n    options: cardElementOpts,\n    onChange: handleCardDetailsChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 11\n    }\n  }))), checkoutError && __jsx(_prebuilt_CheckoutError__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 25\n    }\n  }, checkoutError), __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }\n  }, __jsx(_prebuilt_SubmitButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    disabled: isProcessing || !stripe,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 9\n    }\n  }, isProcessing ? \"Processing...\" : \"Pay $\".concat(price))));\n};\n\n_s(CheckoutForm, \"2xw3RUxwBWLOQjltidPO4c7nnLg=\", false, function () {\n  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useStripe\"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"useElements\"]];\n});\n\n_c2 = CheckoutForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckoutForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CardElementContainer\");\n$RefreshReg$(_c2, \"CheckoutForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrb3V0Rm9ybS5qc3g/Yzg3MCJdLCJuYW1lcyI6WyJDYXJkRWxlbWVudENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkNoZWNrb3V0Rm9ybSIsInByaWNlIiwib25TdWNjZXNzZnVsQ2hlY2tvdXQiLCJ1c2VTdGF0ZSIsImlzUHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmdUbyIsImNoZWNrb3V0RXJyb3IiLCJzZXRDaGVja291dEVycm9yIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImhhbmRsZUNhcmREZXRhaWxzQ2hhbmdlIiwiZXYiLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJiaWxsaW5nRGV0YWlscyIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtYWlsIiwiYWRkcmVzcyIsImNpdHkiLCJsaW5lMSIsInN0YXRlIiwicG9zdGFsX2NvZGUiLCJ6aXAiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsImF4aW9zIiwicG9zdCIsImFtb3VudCIsImVuZHBvaW50U2VjcmV0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVQYXltZW50TWV0aG9kIiwidHlwZSIsImNhcmQiLCJiaWxsaW5nX2RldGFpbHMiLCJwYXltZW50TWV0aG9kUmVxIiwiY29uZmlybUNhcmRQYXltZW50IiwiY2xpZW50U2VjcmV0IiwicGF5bWVudF9tZXRob2QiLCJwYXltZW50TWV0aG9kIiwiaWQiLCJpZnJhbWVTdHlsZXMiLCJiYXNlIiwiZm9udFNpemUiLCJpY29uQ29sb3IiLCJjb2xvciIsImludmFsaWQiLCJjb21wbGV0ZSIsImNhcmRFbGVtZW50T3B0cyIsImljb25TdHlsZSIsInN0eWxlIiwiaGlkZVBvc3RhbENvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsbUJBQTFCO0tBQU1GLG9COztBQWdCTCxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFxQztBQUFBOztBQUFBLE1BQWxDQyxLQUFrQyxRQUFsQ0EsS0FBa0M7QUFBQSxNQUEzQkMsb0JBQTJCLFFBQTNCQSxvQkFBMkI7O0FBQUEsa0JBQ2pCQyxzREFBUSxDQUFDLEtBQUQsQ0FEUztBQUFBLE1BQ2xEQyxZQURrRDtBQUFBLE1BQ3BDQyxlQURvQzs7QUFBQSxtQkFFZkYsc0RBQVEsRUFGTztBQUFBLE1BRWxERyxhQUZrRDtBQUFBLE1BRW5DQyxnQkFGbUM7O0FBSXpELE1BQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLDJFQUFXLEVBQTVCLENBTHlELENBT3pEO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFDLEVBQUUsRUFBSTtBQUNwQ0EsTUFBRSxDQUFDQyxLQUFILEdBQVdQLGdCQUFnQixDQUFDTSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsT0FBVixDQUEzQixHQUFnRFIsZ0JBQWdCLEVBQWhFO0FBQ0QsR0FGRDs7QUFJQSxNQUFNUyxnQkFBZ0I7QUFBQSxpTUFBRyxpQkFBTUgsRUFBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCQSxnQkFBRSxDQUFDSSxjQUFIO0FBRU1DLDRCQUhpQixHQUdBO0FBQ3JCQyxvQkFBSSxFQUFFTixFQUFFLENBQUNPLE1BQUgsQ0FBVUQsSUFBVixDQUFlRSxLQURBO0FBRXJCQyxxQkFBSyxFQUFFVCxFQUFFLENBQUNPLE1BQUgsQ0FBVUUsS0FBVixDQUFnQkQsS0FGRjtBQUdyQkUsdUJBQU8sRUFBRTtBQUNQQyxzQkFBSSxFQUFFWCxFQUFFLENBQUNPLE1BQUgsQ0FBVUksSUFBVixDQUFlSCxLQURkO0FBRVBJLHVCQUFLLEVBQUVaLEVBQUUsQ0FBQ08sTUFBSCxDQUFVRyxPQUFWLENBQWtCRixLQUZsQjtBQUdQSyx1QkFBSyxFQUFFYixFQUFFLENBQUNPLE1BQUgsQ0FBVU0sS0FBVixDQUFnQkwsS0FIaEI7QUFJUE0sNkJBQVcsRUFBRWQsRUFBRSxDQUFDTyxNQUFILENBQVVRLEdBQVYsQ0FBY1A7QUFKcEI7QUFIWSxlQUhBO0FBY3ZCaEIsNkJBQWUsQ0FBQyxJQUFELENBQWY7QUFFTXdCLHlCQWhCaUIsR0FnQkhuQixRQUFRLENBQUNvQixVQUFULENBQW9CQyxtRUFBcEIsQ0FoQkc7QUFBQTtBQUFBO0FBQUEscUJBbUJrQkMsNENBQUssQ0FBQ0MsSUFBTixDQUNyQyxxQkFEcUMsRUFDZDtBQUN2QkMsc0JBQU0sRUFBRWpDLEtBQUssR0FBRztBQURPLGVBRGMsQ0FuQmxCOztBQUFBO0FBQUE7QUFtQlBrQyw0QkFuQk8scUJBbUJiQyxJQW5CYTtBQXdCckJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUgsY0FBWjtBQXhCcUI7QUFBQSxxQkEwQlUzQixNQUFNLENBQUMrQixtQkFBUCxDQUEyQjtBQUN4REMsb0JBQUksRUFBRSxNQURrRDtBQUV4REMsb0JBQUksRUFBRVosV0FGa0Q7QUFHeERhLCtCQUFlLEVBQUV4QjtBQUh1QyxlQUEzQixDQTFCVjs7QUFBQTtBQTBCZnlCLDhCQTFCZTs7QUFBQSxtQkFnQ2pCQSxnQkFBZ0IsQ0FBQzdCLEtBaENBO0FBQUE7QUFBQTtBQUFBOztBQWlDbkJQLDhCQUFnQixDQUFDb0MsZ0JBQWdCLENBQUM3QixLQUFqQixDQUF1QkMsT0FBeEIsQ0FBaEI7QUFDQVYsNkJBQWUsQ0FBQyxLQUFELENBQWY7QUFsQ21COztBQUFBO0FBQUE7QUFBQSxxQkFxQ2FHLE1BQU0sQ0FBQ29DLGtCQUFQLENBQTBCQyxZQUExQixFQUF3QztBQUN4RUMsOEJBQWMsRUFBRUgsZ0JBQWdCLENBQUNJLGFBQWpCLENBQStCQztBQUR5QixlQUF4QyxDQXJDYjs7QUFBQTtBQXFDZkosZ0NBckNlO0FBeUNyQlAscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTSxrQkFBWjtBQUVBMUMsa0NBQW9CO0FBM0NDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBNkNyQkssOEJBQWdCLGFBQWhCOztBQTdDcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJTLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0QixDQWZ5RCxDQWdFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTWlDLFlBQVksR0FBRztBQUNuQkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxNQUROO0FBRUpDLGVBQVMsRUFBRSxRQUZQO0FBR0osdUJBQWlCO0FBQ2ZDLGFBQUssRUFBRTtBQURRO0FBSGIsS0FEYTtBQVFuQkMsV0FBTyxFQUFFO0FBQ1BGLGVBQVMsRUFBRSxLQURKO0FBRVBDLFdBQUssRUFBRTtBQUZBLEtBUlU7QUFZbkJFLFlBQVEsRUFBRTtBQUNSSCxlQUFTLEVBQUU7QUFESDtBQVpTLEdBQXJCO0FBaUJBLE1BQU1JLGVBQWUsR0FBRztBQUN0QkMsYUFBUyxFQUFFLE9BRFc7QUFFdEJDLFNBQUssRUFBRVQsWUFGZTtBQUd0QlUsa0JBQWMsRUFBRTtBQUhNLEdBQXhCO0FBTUEsU0FDRTtBQUFNLFlBQVEsRUFBRTNDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFDRSxXQUFPLEVBQUV3QyxlQURYO0FBRUUsWUFBUSxFQUFFNUMsdUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FKRixFQVlHTixhQUFhLElBQUksTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdCQSxhQUFoQixDQVpwQixFQWFFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsOERBQUQ7QUFBYyxZQUFRLEVBQUVGLFlBQVksSUFBSSxDQUFDSSxNQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLFlBQVksR0FBRyxlQUFILGtCQUE2QkgsS0FBN0IsQ0FEZixDQUZGLENBYkYsQ0FERjtBQXNCRCxDQXpIQTs7R0FBTUQsWTtVQUlVUyxpRSxFQUNFRSxtRTs7O01BTFpYLFk7QUEySFFBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFJvdyBmcm9tIFwiLi9wcmVidWlsdC9Sb3dcIjtcbmltcG9ydCBCaWxsaW5nRGV0YWlsc0ZpZWxkcyBmcm9tIFwiLi9wcmVidWlsdC9CaWxsaW5nRGV0YWlsc0ZpZWxkc1wiO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi9wcmVidWlsdC9TdWJtaXRCdXR0b25cIjtcbmltcG9ydCBDaGVja291dEVycm9yIGZyb20gXCIuL3ByZWJ1aWx0L0NoZWNrb3V0RXJyb3JcIjtcblxuY29uc3QgQ2FyZEVsZW1lbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJiAuU3RyaXBlRWxlbWVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuYDtcblxuXG5cblxuXG5cbiBjb25zdCBDaGVja291dEZvcm0gPSAoeyBwcmljZSwgb25TdWNjZXNzZnVsQ2hlY2tvdXQgfSkgPT4ge1xuICBjb25zdCBbaXNQcm9jZXNzaW5nLCBzZXRQcm9jZXNzaW5nVG9dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2hlY2tvdXRFcnJvciwgc2V0Q2hlY2tvdXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG5cbiAgLy8gVElQXG4gIC8vIHVzZSB0aGUgY2FyZEVsZW1lbnRzIG9uQ2hhbmdlIHByb3AgdG8gYWRkIGEgaGFuZGxlclxuICAvLyBmb3Igc2V0dGluZyBhbnkgZXJyb3JzOlxuXG4gIGNvbnN0IGhhbmRsZUNhcmREZXRhaWxzQ2hhbmdlID0gZXYgPT4ge1xuICAgIGV2LmVycm9yID8gc2V0Q2hlY2tvdXRFcnJvcihldi5lcnJvci5tZXNzYWdlKSA6IHNldENoZWNrb3V0RXJyb3IoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgZXYgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBiaWxsaW5nRGV0YWlscyA9IHtcbiAgICAgIG5hbWU6IGV2LnRhcmdldC5uYW1lLnZhbHVlLFxuICAgICAgZW1haWw6IGV2LnRhcmdldC5lbWFpbC52YWx1ZSxcbiAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgY2l0eTogZXYudGFyZ2V0LmNpdHkudmFsdWUsXG4gICAgICAgIGxpbmUxOiBldi50YXJnZXQuYWRkcmVzcy52YWx1ZSxcbiAgICAgICAgc3RhdGU6IGV2LnRhcmdldC5zdGF0ZS52YWx1ZSxcbiAgICAgICAgcG9zdGFsX2NvZGU6IGV2LnRhcmdldC56aXAudmFsdWVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0UHJvY2Vzc2luZ1RvKHRydWUpO1xuXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGE6IGVuZHBvaW50U2VjcmV0IH0gPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAnYXBpL3BheW1lbnRfaW50ZW50cycsIHtcbiAgICAgICAgYW1vdW50OiBwcmljZSAqIDEwMFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGVuZHBvaW50U2VjcmV0KVxuXG4gICAgICBjb25zdCBwYXltZW50TWV0aG9kUmVxID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xuICAgICAgICB0eXBlOiBcImNhcmRcIixcbiAgICAgICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgICAgIGJpbGxpbmdfZGV0YWlsczogYmlsbGluZ0RldGFpbHNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocGF5bWVudE1ldGhvZFJlcS5lcnJvcikge1xuICAgICAgICBzZXRDaGVja291dEVycm9yKHBheW1lbnRNZXRob2RSZXEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHNldFByb2Nlc3NpbmdUbyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbmZpcm1DYXJkUGF5bWVudCAgPSBhd2FpdCBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50KGNsaWVudFNlY3JldCwge1xuICAgICAgICBwYXltZW50X21ldGhvZDogcGF5bWVudE1ldGhvZFJlcS5wYXltZW50TWV0aG9kLmlkXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coY29uZmlybUNhcmRQYXltZW50KVxuXG4gICAgICBvblN1Y2Nlc3NmdWxDaGVja291dCgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0Q2hlY2tvdXRFcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICAvLyBMZWFybmluZ1xuICAvLyBBIGNvbW1vbiBhc2svYnVnIHRoYXQgdXNlcnMgcnVuIGludG8gaXM6XG4gIC8vIEhvdyBkbyB5b3UgY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgY2FyZCBlbGVtZW50IGlucHV0IHRleHQ/XG4gIC8vIEhvdyBkbyB5b3UgY2hhbmdlIHRoZSBmb250LXNpemUgb2YgdGhlIGNhcmQgZWxlbWVudCBpbnB1dCB0ZXh0P1xuICAvLyBIb3cgZG8geW91IGNoYW5nZSB0aGUgcGxhY2Vob2xkZXIgY29sb3I/XG4gIC8vIFRoZSBhbnN3ZXIgdG8gYWxsIG9mIHRoZSBhYm92ZSBpcyB0byB1c2UgdGhlIGBzdHlsZWAgb3B0aW9uLlxuICAvLyBJdCdzIGNvbW1vbiB0byBoZWFyIHVzZXJzIGNvbmZ1c2VkIHdoeSB0aGUgY2FyZCBlbGVtZW50IGFwcGVhcnMgaW1wZXJ2aW91c1xuICAvLyB0byBhbGwgdGhlaXIgc3R5bGVzLiBObyBtYXR0ZXIgd2hhdCBjbGFzc2VzIHRoZXkgYWRkIHRvIHRoZSBwYXJlbnQgZWxlbWVudFxuICAvLyBub3RoaW5nIHdpdGhpbiB0aGUgY2FyZCBlbGVtZW50IHNlZW1zIHRvIGNoYW5nZS4gVGhlIHJlYXNvbiBmb3IgdGhpcyBpcyB0aGF0XG4gIC8vIHRoZSBjYXJkIGVsZW1lbnQgaXMgaG91c2VkIHdpdGhpbiBhbiBpZnJhbWUgYW5kOlxuICAvLyA+IHN0eWxlcyBkbyBub3QgY2FzY2FkZSBmcm9tIGEgcGFyZW50IHdpbmRvdyBkb3duIGludG8gaXRzIGlmcmFtZXNcblxuICBjb25zdCBpZnJhbWVTdHlsZXMgPSB7XG4gICAgYmFzZToge1xuICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgaWNvbkNvbG9yOiBcIiNlZmVmZVwiLFxuICAgICAgXCI6OnBsYWNlaG9sZGVyXCI6IHtcbiAgICAgICAgY29sb3I6IFwiIzAwMFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnZhbGlkOiB7XG4gICAgICBpY29uQ29sb3I6IFwicmVkXCIsXG4gICAgICBjb2xvcjogXCJyZWRcIlxuICAgIH0sXG4gICAgY29tcGxldGU6IHtcbiAgICAgIGljb25Db2xvcjogXCJncmVlblwiXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNhcmRFbGVtZW50T3B0cyA9IHtcbiAgICBpY29uU3R5bGU6IFwic29saWRcIixcbiAgICBzdHlsZTogaWZyYW1lU3R5bGVzLFxuICAgIGhpZGVQb3N0YWxDb2RlOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH0+XG4gICAgICA8Um93PlxuICAgICAgICA8QmlsbGluZ0RldGFpbHNGaWVsZHMgLz5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENhcmRFbGVtZW50Q29udGFpbmVyPlxuICAgICAgICAgIDxDYXJkRWxlbWVudFxuICAgICAgICAgICAgb3B0aW9ucz17Y2FyZEVsZW1lbnRPcHRzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhcmREZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZEVsZW1lbnRDb250YWluZXI+XG4gICAgICA8L1Jvdz5cbiAgICAgIHtjaGVja291dEVycm9yICYmIDxDaGVja291dEVycm9yPntjaGVja291dEVycm9yfTwvQ2hlY2tvdXRFcnJvcj59XG4gICAgICA8Um93PlxuICAgICAgICB7LyogVElQIGFsd2F5cyBkaXNhYmxlIHlvdXIgc3VibWl0IGJ1dHRvbiB3aGlsZSBwcm9jZXNzaW5nIHBheW1lbnRzICovfVxuICAgICAgICA8U3VibWl0QnV0dG9uIGRpc2FibGVkPXtpc1Byb2Nlc3NpbmcgfHwgIXN0cmlwZX0+XG4gICAgICAgICAge2lzUHJvY2Vzc2luZyA/IFwiUHJvY2Vzc2luZy4uLlwiIDogYFBheSAkJHtwcmljZX1gfVxuICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cbiAgICAgIDwvUm93PlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CheckoutForm.jsx\n");

/***/ })

})