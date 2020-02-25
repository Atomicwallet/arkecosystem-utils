"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = (value) => {
    try {
        return JSON.stringify(value);
    }
    catch (_a) {
        return undefined;
    }
};
//# sourceMappingURL=stringify.js.map