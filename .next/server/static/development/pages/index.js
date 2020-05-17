module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CheckoutForm.jsx":
/*!*************************************!*\
  !*** ./components/CheckoutForm.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _prebuilt_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prebuilt/Row */ "./components/prebuilt/Row.jsx");
/* harmony import */ var _prebuilt_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prebuilt/BillingDetailsFields */ "./components/prebuilt/BillingDetailsFields.jsx");
/* harmony import */ var _prebuilt_SubmitButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prebuilt/SubmitButton */ "./components/prebuilt/SubmitButton.jsx");
/* harmony import */ var _prebuilt_CheckoutError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prebuilt/CheckoutError */ "./components/prebuilt/CheckoutError.jsx");
var _jsxFileName = "/Users/jeremysmith/Development/Playmarin-Donate/components/CheckoutForm.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const CardElementContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

const CheckoutForm = ({
  price,
  onSuccessfulCheckout
}) => {
  const {
    0: isProcessing,
    1: setProcessingTo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: checkoutError,
    1: setCheckoutError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__["useStripe"])();
  const elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__["useElements"])(); // TIP
  // use the cardElements onChange prop to add a handler
  // for setting any errors:

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async ev => {
    ev.preventDefault();
    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value
      }
    };
    setProcessingTo(true);
    const cardElement = elements.getElement("card");

    try {
      const {
        data: clientSecret
      } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/v1/payment_intents", {
        amount: price * 100
      });
      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }

      const {
        error
      } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id
      });

      if (error) {
        setCheckoutError(error.message);
        setProcessingTo(false);
        return;
      }

      onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err);
    }
  }; // Learning
  // A common ask/bug that users run into is:
  // How do you change the color of the card element input text?
  // How do you change the font-size of the card element input text?
  // How do you change the placeholder color?
  // The answer to all of the above is to use the `style` option.
  // It's common to hear users confused why the card element appears impervious
  // to all their styles. No matter what classes they add to the parent element
  // nothing within the card element seems to change. The reason for this is that
  // the card element is housed within an iframe and:
  // > styles do not cascade from a parent window down into its iframes


  const iframeStyles = {
    base: {
      fontSize: "16px",
      iconColor: "#efefe",
      "::placeholder": {
        color: "#000"
      }
    },
    invalid: {
      iconColor: "red",
      color: "red"
    },
    complete: {
      iconColor: "green"
    }
  };
  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true
  };
  return __jsx("form", {
    onSubmit: handleFormSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }, __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx(_prebuilt_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  })), __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx(CardElementContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__["CardElement"], {
    options: cardElementOpts,
    onChange: handleCardDetailsChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }))), checkoutError && __jsx(_prebuilt_CheckoutError__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, checkoutError), __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx(_prebuilt_SubmitButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: isProcessing || !stripe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, isProcessing ? "Processing..." : `Pay $${price}`)));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutForm);

/***/ }),

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prebuilt_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prebuilt/GlobalStyles */ "./components/prebuilt/GlobalStyles.jsx");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/jeremysmith/Development/Playmarin-Donate/components/Layout.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // Learning
// To best leverage Stripe’s advanced fraud functionality,
// include this script on every page, not just the checkout page.
// This allows Stripe to detect anomalous behavior that may be indicative
// of fraud as customers browse your website.
// Note: This is why we are adding it to a Layout component.

const stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__["loadStripe"])("pk_test_p9U2weLKpDM9NQpgZDEKon73002wiZZ0xv"); // TIP
// call loadStripe outside of a component
// in that way there's no chance it will get
// called more times than it needs to

const Layout = ({
  children,
  title
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_prebuilt_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, title), __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__["Elements"], {
    stripe: stripePromise,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/prebuilt/BillingDetailsFields.jsx":
/*!******************************************************!*\
  !*** ./components/prebuilt/BillingDetailsFields.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormField */ "./components/prebuilt/FormField.jsx");
var _jsxFileName = "/Users/jeremysmith/Development/Playmarin-Donate/components/prebuilt/BillingDetailsFields.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BillingDetailsFields = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Jane Doe",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx(_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "jane.doe@example.com",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "185 Berry St. Suite 550",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "city",
    label: "City",
    type: "text",
    placeholder: "San Francisco",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "state",
    label: "State",
    type: "text",
    placeholder: "California",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx(_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "zip",
    label: "ZIP",
    type: "text",
    placeholder: "94103",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BillingDetailsFields);

/***/ }),

/***/ "./components/prebuilt/CheckoutError.jsx":
/*!***********************************************!*\
  !*** ./components/prebuilt/CheckoutError.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jeremysmith/Development/Playmarin-Donate/components/prebuilt/CheckoutError.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const fade = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {
    opacity: 0;
    transform: scale3D(0.95, 0.95, 0.95);
  }
  to {
    opacity: 1;
    transform: scale3D(1, 1, 1);
  }
`;
const ErrorContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: center;
  padding: 0 15px;
  font-size: 13px;
  margin: -10px auto 0px auto;
  width: 100%;
  max-width: 450px;
  opacity: 90;
  animation: ${fade} 150ms ease-out;
  animation-delay: 50ms;
  animation-fill-mode: forwards;
  will-change: opacity;

  & svg {
    margin-right: 10px;
  }
`;

const CheckoutError = ({
  children
}) => __jsx(ErrorContainer, {
  role: "alert",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 3
  }
}, __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 17 17",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }
}, __jsx("path", {
  fill: "#FFF",
  d: "M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }
}), __jsx("path", {
  fill: "#6772e5",
  d: "M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 7
  }
})), children);

/* harmony default export */ __webpack_exports__["default"] = (CheckoutError);

/***/ }),

/***/ "./components/prebuilt/DonutQuantity.jsx":
/*!***********************************************!*\
  !*** ./components/prebuilt/DonutQuantity.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremysmith/Development/Playmarin-Donate/components/prebuilt/DonutQuantity.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.input`
  width: 80px;
  padding: 0 12px;
  vertical-align: top;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  outline: none;
  background: transparent;
  height: 40px;
  user-select: none;
`;
const Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  display: inline-block;
  width: 30px;
  line-height: 38px;
  height: 40px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  user-select: none;

`;
const DecrementButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(Button)`
  border-right: none;
  border-radius: 4px 0 0 4px;
`;
const IncrementButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(Button)`
  border-left: none;
  border-radius: 0 4px 4px 0;
`;

const DonutQuantity = ({
  onAdd,
  onRemove,
  quantity
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(DecrementButton, {
    onClick: onRemove,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "\u2013"), __jsx(Input, {
    type: "text",
    value: quantity,
    readOnly: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx(IncrementButton, {
    onClick: onAdd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "+"));
};

/* harmony default export */ __webpack_exports__["default"] = (DonutQuantity);

/***/ }),

/***/ "./components/prebuilt/DonutShop.jsx":
/*!*******************************************!*\
  !*** ./components/prebuilt/DonutShop.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ "./components/prebuilt/Image.jsx");
/* harmony import */ var _DonutQuantity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DonutQuantity */ "./components/prebuilt/DonutQuantity.jsx");
var _jsxFileName = "/Users/jeremysmith/Development/Playmarin-Donate/components/prebuilt/DonutShop.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Shop = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  padding: 10px 20px 40px 20px;
  background-color: #efefef;
`;
const ShopName = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.h1`
  font-size: 18px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 26.4px;
  margin-bottom: 20px;
`;
const Controls = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const DonutShop = ({
  onAddDonut,
  onRemoveDonut,
  numDonuts
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, "Play Marin Secure Payment Portal"), __jsx(Shop, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(ShopName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx(Controls, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_DonutQuantity__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onAdd: onAddDonut,
    onRemove: onRemoveDonut,
    quantity: numDonuts,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DonutShop);

/***/ }),

/***/ "./components/prebuilt/FormField.jsx":
/*!*******************************************!*\
  !*** ./components/prebuilt/FormField.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremysmith/Development/Playmarin-Donate/components/prebuilt/FormField.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FormFieldContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 15px;

  &:first-of-type {
    border-top: none;
  }
`;
const Label = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.label`
  width: 20%;
  min-width: 70px;
  padding: 11px 0;
  color: #000;
  overflow: hidden;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.input`
  font-size: 16px;
  width: 100%;
  padding: 11px 15px 11px 8px;
  background-color: transparent;
  animation: 1ms void-animation-out;

  &::placeholder {
  }
`;

const FormField = ({
  label,
  type,
  name,
  placeholder,
  required
}) => {
  return __jsx(FormFieldContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(Label, {
    htmlFor: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, label), __jsx(Input, {
    name: name,
    type: type,
    placeholder: placeholder,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FormField);

/***/ }),

/***/ "./components/prebuilt/GlobalStyles.jsx":
/*!**********************************************!*\
  !*** ./components/prebuilt/GlobalStyles.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremysmith/Development/Playmarin-Donate/components/prebuilt/GlobalStyles.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GlobalStyles = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["Global"], {
  styles: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
      `,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}), __jsx(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["Global"], {
  styles: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
        input,
        button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          outline: none;
          border-style: none;
        }
      `,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}), __jsx(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["Global"], {
  styles: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
        body,
        html {
          background-color: #fff;
          font-size: 18px;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          padding-top: 40px;
        }
      `,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ }),

/***/ "./components/prebuilt/Image.jsx":
/*!***************************************!*\
  !*** ./components/prebuilt/Image.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const Image = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.img`
  display: block;
  margin: 0 auto;
`;
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/prebuilt/Row.jsx":
/*!*************************************!*\
  !*** ./components/prebuilt/Row.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const Row = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 475px;
  margin: 30px auto;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0;
  border-radius: 4px;
  position: relative;
`;
/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./components/prebuilt/SubmitButton.jsx":
/*!**********************************************!*\
  !*** ./components/prebuilt/SubmitButton.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const SubmitButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  display: block;
  height: 40px;
  width: 100%;
  font-size: inherit;
  background-color: ${props => props.disabled ? "#7795f8" : "green"};
  box-shadow: ${props => props.disabled ? "none" : "0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #ffb9f6;"};
  border-radius: 4px;
  opacity: ${props => props.disabled ? 0.5 : 1};
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;
/* harmony default export */ __webpack_exports__["default"] = (SubmitButton);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_prebuilt_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/prebuilt/Row */ "./components/prebuilt/Row.jsx");
/* harmony import */ var _components_prebuilt_DonutShop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/prebuilt/DonutShop */ "./components/prebuilt/DonutShop.jsx");
/* harmony import */ var _components_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CheckoutForm */ "./components/CheckoutForm.jsx");
/* harmony import */ var _utils_get_donut_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/get-donut-price */ "./utils/get-donut-price.js");
var _jsxFileName = "/Users/jeremysmith/Development/Playmarin-Donate/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const MainPage = props => {
  const {
    0: numDonuts,
    1: setNumDonuts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);

  const addDonut = () => setNumDonuts(num => Math.min(12, num + 1));

  const remDonut = () => setNumDonuts(num => Math.max(1, num - 1));

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Play Marin Donation page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_components_prebuilt_Row__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_components_prebuilt_DonutShop__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onAddDonut: addDonut,
    onRemoveDonut: remDonut,
    numDonuts: numDonuts,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(_components_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    price: Object(_utils_get_donut_price__WEBPACK_IMPORTED_MODULE_6__["default"])(numDonuts),
    onSuccessfulCheckout: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/success"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ }),

/***/ "./utils/get-donut-price.js":
/*!**********************************!*\
  !*** ./utils/get-donut-price.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getDonutPrice = numDonuts => (Math.round(numDonuts * 1 * 100) / 100).toFixed(2);

/* harmony default export */ __webpack_exports__["default"] = (getDonutPrice);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeremysmith/Development/Playmarin-Donate/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ByZWJ1aWx0L0JpbGxpbmdEZXRhaWxzRmllbGRzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ByZWJ1aWx0L0NoZWNrb3V0RXJyb3IuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJlYnVpbHQvRG9udXRRdWFudGl0eS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcmVidWlsdC9Eb251dFNob3AuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJlYnVpbHQvRm9ybUZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ByZWJ1aWx0L0dsb2JhbFN0eWxlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcmVidWlsdC9JbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcmVidWlsdC9Sb3cuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJlYnVpbHQvU3VibWl0QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXQtZG9udXQtcHJpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN0cmlwZS9zdHJpcGUtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJDYXJkRWxlbWVudENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkNoZWNrb3V0Rm9ybSIsInByaWNlIiwib25TdWNjZXNzZnVsQ2hlY2tvdXQiLCJpc1Byb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nVG8iLCJ1c2VTdGF0ZSIsImNoZWNrb3V0RXJyb3IiLCJzZXRDaGVja291dEVycm9yIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImhhbmRsZUNhcmREZXRhaWxzQ2hhbmdlIiwiZXYiLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJiaWxsaW5nRGV0YWlscyIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtYWlsIiwiYWRkcmVzcyIsImNpdHkiLCJsaW5lMSIsInN0YXRlIiwicG9zdGFsX2NvZGUiLCJ6aXAiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJkYXRhIiwiY2xpZW50U2VjcmV0IiwiYXhpb3MiLCJwb3N0IiwiYW1vdW50IiwicGF5bWVudE1ldGhvZFJlcSIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImJpbGxpbmdfZGV0YWlscyIsImNvbmZpcm1DYXJkUGF5bWVudCIsInBheW1lbnRfbWV0aG9kIiwicGF5bWVudE1ldGhvZCIsImlkIiwiZXJyIiwiaWZyYW1lU3R5bGVzIiwiYmFzZSIsImZvbnRTaXplIiwiaWNvbkNvbG9yIiwiY29sb3IiLCJpbnZhbGlkIiwiY29tcGxldGUiLCJjYXJkRWxlbWVudE9wdHMiLCJpY29uU3R5bGUiLCJzdHlsZSIsImhpZGVQb3N0YWxDb2RlIiwic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsIkJpbGxpbmdEZXRhaWxzRmllbGRzIiwiZmFkZSIsImtleWZyYW1lcyIsIkVycm9yQ29udGFpbmVyIiwiQ2hlY2tvdXRFcnJvciIsIklucHV0IiwiaW5wdXQiLCJCdXR0b24iLCJzcGFuIiwiRGVjcmVtZW50QnV0dG9uIiwiSW5jcmVtZW50QnV0dG9uIiwiRG9udXRRdWFudGl0eSIsIm9uQWRkIiwib25SZW1vdmUiLCJxdWFudGl0eSIsIlNob3AiLCJTaG9wTmFtZSIsImgxIiwiQ29udHJvbHMiLCJEb251dFNob3AiLCJvbkFkZERvbnV0Iiwib25SZW1vdmVEb251dCIsIm51bURvbnV0cyIsIkZvcm1GaWVsZENvbnRhaW5lciIsIkxhYmVsIiwibGFiZWwiLCJGb3JtRmllbGQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiR2xvYmFsU3R5bGVzIiwiY3NzIiwiSW1hZ2UiLCJpbWciLCJSb3ciLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJwcm9wcyIsImRpc2FibGVkIiwiTWFpblBhZ2UiLCJzZXROdW1Eb251dHMiLCJhZGREb251dCIsIm51bSIsIk1hdGgiLCJtaW4iLCJyZW1Eb251dCIsIm1heCIsImdldERvbnV0UHJpY2UiLCJSb3V0ZXIiLCJwdXNoIiwicm91bmQiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5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TyxLQUFMLENBQVczQixTQUFTLEdBQUcsQ0FBWixHQUFnQixHQUEzQixJQUFrQyxHQUFuQyxFQUF3QzRCLE9BQXhDLENBQWdELENBQWhELENBREY7O0FBR2VKLDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFJvdyBmcm9tIFwiLi9wcmVidWlsdC9Sb3dcIjtcbmltcG9ydCBCaWxsaW5nRGV0YWlsc0ZpZWxkcyBmcm9tIFwiLi9wcmVidWlsdC9CaWxsaW5nRGV0YWlsc0ZpZWxkc1wiO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi9wcmVidWlsdC9TdWJtaXRCdXR0b25cIjtcbmltcG9ydCBDaGVja291dEVycm9yIGZyb20gXCIuL3ByZWJ1aWx0L0NoZWNrb3V0RXJyb3JcIjtcblxuY29uc3QgQ2FyZEVsZW1lbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJiAuU3RyaXBlRWxlbWVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuYDtcblxuY29uc3QgQ2hlY2tvdXRGb3JtID0gKHsgcHJpY2UsIG9uU3VjY2Vzc2Z1bENoZWNrb3V0IH0pID0+IHtcbiAgY29uc3QgW2lzUHJvY2Vzc2luZywgc2V0UHJvY2Vzc2luZ1RvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NoZWNrb3V0RXJyb3IsIHNldENoZWNrb3V0RXJyb3JdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xuXG4gIC8vIFRJUFxuICAvLyB1c2UgdGhlIGNhcmRFbGVtZW50cyBvbkNoYW5nZSBwcm9wIHRvIGFkZCBhIGhhbmRsZXJcbiAgLy8gZm9yIHNldHRpbmcgYW55IGVycm9yczpcblxuICBjb25zdCBoYW5kbGVDYXJkRGV0YWlsc0NoYW5nZSA9IGV2ID0+IHtcbiAgICBldi5lcnJvciA/IHNldENoZWNrb3V0RXJyb3IoZXYuZXJyb3IubWVzc2FnZSkgOiBzZXRDaGVja291dEVycm9yKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jIGV2ID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYmlsbGluZ0RldGFpbHMgPSB7XG4gICAgICBuYW1lOiBldi50YXJnZXQubmFtZS52YWx1ZSxcbiAgICAgIGVtYWlsOiBldi50YXJnZXQuZW1haWwudmFsdWUsXG4gICAgICBhZGRyZXNzOiB7XG4gICAgICAgIGNpdHk6IGV2LnRhcmdldC5jaXR5LnZhbHVlLFxuICAgICAgICBsaW5lMTogZXYudGFyZ2V0LmFkZHJlc3MudmFsdWUsXG4gICAgICAgIHN0YXRlOiBldi50YXJnZXQuc3RhdGUudmFsdWUsXG4gICAgICAgIHBvc3RhbF9jb2RlOiBldi50YXJnZXQuemlwLnZhbHVlXG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldFByb2Nlc3NpbmdUbyh0cnVlKTtcblxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChcImNhcmRcIik7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhOiBjbGllbnRTZWNyZXQgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiL3YxL3BheW1lbnRfaW50ZW50c1wiLCB7XG4gICAgICAgIGFtb3VudDogcHJpY2UgKiAxMDBcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwYXltZW50TWV0aG9kUmVxID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xuICAgICAgICB0eXBlOiBcImNhcmRcIixcbiAgICAgICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgICAgIGJpbGxpbmdfZGV0YWlsczogYmlsbGluZ0RldGFpbHNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocGF5bWVudE1ldGhvZFJlcS5lcnJvcikge1xuICAgICAgICBzZXRDaGVja291dEVycm9yKHBheW1lbnRNZXRob2RSZXEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHNldFByb2Nlc3NpbmdUbyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3RyaXBlLmNvbmZpcm1DYXJkUGF5bWVudChjbGllbnRTZWNyZXQsIHtcbiAgICAgICAgcGF5bWVudF9tZXRob2Q6IHBheW1lbnRNZXRob2RSZXEucGF5bWVudE1ldGhvZC5pZFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBzZXRDaGVja291dEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBzZXRQcm9jZXNzaW5nVG8oZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9uU3VjY2Vzc2Z1bENoZWNrb3V0KCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRDaGVja291dEVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIC8vIExlYXJuaW5nXG4gIC8vIEEgY29tbW9uIGFzay9idWcgdGhhdCB1c2VycyBydW4gaW50byBpczpcbiAgLy8gSG93IGRvIHlvdSBjaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBjYXJkIGVsZW1lbnQgaW5wdXQgdGV4dD9cbiAgLy8gSG93IGRvIHlvdSBjaGFuZ2UgdGhlIGZvbnQtc2l6ZSBvZiB0aGUgY2FyZCBlbGVtZW50IGlucHV0IHRleHQ/XG4gIC8vIEhvdyBkbyB5b3UgY2hhbmdlIHRoZSBwbGFjZWhvbGRlciBjb2xvcj9cbiAgLy8gVGhlIGFuc3dlciB0byBhbGwgb2YgdGhlIGFib3ZlIGlzIHRvIHVzZSB0aGUgYHN0eWxlYCBvcHRpb24uXG4gIC8vIEl0J3MgY29tbW9uIHRvIGhlYXIgdXNlcnMgY29uZnVzZWQgd2h5IHRoZSBjYXJkIGVsZW1lbnQgYXBwZWFycyBpbXBlcnZpb3VzXG4gIC8vIHRvIGFsbCB0aGVpciBzdHlsZXMuIE5vIG1hdHRlciB3aGF0IGNsYXNzZXMgdGhleSBhZGQgdG8gdGhlIHBhcmVudCBlbGVtZW50XG4gIC8vIG5vdGhpbmcgd2l0aGluIHRoZSBjYXJkIGVsZW1lbnQgc2VlbXMgdG8gY2hhbmdlLiBUaGUgcmVhc29uIGZvciB0aGlzIGlzIHRoYXRcbiAgLy8gdGhlIGNhcmQgZWxlbWVudCBpcyBob3VzZWQgd2l0aGluIGFuIGlmcmFtZSBhbmQ6XG4gIC8vID4gc3R5bGVzIGRvIG5vdCBjYXNjYWRlIGZyb20gYSBwYXJlbnQgd2luZG93IGRvd24gaW50byBpdHMgaWZyYW1lc1xuXG4gIGNvbnN0IGlmcmFtZVN0eWxlcyA9IHtcbiAgICBiYXNlOiB7XG4gICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICBpY29uQ29sb3I6IFwiI2VmZWZlXCIsXG4gICAgICBcIjo6cGxhY2Vob2xkZXJcIjoge1xuICAgICAgICBjb2xvcjogXCIjMDAwXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGludmFsaWQ6IHtcbiAgICAgIGljb25Db2xvcjogXCJyZWRcIixcbiAgICAgIGNvbG9yOiBcInJlZFwiXG4gICAgfSxcbiAgICBjb21wbGV0ZToge1xuICAgICAgaWNvbkNvbG9yOiBcImdyZWVuXCJcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2FyZEVsZW1lbnRPcHRzID0ge1xuICAgIGljb25TdHlsZTogXCJzb2xpZFwiLFxuICAgIHN0eWxlOiBpZnJhbWVTdHlsZXMsXG4gICAgaGlkZVBvc3RhbENvZGU6IHRydWVcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fT5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxCaWxsaW5nRGV0YWlsc0ZpZWxkcyAvPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8Q2FyZEVsZW1lbnRDb250YWluZXI+XG4gICAgICAgICAgPENhcmRFbGVtZW50XG4gICAgICAgICAgICBvcHRpb25zPXtjYXJkRWxlbWVudE9wdHN9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2FyZERldGFpbHNDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9DYXJkRWxlbWVudENvbnRhaW5lcj5cbiAgICAgIDwvUm93PlxuICAgICAge2NoZWNrb3V0RXJyb3IgJiYgPENoZWNrb3V0RXJyb3I+e2NoZWNrb3V0RXJyb3J9PC9DaGVja291dEVycm9yPn1cbiAgICAgIDxSb3c+XG4gICAgICAgIHsvKiBUSVAgYWx3YXlzIGRpc2FibGUgeW91ciBzdWJtaXQgYnV0dG9uIHdoaWxlIHByb2Nlc3NpbmcgcGF5bWVudHMgKi99XG4gICAgICAgIDxTdWJtaXRCdXR0b24gZGlzYWJsZWQ9e2lzUHJvY2Vzc2luZyB8fCAhc3RyaXBlfT5cbiAgICAgICAgICB7aXNQcm9jZXNzaW5nID8gXCJQcm9jZXNzaW5nLi4uXCIgOiBgUGF5ICQke3ByaWNlfWB9XG4gICAgICAgIDwvU3VibWl0QnV0dG9uPlxuICAgICAgPC9Sb3c+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRGb3JtO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gXCIuL3ByZWJ1aWx0L0dsb2JhbFN0eWxlc1wiO1xuXG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xuXG4vLyBMZWFybmluZ1xuLy8gVG8gYmVzdCBsZXZlcmFnZSBTdHJpcGXigJlzIGFkdmFuY2VkIGZyYXVkIGZ1bmN0aW9uYWxpdHksXG4vLyBpbmNsdWRlIHRoaXMgc2NyaXB0IG9uIGV2ZXJ5IHBhZ2UsIG5vdCBqdXN0IHRoZSBjaGVja291dCBwYWdlLlxuLy8gVGhpcyBhbGxvd3MgU3RyaXBlIHRvIGRldGVjdCBhbm9tYWxvdXMgYmVoYXZpb3IgdGhhdCBtYXkgYmUgaW5kaWNhdGl2ZVxuLy8gb2YgZnJhdWQgYXMgY3VzdG9tZXJzIGJyb3dzZSB5b3VyIHdlYnNpdGUuXG4vLyBOb3RlOiBUaGlzIGlzIHdoeSB3ZSBhcmUgYWRkaW5nIGl0IHRvIGEgTGF5b3V0IGNvbXBvbmVudC5cblxuY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuUFVCTElTSEFCTEVfS0VZKTtcblxuLy8gVElQXG4vLyBjYWxsIGxvYWRTdHJpcGUgb3V0c2lkZSBvZiBhIGNvbXBvbmVudFxuLy8gaW4gdGhhdCB3YXkgdGhlcmUncyBubyBjaGFuY2UgaXQgd2lsbCBnZXRcbi8vIGNhbGxlZCBtb3JlIHRpbWVzIHRoYW4gaXQgbmVlZHMgdG9cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlUHJvbWlzZX0+e2NoaWxkcmVufTwvRWxlbWVudHM+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgRm9ybUZpZWxkIGZyb20gXCIuL0Zvcm1GaWVsZFwiO1xuXG5jb25zdCBCaWxsaW5nRGV0YWlsc0ZpZWxkcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZvcm1GaWVsZFxuICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJKYW5lIERvZVwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPEZvcm1GaWVsZFxuICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJqYW5lLmRvZUBleGFtcGxlLmNvbVwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPEZvcm1GaWVsZFxuICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXG4gICAgICAgIGxhYmVsPVwiQWRkcmVzc1wiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCIxODUgQmVycnkgU3QuIFN1aXRlIDU1MFwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPEZvcm1GaWVsZFxuICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgIGxhYmVsPVwiQ2l0eVwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTYW4gRnJhbmNpc2NvXCJcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+XG4gICAgICA8Rm9ybUZpZWxkXG4gICAgICAgIG5hbWU9XCJzdGF0ZVwiXG4gICAgICAgIGxhYmVsPVwiU3RhdGVcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQ2FsaWZvcm5pYVwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPEZvcm1GaWVsZFxuICAgICAgICBuYW1lPVwiemlwXCJcbiAgICAgICAgbGFiZWw9XCJaSVBcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiOTQxMDNcIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJpbGxpbmdEZXRhaWxzRmllbGRzO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5jb25zdCBmYWRlID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLjk1LCAwLjk1LCAwLjk1KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gIH1cbmA7XG5cbmNvbnN0IEVycm9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IC0xMHB4IGF1dG8gMHB4IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBvcGFjaXR5OiA5MDtcbiAgYW5pbWF0aW9uOiAke2ZhZGV9IDE1MG1zIGVhc2Utb3V0O1xuICBhbmltYXRpb24tZGVsYXk6IDUwbXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcblxuICAmIHN2ZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBDaGVja291dEVycm9yID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8RXJyb3JDb250YWluZXIgcm9sZT1cImFsZXJ0XCI+XG4gICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE3IDE3XCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPVwiI0ZGRlwiXG4gICAgICAgIGQ9XCJNOC41LDE3IEMzLjgwNTU3OTYzLDE3IDAsMTMuMTk0NDIwNCAwLDguNSBDMCwzLjgwNTU3OTYzIDMuODA1NTc5NjMsMCA4LjUsMCBDMTMuMTk0NDIwNCwwIDE3LDMuODA1NTc5NjMgMTcsOC41IEMxNywxMy4xOTQ0MjA0IDEzLjE5NDQyMDQsMTcgOC41LDE3IFpcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCIjNjc3MmU1XCJcbiAgICAgICAgZD1cIk04LjUsNy4yOTc5MTg0NyBMNi4xMjYwNDA3Niw0LjkyMzk1OTI0IEM1Ljc5NDA5NTEyLDQuNTkyMDEzNTkgNS4yNTU5MDQ4OCw0LjU5MjAxMzU5IDQuOTIzOTU5MjQsNC45MjM5NTkyNCBDNC41OTIwMTM1OSw1LjI1NTkwNDg4IDQuNTkyMDEzNTksNS43OTQwOTUxMiA0LjkyMzk1OTI0LDYuMTI2MDQwNzYgTDcuMjk3OTE4NDcsOC41IEw0LjkyMzk1OTI0LDEwLjg3Mzk1OTIgQzQuNTkyMDEzNTksMTEuMjA1OTA0OSA0LjU5MjAxMzU5LDExLjc0NDA5NTEgNC45MjM5NTkyNCwxMi4wNzYwNDA4IEM1LjI1NTkwNDg4LDEyLjQwNzk4NjQgNS43OTQwOTUxMiwxMi40MDc5ODY0IDYuMTI2MDQwNzYsMTIuMDc2MDQwOCBMOC41LDkuNzAyMDgxNTMgTDEwLjg3Mzk1OTIsMTIuMDc2MDQwOCBDMTEuMjA1OTA0OSwxMi40MDc5ODY0IDExLjc0NDA5NTEsMTIuNDA3OTg2NCAxMi4wNzYwNDA4LDEyLjA3NjA0MDggQzEyLjQwNzk4NjQsMTEuNzQ0MDk1MSAxMi40MDc5ODY0LDExLjIwNTkwNDkgMTIuMDc2MDQwOCwxMC44NzM5NTkyIEw5LjcwMjA4MTUzLDguNSBMMTIuMDc2MDQwOCw2LjEyNjA0MDc2IEMxMi40MDc5ODY0LDUuNzk0MDk1MTIgMTIuNDA3OTg2NCw1LjI1NTkwNDg4IDEyLjA3NjA0MDgsNC45MjM5NTkyNCBDMTEuNzQ0MDk1MSw0LjU5MjAxMzU5IDExLjIwNTkwNDksNC41OTIwMTM1OSAxMC44NzM5NTkyLDQuOTIzOTU5MjQgTDguNSw3LjI5NzkxODQ3IEw4LjUsNy4yOTc5MTg0NyBaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICAge2NoaWxkcmVufVxuICA8L0Vycm9yQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRFcnJvcjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDgwcHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG5gO1xuXG5jb25zdCBEZWNyZW1lbnRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbmA7XG5cbmNvbnN0IEluY3JlbWVudEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG5gO1xuXG5jb25zdCBEb251dFF1YW50aXR5ID0gKHsgb25BZGQsIG9uUmVtb3ZlLCBxdWFudGl0eSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEZWNyZW1lbnRCdXR0b24gb25DbGljaz17b25SZW1vdmV9PuKAkzwvRGVjcmVtZW50QnV0dG9uPlxuICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3F1YW50aXR5fSByZWFkT25seSAvPlxuICAgICAgPEluY3JlbWVudEJ1dHRvbiBvbkNsaWNrPXtvbkFkZH0+KzwvSW5jcmVtZW50QnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9udXRRdWFudGl0eTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4vSW1hZ2VcIjtcbmltcG9ydCBEb251dFF1YW50aXR5IGZyb20gXCIuL0RvbnV0UXVhbnRpdHlcIjtcblxuXG5jb25zdCBTaG9wID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMTBweCAyMHB4IDQwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbmA7XG5cbmNvbnN0IFNob3BOYW1lID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNi40cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gO1xuXG5jb25zdCBDb250cm9scyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbmA7XG5cbmNvbnN0IERvbnV0U2hvcCA9ICh7IG9uQWRkRG9udXQsIG9uUmVtb3ZlRG9udXQsIG51bURvbnV0cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aDI+UGxheSBNYXJpbiBTZWN1cmUgUGF5bWVudCBQb3J0YWw8L2gyPlxuICAgIDxTaG9wPlxuICAgICAgPFNob3BOYW1lPjwvU2hvcE5hbWU+XG4gICAgICA8SW1hZ2UvPlxuICAgICAgPENvbnRyb2xzPlxuICAgICAgICA8RG9udXRRdWFudGl0eVxuICAgICAgICAgIG9uQWRkPXtvbkFkZERvbnV0fVxuICAgICAgICAgIG9uUmVtb3ZlPXtvblJlbW92ZURvbnV0fVxuICAgICAgICAgIHF1YW50aXR5PXtudW1Eb251dHN9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRyb2xzPlxuICAgIDwvU2hvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvbnV0U2hvcDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBGb3JtRmllbGRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgd2lkdGg6IDIwJTtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBwYWRkaW5nOiAxMXB4IDA7XG4gIGNvbG9yOiAjMDAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuYDtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDExcHggMTVweCAxMXB4IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGFuaW1hdGlvbjogMW1zIHZvaWQtYW5pbWF0aW9uLW91dDtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gIH1cbmA7XG5cbmNvbnN0IEZvcm1GaWVsZCA9ICh7IGxhYmVsLCB0eXBlLCBuYW1lLCBwbGFjZWhvbGRlciwgcmVxdWlyZWQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb3JtRmllbGRDb250YWluZXI+XG4gICAgICA8TGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvTGFiZWw+XG4gICAgICA8SW5wdXQgbmFtZT17bmFtZX0gdHlwZT17dHlwZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSByZXF1aXJlZCAvPlxuICAgIDwvRm9ybUZpZWxkQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkO1xuIiwiaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSAoKSA9PiAoXG4gIDw+XG4gICAgPEdsb2JhbFxuICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgICosXG4gICAgICAgICo6YmVmb3JlLFxuICAgICAgICAqOmFmdGVyIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIC8+XG4gICAgPEdsb2JhbFxuICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgIGlucHV0LFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAvPlxuICAgIDxHbG9iYWxcbiAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICBib2R5LFxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgLz5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNDc1cHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBib3gtc2hhZG93OiAwIDZweCA5cHggcmdiYSg1MCwgNTAsIDkzLCAwLjA2KSwgMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXG4gICAgaW5zZXQgMCAxcHggMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBSb3c7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyBcIiM3Nzk1ZjhcIiA6IFwiZ3JlZW5cIil9O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+XG4gICAgcHJvcHMuZGlzYWJsZWRcbiAgICAgID8gXCJub25lXCJcbiAgICAgIDogXCIwIDZweCA5cHggcmdiYSg1MCwgNTAsIDkzLCAwLjA2KSwgMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIGluc2V0IDAgMXB4IDAgI2ZmYjlmNjtcIn07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAwLjUgOiAxKX07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJtaXRCdXR0b247XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBSb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJlYnVpbHQvUm93XCI7XG5pbXBvcnQgRG9udXRTaG9wIGZyb20gXCIuLi9jb21wb25lbnRzL3ByZWJ1aWx0L0RvbnV0U2hvcFwiO1xuaW1wb3J0IENoZWNrb3V0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGVja291dEZvcm1cIjtcbmltcG9ydCBnZXREb251dFByaWNlIGZyb20gXCIuLi91dGlscy9nZXQtZG9udXQtcHJpY2VcIjtcblxuY29uc3QgTWFpblBhZ2UgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtudW1Eb251dHMsIHNldE51bURvbnV0c10gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCBhZGREb251dCA9ICgpID0+IHNldE51bURvbnV0cyhudW0gPT4gTWF0aC5taW4oMTIsIG51bSArIDEpKTtcbiAgY29uc3QgcmVtRG9udXQgPSAoKSA9PiBzZXROdW1Eb251dHMobnVtID0+IE1hdGgubWF4KDEsIG51bSAtIDEpKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJQbGF5IE1hcmluIERvbmF0aW9uIHBhZ2VcIj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxEb251dFNob3BcbiAgICAgICAgICBvbkFkZERvbnV0PXthZGREb251dH1cbiAgICAgICAgICBvblJlbW92ZURvbnV0PXtyZW1Eb251dH1cbiAgICAgICAgICBudW1Eb251dHM9e251bURvbnV0c31cbiAgICAgICAgLz5cbiAgICAgIDwvUm93PlxuICAgICAgPENoZWNrb3V0Rm9ybVxuICAgICAgICBwcmljZT17Z2V0RG9udXRQcmljZShudW1Eb251dHMpfVxuICAgICAgICBvblN1Y2Nlc3NmdWxDaGVja291dD17KCkgPT4gUm91dGVyLnB1c2goXCIvc3VjY2Vzc1wiKX1cbiAgICAgIC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiIsImNvbnN0IGdldERvbnV0UHJpY2UgPSBudW1Eb251dHMgPT5cbiAgKE1hdGgucm91bmQobnVtRG9udXRzICogMSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvbnV0UHJpY2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3N0cmlwZS1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==