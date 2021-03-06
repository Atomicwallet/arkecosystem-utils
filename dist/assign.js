"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assign = (target, ...sources) => {
    for (let i = 0; i < sources.length; i++) {
        const source = sources[i];
        const keys = Object.keys(source);
        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];
            target[key] = source[key];
        }
    }
    return target;
};
//# sourceMappingURL=assign.js.map