"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useListen = void 0;
var react_1 = require("react");
var useListen = function (listenName, callback) {
    (0, react_1.useEffect)(function () {
        var eventHandler = function (event) {
            callback(event.detail);
        };
        window.addEventListener(listenName, eventHandler);
        // Cleanup listener when component unmounts
        return function () {
            window.removeEventListener(listenName, eventHandler);
        };
    }, [listenName, callback]);
};
exports.useListen = useListen;
