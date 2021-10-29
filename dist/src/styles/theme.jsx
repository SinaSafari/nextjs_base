"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChakraRTLProvider = exports.Fonts = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var react_3 = require("@emotion/react");
var Fonts = function () { return (<react_3.Global styles={"\n      @font-face {\n        font-family: 'irsans';\n        font-style: normal;\n        font-weight: 700;\n        font-display: swap;\n        src: url('../../public/fonts/irsans.ttf') format('ttf');\n      }\n      "}/>); };
exports.Fonts = Fonts;
var ChakraRTLProvider = function (_a) {
    var children = _a.children;
    var colors = {
        brand: {
            100: "#333",
        },
    };
    var fonts = {
        heading: "irsans",
        body: "irsans",
    };
    var theme = (0, react_2.extendTheme)({ colors: colors, direction: "rtl", fonts: fonts });
    return <react_2.ChakraProvider theme={theme}>{children}</react_2.ChakraProvider>;
};
exports.ChakraRTLProvider = ChakraRTLProvider;
