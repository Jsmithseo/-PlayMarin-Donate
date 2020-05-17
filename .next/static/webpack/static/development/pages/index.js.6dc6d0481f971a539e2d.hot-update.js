webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CheckoutForm.jsx":
/*!*************************************!*\
  !*** ./components/CheckoutForm.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js?ba3a\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _prebuilt_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prebuilt/Row */ \"./components/prebuilt/Row.jsx\");\n/* harmony import */ var _prebuilt_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prebuilt/BillingDetailsFields */ \"./components/prebuilt/BillingDetailsFields.jsx\");\n/* harmony import */ var _prebuilt_SubmitButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prebuilt/SubmitButton */ \"./components/prebuilt/SubmitButton.jsx\");\n/* harmony import */ var _prebuilt_CheckoutError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prebuilt/CheckoutError */ \"./components/prebuilt/CheckoutError.jsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jeremysmith/Development/Playmarin-Donate/components/CheckoutForm.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  height: 40px;\\n  display: flex;\\n  align-items: center;\\n\\n  & .StripeElement {\\n    width: 100%;\\n    padding: 15px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar CardElementContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = CardElementContainer;\nvar stripe = 'sk_test_1nbmLkBnfJg4TPyPSNqpEF1x00kwXWftcw';\n\nvar CheckoutForm = function CheckoutForm(_ref) {\n  _s();\n\n  var price = _ref.price,\n      onSuccessfulCheckout = _ref.onSuccessfulCheckout;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isProcessing = _useState[0],\n      setProcessingTo = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      checkoutError = _useState2[0],\n      setCheckoutError = _useState2[1]; // const stripe = useStripe();\n  // const elements = useElements();\n  // TIP\n  // use the cardElements onChange prop to add a handler\n  // for setting any errors:\n\n\n  var handleCardDetailsChange = function handleCardDetailsChange(ev) {\n    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();\n  };\n\n  var handleFormSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ev) {\n      var billingDetails, cardElement, _yield$axios$post, clientSecret, paymentMethodReq, confirmCardPayment;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              ev.preventDefault();\n              billingDetails = {\n                name: ev.target.name.value,\n                email: ev.target.email.value,\n                address: {\n                  city: ev.target.city.value,\n                  line1: ev.target.address.value,\n                  state: ev.target.state.value,\n                  postal_code: ev.target.zip.value\n                }\n              };\n              setProcessingTo(true);\n              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"CardElement\"]);\n              _context.prev = 4;\n              _context.next = 7;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/api/payment_intents', {\n                amount: price * 100\n              });\n\n            case 7:\n              _yield$axios$post = _context.sent;\n              clientSecret = _yield$axios$post.data;\n              console.log(clientSecret);\n              _context.next = 12;\n              return stripe.createPaymentMethod({\n                type: \"card\",\n                card: cardElement,\n                billing_details: billingDetails\n              });\n\n            case 12:\n              paymentMethodReq = _context.sent;\n\n              if (!paymentMethodReq.error) {\n                _context.next = 17;\n                break;\n              }\n\n              setCheckoutError(paymentMethodReq.error.message);\n              setProcessingTo(false);\n              return _context.abrupt(\"return\");\n\n            case 17:\n              _context.next = 19;\n              return stripe.confirmCardPayment(clientSecret, {\n                payment_method: paymentMethodReq.paymentMethod.id\n              });\n\n            case 19:\n              confirmCardPayment = _context.sent;\n              console.log(confirmCardPayment);\n              onSuccessfulCheckout();\n              _context.next = 27;\n              break;\n\n            case 24:\n              _context.prev = 24;\n              _context.t0 = _context[\"catch\"](4);\n              setCheckoutError(_context.t0);\n\n            case 27:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[4, 24]]);\n    }));\n\n    return function handleFormSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // Learning\n  // A common ask/bug that users run into is:\n  // How do you change the color of the card element input text?\n  // How do you change the font-size of the card element input text?\n  // How do you change the placeholder color?\n  // The answer to all of the above is to use the `style` option.\n  // It's common to hear users confused why the card element appears impervious\n  // to all their styles. No matter what classes they add to the parent element\n  // nothing within the card element seems to change. The reason for this is that\n  // the card element is housed within an iframe and:\n  // > styles do not cascade from a parent window down into its iframes\n\n\n  var iframeStyles = {\n    base: {\n      fontSize: \"16px\",\n      iconColor: \"#efefe\",\n      \"::placeholder\": {\n        color: \"#000\"\n      }\n    },\n    invalid: {\n      iconColor: \"red\",\n      color: \"red\"\n    },\n    complete: {\n      iconColor: \"green\"\n    }\n  };\n  var cardElementOpts = {\n    iconStyle: \"solid\",\n    style: iframeStyles,\n    hidePostalCode: true\n  };\n  return __jsx(\"form\", {\n    onSubmit: handleFormSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 5\n    }\n  }, __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }\n  }, __jsx(_prebuilt_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 9\n    }\n  })), __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }\n  }, __jsx(CardElementContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"CardElement\"], {\n    options: cardElementOpts,\n    onChange: handleCardDetailsChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 11\n    }\n  }))), checkoutError && __jsx(_prebuilt_CheckoutError__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 25\n    }\n  }, checkoutError), __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }\n  }, __jsx(_prebuilt_SubmitButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    disabled: isProcessing || !stripe,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 9\n    }\n  }, isProcessing ? \"Processing...\" : \"Pay $\".concat(price))));\n};\n\n_s(CheckoutForm, \"9Qt59bnoLIbLHoIPZ7KBzr8c2Uo=\");\n\n_c2 = CheckoutForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckoutForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CardElementContainer\");\n$RefreshReg$(_c2, \"CheckoutForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrb3V0Rm9ybS5qc3g/Yzg3MCJdLCJuYW1lcyI6WyJDYXJkRWxlbWVudENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInN0cmlwZSIsIkNoZWNrb3V0Rm9ybSIsInByaWNlIiwib25TdWNjZXNzZnVsQ2hlY2tvdXQiLCJ1c2VTdGF0ZSIsImlzUHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmdUbyIsImNoZWNrb3V0RXJyb3IiLCJzZXRDaGVja291dEVycm9yIiwiaGFuZGxlQ2FyZERldGFpbHNDaGFuZ2UiLCJldiIsImVycm9yIiwibWVzc2FnZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImJpbGxpbmdEZXRhaWxzIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZW1haWwiLCJhZGRyZXNzIiwiY2l0eSIsImxpbmUxIiwic3RhdGUiLCJwb3N0YWxfY29kZSIsInppcCIsImNhcmRFbGVtZW50IiwiZWxlbWVudHMiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJheGlvcyIsInBvc3QiLCJhbW91bnQiLCJjbGllbnRTZWNyZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImJpbGxpbmdfZGV0YWlscyIsInBheW1lbnRNZXRob2RSZXEiLCJjb25maXJtQ2FyZFBheW1lbnQiLCJwYXltZW50X21ldGhvZCIsInBheW1lbnRNZXRob2QiLCJpZCIsImlmcmFtZVN0eWxlcyIsImJhc2UiLCJmb250U2l6ZSIsImljb25Db2xvciIsImNvbG9yIiwiaW52YWxpZCIsImNvbXBsZXRlIiwiY2FyZEVsZW1lbnRPcHRzIiwiaWNvblN0eWxlIiwic3R5bGUiLCJoaWRlUG9zdGFsQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBMUI7S0FBTUYsb0I7QUFZTixJQUFNRyxNQUFNLEdBQUcsNENBQWY7O0FBSUMsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBcUM7QUFBQTs7QUFBQSxNQUFsQ0MsS0FBa0MsUUFBbENBLEtBQWtDO0FBQUEsTUFBM0JDLG9CQUEyQixRQUEzQkEsb0JBQTJCOztBQUFBLGtCQUNqQkMsc0RBQVEsQ0FBQyxLQUFELENBRFM7QUFBQSxNQUNsREMsWUFEa0Q7QUFBQSxNQUNwQ0MsZUFEb0M7O0FBQUEsbUJBRWZGLHNEQUFRLEVBRk87QUFBQSxNQUVsREcsYUFGa0Q7QUFBQSxNQUVuQ0MsZ0JBRm1DLGtCQUl6RDtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFDLEVBQUUsRUFBSTtBQUNwQ0EsTUFBRSxDQUFDQyxLQUFILEdBQVdILGdCQUFnQixDQUFDRSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsT0FBVixDQUEzQixHQUFnREosZ0JBQWdCLEVBQWhFO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSyxnQkFBZ0I7QUFBQSxpTUFBRyxpQkFBTUgsRUFBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCQSxnQkFBRSxDQUFDSSxjQUFIO0FBRU1DLDRCQUhpQixHQUdBO0FBQ3JCQyxvQkFBSSxFQUFFTixFQUFFLENBQUNPLE1BQUgsQ0FBVUQsSUFBVixDQUFlRSxLQURBO0FBRXJCQyxxQkFBSyxFQUFFVCxFQUFFLENBQUNPLE1BQUgsQ0FBVUUsS0FBVixDQUFnQkQsS0FGRjtBQUdyQkUsdUJBQU8sRUFBRTtBQUNQQyxzQkFBSSxFQUFFWCxFQUFFLENBQUNPLE1BQUgsQ0FBVUksSUFBVixDQUFlSCxLQURkO0FBRVBJLHVCQUFLLEVBQUVaLEVBQUUsQ0FBQ08sTUFBSCxDQUFVRyxPQUFWLENBQWtCRixLQUZsQjtBQUdQSyx1QkFBSyxFQUFFYixFQUFFLENBQUNPLE1BQUgsQ0FBVU0sS0FBVixDQUFnQkwsS0FIaEI7QUFJUE0sNkJBQVcsRUFBRWQsRUFBRSxDQUFDTyxNQUFILENBQVVRLEdBQVYsQ0FBY1A7QUFKcEI7QUFIWSxlQUhBO0FBY3ZCWiw2QkFBZSxDQUFDLElBQUQsQ0FBZjtBQUVNb0IseUJBaEJpQixHQWdCSEMsUUFBUSxDQUFDQyxVQUFULENBQW9CQyxtRUFBcEIsQ0FoQkc7QUFBQTtBQUFBO0FBQUEscUJBbUJnQkMsNENBQUssQ0FBQ0MsSUFBTixDQUNuQyxzQkFEbUMsRUFDWDtBQUN4QkMsc0JBQU0sRUFBRTlCLEtBQUssR0FBRztBQURRLGVBRFcsQ0FuQmhCOztBQUFBO0FBQUE7QUFtQlArQiwwQkFuQk8scUJBbUJiQyxJQW5CYTtBQXlCckJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUgsWUFBWjtBQXpCcUI7QUFBQSxxQkEyQlVqQyxNQUFNLENBQUNxQyxtQkFBUCxDQUEyQjtBQUN4REMsb0JBQUksRUFBRSxNQURrRDtBQUV4REMsb0JBQUksRUFBRWIsV0FGa0Q7QUFHeERjLCtCQUFlLEVBQUV6QjtBQUh1QyxlQUEzQixDQTNCVjs7QUFBQTtBQTJCZjBCLDhCQTNCZTs7QUFBQSxtQkFpQ2pCQSxnQkFBZ0IsQ0FBQzlCLEtBakNBO0FBQUE7QUFBQTtBQUFBOztBQWtDbkJILDhCQUFnQixDQUFDaUMsZ0JBQWdCLENBQUM5QixLQUFqQixDQUF1QkMsT0FBeEIsQ0FBaEI7QUFDQU4sNkJBQWUsQ0FBQyxLQUFELENBQWY7QUFuQ21COztBQUFBO0FBQUE7QUFBQSxxQkFzQ2FOLE1BQU0sQ0FBQzBDLGtCQUFQLENBQTBCVCxZQUExQixFQUF3QztBQUN4RVUsOEJBQWMsRUFBRUYsZ0JBQWdCLENBQUNHLGFBQWpCLENBQStCQztBQUR5QixlQUF4QyxDQXRDYjs7QUFBQTtBQXNDZkgsZ0NBdENlO0FBMENyQlAscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTSxrQkFBWjtBQUVBdkMsa0NBQW9CO0FBNUNDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBOENyQkssOEJBQWdCLGFBQWhCOztBQTlDcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJLLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0QixDQWZ5RCxDQWlFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTWlDLFlBQVksR0FBRztBQUNuQkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxNQUROO0FBRUpDLGVBQVMsRUFBRSxRQUZQO0FBR0osdUJBQWlCO0FBQ2ZDLGFBQUssRUFBRTtBQURRO0FBSGIsS0FEYTtBQVFuQkMsV0FBTyxFQUFFO0FBQ1BGLGVBQVMsRUFBRSxLQURKO0FBRVBDLFdBQUssRUFBRTtBQUZBLEtBUlU7QUFZbkJFLFlBQVEsRUFBRTtBQUNSSCxlQUFTLEVBQUU7QUFESDtBQVpTLEdBQXJCO0FBaUJBLE1BQU1JLGVBQWUsR0FBRztBQUN0QkMsYUFBUyxFQUFFLE9BRFc7QUFFdEJDLFNBQUssRUFBRVQsWUFGZTtBQUd0QlUsa0JBQWMsRUFBRTtBQUhNLEdBQXhCO0FBTUEsU0FDRTtBQUFNLFlBQVEsRUFBRTNDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFDRSxXQUFPLEVBQUV3QyxlQURYO0FBRUUsWUFBUSxFQUFFNUMsdUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FKRixFQVlHRixhQUFhLElBQUksTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdCQSxhQUFoQixDQVpwQixFQWFFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsOERBQUQ7QUFBYyxZQUFRLEVBQUVGLFlBQVksSUFBSSxDQUFDTCxNQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dLLFlBQVksR0FBRyxlQUFILGtCQUE2QkgsS0FBN0IsQ0FEZixDQUZGLENBYkYsQ0FERjtBQXNCRCxDQTFIQTs7R0FBTUQsWTs7TUFBQUEsWTtBQTRIUUEsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoZWNrb3V0Rm9ybS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZEVsZW1lbnQsIHVzZVN0cmlwZSwgdXNlRWxlbWVudHMgfSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgUm93IGZyb20gXCIuL3ByZWJ1aWx0L1Jvd1wiO1xuaW1wb3J0IEJpbGxpbmdEZXRhaWxzRmllbGRzIGZyb20gXCIuL3ByZWJ1aWx0L0JpbGxpbmdEZXRhaWxzRmllbGRzXCI7XG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCIuL3ByZWJ1aWx0L1N1Ym1pdEJ1dHRvblwiO1xuaW1wb3J0IENoZWNrb3V0RXJyb3IgZnJvbSBcIi4vcHJlYnVpbHQvQ2hlY2tvdXRFcnJvclwiO1xuXG5jb25zdCBDYXJkRWxlbWVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmIC5TdHJpcGVFbGVtZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5gO1xuXG5cbmNvbnN0IHN0cmlwZSA9ICdza190ZXN0XzFuYm1Ma0JuZkpnNFRQeVBTTnFwRUYxeDAwa3dYV2Z0Y3cnXG5cblxuXG4gY29uc3QgQ2hlY2tvdXRGb3JtID0gKHsgcHJpY2UsIG9uU3VjY2Vzc2Z1bENoZWNrb3V0IH0pID0+IHtcbiAgY29uc3QgW2lzUHJvY2Vzc2luZywgc2V0UHJvY2Vzc2luZ1RvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NoZWNrb3V0RXJyb3IsIHNldENoZWNrb3V0RXJyb3JdID0gdXNlU3RhdGUoKTtcblxuICAvLyBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcbiAgLy8gY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xuXG4gIC8vIFRJUFxuICAvLyB1c2UgdGhlIGNhcmRFbGVtZW50cyBvbkNoYW5nZSBwcm9wIHRvIGFkZCBhIGhhbmRsZXJcbiAgLy8gZm9yIHNldHRpbmcgYW55IGVycm9yczpcblxuICBjb25zdCBoYW5kbGVDYXJkRGV0YWlsc0NoYW5nZSA9IGV2ID0+IHtcbiAgICBldi5lcnJvciA/IHNldENoZWNrb3V0RXJyb3IoZXYuZXJyb3IubWVzc2FnZSkgOiBzZXRDaGVja291dEVycm9yKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jIGV2ID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYmlsbGluZ0RldGFpbHMgPSB7XG4gICAgICBuYW1lOiBldi50YXJnZXQubmFtZS52YWx1ZSxcbiAgICAgIGVtYWlsOiBldi50YXJnZXQuZW1haWwudmFsdWUsXG4gICAgICBhZGRyZXNzOiB7XG4gICAgICAgIGNpdHk6IGV2LnRhcmdldC5jaXR5LnZhbHVlLFxuICAgICAgICBsaW5lMTogZXYudGFyZ2V0LmFkZHJlc3MudmFsdWUsXG4gICAgICAgIHN0YXRlOiBldi50YXJnZXQuc3RhdGUudmFsdWUsXG4gICAgICAgIHBvc3RhbF9jb2RlOiBldi50YXJnZXQuemlwLnZhbHVlXG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldFByb2Nlc3NpbmdUbyh0cnVlKTtcblxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhOiBjbGllbnRTZWNyZXQgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICcvYXBpL3BheW1lbnRfaW50ZW50cycsIHtcbiAgICAgICAgYW1vdW50OiBwcmljZSAqIDEwMFxuICAgICAgfSk7XG5cblxuICAgICAgY29uc29sZS5sb2coY2xpZW50U2VjcmV0KVxuXG4gICAgICBjb25zdCBwYXltZW50TWV0aG9kUmVxID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xuICAgICAgICB0eXBlOiBcImNhcmRcIixcbiAgICAgICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgICAgIGJpbGxpbmdfZGV0YWlsczogYmlsbGluZ0RldGFpbHNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocGF5bWVudE1ldGhvZFJlcS5lcnJvcikge1xuICAgICAgICBzZXRDaGVja291dEVycm9yKHBheW1lbnRNZXRob2RSZXEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHNldFByb2Nlc3NpbmdUbyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbmZpcm1DYXJkUGF5bWVudCAgPSBhd2FpdCBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50KGNsaWVudFNlY3JldCwge1xuICAgICAgICBwYXltZW50X21ldGhvZDogcGF5bWVudE1ldGhvZFJlcS5wYXltZW50TWV0aG9kLmlkXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coY29uZmlybUNhcmRQYXltZW50KVxuXG4gICAgICBvblN1Y2Nlc3NmdWxDaGVja291dCgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0Q2hlY2tvdXRFcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICAvLyBMZWFybmluZ1xuICAvLyBBIGNvbW1vbiBhc2svYnVnIHRoYXQgdXNlcnMgcnVuIGludG8gaXM6XG4gIC8vIEhvdyBkbyB5b3UgY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgY2FyZCBlbGVtZW50IGlucHV0IHRleHQ/XG4gIC8vIEhvdyBkbyB5b3UgY2hhbmdlIHRoZSBmb250LXNpemUgb2YgdGhlIGNhcmQgZWxlbWVudCBpbnB1dCB0ZXh0P1xuICAvLyBIb3cgZG8geW91IGNoYW5nZSB0aGUgcGxhY2Vob2xkZXIgY29sb3I/XG4gIC8vIFRoZSBhbnN3ZXIgdG8gYWxsIG9mIHRoZSBhYm92ZSBpcyB0byB1c2UgdGhlIGBzdHlsZWAgb3B0aW9uLlxuICAvLyBJdCdzIGNvbW1vbiB0byBoZWFyIHVzZXJzIGNvbmZ1c2VkIHdoeSB0aGUgY2FyZCBlbGVtZW50IGFwcGVhcnMgaW1wZXJ2aW91c1xuICAvLyB0byBhbGwgdGhlaXIgc3R5bGVzLiBObyBtYXR0ZXIgd2hhdCBjbGFzc2VzIHRoZXkgYWRkIHRvIHRoZSBwYXJlbnQgZWxlbWVudFxuICAvLyBub3RoaW5nIHdpdGhpbiB0aGUgY2FyZCBlbGVtZW50IHNlZW1zIHRvIGNoYW5nZS4gVGhlIHJlYXNvbiBmb3IgdGhpcyBpcyB0aGF0XG4gIC8vIHRoZSBjYXJkIGVsZW1lbnQgaXMgaG91c2VkIHdpdGhpbiBhbiBpZnJhbWUgYW5kOlxuICAvLyA+IHN0eWxlcyBkbyBub3QgY2FzY2FkZSBmcm9tIGEgcGFyZW50IHdpbmRvdyBkb3duIGludG8gaXRzIGlmcmFtZXNcblxuICBjb25zdCBpZnJhbWVTdHlsZXMgPSB7XG4gICAgYmFzZToge1xuICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgaWNvbkNvbG9yOiBcIiNlZmVmZVwiLFxuICAgICAgXCI6OnBsYWNlaG9sZGVyXCI6IHtcbiAgICAgICAgY29sb3I6IFwiIzAwMFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnZhbGlkOiB7XG4gICAgICBpY29uQ29sb3I6IFwicmVkXCIsXG4gICAgICBjb2xvcjogXCJyZWRcIlxuICAgIH0sXG4gICAgY29tcGxldGU6IHtcbiAgICAgIGljb25Db2xvcjogXCJncmVlblwiXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNhcmRFbGVtZW50T3B0cyA9IHtcbiAgICBpY29uU3R5bGU6IFwic29saWRcIixcbiAgICBzdHlsZTogaWZyYW1lU3R5bGVzLFxuICAgIGhpZGVQb3N0YWxDb2RlOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH0+XG4gICAgICA8Um93PlxuICAgICAgICA8QmlsbGluZ0RldGFpbHNGaWVsZHMgLz5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENhcmRFbGVtZW50Q29udGFpbmVyPlxuICAgICAgICAgIDxDYXJkRWxlbWVudFxuICAgICAgICAgICAgb3B0aW9ucz17Y2FyZEVsZW1lbnRPcHRzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhcmREZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZEVsZW1lbnRDb250YWluZXI+XG4gICAgICA8L1Jvdz5cbiAgICAgIHtjaGVja291dEVycm9yICYmIDxDaGVja291dEVycm9yPntjaGVja291dEVycm9yfTwvQ2hlY2tvdXRFcnJvcj59XG4gICAgICA8Um93PlxuICAgICAgICB7LyogVElQIGFsd2F5cyBkaXNhYmxlIHlvdXIgc3VibWl0IGJ1dHRvbiB3aGlsZSBwcm9jZXNzaW5nIHBheW1lbnRzICovfVxuICAgICAgICA8U3VibWl0QnV0dG9uIGRpc2FibGVkPXtpc1Byb2Nlc3NpbmcgfHwgIXN0cmlwZX0+XG4gICAgICAgICAge2lzUHJvY2Vzc2luZyA/IFwiUHJvY2Vzc2luZy4uLlwiIDogYFBheSAkJHtwcmljZX1gfVxuICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cbiAgICAgIDwvUm93PlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CheckoutForm.jsx\n");

/***/ }),

/***/ "./node_modules/asn1.js/lib/asn1.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/api.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/buffer.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/node.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/reporter.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/constants/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/constants/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/pem.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/pem.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/brorand/index.js":
false,

/***/ "./node_modules/browserify-aes/aes.js":
false,

/***/ "./node_modules/browserify-aes/authCipher.js":
false,

/***/ "./node_modules/browserify-aes/browser.js":
false,

/***/ "./node_modules/browserify-aes/decrypter.js":
false,

/***/ "./node_modules/browserify-aes/encrypter.js":
false,

/***/ "./node_modules/browserify-aes/ghash.js":
false,

/***/ "./node_modules/browserify-aes/incr32.js":
false,

/***/ "./node_modules/browserify-aes/modes/cbc.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb1.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb8.js":
false,

/***/ "./node_modules/browserify-aes/modes/ctr.js":
false,

/***/ "./node_modules/browserify-aes/modes/ecb.js":
false,

/***/ "./node_modules/browserify-aes/modes/index.js":
false,

/***/ "./node_modules/browserify-aes/modes/list.json":
false,

/***/ "./node_modules/browserify-aes/modes/ofb.js":
false,

/***/ "./node_modules/browserify-aes/streamCipher.js":
false,

/***/ "./node_modules/browserify-cipher/browser.js":
false,

/***/ "./node_modules/browserify-des/index.js":
false,

/***/ "./node_modules/browserify-des/modes.js":
false,

/***/ "./node_modules/browserify-rsa/index.js":
false,

/***/ "./node_modules/browserify-sign/algos.js":
false,

/***/ "./node_modules/browserify-sign/browser/algorithms.json":
false,

/***/ "./node_modules/browserify-sign/browser/curves.json":
false,

/***/ "./node_modules/browserify-sign/browser/index.js":
false,

/***/ "./node_modules/browserify-sign/browser/sign.js":
false,

/***/ "./node_modules/browserify-sign/browser/verify.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/errors-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/async_iterator.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/buffer_list.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/end-of-stream.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/from-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/pipeline.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/state.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/buffer-xor/index.js":
false,

/***/ "./node_modules/buffer/index.js":
false,

/***/ "./node_modules/builtin-status-codes/browser.js":
false,

/***/ "./node_modules/cipher-base/index.js":
false,

/***/ "./node_modules/core-util-is/lib/util.js":
false,

/***/ "./node_modules/create-ecdh/browser.js":
false,

/***/ "./node_modules/create-hash/browser.js":
false,

/***/ "./node_modules/create-hash/md5.js":
false,

/***/ "./node_modules/create-hmac/browser.js":
false,

/***/ "./node_modules/create-hmac/legacy.js":
false,

/***/ "./node_modules/crypto-browserify/index.js":
false,

/***/ "./node_modules/des.js/lib/des.js":
false,

/***/ "./node_modules/des.js/lib/des/cbc.js":
false,

/***/ "./node_modules/des.js/lib/des/cipher.js":
false,

/***/ "./node_modules/des.js/lib/des/des.js":
false,

/***/ "./node_modules/des.js/lib/des/ede.js":
false,

/***/ "./node_modules/des.js/lib/des/utils.js":
false,

/***/ "./node_modules/diffie-hellman/browser.js":
false,

/***/ "./node_modules/diffie-hellman/lib/dh.js":
false,

/***/ "./node_modules/diffie-hellman/lib/generatePrime.js":
false,

/***/ "./node_modules/diffie-hellman/lib/primes.json":
false,

/***/ "./node_modules/elliptic/lib/elliptic.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/base.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/edwards.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/mont.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/short.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curves.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/key.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/signature.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/key.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/signature.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/utils.js":
false,

/***/ "./node_modules/elliptic/package.json":
false,

/***/ "./node_modules/events/events.js":
false,

/***/ "./node_modules/evp_bytestokey/index.js":
false,

/***/ "./node_modules/hash-base/index.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/errors-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/async_iterator.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/buffer_list.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/end-of-stream.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/from-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/pipeline.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/state.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/hash.js/lib/hash.js":
false,

/***/ "./node_modules/hash.js/lib/hash/common.js":
false,

/***/ "./node_modules/hash.js/lib/hash/hmac.js":
false,

/***/ "./node_modules/hash.js/lib/hash/ripemd.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/1.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/224.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/256.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/384.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/512.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/common.js":
false,

/***/ "./node_modules/hash.js/lib/hash/utils.js":
false,

/***/ "./node_modules/hmac-drbg/lib/hmac-drbg.js":
false,

/***/ "./node_modules/https-browserify/index.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/md5.js/index.js":
false,

/***/ "./node_modules/miller-rabin/lib/mr.js":
false,

/***/ "./node_modules/minimalistic-assert/index.js":
false,

/***/ "./node_modules/minimalistic-crypto-utils/lib/utils.js":
false,

/***/ "./node_modules/parse-asn1/aesid.json":
false,

/***/ "./node_modules/parse-asn1/asn1.js":
false,

/***/ "./node_modules/parse-asn1/certificate.js":
false,

/***/ "./node_modules/parse-asn1/fixProc.js":
false,

/***/ "./node_modules/parse-asn1/index.js":
false,

/***/ "./node_modules/path-browserify/index.js":
false,

/***/ "./node_modules/pbkdf2/browser.js":
false,

/***/ "./node_modules/pbkdf2/lib/async.js":
false,

/***/ "./node_modules/pbkdf2/lib/default-encoding.js":
false,

/***/ "./node_modules/pbkdf2/lib/precondition.js":
false,

/***/ "./node_modules/pbkdf2/lib/sync-browser.js":
false,

/***/ "./node_modules/process-nextick-args/index.js":
false,

/***/ "./node_modules/public-encrypt/browser.js":
false,

/***/ "./node_modules/public-encrypt/mgf.js":
false,

/***/ "./node_modules/public-encrypt/privateDecrypt.js":
false,

/***/ "./node_modules/public-encrypt/publicEncrypt.js":
false,

/***/ "./node_modules/public-encrypt/withPublic.js":
false,

/***/ "./node_modules/public-encrypt/xor.js":
false,

/***/ "./node_modules/randombytes/browser.js":
false,

/***/ "./node_modules/randomfill/browser.js":
false,

/***/ "./node_modules/readable-stream/duplex-browser.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/readable-stream/node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/readable-stream/passthrough.js":
false,

/***/ "./node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/readable-stream/transform.js":
false,

/***/ "./node_modules/readable-stream/writable-browser.js":
false,

/***/ "./node_modules/ripemd160/index.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/sha.js/hash.js":
false,

/***/ "./node_modules/sha.js/index.js":
false,

/***/ "./node_modules/sha.js/sha.js":
false,

/***/ "./node_modules/sha.js/sha1.js":
false,

/***/ "./node_modules/sha.js/sha224.js":
false,

/***/ "./node_modules/sha.js/sha256.js":
false,

/***/ "./node_modules/sha.js/sha384.js":
false,

/***/ "./node_modules/sha.js/sha512.js":
false,

/***/ "./node_modules/stream-browserify/index.js":
false,

/***/ "./node_modules/stream-http/index.js":
false,

/***/ "./node_modules/stream-http/lib/capability.js":
false,

/***/ "./node_modules/stream-http/lib/request.js":
false,

/***/ "./node_modules/stream-http/lib/response.js":
false,

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
false,

/***/ "./node_modules/stripe/lib/Error.js":
false,

/***/ "./node_modules/stripe/lib/ResourceNamespace.js":
false,

/***/ "./node_modules/stripe/lib/StripeMethod.basic.js":
false,

/***/ "./node_modules/stripe/lib/StripeMethod.js":
false,

/***/ "./node_modules/stripe/lib/StripeResource.js":
false,

/***/ "./node_modules/stripe/lib/Webhooks.js":
false,

/***/ "./node_modules/stripe/lib/autoPagination.js":
false,

/***/ "./node_modules/stripe/lib/makeRequest.js":
false,

/***/ "./node_modules/stripe/lib/multipart.js":
false,

/***/ "./node_modules/stripe/lib/resources.js":
false,

/***/ "./node_modules/stripe/lib/resources/AccountLinks.js":
false,

/***/ "./node_modules/stripe/lib/resources/Accounts.js":
false,

/***/ "./node_modules/stripe/lib/resources/ApplePayDomains.js":
false,

/***/ "./node_modules/stripe/lib/resources/ApplicationFees.js":
false,

/***/ "./node_modules/stripe/lib/resources/Balance.js":
false,

/***/ "./node_modules/stripe/lib/resources/BalanceTransactions.js":
false,

/***/ "./node_modules/stripe/lib/resources/BillingPortal/Sessions.js":
false,

/***/ "./node_modules/stripe/lib/resources/Charges.js":
false,

/***/ "./node_modules/stripe/lib/resources/Checkout/Sessions.js":
false,

/***/ "./node_modules/stripe/lib/resources/CountrySpecs.js":
false,

/***/ "./node_modules/stripe/lib/resources/Coupons.js":
false,

/***/ "./node_modules/stripe/lib/resources/CreditNotes.js":
false,

/***/ "./node_modules/stripe/lib/resources/Customers.js":
false,

/***/ "./node_modules/stripe/lib/resources/Disputes.js":
false,

/***/ "./node_modules/stripe/lib/resources/EphemeralKeys.js":
false,

/***/ "./node_modules/stripe/lib/resources/Events.js":
false,

/***/ "./node_modules/stripe/lib/resources/ExchangeRates.js":
false,

/***/ "./node_modules/stripe/lib/resources/FileLinks.js":
false,

/***/ "./node_modules/stripe/lib/resources/Files.js":
false,

/***/ "./node_modules/stripe/lib/resources/InvoiceItems.js":
false,

/***/ "./node_modules/stripe/lib/resources/Invoices.js":
false,

/***/ "./node_modules/stripe/lib/resources/IssuerFraudRecords.js":
false,

/***/ "./node_modules/stripe/lib/resources/Issuing/Authorizations.js":
false,

/***/ "./node_modules/stripe/lib/resources/Issuing/Cardholders.js":
false,

/***/ "./node_modules/stripe/lib/resources/Issuing/Cards.js":
false,

/***/ "./node_modules/stripe/lib/resources/Issuing/Disputes.js":
false,

/***/ "./node_modules/stripe/lib/resources/Issuing/Transactions.js":
false,

/***/ "./node_modules/stripe/lib/resources/Mandates.js":
false,

/***/ "./node_modules/stripe/lib/resources/OAuth.js":
false,

/***/ "./node_modules/stripe/lib/resources/OrderReturns.js":
false,

/***/ "./node_modules/stripe/lib/resources/Orders.js":
false,

/***/ "./node_modules/stripe/lib/resources/PaymentIntents.js":
false,

/***/ "./node_modules/stripe/lib/resources/PaymentMethods.js":
false,

/***/ "./node_modules/stripe/lib/resources/Payouts.js":
false,

/***/ "./node_modules/stripe/lib/resources/Plans.js":
false,

/***/ "./node_modules/stripe/lib/resources/Prices.js":
false,

/***/ "./node_modules/stripe/lib/resources/Products.js":
false,

/***/ "./node_modules/stripe/lib/resources/Radar/EarlyFraudWarnings.js":
false,

/***/ "./node_modules/stripe/lib/resources/Radar/ValueListItems.js":
false,

/***/ "./node_modules/stripe/lib/resources/Radar/ValueLists.js":
false,

/***/ "./node_modules/stripe/lib/resources/Refunds.js":
false,

/***/ "./node_modules/stripe/lib/resources/Reporting/ReportRuns.js":
false,

/***/ "./node_modules/stripe/lib/resources/Reporting/ReportTypes.js":
false,

/***/ "./node_modules/stripe/lib/resources/Reviews.js":
false,

/***/ "./node_modules/stripe/lib/resources/SKUs.js":
false,

/***/ "./node_modules/stripe/lib/resources/SetupIntents.js":
false,

/***/ "./node_modules/stripe/lib/resources/Sigma/ScheduledQueryRuns.js":
false,

/***/ "./node_modules/stripe/lib/resources/Sources.js":
false,

/***/ "./node_modules/stripe/lib/resources/SubscriptionItems.js":
false,

/***/ "./node_modules/stripe/lib/resources/SubscriptionSchedules.js":
false,

/***/ "./node_modules/stripe/lib/resources/Subscriptions.js":
false,

/***/ "./node_modules/stripe/lib/resources/TaxRates.js":
false,

/***/ "./node_modules/stripe/lib/resources/Terminal/ConnectionTokens.js":
false,

/***/ "./node_modules/stripe/lib/resources/Terminal/Locations.js":
false,

/***/ "./node_modules/stripe/lib/resources/Terminal/Readers.js":
false,

/***/ "./node_modules/stripe/lib/resources/Tokens.js":
false,

/***/ "./node_modules/stripe/lib/resources/Topups.js":
false,

/***/ "./node_modules/stripe/lib/resources/Transfers.js":
false,

/***/ "./node_modules/stripe/lib/resources/WebhookEndpoints.js":
false,

/***/ "./node_modules/stripe/lib/stripe.js":
false,

/***/ "./node_modules/stripe/lib/utils.js":
false,

/***/ "./node_modules/stripe/node_modules/qs/lib/formats.js":
false,

/***/ "./node_modules/stripe/node_modules/qs/lib/index.js":
false,

/***/ "./node_modules/stripe/node_modules/qs/lib/parse.js":
false,

/***/ "./node_modules/stripe/node_modules/qs/lib/stringify.js":
false,

/***/ "./node_modules/stripe/node_modules/qs/lib/utils.js":
false,

/***/ "./node_modules/stripe/package.json":
false,

/***/ "./node_modules/to-arraybuffer/index.js":
false,

/***/ "./node_modules/util-deprecate/browser.js":
false,

/***/ "./node_modules/vm-browserify/index.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/xtend/immutable.js":
false,

/***/ 10:
false,

/***/ 11:
false,

/***/ 3:
false,

/***/ 4:
false,

/***/ 5:
false,

/***/ 6:
false,

/***/ 7:
false,

/***/ 8:
false,

/***/ 9:
false

})