"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("./internal");
exports.dotCase = (value) => internal_1.compoundWords(value, (result, word, index) => result + (index ? "." : "") + word);
//# sourceMappingURL=dot-case.js.map