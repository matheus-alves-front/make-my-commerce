"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _src_components_Header_builder_HeaderBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Header/builder/HeaderBuilder */ \"./src/components/Header/builder/HeaderBuilder.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyApp(param1) {\n    var Component = param1.Component, pageProps = param1.pageProps;\n    var handleHeaderStyles = function handleHeaderStyles(param) {\n        var logoSizeValue = param.logoSizeValue, iconSizeValue = param.iconSizeValue, iconColorValue = param.iconColorValue;\n        setLogoSizeValue(logoSizeValue);\n        setIconSizeValue(iconSizeValue);\n        setIconColorValue(iconColorValue);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(100), logoSizeValue1 = ref[0], setLogoSizeValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(25), iconSizeValue1 = ref1[0], setIconSizeValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"#FFFFFF\"), iconColorValue1 = ref2[0], setIconColorValue = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                logo_size: logoSizeValue1,\n                icon_size: iconSizeValue1,\n                icon_color: iconColorValue1\n            }, void 0, false, {\n                fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/pages/_app.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/pages/_app.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Header_builder_HeaderBuilder__WEBPACK_IMPORTED_MODULE_3__.HeaderBuilder, {\n                BuilderProps: undefined\n            }, void 0, false, {\n                fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/pages/_app.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"NGilKF8D4u7tUf3GwTxZ2Pa6ONQ=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFbUI7QUFDNkI7QUFDOUM7O0FBR2hDLFNBQVNHLEtBQUssQ0FBQyxNQUFrQyxFQUFFO1FBQWxDQyxTQUFTLEdBQVgsTUFBa0MsQ0FBaENBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixNQUFrQyxDQUFyQkEsU0FBUztRQUsxQkMsa0JBQWtCLEdBQTNCLFNBQVNBLGtCQUFrQixDQUFDLEtBSTNCLEVBQUU7WUFIREMsYUFBYSxHQURhLEtBSTNCLENBSENBLGFBQWEsRUFDYkMsYUFBYSxHQUZhLEtBSTNCLENBRkNBLGFBQWEsRUFDYkMsY0FBYyxHQUhZLEtBSTNCLENBRENBLGNBQWM7UUFFZEMsZ0JBQWdCLENBQUNILGFBQWEsQ0FBQztRQUMvQkksZ0JBQWdCLENBQUNILGFBQWEsQ0FBQztRQUMvQkksaUJBQWlCLENBQUNILGNBQWMsQ0FBQztLQUNsQzs7SUFaRCxJQUEwQ1AsR0FBYSxHQUFiQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQVJ6RCxjQVFzQixHQUFzQkEsR0FBYSxHQUFuQyxFQVJ0QixnQkFRd0MsR0FBSUEsR0FBYSxHQUFqQjtJQUN0QyxJQUEwQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVR4RCxjQVNzQixHQUFzQkEsSUFBWSxHQUFsQyxFQVR0QixnQkFTd0MsR0FBSUEsSUFBWSxHQUFoQjtJQUN0QyxJQUE0Q0EsSUFBbUIsR0FBbkJBLCtDQUFRLENBQUMsU0FBUyxDQUFDLEVBVmpFLGVBVXVCLEdBQXVCQSxJQUFtQixHQUExQyxFQVZ2QixpQkFVMEMsR0FBSUEsSUFBbUIsR0FBdkI7SUFZeEMscUJBQ0U7OzBCQUNFLDhEQUFDRiwwREFBTTtnQkFDSGEsU0FBUyxFQUFFTixjQUFhO2dCQUN4Qk8sU0FBUyxFQUFFTixjQUFhO2dCQUN4Qk8sVUFBVSxFQUFFTixlQUFjOzs7OztvQkFDNUI7MEJBQ0YsOERBQUNMLFNBQVMsb0JBQUtDLFNBQVM7Ozs7b0JBQUk7MEJBQzVCLDhEQUFDSix1RkFBYTtnQkFBQ2UsWUFBWSxFQUFFQyxTQUFTOzs7OztvQkFBSTs7b0JBQ3pDLENBQ0o7Q0FDRjtHQTFCUWQsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBNEJkLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgeyBIZWFkZXJCdWlsZGVyIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2J1aWxkZXIvSGVhZGVyQnVpbGRlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBbbG9nb1NpemVWYWx1ZSwgc2V0TG9nb1NpemVWYWx1ZV0gPSB1c2VTdGF0ZSgxMDApXG4gIGNvbnN0IFtpY29uU2l6ZVZhbHVlLCBzZXRJY29uU2l6ZVZhbHVlXSA9IHVzZVN0YXRlKDI1KVxuICBjb25zdCBbaWNvbkNvbG9yVmFsdWUsIHNldEljb25Db2xvclZhbHVlXSA9IHVzZVN0YXRlKCcjRkZGRkZGJylcblxuICBmdW5jdGlvbiBoYW5kbGVIZWFkZXJTdHlsZXMoe1xuICAgIGxvZ29TaXplVmFsdWUsIFxuICAgIGljb25TaXplVmFsdWUsXG4gICAgaWNvbkNvbG9yVmFsdWVcbiAgfSkge1xuICAgIHNldExvZ29TaXplVmFsdWUobG9nb1NpemVWYWx1ZSlcbiAgICBzZXRJY29uU2l6ZVZhbHVlKGljb25TaXplVmFsdWUpXG4gICAgc2V0SWNvbkNvbG9yVmFsdWUoaWNvbkNvbG9yVmFsdWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIFxuICAgICAgICAgIGxvZ29fc2l6ZT17bG9nb1NpemVWYWx1ZX0gXG4gICAgICAgICAgaWNvbl9zaXplPXtpY29uU2l6ZVZhbHVlfSBcbiAgICAgICAgICBpY29uX2NvbG9yPXtpY29uQ29sb3JWYWx1ZX0gXG4gICAgICAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPEhlYWRlckJ1aWxkZXIgQnVpbGRlclByb3BzPXt1bmRlZmluZWR9IC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJIZWFkZXJCdWlsZGVyIiwidXNlU3RhdGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImhhbmRsZUhlYWRlclN0eWxlcyIsImxvZ29TaXplVmFsdWUiLCJpY29uU2l6ZVZhbHVlIiwiaWNvbkNvbG9yVmFsdWUiLCJzZXRMb2dvU2l6ZVZhbHVlIiwic2V0SWNvblNpemVWYWx1ZSIsInNldEljb25Db2xvclZhbHVlIiwibG9nb19zaXplIiwiaWNvbl9zaXplIiwiaWNvbl9jb2xvciIsIkJ1aWxkZXJQcm9wcyIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});