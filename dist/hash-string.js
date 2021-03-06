"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashString = (value) => {
    let hash = 5381;
    let remaining = value.length;
    while (remaining) {
        hash = (hash * 33) ^ value.charCodeAt(--remaining);
    }
    return hash >>> 0;
};
//# sourceMappingURL=hash-string.js.map