"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filter_array_1 = require("./filter-array");
const filter_object_1 = require("./filter-object");
const is_array_1 = require("./is-array");
exports.filter = (iterable, iteratee) => is_array_1.isArray(iterable) ? filter_array_1.filterArray(iterable, iteratee) : filter_object_1.filterObject(iterable, iteratee);
//# sourceMappingURL=filter.js.map