"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filter_object_1 = require("./filter-object");
exports.findKey = (iterable, iteratee) => Object.keys(filter_object_1.filterObject(iterable, iteratee))[0];
//# sourceMappingURL=find-key.js.map