"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_array_1 = require("./is-array");
const map_array_1 = require("./map-array");
const map_object_1 = require("./map-object");
exports.map = (iterable, iteratee) => is_array_1.isArray(iterable) ? map_array_1.mapArray(iterable, iteratee) : map_object_1.mapObject(iterable, iteratee);
//# sourceMappingURL=map.js.map