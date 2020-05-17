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
      } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/payment_intents", {
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
      lineNumber: 124,
      columnNumber: 5
    }
  }, __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx(_prebuilt_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  })), __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx(CardElementContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__["CardElement"], {
    options: cardElementOpts,
    onChange: handleCardDetailsChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }))), checkoutError && __jsx(_prebuilt_CheckoutError__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, checkoutError), __jsx(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, __jsx(_prebuilt_SubmitButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: isProcessing || !stripe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ByZWJ1aWx0L0JpbGxpbmdEZXRhaWxzRmllbGRzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ByZWJ1aWx0L0NoZWNrb3V0RXJyb3IuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJlYnVpbHQvRG9udXRRdWFudGl0eS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcmVidWlsdC9Eb251dFNob3AuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJlYnVpbHQvRm9ybUZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ByZWJ1aWx0L0dsb2JhbFN0eWxlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcmVidWlsdC9JbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcmVidWlsdC9Sb3cuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJlYnVpbHQvU3VibWl0QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXQtZG9udXQtcHJpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN0cmlwZS9zdHJpcGUtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJDYXJkRWxlbWVudENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkNoZWNrb3V0Rm9ybSIsInByaWNlIiwib25TdWNjZXNzZnVsQ2hlY2tvdXQiLCJpc1Byb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nVG8iLCJ1c2VTdGF0ZSIsImNoZWNrb3V0RXJyb3IiLCJzZXRDaGVja291dEVycm9yIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImhhbmRsZUNhcmREZXRhaWxzQ2hhbmdlIiwiZXYiLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJiaWxsaW5nRGV0YWlscyIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtYWlsIiwiYWRkcmVzcyIsImNpdHkiLCJsaW5lMSIsInN0YXRlIiwicG9zdGFsX2NvZGUiLCJ6aXAiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJkYXRhIiwiY2xpZW50U2VjcmV0IiwiQXhpb3MiLCJwb3N0IiwiYW1vdW50IiwicGF5bWVudE1ldGhvZFJlcSIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImJpbGxpbmdfZGV0YWlscyIsImNvbmZpcm1DYXJkUGF5bWVudCIsInBheW1lbnRfbWV0aG9kIiwicGF5bWVudE1ldGhvZCIsImlkIiwiZXJyIiwiaWZyYW1lU3R5bGVzIiwiYmFzZSIsImZvbnRTaXplIiwiaWNvbkNvbG9yIiwiY29sb3IiLCJpbnZhbGlkIiwiY29tcGxldGUiLCJjYXJkRWxlbWVudE9wdHMiLCJpY29uU3R5bGUiLCJzdHlsZSIsImhpZGVQb3N0YWxDb2RlIiwic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsIkJpbGxpbmdEZXRhaWxzRmllbGRzIiwiZmFkZSIsImtleWZyYW1lcyIsIkVycm9yQ29udGFpbmVyIiwiQ2hlY2tvdXRFcnJvciIsIklucHV0IiwiaW5wdXQiLCJCdXR0b24iLCJzcGFuIiwiRGVjcmVtZW50QnV0dG9uIiwiSW5jcmVtZW50QnV0dG9uIiwiRG9udXRRdWFudGl0eSIsIm9uQWRkIiwib25SZW1vdmUiLCJxdWFudGl0eSIsIlNob3AiLCJTaG9wTmFtZSIsImgxIiwiQ29udHJvbHMiLCJEb251dFNob3AiLCJvbkFkZERvbnV0Iiwib25SZW1vdmVEb251dCIsIm51bURvbnV0cyIsIkZvcm1GaWVsZENvbnRhaW5lciIsIkxhYmVsIiwibGFiZWwiLCJGb3JtRmllbGQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiR2xvYmFsU3R5bGVzIiwiY3NzIiwiSW1hZ2UiLCJpbWciLCJSb3ciLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJwcm9wcyIsImRpc2FibGVkIiwiTWFpblBhZ2UiLCJzZXROdW1Eb251dHMiLCJhZGREb251dCIsIm51bSIsIk1hdGgiLCJtaW4iLCJyZW1Eb251dCIsIm1heCIsImdldERvbnV0UHJpY2UiLCJSb3V0ZXIiLCJwdXNoIiwicm91bmQiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsb0JBQW9CLEdBQUdDLHNEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7OztDQUF4Qzs7QUFXQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxLQUFxQztBQUN4RCxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQUMsS0FBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DRixzREFBUSxFQUFsRDtBQUVBLFFBQU1HLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLDJFQUFXLEVBQTVCLENBTHdELENBT3hEO0FBQ0E7QUFDQTs7QUFFQSxRQUFNQyx1QkFBdUIsR0FBR0MsRUFBRSxJQUFJO0FBQ3BDQSxNQUFFLENBQUNDLEtBQUgsR0FBV1AsZ0JBQWdCLENBQUNNLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxPQUFWLENBQTNCLEdBQWdEUixnQkFBZ0IsRUFBaEU7QUFDRCxHQUZEOztBQUlBLFFBQU1TLGdCQUFnQixHQUFHLE1BQU1ILEVBQU4sSUFBWTtBQUNuQ0EsTUFBRSxDQUFDSSxjQUFIO0FBRUEsVUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxVQUFJLEVBQUVOLEVBQUUsQ0FBQ08sTUFBSCxDQUFVRCxJQUFWLENBQWVFLEtBREE7QUFFckJDLFdBQUssRUFBRVQsRUFBRSxDQUFDTyxNQUFILENBQVVFLEtBQVYsQ0FBZ0JELEtBRkY7QUFHckJFLGFBQU8sRUFBRTtBQUNQQyxZQUFJLEVBQUVYLEVBQUUsQ0FBQ08sTUFBSCxDQUFVSSxJQUFWLENBQWVILEtBRGQ7QUFFUEksYUFBSyxFQUFFWixFQUFFLENBQUNPLE1BQUgsQ0FBVUcsT0FBVixDQUFrQkYsS0FGbEI7QUFHUEssYUFBSyxFQUFFYixFQUFFLENBQUNPLE1BQUgsQ0FBVU0sS0FBVixDQUFnQkwsS0FIaEI7QUFJUE0sbUJBQVcsRUFBRWQsRUFBRSxDQUFDTyxNQUFILENBQVVRLEdBQVYsQ0FBY1A7QUFKcEI7QUFIWSxLQUF2QjtBQVdBakIsbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFFQSxVQUFNeUIsV0FBVyxHQUFHbkIsUUFBUSxDQUFDb0IsVUFBVCxDQUFvQixNQUFwQixDQUFwQjs7QUFFQSxRQUFJO0FBQ0YsWUFBTTtBQUFFQyxZQUFJLEVBQUVDO0FBQVIsVUFBeUIsTUFBTUMsNENBQUssQ0FBQ0MsSUFBTixDQUFXLHNCQUFYLEVBQW1DO0FBQ3RFQyxjQUFNLEVBQUVsQyxLQUFLLEdBQUc7QUFEc0QsT0FBbkMsQ0FBckM7QUFJQSxZQUFNbUMsZ0JBQWdCLEdBQUcsTUFBTTVCLE1BQU0sQ0FBQzZCLG1CQUFQLENBQTJCO0FBQ3hEQyxZQUFJLEVBQUUsTUFEa0Q7QUFFeERDLFlBQUksRUFBRVYsV0FGa0Q7QUFHeERXLHVCQUFlLEVBQUV0QjtBQUh1QyxPQUEzQixDQUEvQjs7QUFNQSxVQUFJa0IsZ0JBQWdCLENBQUN0QixLQUFyQixFQUE0QjtBQUMxQlAsd0JBQWdCLENBQUM2QixnQkFBZ0IsQ0FBQ3RCLEtBQWpCLENBQXVCQyxPQUF4QixDQUFoQjtBQUNBWCx1QkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBO0FBQ0Q7O0FBRUQsWUFBTTtBQUFFVTtBQUFGLFVBQVksTUFBTU4sTUFBTSxDQUFDaUMsa0JBQVAsQ0FBMEJULFlBQTFCLEVBQXdDO0FBQzlEVSxzQkFBYyxFQUFFTixnQkFBZ0IsQ0FBQ08sYUFBakIsQ0FBK0JDO0FBRGUsT0FBeEMsQ0FBeEI7O0FBSUEsVUFBSTlCLEtBQUosRUFBVztBQUNUUCx3QkFBZ0IsQ0FBQ08sS0FBSyxDQUFDQyxPQUFQLENBQWhCO0FBQ0FYLHVCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0E7QUFDRDs7QUFFREYsMEJBQW9CO0FBQ3JCLEtBNUJELENBNEJFLE9BQU8yQyxHQUFQLEVBQVk7QUFDWnRDLHNCQUFnQixDQUFDc0MsR0FBRCxDQUFoQjtBQUNEO0FBQ0YsR0FqREQsQ0Fmd0QsQ0FrRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFFBQU1DLFlBQVksR0FBRztBQUNuQkMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxNQUROO0FBRUpDLGVBQVMsRUFBRSxRQUZQO0FBR0osdUJBQWlCO0FBQ2ZDLGFBQUssRUFBRTtBQURRO0FBSGIsS0FEYTtBQVFuQkMsV0FBTyxFQUFFO0FBQ1BGLGVBQVMsRUFBRSxLQURKO0FBRVBDLFdBQUssRUFBRTtBQUZBLEtBUlU7QUFZbkJFLFlBQVEsRUFBRTtBQUNSSCxlQUFTLEVBQUU7QUFESDtBQVpTLEdBQXJCO0FBaUJBLFFBQU1JLGVBQWUsR0FBRztBQUN0QkMsYUFBUyxFQUFFLE9BRFc7QUFFdEJDLFNBQUssRUFBRVQsWUFGZTtBQUd0QlUsa0JBQWMsRUFBRTtBQUhNLEdBQXhCO0FBTUEsU0FDRTtBQUFNLFlBQVEsRUFBRXhDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFDRSxXQUFPLEVBQUVxQyxlQURYO0FBRUUsWUFBUSxFQUFFekMsdUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FKRixFQVlHTixhQUFhLElBQUksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdCQSxhQUFoQixDQVpwQixFQWFFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsOERBQUQ7QUFBYyxZQUFRLEVBQUVILFlBQVksSUFBSSxDQUFDSyxNQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLFlBQVksR0FBRyxlQUFILEdBQXNCLFFBQU9GLEtBQU0sRUFEbEQsQ0FGRixDQWJGLENBREY7QUFzQkQsQ0EzSEQ7O0FBNkhlRCwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSkE7QUFDQTtBQUNBO0FBRUE7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTXlELGFBQWEsR0FBR0Msb0VBQVUsQ0FBQ0MsNENBQUQsQ0FBaEMsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFELEtBQXlCO0FBQ3RDLFNBQ0UsbUVBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLEtBQVIsQ0FERixFQUVFO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQUZGLEVBT0UsTUFBQyxnRUFBRDtBQUFVLFVBQU0sRUFBRUwsYUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ0ksUUFBbEMsQ0FQRixDQURGO0FBV0QsQ0FaRDs7QUFjZUQscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTs7QUFFQSxNQUFNRyxvQkFBb0IsR0FBRyxNQUFNO0FBQ2pDLFNBQ0UsbUVBQ0UsTUFBQyxrREFBRDtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsU0FBSyxFQUFDLE1BRlI7QUFHRSxRQUFJLEVBQUMsTUFIUDtBQUlFLGVBQVcsRUFBQyxVQUpkO0FBS0UsWUFBUSxNQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFLE1BQUMsa0RBQUQ7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFNBQUssRUFBQyxPQUZSO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxlQUFXLEVBQUMsc0JBSmQ7QUFLRSxZQUFRLE1BTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBZUUsTUFBQyxrREFBRDtBQUNFLFFBQUksRUFBQyxTQURQO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxRQUFJLEVBQUMsTUFIUDtBQUlFLGVBQVcsRUFBQyx5QkFKZDtBQUtFLFlBQVEsTUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsRUFzQkUsTUFBQyxrREFBRDtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsU0FBSyxFQUFDLE1BRlI7QUFHRSxRQUFJLEVBQUMsTUFIUDtBQUlFLGVBQVcsRUFBQyxlQUpkO0FBS0UsWUFBUSxNQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkYsRUE2QkUsTUFBQyxrREFBRDtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsU0FBSyxFQUFDLE9BRlI7QUFHRSxRQUFJLEVBQUMsTUFIUDtBQUlFLGVBQVcsRUFBQyxZQUpkO0FBS0UsWUFBUSxNQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkYsRUFvQ0UsTUFBQyxrREFBRDtBQUNFLFFBQUksRUFBQyxLQURQO0FBRUUsU0FBSyxFQUFDLEtBRlI7QUFHRSxRQUFJLEVBQUMsTUFIUDtBQUlFLGVBQVcsRUFBQyxPQUpkO0FBS0UsWUFBUSxNQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQ0YsQ0FERjtBQThDRCxDQS9DRDs7QUFpRGVBLG1GQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUVBLE1BQU1DLElBQUksR0FBR0MsdURBQVU7Ozs7Ozs7OztDQUF2QjtBQVdBLE1BQU1DLGNBQWMsR0FBR3BFLHNEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7OztlQVNuQmlFLElBQUs7Ozs7Ozs7O0NBVHBCOztBQW1CQSxNQUFNRyxhQUFhLEdBQUcsQ0FBQztBQUFFTjtBQUFGLENBQUQsS0FDcEIsTUFBQyxjQUFEO0FBQWdCLE1BQUksRUFBQyxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxPQUFLLEVBQUMsSUFBWDtBQUFnQixRQUFNLEVBQUMsSUFBdkI7QUFBNEIsU0FBTyxFQUFDLFdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUNFLE1BQUksRUFBQyxNQURQO0FBRUUsR0FBQyxFQUFDLHFKQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUtFO0FBQ0UsTUFBSSxFQUFDLFNBRFA7QUFFRSxHQUFDLEVBQUMsdXRCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFMRixDQURGLEVBV0dBLFFBWEgsQ0FERjs7QUFnQmVNLDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBRUEsTUFBTUMsS0FBSyxHQUFHdEUsc0RBQU0sQ0FBQ3VFLEtBQU07Ozs7Ozs7Ozs7O0NBQTNCO0FBYUEsTUFBTUMsTUFBTSxHQUFHeEUsc0RBQU0sQ0FBQ3lFLElBQUs7Ozs7Ozs7Ozs7Q0FBM0I7QUFZQSxNQUFNQyxlQUFlLEdBQUcxRSxzREFBTSxDQUFDd0UsTUFBRCxDQUFTOzs7Q0FBdkM7QUFLQSxNQUFNRyxlQUFlLEdBQUczRSxzREFBTSxDQUFDd0UsTUFBRCxDQUFTOzs7Q0FBdkM7O0FBS0EsTUFBTUksYUFBYSxHQUFHLENBQUM7QUFBRUMsT0FBRjtBQUFTQyxVQUFUO0FBQW1CQztBQUFuQixDQUFELEtBQW1DO0FBQ3ZELFNBQ0UsbUVBQ0UsTUFBQyxlQUFEO0FBQWlCLFdBQU8sRUFBRUQsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUUsTUFBQyxLQUFEO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxFQUFFQyxRQUExQjtBQUFvQyxZQUFRLE1BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsZUFBRDtBQUFpQixXQUFPLEVBQUVGLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FIRixDQURGO0FBT0QsQ0FSRDs7QUFVZUQsNEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUVBO0FBQ0E7QUFHQSxNQUFNSSxJQUFJLEdBQUdoRixzREFBTSxDQUFDQyxHQUFJOzs7Q0FBeEI7QUFLQSxNQUFNZ0YsUUFBUSxHQUFHakYsc0RBQU0sQ0FBQ2tGLEVBQUc7Ozs7Ozs7Q0FBM0I7QUFTQSxNQUFNQyxRQUFRLEdBQUduRixzREFBTSxDQUFDQyxHQUFJOzs7OztDQUE1Qjs7QUFPQSxNQUFNbUYsU0FBUyxHQUFHLENBQUM7QUFBRUMsWUFBRjtBQUFjQyxlQUFkO0FBQTZCQztBQUE3QixDQUFELEtBQThDO0FBQzlELFNBQ0UsbUVBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FEQSxFQUVBLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0UsU0FBSyxFQUFFRixVQURUO0FBRUUsWUFBUSxFQUFFQyxhQUZaO0FBR0UsWUFBUSxFQUFFQyxTQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUhGLENBRkEsQ0FERjtBQWdCRCxDQWpCRDs7QUFtQmVILHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBRUEsTUFBTUksa0JBQWtCLEdBQUd4RixzREFBTSxDQUFDQyxHQUFJOzs7Ozs7Ozs7O0NBQXRDO0FBWUEsTUFBTXdGLEtBQUssR0FBR3pGLHNEQUFNLENBQUMwRixLQUFNOzs7Ozs7Ozs7Q0FBM0I7QUFXQSxNQUFNcEIsS0FBSyxHQUFHdEUsc0RBQU0sQ0FBQ3VFLEtBQU07Ozs7Ozs7OztDQUEzQjs7QUFXQSxNQUFNb0IsU0FBUyxHQUFHLENBQUM7QUFBRUQsT0FBRjtBQUFTbEQsTUFBVDtBQUFlbkIsTUFBZjtBQUFxQnVFLGFBQXJCO0FBQWtDQztBQUFsQyxDQUFELEtBQWtEO0FBQ2xFLFNBQ0UsTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFeEUsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QnFFLEtBQXZCLENBREYsRUFFRSxNQUFDLEtBQUQ7QUFBTyxRQUFJLEVBQUVyRSxJQUFiO0FBQW1CLFFBQUksRUFBRW1CLElBQXpCO0FBQStCLGVBQVcsRUFBRW9ELFdBQTVDO0FBQXlELFlBQVEsTUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQVBEOztBQVNlRCx3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTs7QUFFQSxNQUFNRyxZQUFZLEdBQUcsTUFDbkIsbUVBQ0UsTUFBQyxvREFBRDtBQUNFLFFBQU0sRUFBRUMsaURBQUk7Ozs7OztPQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQVVFLE1BQUMsb0RBQUQ7QUFDRSxRQUFNLEVBQUVBLGlEQUFJOzs7Ozs7Ozs7T0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVkYsRUFzQkUsTUFBQyxvREFBRDtBQUNFLFFBQU0sRUFBRUEsaURBQUk7Ozs7Ozs7O09BRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXRCRixDQURGOztBQXFDZUQsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUUsS0FBSyxHQUFHaEcsc0RBQU0sQ0FBQ2lHLEdBQUk7OztDQUF6QjtBQUtlRCxvRUFBZixFOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1FLEdBQUcsR0FBR2xHLHNEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Q0FBdkI7QUFTZWlHLGtFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUMsWUFBWSxHQUFHbkcsc0RBQU0sQ0FBQ29HLE1BQU87Ozs7O3NCQUtiQyxLQUFLLElBQUtBLEtBQUssQ0FBQ0MsUUFBTixHQUFpQixTQUFqQixHQUE2QixPQUFTO2dCQUN0REQsS0FBSyxJQUNqQkEsS0FBSyxDQUFDQyxRQUFOLEdBQ0ksTUFESixHQUVJLHlGQUEwRjs7YUFFckZELEtBQUssSUFBS0EsS0FBSyxDQUFDQyxRQUFOLEdBQWlCLEdBQWpCLEdBQXVCLENBQUc7Ozs7Q0FYakQ7QUFpQmVILDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUksUUFBUSxHQUFHRixLQUFLLElBQUk7QUFDeEIsUUFBTTtBQUFBLE9BQUNkLFNBQUQ7QUFBQSxPQUFZaUI7QUFBWixNQUE0QmpHLHNEQUFRLENBQUMsQ0FBRCxDQUExQzs7QUFFQSxRQUFNa0csUUFBUSxHQUFHLE1BQU1ELFlBQVksQ0FBQ0UsR0FBRyxJQUFJQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxFQUFULEVBQWFGLEdBQUcsR0FBRyxDQUFuQixDQUFSLENBQW5DOztBQUNBLFFBQU1HLFFBQVEsR0FBRyxNQUFNTCxZQUFZLENBQUNFLEdBQUcsSUFBSUMsSUFBSSxDQUFDRyxHQUFMLENBQVMsQ0FBVCxFQUFZSixHQUFHLEdBQUcsQ0FBbEIsQ0FBUixDQUFuQzs7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUMsMEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0VBQUQ7QUFDRSxjQUFVLEVBQUVELFFBRGQ7QUFFRSxpQkFBYSxFQUFFSSxRQUZqQjtBQUdFLGFBQVMsRUFBRXRCLFNBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFRRSxNQUFDLGdFQUFEO0FBQ0UsU0FBSyxFQUFFd0Isc0VBQWEsQ0FBQ3hCLFNBQUQsQ0FEdEI7QUFFRSx3QkFBb0IsRUFBRSxNQUFNeUIsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFVBQVosQ0FGOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREY7QUFlRCxDQXJCRDs7QUF1QmVWLHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBLE1BQU1RLGFBQWEsR0FBR3hCLFNBQVMsSUFDN0IsQ0FBQ29CLElBQUksQ0FBQ08sS0FBTCxDQUFXM0IsU0FBUyxHQUFHLENBQVosR0FBZ0IsR0FBM0IsSUFBa0MsR0FBbkMsRUFBd0M0QixPQUF4QyxDQUFnRCxDQUFoRCxDQURGOztBQUdlSiw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLDBDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50cyB9IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBSb3cgZnJvbSBcIi4vcHJlYnVpbHQvUm93XCI7XG5pbXBvcnQgQmlsbGluZ0RldGFpbHNGaWVsZHMgZnJvbSBcIi4vcHJlYnVpbHQvQmlsbGluZ0RldGFpbHNGaWVsZHNcIjtcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSBcIi4vcHJlYnVpbHQvU3VibWl0QnV0dG9uXCI7XG5pbXBvcnQgQ2hlY2tvdXRFcnJvciBmcm9tIFwiLi9wcmVidWlsdC9DaGVja291dEVycm9yXCI7XG5cbmNvbnN0IENhcmRFbGVtZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYgLlN0cmlwZUVsZW1lbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbmA7XG5cbmNvbnN0IENoZWNrb3V0Rm9ybSA9ICh7IHByaWNlLCBvblN1Y2Nlc3NmdWxDaGVja291dCB9KSA9PiB7XG4gIGNvbnN0IFtpc1Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmdUb10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjaGVja291dEVycm9yLCBzZXRDaGVja291dEVycm9yXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKCk7XG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcblxuICAvLyBUSVBcbiAgLy8gdXNlIHRoZSBjYXJkRWxlbWVudHMgb25DaGFuZ2UgcHJvcCB0byBhZGQgYSBoYW5kbGVyXG4gIC8vIGZvciBzZXR0aW5nIGFueSBlcnJvcnM6XG5cbiAgY29uc3QgaGFuZGxlQ2FyZERldGFpbHNDaGFuZ2UgPSBldiA9PiB7XG4gICAgZXYuZXJyb3IgPyBzZXRDaGVja291dEVycm9yKGV2LmVycm9yLm1lc3NhZ2UpIDogc2V0Q2hlY2tvdXRFcnJvcigpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyBldiA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGJpbGxpbmdEZXRhaWxzID0ge1xuICAgICAgbmFtZTogZXYudGFyZ2V0Lm5hbWUudmFsdWUsXG4gICAgICBlbWFpbDogZXYudGFyZ2V0LmVtYWlsLnZhbHVlLFxuICAgICAgYWRkcmVzczoge1xuICAgICAgICBjaXR5OiBldi50YXJnZXQuY2l0eS52YWx1ZSxcbiAgICAgICAgbGluZTE6IGV2LnRhcmdldC5hZGRyZXNzLnZhbHVlLFxuICAgICAgICBzdGF0ZTogZXYudGFyZ2V0LnN0YXRlLnZhbHVlLFxuICAgICAgICBwb3N0YWxfY29kZTogZXYudGFyZ2V0LnppcC52YWx1ZVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRQcm9jZXNzaW5nVG8odHJ1ZSk7XG5cbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGVsZW1lbnRzLmdldEVsZW1lbnQoXCJjYXJkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YTogY2xpZW50U2VjcmV0IH0gPSBhd2FpdCBBeGlvcy5wb3N0KFwiL2FwaS9wYXltZW50X2ludGVudHNcIiwge1xuICAgICAgICBhbW91bnQ6IHByaWNlICogMTAwXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFJlcSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcbiAgICAgICAgdHlwZTogXCJjYXJkXCIsXG4gICAgICAgIGNhcmQ6IGNhcmRFbGVtZW50LFxuICAgICAgICBiaWxsaW5nX2RldGFpbHM6IGJpbGxpbmdEZXRhaWxzXG4gICAgICB9KTtcblxuICAgICAgaWYgKHBheW1lbnRNZXRob2RSZXEuZXJyb3IpIHtcbiAgICAgICAgc2V0Q2hlY2tvdXRFcnJvcihwYXltZW50TWV0aG9kUmVxLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBzZXRQcm9jZXNzaW5nVG8oZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN0cmlwZS5jb25maXJtQ2FyZFBheW1lbnQoY2xpZW50U2VjcmV0LCB7XG4gICAgICAgIHBheW1lbnRfbWV0aG9kOiBwYXltZW50TWV0aG9kUmVxLnBheW1lbnRNZXRob2QuaWRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgc2V0Q2hlY2tvdXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgc2V0UHJvY2Vzc2luZ1RvKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBvblN1Y2Nlc3NmdWxDaGVja291dCgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0Q2hlY2tvdXRFcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICAvLyBMZWFybmluZ1xuICAvLyBBIGNvbW1vbiBhc2svYnVnIHRoYXQgdXNlcnMgcnVuIGludG8gaXM6XG4gIC8vIEhvdyBkbyB5b3UgY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgY2FyZCBlbGVtZW50IGlucHV0IHRleHQ/XG4gIC8vIEhvdyBkbyB5b3UgY2hhbmdlIHRoZSBmb250LXNpemUgb2YgdGhlIGNhcmQgZWxlbWVudCBpbnB1dCB0ZXh0P1xuICAvLyBIb3cgZG8geW91IGNoYW5nZSB0aGUgcGxhY2Vob2xkZXIgY29sb3I/XG4gIC8vIFRoZSBhbnN3ZXIgdG8gYWxsIG9mIHRoZSBhYm92ZSBpcyB0byB1c2UgdGhlIGBzdHlsZWAgb3B0aW9uLlxuICAvLyBJdCdzIGNvbW1vbiB0byBoZWFyIHVzZXJzIGNvbmZ1c2VkIHdoeSB0aGUgY2FyZCBlbGVtZW50IGFwcGVhcnMgaW1wZXJ2aW91c1xuICAvLyB0byBhbGwgdGhlaXIgc3R5bGVzLiBObyBtYXR0ZXIgd2hhdCBjbGFzc2VzIHRoZXkgYWRkIHRvIHRoZSBwYXJlbnQgZWxlbWVudFxuICAvLyBub3RoaW5nIHdpdGhpbiB0aGUgY2FyZCBlbGVtZW50IHNlZW1zIHRvIGNoYW5nZS4gVGhlIHJlYXNvbiBmb3IgdGhpcyBpcyB0aGF0XG4gIC8vIHRoZSBjYXJkIGVsZW1lbnQgaXMgaG91c2VkIHdpdGhpbiBhbiBpZnJhbWUgYW5kOlxuICAvLyA+IHN0eWxlcyBkbyBub3QgY2FzY2FkZSBmcm9tIGEgcGFyZW50IHdpbmRvdyBkb3duIGludG8gaXRzIGlmcmFtZXNcblxuICBjb25zdCBpZnJhbWVTdHlsZXMgPSB7XG4gICAgYmFzZToge1xuICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgaWNvbkNvbG9yOiBcIiNlZmVmZVwiLFxuICAgICAgXCI6OnBsYWNlaG9sZGVyXCI6IHtcbiAgICAgICAgY29sb3I6IFwiIzAwMFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnZhbGlkOiB7XG4gICAgICBpY29uQ29sb3I6IFwicmVkXCIsXG4gICAgICBjb2xvcjogXCJyZWRcIlxuICAgIH0sXG4gICAgY29tcGxldGU6IHtcbiAgICAgIGljb25Db2xvcjogXCJncmVlblwiXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNhcmRFbGVtZW50T3B0cyA9IHtcbiAgICBpY29uU3R5bGU6IFwic29saWRcIixcbiAgICBzdHlsZTogaWZyYW1lU3R5bGVzLFxuICAgIGhpZGVQb3N0YWxDb2RlOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH0+XG4gICAgICA8Um93PlxuICAgICAgICA8QmlsbGluZ0RldGFpbHNGaWVsZHMgLz5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENhcmRFbGVtZW50Q29udGFpbmVyPlxuICAgICAgICAgIDxDYXJkRWxlbWVudFxuICAgICAgICAgICAgb3B0aW9ucz17Y2FyZEVsZW1lbnRPcHRzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhcmREZXRhaWxzQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZEVsZW1lbnRDb250YWluZXI+XG4gICAgICA8L1Jvdz5cbiAgICAgIHtjaGVja291dEVycm9yICYmIDxDaGVja291dEVycm9yPntjaGVja291dEVycm9yfTwvQ2hlY2tvdXRFcnJvcj59XG4gICAgICA8Um93PlxuICAgICAgICB7LyogVElQIGFsd2F5cyBkaXNhYmxlIHlvdXIgc3VibWl0IGJ1dHRvbiB3aGlsZSBwcm9jZXNzaW5nIHBheW1lbnRzICovfVxuICAgICAgICA8U3VibWl0QnV0dG9uIGRpc2FibGVkPXtpc1Byb2Nlc3NpbmcgfHwgIXN0cmlwZX0+XG4gICAgICAgICAge2lzUHJvY2Vzc2luZyA/IFwiUHJvY2Vzc2luZy4uLlwiIDogYFBheSAkJHtwcmljZX1gfVxuICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cbiAgICAgIDwvUm93PlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Rm9ybTtcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tIFwiLi9wcmVidWlsdC9HbG9iYWxTdHlsZXNcIjtcblxuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcblxuLy8gTGVhcm5pbmdcbi8vIFRvIGJlc3QgbGV2ZXJhZ2UgU3RyaXBl4oCZcyBhZHZhbmNlZCBmcmF1ZCBmdW5jdGlvbmFsaXR5LFxuLy8gaW5jbHVkZSB0aGlzIHNjcmlwdCBvbiBldmVyeSBwYWdlLCBub3QganVzdCB0aGUgY2hlY2tvdXQgcGFnZS5cbi8vIFRoaXMgYWxsb3dzIFN0cmlwZSB0byBkZXRlY3QgYW5vbWFsb3VzIGJlaGF2aW9yIHRoYXQgbWF5IGJlIGluZGljYXRpdmVcbi8vIG9mIGZyYXVkIGFzIGN1c3RvbWVycyBicm93c2UgeW91ciB3ZWJzaXRlLlxuLy8gTm90ZTogVGhpcyBpcyB3aHkgd2UgYXJlIGFkZGluZyBpdCB0byBhIExheW91dCBjb21wb25lbnQuXG5cbmNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKHByb2Nlc3MuZW52LlBVQkxJU0hBQkxFX0tFWSk7XG5cbi8vIFRJUFxuLy8gY2FsbCBsb2FkU3RyaXBlIG91dHNpZGUgb2YgYSBjb21wb25lbnRcbi8vIGluIHRoYXQgd2F5IHRoZXJlJ3Mgbm8gY2hhbmNlIGl0IHdpbGwgZ2V0XG4vLyBjYWxsZWQgbW9yZSB0aW1lcyB0aGFuIGl0IG5lZWRzIHRvXG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxFbGVtZW50cyBzdHJpcGU9e3N0cmlwZVByb21pc2V9PntjaGlsZHJlbn08L0VsZW1lbnRzPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IEZvcm1GaWVsZCBmcm9tIFwiLi9Gb3JtRmllbGRcIjtcblxuY29uc3QgQmlsbGluZ0RldGFpbHNGaWVsZHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiSmFuZSBEb2VcIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiamFuZS5kb2VAZXhhbXBsZS5jb21cIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxuICAgICAgICBsYWJlbD1cIkFkZHJlc3NcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiMTg1IEJlcnJ5IFN0LiBTdWl0ZSA1NTBcIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgbmFtZT1cImNpdHlcIlxuICAgICAgICBsYWJlbD1cIkNpdHlcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2FuIEZyYW5jaXNjb1wiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPEZvcm1GaWVsZFxuICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICBsYWJlbD1cIlN0YXRlXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNhbGlmb3JuaWFcIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgbmFtZT1cInppcFwiXG4gICAgICAgIGxhYmVsPVwiWklQXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIjk0MTAzXCJcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCaWxsaW5nRGV0YWlsc0ZpZWxkcztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuY29uc3QgZmFkZSA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMC45NSwgMC45NSwgMC45NSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xuICB9XG5gO1xuXG5jb25zdCBFcnJvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAtMTBweCBhdXRvIDBweCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgb3BhY2l0eTogOTA7XG4gIGFuaW1hdGlvbjogJHtmYWRlfSAxNTBtcyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uLWRlbGF5OiA1MG1zO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG5cbiAgJiBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgQ2hlY2tvdXRFcnJvciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPEVycm9yQ29udGFpbmVyIHJvbGU9XCJhbGVydFwiPlxuICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNyAxN1wiPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD1cIiNGRkZcIlxuICAgICAgICBkPVwiTTguNSwxNyBDMy44MDU1Nzk2MywxNyAwLDEzLjE5NDQyMDQgMCw4LjUgQzAsMy44MDU1Nzk2MyAzLjgwNTU3OTYzLDAgOC41LDAgQzEzLjE5NDQyMDQsMCAxNywzLjgwNTU3OTYzIDE3LDguNSBDMTcsMTMuMTk0NDIwNCAxMy4xOTQ0MjA0LDE3IDguNSwxNyBaXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPVwiIzY3NzJlNVwiXG4gICAgICAgIGQ9XCJNOC41LDcuMjk3OTE4NDcgTDYuMTI2MDQwNzYsNC45MjM5NTkyNCBDNS43OTQwOTUxMiw0LjU5MjAxMzU5IDUuMjU1OTA0ODgsNC41OTIwMTM1OSA0LjkyMzk1OTI0LDQuOTIzOTU5MjQgQzQuNTkyMDEzNTksNS4yNTU5MDQ4OCA0LjU5MjAxMzU5LDUuNzk0MDk1MTIgNC45MjM5NTkyNCw2LjEyNjA0MDc2IEw3LjI5NzkxODQ3LDguNSBMNC45MjM5NTkyNCwxMC44NzM5NTkyIEM0LjU5MjAxMzU5LDExLjIwNTkwNDkgNC41OTIwMTM1OSwxMS43NDQwOTUxIDQuOTIzOTU5MjQsMTIuMDc2MDQwOCBDNS4yNTU5MDQ4OCwxMi40MDc5ODY0IDUuNzk0MDk1MTIsMTIuNDA3OTg2NCA2LjEyNjA0MDc2LDEyLjA3NjA0MDggTDguNSw5LjcwMjA4MTUzIEwxMC44NzM5NTkyLDEyLjA3NjA0MDggQzExLjIwNTkwNDksMTIuNDA3OTg2NCAxMS43NDQwOTUxLDEyLjQwNzk4NjQgMTIuMDc2MDQwOCwxMi4wNzYwNDA4IEMxMi40MDc5ODY0LDExLjc0NDA5NTEgMTIuNDA3OTg2NCwxMS4yMDU5MDQ5IDEyLjA3NjA0MDgsMTAuODczOTU5MiBMOS43MDIwODE1Myw4LjUgTDEyLjA3NjA0MDgsNi4xMjYwNDA3NiBDMTIuNDA3OTg2NCw1Ljc5NDA5NTEyIDEyLjQwNzk4NjQsNS4yNTU5MDQ4OCAxMi4wNzYwNDA4LDQuOTIzOTU5MjQgQzExLjc0NDA5NTEsNC41OTIwMTM1OSAxMS4yMDU5MDQ5LDQuNTkyMDEzNTkgMTAuODczOTU5Miw0LjkyMzk1OTI0IEw4LjUsNy4yOTc5MTg0NyBMOC41LDcuMjk3OTE4NDcgWlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9FcnJvckNvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0RXJyb3I7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHdpZHRoOiA4MHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNDBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5gO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuYDtcblxuY29uc3QgRGVjcmVtZW50QnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG5gO1xuXG5jb25zdCBJbmNyZW1lbnRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuYDtcblxuY29uc3QgRG9udXRRdWFudGl0eSA9ICh7IG9uQWRkLCBvblJlbW92ZSwgcXVhbnRpdHkgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RGVjcmVtZW50QnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlfT7igJM8L0RlY3JlbWVudEJ1dHRvbj5cbiAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtxdWFudGl0eX0gcmVhZE9ubHkgLz5cbiAgICAgIDxJbmNyZW1lbnRCdXR0b24gb25DbGljaz17b25BZGR9Pis8L0luY3JlbWVudEJ1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvbnV0UXVhbnRpdHk7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCIuL0ltYWdlXCI7XG5pbXBvcnQgRG9udXRRdWFudGl0eSBmcm9tIFwiLi9Eb251dFF1YW50aXR5XCI7XG5cblxuY29uc3QgU2hvcCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDEwcHggMjBweCA0MHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG5gO1xuXG5jb25zdCBTaG9wTmFtZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjYuNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuYDtcblxuY29uc3QgQ29udHJvbHMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG5gO1xuXG5jb25zdCBEb251dFNob3AgPSAoeyBvbkFkZERvbnV0LCBvblJlbW92ZURvbnV0LCBudW1Eb251dHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGgyPlBsYXkgTWFyaW4gU2VjdXJlIFBheW1lbnQgUG9ydGFsPC9oMj5cbiAgICA8U2hvcD5cbiAgICAgIDxTaG9wTmFtZT48L1Nob3BOYW1lPlxuICAgICAgPEltYWdlLz5cbiAgICAgIDxDb250cm9scz5cbiAgICAgICAgPERvbnV0UXVhbnRpdHlcbiAgICAgICAgICBvbkFkZD17b25BZGREb251dH1cbiAgICAgICAgICBvblJlbW92ZT17b25SZW1vdmVEb251dH1cbiAgICAgICAgICBxdWFudGl0eT17bnVtRG9udXRzfVxuICAgICAgICAvPlxuICAgICAgPC9Db250cm9scz5cbiAgICA8L1Nob3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb251dFNob3A7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgRm9ybUZpZWxkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIHdpZHRoOiAyMCU7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgcGFkZGluZzogMTFweCAwO1xuICBjb2xvcjogIzAwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbmA7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMXB4IDE1cHggMTFweCA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IDFtcyB2b2lkLWFuaW1hdGlvbi1vdXQ7XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICB9XG5gO1xuXG5jb25zdCBGb3JtRmllbGQgPSAoeyBsYWJlbCwgdHlwZSwgbmFtZSwgcGxhY2Vob2xkZXIsIHJlcXVpcmVkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUZpZWxkQ29udGFpbmVyPlxuICAgICAgPExhYmVsIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L0xhYmVsPlxuICAgICAgPElucHV0IG5hbWU9e25hbWV9IHR5cGU9e3R5cGV9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gcmVxdWlyZWQgLz5cbiAgICA8L0Zvcm1GaWVsZENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1GaWVsZDtcbiIsImltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuY29uc3QgR2xvYmFsU3R5bGVzID0gKCkgPT4gKFxuICA8PlxuICAgIDxHbG9iYWxcbiAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICAqLFxuICAgICAgICAqOmJlZm9yZSxcbiAgICAgICAgKjphZnRlciB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAvPlxuICAgIDxHbG9iYWxcbiAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgLz5cbiAgICA8R2xvYmFsXG4gICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgYm9keSxcbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIC8+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDQ3NXB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgYm94LXNoYWRvdzogMCA2cHggOXB4IHJnYmEoNTAsIDUwLCA5MywgMC4wNiksIDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDgpLFxuICAgIGluc2V0IDAgMXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgUm93O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gXCIjNzc5NWY4XCIgOiBcImdyZWVuXCIpfTtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PlxuICAgIHByb3BzLmRpc2FibGVkXG4gICAgICA/IFwibm9uZVwiXG4gICAgICA6IFwiMCA2cHggOXB4IHJnYmEoNTAsIDUwLCA5MywgMC4wNiksIDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCBpbnNldCAwIDFweCAwICNmZmI5ZjY7XCJ9O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gMC41IDogMSl9O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgU3VibWl0QnV0dG9uO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUm93IGZyb20gXCIuLi9jb21wb25lbnRzL3ByZWJ1aWx0L1Jvd1wiO1xuaW1wb3J0IERvbnV0U2hvcCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmVidWlsdC9Eb251dFNob3BcIjtcbmltcG9ydCBDaGVja291dEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hlY2tvdXRGb3JtXCI7XG5pbXBvcnQgZ2V0RG9udXRQcmljZSBmcm9tIFwiLi4vdXRpbHMvZ2V0LWRvbnV0LXByaWNlXCI7XG5cbmNvbnN0IE1haW5QYWdlID0gcHJvcHMgPT4ge1xuICBjb25zdCBbbnVtRG9udXRzLCBzZXROdW1Eb251dHNdID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3QgYWRkRG9udXQgPSAoKSA9PiBzZXROdW1Eb251dHMobnVtID0+IE1hdGgubWluKDEyLCBudW0gKyAxKSk7XG4gIGNvbnN0IHJlbURvbnV0ID0gKCkgPT4gc2V0TnVtRG9udXRzKG51bSA9PiBNYXRoLm1heCgxLCBudW0gLSAxKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiUGxheSBNYXJpbiBEb25hdGlvbiBwYWdlXCI+XG4gICAgICA8Um93PlxuICAgICAgICA8RG9udXRTaG9wXG4gICAgICAgICAgb25BZGREb251dD17YWRkRG9udXR9XG4gICAgICAgICAgb25SZW1vdmVEb251dD17cmVtRG9udXR9XG4gICAgICAgICAgbnVtRG9udXRzPXtudW1Eb251dHN9XG4gICAgICAgIC8+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxDaGVja291dEZvcm1cbiAgICAgICAgcHJpY2U9e2dldERvbnV0UHJpY2UobnVtRG9udXRzKX1cbiAgICAgICAgb25TdWNjZXNzZnVsQ2hlY2tvdXQ9eygpID0+IFJvdXRlci5wdXNoKFwiL3N1Y2Nlc3NcIil9XG4gICAgICAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XG4iLCJjb25zdCBnZXREb251dFByaWNlID0gbnVtRG9udXRzID0+XG4gIChNYXRoLnJvdW5kKG51bURvbnV0cyAqIDEgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXREb251dFByaWNlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0cmlwZS9zdHJpcGUtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=