"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = (iterable, keys) => {
    const newValues = {};
    for (const key of keys) {
        newValues[key] = iterable[key];
    }
    return newValues;
};
//# sourceMappingURL=pick.js.map