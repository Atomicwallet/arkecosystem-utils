"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clone_array_1 = require("./clone-array");
const clone_object_1 = require("./clone-object");
const is_array_1 = require("./is-array");
exports.clone = (iterable) => is_array_1.isArray(iterable) ? clone_array_1.cloneArray(iterable) : clone_object_1.cloneObject(iterable);
//# sourceMappingURL=clone.js.map