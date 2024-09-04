"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.tsx\");\n/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/slider */ \"(app-pages-browser)/./components/ui/slider.tsx\");\n/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ \"(app-pages-browser)/./components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [quality, setQuality] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(50);\n    const [promptWeight, setPromptWeight] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(0.5);\n    const [aspectRatio, setAspectRatio] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(\"16:9\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-8\",\n                children: \"Flux 图片生成器\"\n            }, void 0, false, {\n                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_1__.Textarea, {\n                        placeholder: \"输入你的提示词\",\n                        className: \"w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"quality-slider\",\n                                className: \"block mb-2\",\n                                children: \"图片质量\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                                id: \"quality-slider\",\n                                min: 0,\n                                max: 100,\n                                value: [\n                                    quality\n                                ],\n                                onValueChange: (value)=>setQuality(value[0]),\n                                step: 1,\n                                className: \"w-full\",\n                                showValue: true\n                            }, void 0, false, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"prompt-weight-slider\",\n                                className: \"block mb-2\",\n                                children: \"提示词权重\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                                id: \"prompt-weight-slider\",\n                                min: 0,\n                                max: 1,\n                                value: [\n                                    promptWeight\n                                ],\n                                onValueChange: (value)=>setPromptWeight(value[0]),\n                                step: 0.01,\n                                className: \"w-full\",\n                                showValue: true\n                            }, void 0, false, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block mb-2\",\n                                children: \"图片比例\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuTrigger, {\n                                        asChild: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            variant: \"outline\",\n                                            className: \"w-full justify-between h-9 px-4 py-2\",\n                                            children: [\n                                                aspectRatio,\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-2\",\n                                                    children: \"▼\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuContent, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {\n                                                onClick: ()=>setAspectRatio(\"16:9\"),\n                                                children: \"16:9\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {\n                                                onClick: ()=>setAspectRatio(\"9:16\"),\n                                                children: \"9:16\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {\n                                                onClick: ()=>setAspectRatio(\"1:1\"),\n                                                children: \"1:1\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        className: \"w-full bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 py-2\",\n                        variant: \"default\",\n                        children: \"生成图像\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 w-full max-w-md h-64 bg-gray-800 border border-gray-700 rounded flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-400\",\n                    children: \"生成的图像将显示在这里\"\n                }, void 0, false, {\n                    fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"f1LhRXU5426qzH+YQx/WAJlu4/E=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRW9EO0FBQ0o7QUFDeUU7QUFDekU7QUFDdEI7QUFFWCxTQUFTUTs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILHFEQUFjLENBQUM7SUFDN0MsTUFBTSxDQUFDSyxjQUFjQyxnQkFBZ0IsR0FBR04scURBQWMsQ0FBQztJQUN2RCxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IscURBQWMsQ0FBQztJQUVyRCxxQkFDRSw4REFBQ1M7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUV4Qyw4REFBQ0U7Z0JBQUlGLFdBQVU7O2tDQUNiLDhEQUFDakIsNkRBQVFBO3dCQUNQb0IsYUFBWTt3QkFDWkgsV0FBVTs7Ozs7O2tDQUdaLDhEQUFDRTt3QkFBSUYsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFNQyxTQUFRO2dDQUFpQkwsV0FBVTswQ0FBYTs7Ozs7OzBDQUN2RCw4REFBQ2hCLHlEQUFNQTtnQ0FDTHNCLElBQUc7Z0NBQ0hDLEtBQUs7Z0NBQ0xDLEtBQUs7Z0NBQ0xDLE9BQU87b0NBQUNqQjtpQ0FBUTtnQ0FDaEJrQixlQUFlLENBQUNELFFBQVVoQixXQUFXZ0IsS0FBSyxDQUFDLEVBQUU7Z0NBQzdDRSxNQUFNO2dDQUNOWCxXQUFVO2dDQUNWWSxXQUFXOzs7Ozs7Ozs7Ozs7a0NBSWYsOERBQUNWO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQU1DLFNBQVE7Z0NBQXVCTCxXQUFVOzBDQUFhOzs7Ozs7MENBQzdELDhEQUFDaEIseURBQU1BO2dDQUNMc0IsSUFBRztnQ0FDSEMsS0FBSztnQ0FDTEMsS0FBSztnQ0FDTEMsT0FBTztvQ0FBQ2Q7aUNBQWE7Z0NBQ3JCZSxlQUFlLENBQUNELFFBQVViLGdCQUFnQmEsS0FBSyxDQUFDLEVBQUU7Z0NBQ2xERSxNQUFNO2dDQUNOWCxXQUFVO2dDQUNWWSxXQUFXOzs7Ozs7Ozs7Ozs7a0NBSWYsOERBQUNWO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQU1KLFdBQVU7MENBQWE7Ozs7OzswQ0FDOUIsOERBQUNmLHNFQUFZQTs7a0RBQ1gsOERBQUNHLDZFQUFtQkE7d0NBQUN5QixPQUFPO2tEQUMxQiw0RUFBQ3hCLHlEQUFNQTs0Q0FBQ3lCLFNBQVE7NENBQVVkLFdBQVU7O2dEQUNqQ0g7OERBQ0QsOERBQUNrQjtvREFBS2YsV0FBVTs4REFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBRzNCLDhEQUFDZCw2RUFBbUJBOzswREFDbEIsOERBQUNDLDBFQUFnQkE7Z0RBQUM2QixTQUFTLElBQU1sQixlQUFlOzBEQUFTOzs7Ozs7MERBQ3pELDhEQUFDWCwwRUFBZ0JBO2dEQUFDNkIsU0FBUyxJQUFNbEIsZUFBZTswREFBUzs7Ozs7OzBEQUN6RCw4REFBQ1gsMEVBQWdCQTtnREFBQzZCLFNBQVMsSUFBTWxCLGVBQWU7MERBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLOUQsOERBQUNULHlEQUFNQTt3QkFDTFcsV0FBVTt3QkFDVmMsU0FBUTtrQ0FDVDs7Ozs7Ozs7Ozs7OzBCQUtILDhEQUFDWjtnQkFBSUYsV0FBVTswQkFDYiw0RUFBQ2lCO29CQUFFakIsV0FBVTs4QkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJDO0dBekV3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCI7XG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NsaWRlclwiO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51LCBEcm9wZG93bk1lbnVDb250ZW50LCBEcm9wZG93bk1lbnVJdGVtLCBEcm9wZG93bk1lbnVUcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3F1YWxpdHksIHNldFF1YWxpdHldID0gUmVhY3QudXNlU3RhdGUoNTApO1xuICBjb25zdCBbcHJvbXB0V2VpZ2h0LCBzZXRQcm9tcHRXZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoMC41KTtcbiAgY29uc3QgW2FzcGVjdFJhdGlvLCBzZXRBc3BlY3RSYXRpb10gPSBSZWFjdC51c2VTdGF0ZShcIjE2OjlcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS05MDAgdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItOFwiPkZsdXgg5Zu+54mH55Sf5oiQ5ZmoPC9oMT5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWRcIj5cbiAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLovpPlhaXkvaDnmoTmj5DnpLror41cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgbWItNCBiZy1ncmF5LTgwMCBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQgdGV4dC13aGl0ZVwiXG4gICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1YWxpdHktc2xpZGVyXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMlwiPuWbvueJh+i0qOmHjzwvbGFiZWw+XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgaWQ9XCJxdWFsaXR5LXNsaWRlclwiXG4gICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgICAgIHZhbHVlPXtbcXVhbGl0eV19XG4gICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWUpID0+IHNldFF1YWxpdHkodmFsdWVbMF0pfVxuICAgICAgICAgICAgc3RlcD17MX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICBzaG93VmFsdWU9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcm9tcHQtd2VpZ2h0LXNsaWRlclwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTJcIj7mj5DnpLror43mnYPph408L2xhYmVsPlxuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIGlkPVwicHJvbXB0LXdlaWdodC1zbGlkZXJcIlxuICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgbWF4PXsxfVxuICAgICAgICAgICAgdmFsdWU9e1twcm9tcHRXZWlnaHRdfVxuICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17KHZhbHVlKSA9PiBzZXRQcm9tcHRXZWlnaHQodmFsdWVbMF0pfVxuICAgICAgICAgICAgc3RlcD17MC4wMX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICBzaG93VmFsdWU9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTJcIj7lm77niYfmr5Tkvos8L2xhYmVsPlxuICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51VHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktYmV0d2VlbiBoLTkgcHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgICAge2FzcGVjdFJhdGlvfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj7ilrw8L3NwYW4+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHNldEFzcGVjdFJhdGlvKFwiMTY6OVwiKX0+MTY6OTwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gb25DbGljaz17KCkgPT4gc2V0QXNwZWN0UmF0aW8oXCI5OjE2XCIpfT45OjE2PC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBzZXRBc3BlY3RSYXRpbyhcIjE6MVwiKX0+MToxPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVDb250ZW50PlxuICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGgtOSBweC00IHB5LTJcIiBcbiAgICAgICAgICB2YXJpYW50PVwiZGVmYXVsdFwiXG4gICAgICAgID5cbiAgICAgICAgICDnlJ/miJDlm77lg49cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHctZnVsbCBtYXgtdy1tZCBoLTY0IGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+55Sf5oiQ55qE5Zu+5YOP5bCG5pi+56S65Zyo6L+Z6YeMPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRleHRhcmVhIiwiU2xpZGVyIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51Q29udGVudCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJEcm9wZG93bk1lbnVUcmlnZ2VyIiwiQnV0dG9uIiwiUmVhY3QiLCJIb21lIiwicXVhbGl0eSIsInNldFF1YWxpdHkiLCJ1c2VTdGF0ZSIsInByb21wdFdlaWdodCIsInNldFByb21wdFdlaWdodCIsImFzcGVjdFJhdGlvIiwic2V0QXNwZWN0UmF0aW8iLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJkaXYiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwiaHRtbEZvciIsImlkIiwibWluIiwibWF4IiwidmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwic3RlcCIsInNob3dWYWx1ZSIsImFzQ2hpbGQiLCJ2YXJpYW50Iiwic3BhbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});