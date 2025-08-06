"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEmit = void 0;
var useEmit = function (emitName, data) {
    return function () {
        var event = new CustomEvent(emitName, {
            detail: data,
        });
        window.dispatchEvent(event);
    };
};
exports.useEmit = useEmit;
