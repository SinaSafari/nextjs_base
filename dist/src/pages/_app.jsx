"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/globals.scss");
var theme_1 = require("@/styles/theme");
var react_redux_1 = require("react-redux");
var index_1 = require("@/store/index");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<react_redux_1.Provider store={index_1.store}>
      <theme_1.ChakraRTLProvider>
        <theme_1.Fonts />
        <Component {...pageProps}/>
      </theme_1.ChakraRTLProvider>
    </react_redux_1.Provider>);
}
exports.default = MyApp;
