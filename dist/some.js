"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.some = (iterable, iteratee) => {
    for (let i = 0; i < iterable.length; i++) {
        if (iteratee(iterable[i], i, iterable)) {
            return true;
        }
    }
    return false;
};
//# sourceMappingURL=some.js.map