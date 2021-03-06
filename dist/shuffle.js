"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clone_array_1 = require("./clone-array");
exports.shuffle = (iterable) => {
    const shuffledValues = clone_array_1.cloneArray(iterable);
    for (let i = 0; i < shuffledValues.length; i++) {
        const rand = Math.floor(Math.random() * (i + 1));
        const value = shuffledValues[i];
        shuffledValues[i] = shuffledValues[rand];
        shuffledValues[rand] = value;
    }
    return shuffledValues;
};
//# sourceMappingURL=shuffle.js.map