"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("./internal");
const is_empty_1 = require("./is-empty");
/**
 * This behaves like lodash.has with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
exports.has = (object, path) => {
    if (is_empty_1.isEmpty(object)) {
        return false;
    }
    const fragments = internal_1.castPath(path);
    let index = 0;
    const length = fragments.length;
    while (object != null && index < length) {
        object = object[fragments[index++]];
    }
    return !!object;
};
//# sourceMappingURL=has.js.map