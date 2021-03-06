"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filter_1 = require("./filter");
exports.pullAllBy = (iterable, values, iteratee) => {
    const iterateeValues = {};
    return filter_1.filter(iterable, iterableItem => {
        const itemValue = iteratee(iterableItem);
        if (!iterateeValues[itemValue]) {
            iterateeValues[itemValue] = values.map(value => iteratee(value));
        }
        return !iterateeValues[itemValue].includes(itemValue);
    });
};
//# sourceMappingURL=pull-all-by.js.map