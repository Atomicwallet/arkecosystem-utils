"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UNITS = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
exports.formatBytes = (bytes) => {
    if (bytes === 0 || bytes < 1) {
        return `${bytes} ${UNITS[0]}`;
    }
    const exponent = Math.min(Math.floor(Math.log10(bytes) / 3), UNITS.length - 1);
    return Number((bytes / Math.pow(1000, exponent)).toPrecision(3)).toLocaleString() + " " + UNITS[exponent];
};
//# sourceMappingURL=format-bytes.js.map