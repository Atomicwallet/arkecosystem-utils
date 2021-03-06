"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_array_1 = require("./is-array");
const reduce_array_1 = require("./reduce-array");
const reduce_object_1 = require("./reduce-object");
exports.reduce = (iterable, iteratee, initialValue) => is_array_1.isArray(iterable) ? reduce_array_1.reduceArray(iterable, iteratee, initialValue) : reduce_object_1.reduceObject(iterable, iteratee, initialValue);
//# sourceMappingURL=reduce.js.map