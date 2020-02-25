"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("./internal");
const is_empty_1 = require("./is-empty");
/**
 * This behaves like lodash.get with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
exports.get = (object, path, defaultValue) => {
    if (is_empty_1.isEmpty(object)) {
        return defaultValue;
    }
    const fragments = internal_1.castPath(path);
    let index = 0;
    const length = fragments.length;
    while (object != null && index < length) {
        object = object[fragments[index++]];
    }
    return (object || defaultValue);
};
//# sourceMappingURL=get.js.map