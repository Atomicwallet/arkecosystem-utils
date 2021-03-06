"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slice_1 = require("./slice");
exports.chunk = (iterable, chunkSize) => {
    const iterableLength = iterable.length;
    if (!iterableLength || chunkSize <= 0) {
        return [];
    }
    let index = 0;
    let resIndex = 0;
    const result = Array(Math.ceil(iterableLength / chunkSize));
    while (index < iterableLength) {
        result[resIndex++] = slice_1.slice(iterable, index, (index += chunkSize));
    }
    return result;
};
//# sourceMappingURL=chunk.js.map