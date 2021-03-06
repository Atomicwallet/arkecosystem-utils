"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_of_1 = require("./index-of");
exports.uniq = (iterable) => {
    const result = [];
    for (let i = 0; i < iterable.length; i++) {
        const value = iterable[i];
        if (index_of_1.indexOf(result, value) > -1) {
            continue;
        }
        result.push(value);
    }
    return result;
};
//# sourceMappingURL=uniq.js.map