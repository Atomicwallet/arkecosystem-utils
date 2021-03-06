"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_array_1 = require("./is-array");
const reduce_right_array_1 = require("./reduce-right-array");
const reduce_right_object_1 = require("./reduce-right-object");
exports.reduceRight = (iterable, iteratee, initialValue) => is_array_1.isArray(iterable)
    ? reduce_right_array_1.reduceRightArray(iterable, iteratee, initialValue)
    : reduce_right_object_1.reduceRightObject(iterable, iteratee, initialValue);
//# sourceMappingURL=reduce-right.js.map