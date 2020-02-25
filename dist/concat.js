"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_array_1 = require("./is-array");
exports.concat = (...values) => {
    const result = [];
    let item;
    let childLength;
    for (let i = 0; i < values.length; i++) {
        item = values[i];
        if (is_array_1.isArray(item)) {
            childLength = item.length;
            for (let j = 0; j < childLength; j++) {
                result.push(item[j]);
            }
        }
        else {
            result.push(item);
        }
    }
    return result;
};
//# sourceMappingURL=concat.js.map