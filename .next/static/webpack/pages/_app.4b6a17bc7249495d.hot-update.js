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

/***/ "./src/components/Header/builder/HeaderBuilder.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Header/builder/HeaderBuilder.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderBuilder\": function() { return /* binding */ HeaderBuilder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _headerBuilder_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headerBuilder.module.scss */ \"./src/components/Header/builder/headerBuilder.module.scss\");\n/* harmony import */ var _headerBuilder_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_headerBuilder_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction HeaderBuilder() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100), logoSizeValue = ref[0], setLogoSizeValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(25), iconSizeValue = ref1[0], setIconSizeValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), iconColorValue = ref2[0], setIconColorValue = ref2[1];\n    console.log(\"LogoSize:\" + logoSizeValue, \"IconColor:\" + iconColorValue, \"IconSize:\" + iconSizeValue);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.Header, {\n                logo_size: logoSizeValue,\n                icon_size: iconSizeValue,\n                icon_color: iconColorValue\n            }, void 0, false, {\n                fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_headerBuilder_module_scss__WEBPACK_IMPORTED_MODULE_3___default().HeaderBuilder),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    action: \"\",\n                    method: \"post\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"logo-size\",\n                            children: \"Logo Size:\"\n                        }, void 0, false, {\n                            fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"range\",\n                            id: \"logo-size\",\n                            name: \"logo-size\",\n                            min: \"50\",\n                            max: \"200\",\n                            value: logoSizeValue,\n                            onChange: function(e) {\n                                return setLogoSizeValue(Number(e.target.value));\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"icons-size\",\n                            children: \"Icons Size:\"\n                        }, void 0, false, {\n                            fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"range\",\n                            id: \"icons-size\",\n                            name: \"icons-size\",\n                            min: \"20\",\n                            max: \"50\",\n                            value: iconSizeValue,\n                            onChange: function(e) {\n                                return setIconSizeValue(Number(e.target.value));\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"icons-color\",\n                            children: \"Icons Color:\"\n                        }, void 0, false, {\n                            fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"color\",\n                            id: \"icons-color\",\n                            name: \"icons-color\",\n                            value: iconColorValue,\n                            onChange: function(e) {\n                                return setIconColorValue(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(HeaderBuilder, \"4hgj6+OrxIJwdEEEvbUJ8g7/MSQ=\");\n_c = HeaderBuilder;\nvar _c;\n$RefreshReg$(_c, \"HeaderBuilder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvYnVpbGRlci9IZWFkZXJCdWlsZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQWdDO0FBQ0w7QUFFcUI7O0FBRXpDLFNBQVNHLGFBQWEsR0FBRzs7SUFDNUIsSUFBMENILEdBQWEsR0FBYkEsK0NBQVEsQ0FBQyxHQUFHLENBQUMsRUFOM0QsYUFNd0IsR0FBc0JBLEdBQWEsR0FBbkMsRUFOeEIsZ0JBTTBDLEdBQUlBLEdBQWEsR0FBakI7SUFDdEMsSUFBMENBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFQMUQsYUFPd0IsR0FBc0JBLElBQVksR0FBbEMsRUFQeEIsZ0JBTzBDLEdBQUlBLElBQVksR0FBaEI7SUFDdEMsSUFBNENBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFSNUQsY0FReUIsR0FBdUJBLElBQVksR0FBbkMsRUFSekIsaUJBUTRDLEdBQUlBLElBQVksR0FBaEI7SUFFeENVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsR0FBQ1AsYUFBYSxFQUFFLFlBQVksR0FBQ0ksY0FBYyxFQUFFLFdBQVcsR0FBQ0YsYUFBYSxDQUFDO0lBRTlGLHFCQUNJOzswQkFDSSw4REFBQ0wscUNBQU07Z0JBQ0hXLFNBQVMsRUFBRVIsYUFBYTtnQkFDeEJTLFNBQVMsRUFBRVAsYUFBYTtnQkFDeEJRLFVBQVUsRUFBRU4sY0FBYzs7Ozs7b0JBQzVCOzBCQUNGLDhEQUFDTyxTQUFPO2dCQUFDQyxTQUFTLEVBQUVkLGlGQUFvQjswQkFDcEMsNEVBQUNlLE1BQUk7b0JBQUNDLE1BQU0sRUFBQyxFQUFFO29CQUFDQyxNQUFNLEVBQUMsTUFBTTs7c0NBQ3pCLDhEQUFDQyxPQUFLOzRCQUFDQyxPQUFPLEVBQUMsV0FBVztzQ0FBQyxZQUFVOzs7OztnQ0FBUTtzQ0FDN0MsOERBQUNDLE9BQUs7NEJBQ0ZDLElBQUksRUFBQyxPQUFPOzRCQUNaQyxFQUFFLEVBQUMsV0FBVzs0QkFDZEMsSUFBSSxFQUFDLFdBQVc7NEJBQ2hCQyxHQUFHLEVBQUMsSUFBSTs0QkFBQ0MsR0FBRyxFQUFDLEtBQUs7NEJBQ2xCQyxLQUFLLEVBQUV4QixhQUFhOzRCQUNwQnlCLFFBQVEsRUFBRSxTQUFDQyxDQUFDO3VDQUFLekIsZ0JBQWdCLENBQUMwQixNQUFNLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDSixLQUFLLENBQUMsQ0FBQzs2QkFBQTs7Ozs7Z0NBQzNEO3NDQUNGLDhEQUFDUixPQUFLOzRCQUFDQyxPQUFPLEVBQUMsWUFBWTtzQ0FBQyxhQUFXOzs7OztnQ0FBUTtzQ0FDL0MsOERBQUNDLE9BQUs7NEJBQ0ZDLElBQUksRUFBQyxPQUFPOzRCQUNaQyxFQUFFLEVBQUMsWUFBWTs0QkFDZkMsSUFBSSxFQUFDLFlBQVk7NEJBQ2pCQyxHQUFHLEVBQUMsSUFBSTs0QkFBQ0MsR0FBRyxFQUFDLElBQUk7NEJBQ2pCQyxLQUFLLEVBQUV0QixhQUFhOzRCQUNwQnVCLFFBQVEsRUFBRSxTQUFDQyxDQUFDO3VDQUFLdkIsZ0JBQWdCLENBQUN3QixNQUFNLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDSixLQUFLLENBQUMsQ0FBQzs2QkFBQTs7Ozs7Z0NBQzNEO3NDQUNGLDhEQUFDUixPQUFLOzRCQUFDQyxPQUFPLEVBQUMsYUFBYTtzQ0FBQyxjQUFZOzs7OztnQ0FBUTtzQ0FDakQsOERBQUNDLE9BQUs7NEJBQ0ZDLElBQUksRUFBQyxPQUFPOzRCQUNaQyxFQUFFLEVBQUMsYUFBYTs0QkFDaEJDLElBQUksRUFBQyxhQUFhOzRCQUNsQkcsS0FBSyxFQUFFcEIsY0FBYzs0QkFDckJxQixRQUFRLEVBQUUsU0FBQ0MsQ0FBQzt1Q0FBS3JCLGlCQUFpQixDQUFDcUIsQ0FBQyxDQUFDRSxNQUFNLENBQUNKLEtBQUssQ0FBQzs2QkFBQTs7Ozs7Z0NBQ3BEOzs7Ozs7d0JBQ0M7Ozs7O29CQUNEOztvQkFDWCxDQUNOO0NBQ0o7R0E5Q2V6QixhQUFhO0FBQWJBLEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2J1aWxkZXIvSGVhZGVyQnVpbGRlci50c3g/NmM1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi5cIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyQnVpbGRlci5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlckJ1aWxkZXIoKSB7XG4gICAgY29uc3QgW2xvZ29TaXplVmFsdWUsIHNldExvZ29TaXplVmFsdWVdID0gdXNlU3RhdGUoMTAwKVxuICAgIGNvbnN0IFtpY29uU2l6ZVZhbHVlLCBzZXRJY29uU2l6ZVZhbHVlXSA9IHVzZVN0YXRlKDI1KVxuICAgIGNvbnN0IFtpY29uQ29sb3JWYWx1ZSwgc2V0SWNvbkNvbG9yVmFsdWVdID0gdXNlU3RhdGUoJycpXG5cbiAgICBjb25zb2xlLmxvZygnTG9nb1NpemU6Jytsb2dvU2l6ZVZhbHVlLCAnSWNvbkNvbG9yOicraWNvbkNvbG9yVmFsdWUsICdJY29uU2l6ZTonK2ljb25TaXplVmFsdWUpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlciBcbiAgICAgICAgICAgICAgICBsb2dvX3NpemU9e2xvZ29TaXplVmFsdWV9IFxuICAgICAgICAgICAgICAgIGljb25fc2l6ZT17aWNvblNpemVWYWx1ZX0gXG4gICAgICAgICAgICAgICAgaWNvbl9jb2xvcj17aWNvbkNvbG9yVmFsdWV9IFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlckJ1aWxkZXJ9PlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2dvLXNpemVcIj5Mb2dvIFNpemU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxvZ28tc2l6ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvZ28tc2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49XCI1MFwiIG1heD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9nb1NpemVWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9nb1NpemVWYWx1ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0gXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaWNvbnMtc2l6ZVwiPkljb25zIFNpemU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImljb25zLXNpemVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpY29ucy1zaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjIwXCIgbWF4PVwiNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ljb25TaXplVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEljb25TaXplVmFsdWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9IFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImljb25zLWNvbG9yXCI+SWNvbnMgQ29sb3I6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImljb25zLWNvbG9yXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWNvbnMtY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ljb25Db2xvclZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJY29uQ29sb3JWYWx1ZShlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWRlciIsInN0eWxlcyIsIkhlYWRlckJ1aWxkZXIiLCJsb2dvU2l6ZVZhbHVlIiwic2V0TG9nb1NpemVWYWx1ZSIsImljb25TaXplVmFsdWUiLCJzZXRJY29uU2l6ZVZhbHVlIiwiaWNvbkNvbG9yVmFsdWUiLCJzZXRJY29uQ29sb3JWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dvX3NpemUiLCJpY29uX3NpemUiLCJpY29uX2NvbG9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImZvcm0iLCJhY3Rpb24iLCJtZXRob2QiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJtaW4iLCJtYXgiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsIk51bWJlciIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/builder/HeaderBuilder.tsx\n");

/***/ })

});