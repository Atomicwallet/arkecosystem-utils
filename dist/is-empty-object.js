"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_object_1 = require("./is-object");
exports.isEmptyObject = (value) => is_object_1.isObject(value) && Object.keys(value).length <= 0;
//# sourceMappingURL=is-empty-object.js.map