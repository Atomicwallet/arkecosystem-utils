"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapValues = (iterable, iteratee) => {
    const keys = Object.keys(iterable);
    const result = {};
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        result[key] = iteratee(iterable[key], key, iterable);
    }
    return result;
};
//# sourceMappingURL=map-values.js.map