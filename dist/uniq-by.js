"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqBy = (iterable, iteratee) => {
    const result = [];
    const set = new Set();
    for (let i = 0; i < iterable.length; i++) {
        const value = iteratee(iterable[i]);
        if (set.has(value)) {
            continue;
        }
        set.add(value);
        result.push(iterable[i]);
    }
    return result;
};
//# sourceMappingURL=uniq-by.js.map