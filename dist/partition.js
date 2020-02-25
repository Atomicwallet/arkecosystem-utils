"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partition = (iterable, iteratee) => iterable.reduce((result, value) => (result[iteratee(value) ? 0 : 1].push(value), result), [[], []]);
//# sourceMappingURL=partition.js.map