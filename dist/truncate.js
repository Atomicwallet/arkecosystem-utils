"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_less_than_or_equal_1 = require("./is-less-than-or-equal");
exports.truncate = (value, options = {
    length: 30,
    omission: "...",
    omissionPosition: "right",
}) => {
    if (!options.length || options.length < 0) {
        options.length = 30;
    }
    if (!options.omission) {
        options.omission = "...";
    }
    if (!options.omissionPosition) {
        options.omissionPosition = "right";
    }
    const totalLength = value.length + options.omission.length;
    if (is_less_than_or_equal_1.isLessThanOrEqual(totalLength, options.length)) {
        return value;
    }
    if (options.omissionPosition === "right") {
        return value.substring(0, options.length - options.omission.length) + options.omission;
    }
    if (options.omissionPosition === "middle") {
        const odd = options.length % 2;
        const truncationLength = Math.floor((options.length - 1) / 2);
        return `${value.slice(0, truncationLength - odd)}${options.omission}${value.slice(value.length - truncationLength + 1)}`;
    }
    return options.omission + value.substring(value.length - options.length + options.omission.length);
};
//# sourceMappingURL=truncate.js.map