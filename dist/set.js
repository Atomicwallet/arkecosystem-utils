"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const has_property_1 = require("./has-property");
const internal_1 = require("./internal");
const is_object_1 = require("./is-object");
/**
 * This behaves like lodash.set with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
exports.set = (object, path, value) => {
    if (!is_object_1.isObject(object)) {
        return false;
    }
    const fragments = internal_1.castPath(path);
    let index = 0;
    const length = fragments.length;
    while (object != null && index < length) {
        const key = fragments[index++];
        if (index === length) {
            object[key] = value;
            break;
        }
        if (!has_property_1.hasProperty(object, key)) {
            object[key] = {};
        }
        object = object[key];
    }
    return !!object;
};
//# sourceMappingURL=set.js.map