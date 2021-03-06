"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluck = (input, field) => {
    const plucked = [];
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        const value = input[i];
        if (value != null && value[field] !== undefined) {
            plucked[count++] = value[field];
        }
    }
    return plucked;
};
//# sourceMappingURL=pluck.js.map