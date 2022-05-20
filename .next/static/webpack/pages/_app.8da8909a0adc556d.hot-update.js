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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderBuilder\": function() { return /* binding */ HeaderBuilder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _headerBuilder_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headerBuilder.module.scss */ \"./src/components/Header/builder/headerBuilder.module.scss\");\n/* harmony import */ var _headerBuilder_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_headerBuilder_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction HeaderBuilder(param) {\n    var HeaderBuilderProps = param.HeaderBuilderProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100), logoSizeValue = ref[0], setLogoSizeValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(25), iconSizeValue = ref1[0], setIconSizeValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), iconColorValue = ref2[0], setIconColorValue = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //   console.log({logoSizeValue, iconSizeValue, iconColorValue})\n        HeaderBuilderProps({\n            logoSizeValue: logoSizeValue,\n            iconSizeValue: iconSizeValue,\n            iconColorValue: iconColorValue\n        });\n    }, [\n        logoSizeValue,\n        iconSizeValue,\n        iconColorValue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: (_headerBuilder_module_scss__WEBPACK_IMPORTED_MODULE_2___default().HeaderBuilder),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: \"\",\n                method: \"post\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"logo-size\",\n                        children: \"Logo Size:\"\n                    }, void 0, false, {\n                        fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"range\",\n                        id: \"logo-size\",\n                        name: \"logo-size\",\n                        min: \"100\",\n                        max: \"200\",\n                        value: logoSizeValue,\n                        onChange: function(e) {\n                            return setLogoSizeValue(Number(e.target.value));\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"icons-size\",\n                        children: \"Icons Size:\"\n                    }, void 0, false, {\n                        fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"range\",\n                        id: \"icons-size\",\n                        name: \"icons-size\",\n                        min: \"20\",\n                        max: \"50\",\n                        value: iconSizeValue,\n                        onChange: function(e) {\n                            return setIconSizeValue(Number(e.target.value));\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"icons-color\",\n                        children: \"Icons Color:\"\n                    }, void 0, false, {\n                        fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"color\",\n                        id: \"icons-color\",\n                        name: \"icons-color\",\n                        value: iconColorValue,\n                        onChange: function(e) {\n                            return setIconColorValue(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n                lineNumber: 23,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/matheus/Development/react/estudos/make-my-commerce/src/components/Header/builder/HeaderBuilder.tsx\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(HeaderBuilder, \"cq+EdmtyfQreguf4BZyHQlUS6T0=\");\n_c = HeaderBuilder;\nvar _c;\n$RefreshReg$(_c, \"HeaderBuilder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvYnVpbGRlci9IZWFkZXJCdWlsZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMkM7QUFHSzs7QUFNekMsU0FBU0csYUFBYSxDQUFDLEtBQW1DLEVBQUU7UUFBckMsa0JBQW1CLEdBQW5CLEtBQW1DLENBQWxDQyxrQkFBa0I7O0lBQzdDLElBQTBDSCxHQUFhLEdBQWJBLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBVjNELGFBVXdCLEdBQXNCQSxHQUFhLEdBQW5DLEVBVnhCLGdCQVUwQyxHQUFJQSxHQUFhLEdBQWpCO0lBQ3RDLElBQTBDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBWDFELGFBV3dCLEdBQXNCQSxJQUFZLEdBQWxDLEVBWHhCLGdCQVcwQyxHQUFJQSxJQUFZLEdBQWhCO0lBQ3RDLElBQTRDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBWjVELGNBWXlCLEdBQXVCQSxJQUFZLEdBQW5DLEVBWnpCLGlCQVk0QyxHQUFJQSxJQUFZLEdBQWhCO0lBRXhDRCxnREFBUyxDQUFDLFdBQU07UUFDaEIsZ0VBQWdFO1FBQzlESSxrQkFBa0IsQ0FBQztZQUFDQyxhQUFhLEVBQWJBLGFBQWE7WUFBRUUsYUFBYSxFQUFiQSxhQUFhO1lBQUVFLGNBQWMsRUFBZEEsY0FBYztTQUFDLENBQUM7S0FDbkUsRUFBRTtRQUFDSixhQUFhO1FBQUVFLGFBQWE7UUFBRUUsY0FBYztLQUFDLENBQUM7SUFFbEQscUJBQ0k7a0JBQ0ksNEVBQUNFLFNBQU87WUFBQ0MsU0FBUyxFQUFFVixpRkFBb0I7c0JBQ3BDLDRFQUFDVyxNQUFJO2dCQUFDQyxNQUFNLEVBQUMsRUFBRTtnQkFBQ0MsTUFBTSxFQUFDLE1BQU07O2tDQUN6Qiw4REFBQ0MsT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLFdBQVc7a0NBQUMsWUFBVTs7Ozs7NEJBQVE7a0NBQzdDLDhEQUFDQyxPQUFLO3dCQUNGQyxJQUFJLEVBQUMsT0FBTzt3QkFDWkMsRUFBRSxFQUFDLFdBQVc7d0JBQ2RDLElBQUksRUFBQyxXQUFXO3dCQUNoQkMsR0FBRyxFQUFDLEtBQUs7d0JBQUNDLEdBQUcsRUFBQyxLQUFLO3dCQUNuQkMsS0FBSyxFQUFFbkIsYUFBYTt3QkFDcEJvQixRQUFRLEVBQUUsU0FBQ0MsQ0FBQzttQ0FBS3BCLGdCQUFnQixDQUFDcUIsTUFBTSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0osS0FBSyxDQUFDLENBQUM7eUJBQUE7Ozs7OzRCQUMzRDtrQ0FDRiw4REFBQ1IsT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLFlBQVk7a0NBQUMsYUFBVzs7Ozs7NEJBQVE7a0NBQy9DLDhEQUFDQyxPQUFLO3dCQUNGQyxJQUFJLEVBQUMsT0FBTzt3QkFDWkMsRUFBRSxFQUFDLFlBQVk7d0JBQ2ZDLElBQUksRUFBQyxZQUFZO3dCQUNqQkMsR0FBRyxFQUFDLElBQUk7d0JBQUNDLEdBQUcsRUFBQyxJQUFJO3dCQUNqQkMsS0FBSyxFQUFFakIsYUFBYTt3QkFDcEJrQixRQUFRLEVBQUUsU0FBQ0MsQ0FBQzttQ0FBS2xCLGdCQUFnQixDQUFDbUIsTUFBTSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0osS0FBSyxDQUFDLENBQUM7eUJBQUE7Ozs7OzRCQUMzRDtrQ0FDRiw4REFBQ1IsT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLGFBQWE7a0NBQUMsY0FBWTs7Ozs7NEJBQVE7a0NBQ2pELDhEQUFDQyxPQUFLO3dCQUNGQyxJQUFJLEVBQUMsT0FBTzt3QkFDWkMsRUFBRSxFQUFDLGFBQWE7d0JBQ2hCQyxJQUFJLEVBQUMsYUFBYTt3QkFDbEJHLEtBQUssRUFBRWYsY0FBYzt3QkFDckJnQixRQUFRLEVBQUUsU0FBQ0MsQ0FBQzttQ0FBS2hCLGlCQUFpQixDQUFDZ0IsQ0FBQyxDQUFDRSxNQUFNLENBQUNKLEtBQUssQ0FBQzt5QkFBQTs7Ozs7NEJBQ3BEOzs7Ozs7b0JBQ0M7Ozs7O2dCQUNEO3FCQUNYLENBQ047Q0FDSjtHQTVDZXJCLGFBQWE7QUFBYkEsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvYnVpbGRlci9IZWFkZXJCdWlsZGVyLnRzeD82YzU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlckJ1aWxkZXIubW9kdWxlLnNjc3MnXG5cbmludGVyZmFjZSBIZWFkZXJCdWlsZGVyIHtcbiAgICBIZWFkZXJCdWlsZGVyUHJvcHM6ICh7fSkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyQnVpbGRlcih7SGVhZGVyQnVpbGRlclByb3BzfTogSGVhZGVyQnVpbGRlcikge1xuICAgIGNvbnN0IFtsb2dvU2l6ZVZhbHVlLCBzZXRMb2dvU2l6ZVZhbHVlXSA9IHVzZVN0YXRlKDEwMClcbiAgICBjb25zdCBbaWNvblNpemVWYWx1ZSwgc2V0SWNvblNpemVWYWx1ZV0gPSB1c2VTdGF0ZSgyNSlcbiAgICBjb25zdCBbaWNvbkNvbG9yVmFsdWUsIHNldEljb25Db2xvclZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHtsb2dvU2l6ZVZhbHVlLCBpY29uU2l6ZVZhbHVlLCBpY29uQ29sb3JWYWx1ZX0pXG4gICAgICBIZWFkZXJCdWlsZGVyUHJvcHMoe2xvZ29TaXplVmFsdWUsIGljb25TaXplVmFsdWUsIGljb25Db2xvclZhbHVlfSlcbiAgICB9LCBbbG9nb1NpemVWYWx1ZSwgaWNvblNpemVWYWx1ZSwgaWNvbkNvbG9yVmFsdWVdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlckJ1aWxkZXJ9PlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2dvLXNpemVcIj5Mb2dvIFNpemU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxvZ28tc2l6ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvZ28tc2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIxMDBcIiBtYXg9XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xvZ29TaXplVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvZ29TaXplVmFsdWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9IFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImljb25zLXNpemVcIj5JY29ucyBTaXplOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpY29ucy1zaXplXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWNvbnMtc2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIyMFwiIG1heD1cIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpY29uU2l6ZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJY29uU2l6ZVZhbHVlKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfSBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpY29ucy1jb2xvclwiPkljb25zIENvbG9yOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpY29ucy1jb2xvclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImljb25zLWNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpY29uQ29sb3JWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWNvbkNvbG9yVmFsdWUoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIZWFkZXJCdWlsZGVyIiwiSGVhZGVyQnVpbGRlclByb3BzIiwibG9nb1NpemVWYWx1ZSIsInNldExvZ29TaXplVmFsdWUiLCJpY29uU2l6ZVZhbHVlIiwic2V0SWNvblNpemVWYWx1ZSIsImljb25Db2xvclZhbHVlIiwic2V0SWNvbkNvbG9yVmFsdWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZm9ybSIsImFjdGlvbiIsIm1ldGhvZCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsIm1pbiIsIm1heCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwiTnVtYmVyIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/builder/HeaderBuilder.tsx\n");

/***/ })

});