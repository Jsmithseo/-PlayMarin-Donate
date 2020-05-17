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
      } = await stripe.paymentIntents.create({
        amount: price * 100,
        currency: "AUD",
        description: "Delicious empanadas",
        payment_method: id,
        confirm: true
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
      lineNumber: 130,
      columnNumber: 5
    }
  }, __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(_prebuilt_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  })), __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx(CardElementContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__["CardElement"], {
    options: cardElementOpts,
    onChange: handleCardDetailsChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }))), checkoutError && __jsx(_prebuilt_CheckoutError__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, checkoutError), __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, __jsx(_prebuilt_SubmitButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: isProcessing || !stripe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ByZWJ1aWx0L0JpbGxpbmdEZXRhaWxzRmllbGRzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ByZWJ1aWx0L0NoZWNrb3V0RXJyb3IuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJlYnVpbHQvRG9udXRRdWFudGl0eS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcmVidWlsdC9Eb251dFNob3AuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJlYnVpbHQvRm9ybUZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ByZWJ1aWx0L0dsb2JhbFN0eWxlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcmVidWlsdC9JbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcmVidWlsdC9Sb3cuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJlYnVpbHQvU3VibWl0QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXQtZG9udXQtcHJpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN0cmlwZS9zdHJpcGUtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJDYXJkRWxlbWVudENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkNoZWNrb3V0Rm9ybSIsInByaWNlIiwib25TdWNjZXNzZnVsQ2hlY2tvdXQiLCJpc1Byb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nVG8iLCJ1c2VTdGF0ZSIsImNoZWNrb3V0RXJyb3IiLCJzZXRDaGVja291dEVycm9yIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImhhbmRsZUNhcmREZXRhaWxzQ2hhbmdlIiwiZXYiLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJiaWxsaW5nRGV0YWlscyIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtYWlsIiwiYWRkcmVzcyIsImNpdHkiLCJsaW5lMSIsInN0YXRlIiwicG9zdGFsX2NvZGUiLCJ6aXAiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJkYXRhIiwiY2xpZW50U2VjcmV0IiwicGF5bWVudEludGVudHMiLCJjcmVhdGUiLCJhbW91bnQiLCJjdXJyZW5jeSIsImRlc2NyaXB0aW9uIiwicGF5bWVudF9tZXRob2QiLCJpZCIsImNvbmZpcm0iLCJwYXltZW50TWV0aG9kUmVxIiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiYmlsbGluZ19kZXRhaWxzIiwiY29uZmlybUNhcmRQYXltZW50IiwicGF5bWVudE1ldGhvZCIsImVyciIsImlmcmFtZVN0eWxlcyIsImJhc2UiLCJmb250U2l6ZSIsImljb25Db2xvciIsImNvbG9yIiwiaW52YWxpZCIsImNvbXBsZXRlIiwiY2FyZEVsZW1lbnRPcHRzIiwiaWNvblN0eWxlIiwic3R5bGUiLCJoaWRlUG9zdGFsQ29kZSIsInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJCaWxsaW5nRGV0YWlsc0ZpZWxkcyIsImZhZGUiLCJrZXlmcmFtZXMiLCJFcnJvckNvbnRhaW5lciIsIkNoZWNrb3V0RXJyb3IiLCJJbnB1dCIsImlucHV0IiwiQnV0dG9uIiwic3BhbiIsIkRlY3JlbWVudEJ1dHRvbiIsIkluY3JlbWVudEJ1dHRvbiIsIkRvbnV0UXVhbnRpdHkiLCJvbkFkZCIsIm9uUmVtb3ZlIiwicXVhbnRpdHkiLCJTaG9wIiwiU2hvcE5hbWUiLCJoMSIsIkNvbnRyb2xzIiwiRG9udXRTaG9wIiwib25BZGREb251dCIsIm9uUmVtb3ZlRG9udXQiLCJudW1Eb251dHMiLCJGb3JtRmllbGRDb250YWluZXIiLCJMYWJlbCIsImxhYmVsIiwiRm9ybUZpZWxkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIkdsb2JhbFN0eWxlcyIsImNzcyIsIkltYWdlIiwiaW1nIiwiUm93IiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJkaXNhYmxlZCIsIk1haW5QYWdlIiwic2V0TnVtRG9udXRzIiwiYWRkRG9udXQiLCJudW0iLCJNYXRoIiwibWluIiwicmVtRG9udXQiLCJtYXgiLCJnZXREb251dFByaWNlIiwiUm91dGVyIiwicHVzaCIsInJvdW5kIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7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QVosQ0FGOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREY7QUFlRCxDQXJCRDs7QUF1QmVWLHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBLE1BQU1RLGFBQWEsR0FBR3hCLFNBQVMsSUFDN0IsQ0FBQ29CLElBQUksQ0FBQ08sS0FBTCxDQUFXM0IsU0FBUyxHQUFHLENBQVosR0FBZ0IsR0FBM0IsSUFBa0MsR0FBbkMsRUFBd0M0QixPQUF4QyxDQUFnRCxDQUFoRCxDQURGOztBQUdlSiw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLDBDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50cyB9IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBSb3cgZnJvbSBcIi4vcHJlYnVpbHQvUm93XCI7XG5pbXBvcnQgQmlsbGluZ0RldGFpbHNGaWVsZHMgZnJvbSBcIi4vcHJlYnVpbHQvQmlsbGluZ0RldGFpbHNGaWVsZHNcIjtcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSBcIi4vcHJlYnVpbHQvU3VibWl0QnV0dG9uXCI7XG5pbXBvcnQgQ2hlY2tvdXRFcnJvciBmcm9tIFwiLi9wcmVidWlsdC9DaGVja291dEVycm9yXCI7XG5cbmNvbnN0IENhcmRFbGVtZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYgLlN0cmlwZUVsZW1lbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbmA7XG5cbmNvbnN0IENoZWNrb3V0Rm9ybSA9ICh7IHByaWNlLCBvblN1Y2Nlc3NmdWxDaGVja291dCB9KSA9PiB7XG4gIGNvbnN0IFtpc1Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmdUb10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjaGVja291dEVycm9yLCBzZXRDaGVja291dEVycm9yXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKCk7XG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcblxuICAvLyBUSVBcbiAgLy8gdXNlIHRoZSBjYXJkRWxlbWVudHMgb25DaGFuZ2UgcHJvcCB0byBhZGQgYSBoYW5kbGVyXG4gIC8vIGZvciBzZXR0aW5nIGFueSBlcnJvcnM6XG5cbiAgY29uc3QgaGFuZGxlQ2FyZERldGFpbHNDaGFuZ2UgPSBldiA9PiB7XG4gICAgZXYuZXJyb3IgPyBzZXRDaGVja291dEVycm9yKGV2LmVycm9yLm1lc3NhZ2UpIDogc2V0Q2hlY2tvdXRFcnJvcigpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyBldiA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGJpbGxpbmdEZXRhaWxzID0ge1xuICAgICAgbmFtZTogZXYudGFyZ2V0Lm5hbWUudmFsdWUsXG4gICAgICBlbWFpbDogZXYudGFyZ2V0LmVtYWlsLnZhbHVlLFxuICAgICAgYWRkcmVzczoge1xuICAgICAgICBjaXR5OiBldi50YXJnZXQuY2l0eS52YWx1ZSxcbiAgICAgICAgbGluZTE6IGV2LnRhcmdldC5hZGRyZXNzLnZhbHVlLFxuICAgICAgICBzdGF0ZTogZXYudGFyZ2V0LnN0YXRlLnZhbHVlLFxuICAgICAgICBwb3N0YWxfY29kZTogZXYudGFyZ2V0LnppcC52YWx1ZVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRQcm9jZXNzaW5nVG8odHJ1ZSk7XG5cbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGVsZW1lbnRzLmdldEVsZW1lbnQoXCJjYXJkXCIpO1xuXG4gICAgdHJ5IHtcblxuICAgICAgICBjb25zdCB7IGRhdGE6IGNsaWVudFNlY3JldCB9ID0gYXdhaXQgc3RyaXBlLnBheW1lbnRJbnRlbnRzLmNyZWF0ZSh7XG4gIGFtb3VudDogcHJpY2UgKiAxMDAsXG4gIGN1cnJlbmN5OiBcIkFVRFwiLFxuICBkZXNjcmlwdGlvbjogXCJEZWxpY2lvdXMgZW1wYW5hZGFzXCIsXG4gIHBheW1lbnRfbWV0aG9kOiBpZCxcbiAgY29uZmlybTogdHJ1ZSxcbn0pO1xuXG5cbiAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RSZXEgPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XG4gICAgICAgIHR5cGU6IFwiY2FyZFwiLFxuICAgICAgICBjYXJkOiBjYXJkRWxlbWVudCxcbiAgICAgICAgYmlsbGluZ19kZXRhaWxzOiBiaWxsaW5nRGV0YWlsc1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChwYXltZW50TWV0aG9kUmVxLmVycm9yKSB7XG4gICAgICAgIHNldENoZWNrb3V0RXJyb3IocGF5bWVudE1ldGhvZFJlcS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgc2V0UHJvY2Vzc2luZ1RvKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50KGNsaWVudFNlY3JldCwge1xuICAgICAgICBwYXltZW50X21ldGhvZDogcGF5bWVudE1ldGhvZFJlcS5wYXltZW50TWV0aG9kLmlkXG4gICAgICB9KTtcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHNldENoZWNrb3V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHNldFByb2Nlc3NpbmdUbyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgb25TdWNjZXNzZnVsQ2hlY2tvdXQoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldENoZWNrb3V0RXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gTGVhcm5pbmdcbiAgLy8gQSBjb21tb24gYXNrL2J1ZyB0aGF0IHVzZXJzIHJ1biBpbnRvIGlzOlxuICAvLyBIb3cgZG8geW91IGNoYW5nZSB0aGUgY29sb3Igb2YgdGhlIGNhcmQgZWxlbWVudCBpbnB1dCB0ZXh0P1xuICAvLyBIb3cgZG8geW91IGNoYW5nZSB0aGUgZm9udC1zaXplIG9mIHRoZSBjYXJkIGVsZW1lbnQgaW5wdXQgdGV4dD9cbiAgLy8gSG93IGRvIHlvdSBjaGFuZ2UgdGhlIHBsYWNlaG9sZGVyIGNvbG9yP1xuICAvLyBUaGUgYW5zd2VyIHRvIGFsbCBvZiB0aGUgYWJvdmUgaXMgdG8gdXNlIHRoZSBgc3R5bGVgIG9wdGlvbi5cbiAgLy8gSXQncyBjb21tb24gdG8gaGVhciB1c2VycyBjb25mdXNlZCB3aHkgdGhlIGNhcmQgZWxlbWVudCBhcHBlYXJzIGltcGVydmlvdXNcbiAgLy8gdG8gYWxsIHRoZWlyIHN0eWxlcy4gTm8gbWF0dGVyIHdoYXQgY2xhc3NlcyB0aGV5IGFkZCB0byB0aGUgcGFyZW50IGVsZW1lbnRcbiAgLy8gbm90aGluZyB3aXRoaW4gdGhlIGNhcmQgZWxlbWVudCBzZWVtcyB0byBjaGFuZ2UuIFRoZSByZWFzb24gZm9yIHRoaXMgaXMgdGhhdFxuICAvLyB0aGUgY2FyZCBlbGVtZW50IGlzIGhvdXNlZCB3aXRoaW4gYW4gaWZyYW1lIGFuZDpcbiAgLy8gPiBzdHlsZXMgZG8gbm90IGNhc2NhZGUgZnJvbSBhIHBhcmVudCB3aW5kb3cgZG93biBpbnRvIGl0cyBpZnJhbWVzXG5cbiAgY29uc3QgaWZyYW1lU3R5bGVzID0ge1xuICAgIGJhc2U6IHtcbiAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcbiAgICAgIGljb25Db2xvcjogXCIjZWZlZmVcIixcbiAgICAgIFwiOjpwbGFjZWhvbGRlclwiOiB7XG4gICAgICAgIGNvbG9yOiBcIiMwMDBcIlxuICAgICAgfVxuICAgIH0sXG4gICAgaW52YWxpZDoge1xuICAgICAgaWNvbkNvbG9yOiBcInJlZFwiLFxuICAgICAgY29sb3I6IFwicmVkXCJcbiAgICB9LFxuICAgIGNvbXBsZXRlOiB7XG4gICAgICBpY29uQ29sb3I6IFwiZ3JlZW5cIlxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjYXJkRWxlbWVudE9wdHMgPSB7XG4gICAgaWNvblN0eWxlOiBcInNvbGlkXCIsXG4gICAgc3R5bGU6IGlmcmFtZVN0eWxlcyxcbiAgICBoaWRlUG9zdGFsQ29kZTogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9PlxuICAgICAgPFJvdz5cbiAgICAgICAgPEJpbGxpbmdEZXRhaWxzRmllbGRzIC8+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDYXJkRWxlbWVudENvbnRhaW5lcj5cbiAgICAgICAgICA8Q2FyZEVsZW1lbnRcbiAgICAgICAgICAgIG9wdGlvbnM9e2NhcmRFbGVtZW50T3B0c31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDYXJkRGV0YWlsc0NoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NhcmRFbGVtZW50Q29udGFpbmVyPlxuICAgICAgPC9Sb3c+XG4gICAgICB7Y2hlY2tvdXRFcnJvciAmJiA8Q2hlY2tvdXRFcnJvcj57Y2hlY2tvdXRFcnJvcn08L0NoZWNrb3V0RXJyb3I+fVxuICAgICAgPFJvdz5cbiAgICAgICAgey8qIFRJUCBhbHdheXMgZGlzYWJsZSB5b3VyIHN1Ym1pdCBidXR0b24gd2hpbGUgcHJvY2Vzc2luZyBwYXltZW50cyAqL31cbiAgICAgICAgPFN1Ym1pdEJ1dHRvbiBkaXNhYmxlZD17aXNQcm9jZXNzaW5nIHx8ICFzdHJpcGV9PlxuICAgICAgICAgIHtpc1Byb2Nlc3NpbmcgPyBcIlByb2Nlc3NpbmcuLi5cIiA6IGBQYXkgJCR7cHJpY2V9YH1cbiAgICAgICAgPC9TdWJtaXRCdXR0b24+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja291dEZvcm07XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSBcIi4vcHJlYnVpbHQvR2xvYmFsU3R5bGVzXCI7XG5cbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XG5cbi8vIExlYXJuaW5nXG4vLyBUbyBiZXN0IGxldmVyYWdlIFN0cmlwZeKAmXMgYWR2YW5jZWQgZnJhdWQgZnVuY3Rpb25hbGl0eSxcbi8vIGluY2x1ZGUgdGhpcyBzY3JpcHQgb24gZXZlcnkgcGFnZSwgbm90IGp1c3QgdGhlIGNoZWNrb3V0IHBhZ2UuXG4vLyBUaGlzIGFsbG93cyBTdHJpcGUgdG8gZGV0ZWN0IGFub21hbG91cyBiZWhhdmlvciB0aGF0IG1heSBiZSBpbmRpY2F0aXZlXG4vLyBvZiBmcmF1ZCBhcyBjdXN0b21lcnMgYnJvd3NlIHlvdXIgd2Vic2l0ZS5cbi8vIE5vdGU6IFRoaXMgaXMgd2h5IHdlIGFyZSBhZGRpbmcgaXQgdG8gYSBMYXlvdXQgY29tcG9uZW50LlxuXG5jb25zdCBzdHJpcGVQcm9taXNlID0gbG9hZFN0cmlwZShwcm9jZXNzLmVudi5QVUJMSVNIQUJMRV9LRVkpO1xuXG4vLyBUSVBcbi8vIGNhbGwgbG9hZFN0cmlwZSBvdXRzaWRlIG9mIGEgY29tcG9uZW50XG4vLyBpbiB0aGF0IHdheSB0aGVyZSdzIG5vIGNoYW5jZSBpdCB3aWxsIGdldFxuLy8gY2FsbGVkIG1vcmUgdGltZXMgdGhhbiBpdCBuZWVkcyB0b1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVQcm9taXNlfT57Y2hpbGRyZW59PC9FbGVtZW50cz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBGb3JtRmllbGQgZnJvbSBcIi4vRm9ybUZpZWxkXCI7XG5cbmNvbnN0IEJpbGxpbmdEZXRhaWxzRmllbGRzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybUZpZWxkXG4gICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkphbmUgRG9lXCJcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+XG4gICAgICA8Rm9ybUZpZWxkXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cImphbmUuZG9lQGV4YW1wbGUuY29tXCJcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+XG4gICAgICA8Rm9ybUZpZWxkXG4gICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgbGFiZWw9XCJBZGRyZXNzXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIjE4NSBCZXJyeSBTdC4gU3VpdGUgNTUwXCJcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+XG4gICAgICA8Rm9ybUZpZWxkXG4gICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgbGFiZWw9XCJDaXR5XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNhbiBGcmFuY2lzY29cIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgbmFtZT1cInN0YXRlXCJcbiAgICAgICAgbGFiZWw9XCJTdGF0ZVwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDYWxpZm9ybmlhXCJcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+XG4gICAgICA8Rm9ybUZpZWxkXG4gICAgICAgIG5hbWU9XCJ6aXBcIlxuICAgICAgICBsYWJlbD1cIlpJUFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCI5NDEwM1wiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmlsbGluZ0RldGFpbHNGaWVsZHM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmNvbnN0IGZhZGUgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNEKDAuOTUsIDAuOTUsIDAuOTUpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgfVxuYDtcblxuY29uc3QgRXJyb3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogLTEwcHggYXV0byAwcHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIG9wYWNpdHk6IDkwO1xuICBhbmltYXRpb246ICR7ZmFkZX0gMTUwbXMgZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbi1kZWxheTogNTBtcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuXG4gICYgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IENoZWNrb3V0RXJyb3IgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxFcnJvckNvbnRhaW5lciByb2xlPVwiYWxlcnRcIj5cbiAgICA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTcgMTdcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCIjRkZGXCJcbiAgICAgICAgZD1cIk04LjUsMTcgQzMuODA1NTc5NjMsMTcgMCwxMy4xOTQ0MjA0IDAsOC41IEMwLDMuODA1NTc5NjMgMy44MDU1Nzk2MywwIDguNSwwIEMxMy4xOTQ0MjA0LDAgMTcsMy44MDU1Nzk2MyAxNyw4LjUgQzE3LDEzLjE5NDQyMDQgMTMuMTk0NDIwNCwxNyA4LjUsMTcgWlwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD1cIiM2NzcyZTVcIlxuICAgICAgICBkPVwiTTguNSw3LjI5NzkxODQ3IEw2LjEyNjA0MDc2LDQuOTIzOTU5MjQgQzUuNzk0MDk1MTIsNC41OTIwMTM1OSA1LjI1NTkwNDg4LDQuNTkyMDEzNTkgNC45MjM5NTkyNCw0LjkyMzk1OTI0IEM0LjU5MjAxMzU5LDUuMjU1OTA0ODggNC41OTIwMTM1OSw1Ljc5NDA5NTEyIDQuOTIzOTU5MjQsNi4xMjYwNDA3NiBMNy4yOTc5MTg0Nyw4LjUgTDQuOTIzOTU5MjQsMTAuODczOTU5MiBDNC41OTIwMTM1OSwxMS4yMDU5MDQ5IDQuNTkyMDEzNTksMTEuNzQ0MDk1MSA0LjkyMzk1OTI0LDEyLjA3NjA0MDggQzUuMjU1OTA0ODgsMTIuNDA3OTg2NCA1Ljc5NDA5NTEyLDEyLjQwNzk4NjQgNi4xMjYwNDA3NiwxMi4wNzYwNDA4IEw4LjUsOS43MDIwODE1MyBMMTAuODczOTU5MiwxMi4wNzYwNDA4IEMxMS4yMDU5MDQ5LDEyLjQwNzk4NjQgMTEuNzQ0MDk1MSwxMi40MDc5ODY0IDEyLjA3NjA0MDgsMTIuMDc2MDQwOCBDMTIuNDA3OTg2NCwxMS43NDQwOTUxIDEyLjQwNzk4NjQsMTEuMjA1OTA0OSAxMi4wNzYwNDA4LDEwLjg3Mzk1OTIgTDkuNzAyMDgxNTMsOC41IEwxMi4wNzYwNDA4LDYuMTI2MDQwNzYgQzEyLjQwNzk4NjQsNS43OTQwOTUxMiAxMi40MDc5ODY0LDUuMjU1OTA0ODggMTIuMDc2MDQwOCw0LjkyMzk1OTI0IEMxMS43NDQwOTUxLDQuNTkyMDEzNTkgMTEuMjA1OTA0OSw0LjU5MjAxMzU5IDEwLjg3Mzk1OTIsNC45MjM5NTkyNCBMOC41LDcuMjk3OTE4NDcgTDguNSw3LjI5NzkxODQ3IFpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgICB7Y2hpbGRyZW59XG4gIDwvRXJyb3JDb250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja291dEVycm9yO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogODBweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbmA7XG5cbmNvbnN0IERlY3JlbWVudEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuYDtcblxuY29uc3QgSW5jcmVtZW50QnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbmA7XG5cbmNvbnN0IERvbnV0UXVhbnRpdHkgPSAoeyBvbkFkZCwgb25SZW1vdmUsIHF1YW50aXR5IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERlY3JlbWVudEJ1dHRvbiBvbkNsaWNrPXtvblJlbW92ZX0+4oCTPC9EZWNyZW1lbnRCdXR0b24+XG4gICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cXVhbnRpdHl9IHJlYWRPbmx5IC8+XG4gICAgICA8SW5jcmVtZW50QnV0dG9uIG9uQ2xpY2s9e29uQWRkfT4rPC9JbmNyZW1lbnRCdXR0b24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb251dFF1YW50aXR5O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9JbWFnZVwiO1xuaW1wb3J0IERvbnV0UXVhbnRpdHkgZnJvbSBcIi4vRG9udXRRdWFudGl0eVwiO1xuXG5cbmNvbnN0IFNob3AgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMHB4IDIwcHggNDBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuYDtcblxuY29uc3QgU2hvcE5hbWUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI2LjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmA7XG5cbmNvbnN0IENvbnRyb2xzID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuYDtcblxuY29uc3QgRG9udXRTaG9wID0gKHsgb25BZGREb251dCwgb25SZW1vdmVEb251dCwgbnVtRG9udXRzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxoMj5QbGF5IE1hcmluIFNlY3VyZSBQYXltZW50IFBvcnRhbDwvaDI+XG4gICAgPFNob3A+XG4gICAgICA8U2hvcE5hbWU+PC9TaG9wTmFtZT5cbiAgICAgIDxJbWFnZS8+XG4gICAgICA8Q29udHJvbHM+XG4gICAgICAgIDxEb251dFF1YW50aXR5XG4gICAgICAgICAgb25BZGQ9e29uQWRkRG9udXR9XG4gICAgICAgICAgb25SZW1vdmU9e29uUmVtb3ZlRG9udXR9XG4gICAgICAgICAgcXVhbnRpdHk9e251bURvbnV0c31cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udHJvbHM+XG4gICAgPC9TaG9wPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9udXRTaG9wO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IEZvcm1GaWVsZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTVweDtcblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICB3aWR0aDogMjAlO1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIHBhZGRpbmc6IDExcHggMDtcbiAgY29sb3I6ICMwMDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5gO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTFweCAxNXB4IDExcHggOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uOiAxbXMgdm9pZC1hbmltYXRpb24tb3V0O1xuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgfVxuYDtcblxuY29uc3QgRm9ybUZpZWxkID0gKHsgbGFiZWwsIHR5cGUsIG5hbWUsIHBsYWNlaG9sZGVyLCByZXF1aXJlZCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZvcm1GaWVsZENvbnRhaW5lcj5cbiAgICAgIDxMYWJlbCBodG1sRm9yPXtuYW1lfT57bGFiZWx9PC9MYWJlbD5cbiAgICAgIDxJbnB1dCBuYW1lPXtuYW1lfSB0eXBlPXt0eXBlfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IHJlcXVpcmVkIC8+XG4gICAgPC9Gb3JtRmllbGRDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGQ7XG4iLCJpbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9ICgpID0+IChcbiAgPD5cbiAgICA8R2xvYmFsXG4gICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgKixcbiAgICAgICAgKjpiZWZvcmUsXG4gICAgICAgICo6YWZ0ZXIge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgLz5cbiAgICA8R2xvYmFsXG4gICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIC8+XG4gICAgPEdsb2JhbFxuICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgIGJvZHksXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAvPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlcztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA0NzVweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNnB4IDlweCByZ2JhKDUwLCA1MCwgOTMsIDAuMDYpLCAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA4KSxcbiAgICBpbnNldCAwIDFweCAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFJvdztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IFwiIzc3OTVmOFwiIDogXCJncmVlblwiKX07XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5kaXNhYmxlZFxuICAgICAgPyBcIm5vbmVcIlxuICAgICAgOiBcIjAgNnB4IDlweCByZ2JhKDUwLCA1MCwgOTMsIDAuMDYpLCAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgaW5zZXQgMCAxcHggMCAjZmZiOWY2O1wifTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IDAuNSA6IDEpfTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFN1Ym1pdEJ1dHRvbjtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmVidWlsdC9Sb3dcIjtcbmltcG9ydCBEb251dFNob3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJlYnVpbHQvRG9udXRTaG9wXCI7XG5pbXBvcnQgQ2hlY2tvdXRGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0NoZWNrb3V0Rm9ybVwiO1xuaW1wb3J0IGdldERvbnV0UHJpY2UgZnJvbSBcIi4uL3V0aWxzL2dldC1kb251dC1wcmljZVwiO1xuXG5jb25zdCBNYWluUGFnZSA9IHByb3BzID0+IHtcbiAgY29uc3QgW251bURvbnV0cywgc2V0TnVtRG9udXRzXSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IGFkZERvbnV0ID0gKCkgPT4gc2V0TnVtRG9udXRzKG51bSA9PiBNYXRoLm1pbigxMiwgbnVtICsgMSkpO1xuICBjb25zdCByZW1Eb251dCA9ICgpID0+IHNldE51bURvbnV0cyhudW0gPT4gTWF0aC5tYXgoMSwgbnVtIC0gMSkpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIlBsYXkgTWFyaW4gRG9uYXRpb24gcGFnZVwiPlxuICAgICAgPFJvdz5cbiAgICAgICAgPERvbnV0U2hvcFxuICAgICAgICAgIG9uQWRkRG9udXQ9e2FkZERvbnV0fVxuICAgICAgICAgIG9uUmVtb3ZlRG9udXQ9e3JlbURvbnV0fVxuICAgICAgICAgIG51bURvbnV0cz17bnVtRG9udXRzfVxuICAgICAgICAvPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Q2hlY2tvdXRGb3JtXG4gICAgICAgIHByaWNlPXtnZXREb251dFByaWNlKG51bURvbnV0cyl9XG4gICAgICAgIG9uU3VjY2Vzc2Z1bENoZWNrb3V0PXsoKSA9PiBSb3V0ZXIucHVzaChcIi9zdWNjZXNzXCIpfVxuICAgICAgLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIiwiY29uc3QgZ2V0RG9udXRQcmljZSA9IG51bURvbnV0cyA9PlxuICAoTWF0aC5yb3VuZChudW1Eb251dHMgKiAxICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9udXRQcmljZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vc3R5bGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvc3RyaXBlLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9