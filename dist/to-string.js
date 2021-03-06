"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_nil_1 = require("./is-nil");
const is_string_1 = require("./is-string");
exports.toString = (value) => {
    if (is_nil_1.isNil(value)) {
        return "";
    }
    return is_string_1.isString(value) ? value : String(value);
};
//# sourceMappingURL=to-string.js.map