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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _src_components_Header_builder_HeaderBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Header/builder/HeaderBuilder */ \"./src/components/Header/builder/HeaderBuilder.tsx\");\n/* harmony import */ var _src_contexts_HeaderBuilderContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/contexts/HeaderBuilderContext */ \"./src/contexts/HeaderBuilderContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyApp(param1) {\n    var Component = param1.Component, pageProps = param1.pageProps;\n    var handleHeaderStyles = function handleHeaderStyles(param) {\n        var logoSizeValue = param.logoSizeValue, iconSizeValue = param.iconSizeValue, iconColorValue = param.iconColorValue;\n        console.log({\n            logoSizeValue: logoSizeValue,\n            iconSizeValue: iconSizeValue,\n            iconColorValue: iconColorValue\n        });\n        setLogoSizeValue(logoSizeValue);\n        setIconSizeValue(iconSizeValue);\n        setIconColorValue(iconColorValue);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100), logoSizeValue1 = ref[0], setLogoSizeValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(50), iconSizeValue1 = ref1[0], setIconSizeValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#FFFFFF\"), iconColorValue1 = ref2[0], setIconColorValue = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_contexts_HeaderBuilderContext__WEBPACK_IMPORTED_MODULE_4__.HeaderBuilderContext.Provider, {\n                value: {\n                    logoSizeValue: logoSizeValue1,\n                    iconSizeValue: iconSizeValue1,\n                    iconColorValue: iconColorValue1,\n                    SubmitEvent: handleHeaderStyles\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                        logo_size: logoSizeValue1,\n                        icon_size: iconSizeValue1,\n                        icon_color: iconColorValue1\n                    }, void 0, false, {\n                        fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/pages/_app.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Header_builder_HeaderBuilder__WEBPACK_IMPORTED_MODULE_3__.HeaderBuilder, {\n                        HeaderBuilderProps: handleHeaderStyles\n                    }, void 0, false, {\n                        fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/pages/_app.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/pages/_app.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/pages/_app.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"oEimeO5AI9ox0Xt235+6M+QAxjI=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2dDO0FBQ2lCO0FBQzZCO0FBQ0g7QUFFN0M7O0FBUTlCLFNBQVNJLEtBQUssQ0FBQyxNQUFrQyxFQUFFO1FBQWxDQyxTQUFTLEdBQVgsTUFBa0MsQ0FBaENBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixNQUFrQyxDQUFyQkEsU0FBUztRQUsxQkMsa0JBQWtCLEdBQTNCLFNBQVNBLGtCQUFrQixDQUFDLEtBSVIsRUFBRTtZQUhwQkMsYUFBYSxHQURhLEtBSVIsQ0FIbEJBLGFBQWEsRUFDYkMsYUFBYSxHQUZhLEtBSVIsQ0FGbEJBLGFBQWEsRUFDYkMsY0FBYyxHQUhZLEtBSVIsQ0FEbEJBLGNBQWM7UUFFZEMsT0FBTyxDQUFDQyxHQUFHLENBQUM7WUFBQ0osYUFBYSxFQUFiQSxhQUFhO1lBQUVDLGFBQWEsRUFBYkEsYUFBYTtZQUFFQyxjQUFjLEVBQWRBLGNBQWM7U0FBQyxDQUFDO1FBQzNERyxnQkFBZ0IsQ0FBQ0wsYUFBYSxDQUFDO1FBQy9CTSxnQkFBZ0IsQ0FBQ0wsYUFBYSxDQUFDO1FBQy9CTSxpQkFBaUIsQ0FBQ0wsY0FBYyxDQUFDO0tBQ2xDOztJQWJELElBQTBDVixHQUFhLEdBQWJBLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBZnpELGNBZXNCLEdBQXNCQSxHQUFhLEdBQW5DLEVBZnRCLGdCQWV3QyxHQUFJQSxHQUFhLEdBQWpCO0lBQ3RDLElBQTBDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBaEJ4RCxjQWdCc0IsR0FBc0JBLElBQVksR0FBbEMsRUFoQnRCLGdCQWdCd0MsR0FBSUEsSUFBWSxHQUFoQjtJQUN0QyxJQUE0Q0EsSUFBbUIsR0FBbkJBLCtDQUFRLENBQUMsU0FBUyxDQUFDLEVBakJqRSxlQWlCdUIsR0FBdUJBLElBQW1CLEdBQTFDLEVBakJ2QixpQkFpQjBDLEdBQUlBLElBQW1CLEdBQXZCO0lBYXhDLHFCQUNFOzswQkFDRSw4REFBQ0csNkZBQTZCO2dCQUM1QmMsS0FBSyxFQUFFO29CQUNMVCxhQUFhLEVBQWJBLGNBQWE7b0JBQ2JDLGFBQWEsRUFBYkEsY0FBYTtvQkFDYkMsY0FBYyxFQUFkQSxlQUFjO29CQUNkUSxXQUFXLEVBQUVYLGtCQUFrQjtpQkFDaEM7O2tDQUVELDhEQUFDTiwwREFBTTt3QkFDSGtCLFNBQVMsRUFBRVgsY0FBYTt3QkFDeEJZLFNBQVMsRUFBRVgsY0FBYTt3QkFDeEJZLFVBQVUsRUFBRVgsZUFBYzs7Ozs7NEJBQzVCO2tDQUVGLDhEQUFDUix1RkFBYTt3QkFBQ29CLGtCQUFrQixFQUFFZixrQkFBa0I7Ozs7OzRCQUFJOzs7Ozs7b0JBQzNCOzBCQUVoQyw4REFBQ0YsU0FBUyxvQkFBS0MsU0FBUzs7OztvQkFBSTs7b0JBQzNCLENBQ0o7Q0FDRjtHQXRDUUYsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBd0NkLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCB7IEhlYWRlckJ1aWxkZXIgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvYnVpbGRlci9IZWFkZXJCdWlsZGVyJ1xuaW1wb3J0IHsgSGVhZGVyQnVpbGRlckNvbnRleHQgfSBmcm9tICcuLi9zcmMvY29udGV4dHMvSGVhZGVyQnVpbGRlckNvbnRleHQnXG5cbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5pbnRlcmZhY2UgSGVhZGVyQnVpbGRlckRhdGEge1xuICBsb2dvU2l6ZVZhbHVlOiBudW1iZXJcbiAgaWNvblNpemVWYWx1ZTogbnVtYmVyXG4gIGljb25Db2xvclZhbHVlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBbbG9nb1NpemVWYWx1ZSwgc2V0TG9nb1NpemVWYWx1ZV0gPSB1c2VTdGF0ZSgxMDApXG4gIGNvbnN0IFtpY29uU2l6ZVZhbHVlLCBzZXRJY29uU2l6ZVZhbHVlXSA9IHVzZVN0YXRlKDUwKVxuICBjb25zdCBbaWNvbkNvbG9yVmFsdWUsIHNldEljb25Db2xvclZhbHVlXSA9IHVzZVN0YXRlKCcjRkZGRkZGJylcblxuICBmdW5jdGlvbiBoYW5kbGVIZWFkZXJTdHlsZXMoe1xuICAgIGxvZ29TaXplVmFsdWUsIFxuICAgIGljb25TaXplVmFsdWUsXG4gICAgaWNvbkNvbG9yVmFsdWVcbiAgfTogSGVhZGVyQnVpbGRlckRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyh7bG9nb1NpemVWYWx1ZSwgaWNvblNpemVWYWx1ZSwgaWNvbkNvbG9yVmFsdWV9KVxuICAgIHNldExvZ29TaXplVmFsdWUobG9nb1NpemVWYWx1ZSlcbiAgICBzZXRJY29uU2l6ZVZhbHVlKGljb25TaXplVmFsdWUpXG4gICAgc2V0SWNvbkNvbG9yVmFsdWUoaWNvbkNvbG9yVmFsdWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyQnVpbGRlckNvbnRleHQuUHJvdmlkZXIgXG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgbG9nb1NpemVWYWx1ZSxcbiAgICAgICAgICBpY29uU2l6ZVZhbHVlLFxuICAgICAgICAgIGljb25Db2xvclZhbHVlLFxuICAgICAgICAgIFN1Ym1pdEV2ZW50OiBoYW5kbGVIZWFkZXJTdHlsZXNcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEhlYWRlciBcbiAgICAgICAgICAgIGxvZ29fc2l6ZT17bG9nb1NpemVWYWx1ZX0gXG4gICAgICAgICAgICBpY29uX3NpemU9e2ljb25TaXplVmFsdWV9IFxuICAgICAgICAgICAgaWNvbl9jb2xvcj17aWNvbkNvbG9yVmFsdWV9IFxuICAgICAgICAvPlxuXG4gICAgICAgIDxIZWFkZXJCdWlsZGVyIEhlYWRlckJ1aWxkZXJQcm9wcz17aGFuZGxlSGVhZGVyU3R5bGVzfSAvPlxuICAgICAgPC9IZWFkZXJCdWlsZGVyQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIFxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkZXIiLCJIZWFkZXJCdWlsZGVyIiwiSGVhZGVyQnVpbGRlckNvbnRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImhhbmRsZUhlYWRlclN0eWxlcyIsImxvZ29TaXplVmFsdWUiLCJpY29uU2l6ZVZhbHVlIiwiaWNvbkNvbG9yVmFsdWUiLCJjb25zb2xlIiwibG9nIiwic2V0TG9nb1NpemVWYWx1ZSIsInNldEljb25TaXplVmFsdWUiLCJzZXRJY29uQ29sb3JWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJTdWJtaXRFdmVudCIsImxvZ29fc2l6ZSIsImljb25fc2l6ZSIsImljb25fY29sb3IiLCJIZWFkZXJCdWlsZGVyUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});