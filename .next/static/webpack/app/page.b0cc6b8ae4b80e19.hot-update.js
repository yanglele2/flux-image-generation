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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.tsx\");\n/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/slider */ \"(app-pages-browser)/./components/ui/slider.tsx\");\n/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ \"(app-pages-browser)/./components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/checkbox */ \"(app-pages-browser)/./components/ui/checkbox.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [quality, setQuality] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(50);\n    const [promptWeight, setPromptWeight] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(0.5);\n    const [aspectRatio, setAspectRatio] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(\"16:9\");\n    const [imageFormat, setImageFormat] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(\"png\");\n    const [disableSafetyCheck, setDisableSafetyCheck] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-8\",\n                children: \"Flux 图片生成器\"\n            }, void 0, false, {\n                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_1__.Textarea, {\n                        placeholder: \"输入你的提示词\",\n                        className: \"w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"quality-slider\",\n                                className: \"block mb-2\",\n                                children: \"图片质量\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                                id: \"quality-slider\",\n                                min: 0,\n                                max: 100,\n                                value: [\n                                    quality\n                                ],\n                                onValueChange: (value)=>setQuality(value[0]),\n                                step: 1,\n                                className: \"w-full\",\n                                showValue: true\n                            }, void 0, false, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"prompt-weight-slider\",\n                                className: \"block mb-2\",\n                                children: \"提示词权重\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                                id: \"prompt-weight-slider\",\n                                min: 0,\n                                max: 1,\n                                value: [\n                                    promptWeight\n                                ],\n                                onValueChange: (value)=>setPromptWeight(value[0]),\n                                step: 0.01,\n                                className: \"w-full\",\n                                showValue: true\n                            }, void 0, false, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block mb-2\",\n                                children: \"图片比例\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuTrigger, {\n                                        asChild: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            variant: \"outline\",\n                                            className: \"w-full justify-between h-9 px-4 py-2 text-black bg-white\",\n                                            children: [\n                                                aspectRatio,\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-2\",\n                                                    children: \"▼\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuContent, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {\n                                                onClick: ()=>setAspectRatio(\"16:9\"),\n                                                children: \"16:9\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {\n                                                onClick: ()=>setAspectRatio(\"9:16\"),\n                                                children: \"9:16\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {\n                                                onClick: ()=>setAspectRatio(\"1:1\"),\n                                                children: \"1:1\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block mb-2\",\n                                children: \"选择图片格式\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuTrigger, {\n                                        asChild: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            variant: \"outline\",\n                                            className: \"w-full justify-between h-9 px-4 py-2 text-black bg-white\",\n                                            children: [\n                                                imageFormat,\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-2\",\n                                                    children: \"▼\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuContent, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {\n                                                onClick: ()=>setImageFormat(\"png\"),\n                                                children: \"png\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {\n                                                onClick: ()=>setImageFormat(\"jpg\"),\n                                                children: \"jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {\n                                                onClick: ()=>setImageFormat(\"webp\"),\n                                                children: \"webp\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {\n                                id: \"disable-safety-check\",\n                                checked: disableSafetyCheck,\n                                onCheckedChange: (checked)=>setDisableSafetyCheck(checked)\n                            }, void 0, false, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"disable-safety-check\",\n                                className: \"ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70\",\n                                children: \"Disable Safety Check\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        className: \"w-full bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 py-2\",\n                        variant: \"default\",\n                        children: \"生成图像\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 w-full max-w-md h-64 bg-gray-800 border border-gray-700 rounded flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-400\",\n                    children: \"生成的图像将显示在这里\"\n                }, void 0, false, {\n                    fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yanglele/fluxy/app/page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"oP4EzCupV2fr5E3nBbXOfDfYCQQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLElBQU1wQixlQUFlOzBEQUFROzs7Ozs7MERBQ3hELDhEQUFDZCwwRUFBZ0JBO2dEQUFDa0MsU0FBUyxJQUFNcEIsZUFBZTswREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUsvRCw4REFBQ007d0JBQUlGLFdBQVU7OzBDQUNiLDhEQUFDZCw2REFBUUE7Z0NBQ1BvQixJQUFHO2dDQUNIVyxTQUFTcEI7Z0NBQ1RxQixpQkFBaUIsQ0FBQ0QsVUFBWW5CLHNCQUFzQm1COzs7Ozs7MENBRXRELDhEQUFDYjtnQ0FDQ0MsU0FBUTtnQ0FDUkwsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7O2tDQUtILDhEQUFDaEIseURBQU1BO3dCQUNMZ0IsV0FBVTt3QkFDVmMsU0FBUTtrQ0FDVDs7Ozs7Ozs7Ozs7OzBCQUtILDhEQUFDWjtnQkFBSUYsV0FBVTswQkFDYiw0RUFBQ21CO29CQUFFbkIsV0FBVTs4QkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJDO0dBMUd3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCI7XG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NsaWRlclwiO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51LCBEcm9wZG93bk1lbnVDb250ZW50LCBEcm9wZG93bk1lbnVJdGVtLCBEcm9wZG93bk1lbnVUcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jaGVja2JveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcXVhbGl0eSwgc2V0UXVhbGl0eV0gPSBSZWFjdC51c2VTdGF0ZSg1MCk7XG4gIGNvbnN0IFtwcm9tcHRXZWlnaHQsIHNldFByb21wdFdlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSgwLjUpO1xuICBjb25zdCBbYXNwZWN0UmF0aW8sIHNldEFzcGVjdFJhdGlvXSA9IFJlYWN0LnVzZVN0YXRlKFwiMTY6OVwiKTtcbiAgY29uc3QgW2ltYWdlRm9ybWF0LCBzZXRJbWFnZUZvcm1hdF0gPSBSZWFjdC51c2VTdGF0ZShcInBuZ1wiKTtcbiAgY29uc3QgW2Rpc2FibGVTYWZldHlDaGVjaywgc2V0RGlzYWJsZVNhZmV0eUNoZWNrXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi04XCI+Rmx1eCDlm77niYfnlJ/miJDlmag8L2gxPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZFwiPlxuICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIui+k+WFpeS9oOeahOaPkOekuuivjVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBtYi00IGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgLz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVhbGl0eS1zbGlkZXJcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yXCI+5Zu+54mH6LSo6YePPC9sYWJlbD5cbiAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICBpZD1cInF1YWxpdHktc2xpZGVyXCJcbiAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgICAgdmFsdWU9e1txdWFsaXR5XX1cbiAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0UXVhbGl0eSh2YWx1ZVswXSl9XG4gICAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgIHNob3dWYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb21wdC13ZWlnaHQtc2xpZGVyXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMlwiPuaPkOekuuivjeadg+mHjTwvbGFiZWw+XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgaWQ9XCJwcm9tcHQtd2VpZ2h0LXNsaWRlclwiXG4gICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICB2YWx1ZT17W3Byb21wdFdlaWdodF19XG4gICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWUpID0+IHNldFByb21wdFdlaWdodCh2YWx1ZVswXSl9XG4gICAgICAgICAgICBzdGVwPXswLjAxfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgIHNob3dWYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMlwiPuWbvueJh+avlOS+izwvbGFiZWw+XG4gICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGgtOSBweC00IHB5LTIgdGV4dC1ibGFjayBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIHthc3BlY3RSYXRpb31cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+4pa8PC9zcGFuPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51VHJpZ2dlcj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVDb250ZW50PlxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBzZXRBc3BlY3RSYXRpbyhcIjE2OjlcIil9PjE2Ojk8L0Ryb3Bkb3duTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHNldEFzcGVjdFJhdGlvKFwiOToxNlwiKX0+OToxNjwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gb25DbGljaz17KCkgPT4gc2V0QXNwZWN0UmF0aW8oXCIxOjFcIil9PjE6MTwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cbiAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTJcIj7pgInmi6nlm77niYfmoLzlvI88L2xhYmVsPlxuICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51VHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktYmV0d2VlbiBoLTkgcHgtNCBweS0yIHRleHQtYmxhY2sgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICB7aW1hZ2VGb3JtYXR9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPuKWvDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudVRyaWdnZXI+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51Q29udGVudD5cbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gb25DbGljaz17KCkgPT4gc2V0SW1hZ2VGb3JtYXQoXCJwbmdcIil9PnBuZzwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gb25DbGljaz17KCkgPT4gc2V0SW1hZ2VGb3JtYXQoXCJqcGdcIil9PmpwZzwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gb25DbGljaz17KCkgPT4gc2V0SW1hZ2VGb3JtYXQoXCJ3ZWJwXCIpfT53ZWJwPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVDb250ZW50PlxuICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgIGlkPVwiZGlzYWJsZS1zYWZldHktY2hlY2tcIlxuICAgICAgICAgICAgY2hlY2tlZD17ZGlzYWJsZVNhZmV0eUNoZWNrfVxuICAgICAgICAgICAgb25DaGVja2VkQ2hhbmdlPXsoY2hlY2tlZCkgPT4gc2V0RGlzYWJsZVNhZmV0eUNoZWNrKGNoZWNrZWQgYXMgYm9vbGVhbil9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9XCJkaXNhYmxlLXNhZmV0eS1jaGVja1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy1ub25lIHBlZXItZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIHBlZXItZGlzYWJsZWQ6b3BhY2l0eS03MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGlzYWJsZSBTYWZldHkgQ2hlY2tcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGgtOSBweC00IHB5LTJcIiBcbiAgICAgICAgICB2YXJpYW50PVwiZGVmYXVsdFwiXG4gICAgICAgID5cbiAgICAgICAgICDnlJ/miJDlm77lg49cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHctZnVsbCBtYXgtdy1tZCBoLTY0IGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+55Sf5oiQ55qE5Zu+5YOP5bCG5pi+56S65Zyo6L+Z6YeMPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRleHRhcmVhIiwiU2xpZGVyIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51Q29udGVudCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJEcm9wZG93bk1lbnVUcmlnZ2VyIiwiQnV0dG9uIiwiUmVhY3QiLCJDaGVja2JveCIsIkhvbWUiLCJxdWFsaXR5Iiwic2V0UXVhbGl0eSIsInVzZVN0YXRlIiwicHJvbXB0V2VpZ2h0Iiwic2V0UHJvbXB0V2VpZ2h0IiwiYXNwZWN0UmF0aW8iLCJzZXRBc3BlY3RSYXRpbyIsImltYWdlRm9ybWF0Iiwic2V0SW1hZ2VGb3JtYXQiLCJkaXNhYmxlU2FmZXR5Q2hlY2siLCJzZXREaXNhYmxlU2FmZXR5Q2hlY2siLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJkaXYiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwiaHRtbEZvciIsImlkIiwibWluIiwibWF4IiwidmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwic3RlcCIsInNob3dWYWx1ZSIsImFzQ2hpbGQiLCJ2YXJpYW50Iiwic3BhbiIsIm9uQ2xpY2siLCJjaGVja2VkIiwib25DaGVja2VkQ2hhbmdlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});