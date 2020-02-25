"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fill = (subject, value, start, end) => {
    if (start === undefined) {
        start = 0;
    }
    if (end === undefined) {
        end = subject.length;
    }
    for (let i = start; i < end; i++) {
        subject[i] = value;
    }
    return subject;
};
//# sourceMappingURL=fill.js.map