"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("./internal");
const upper_first_1 = require("./upper-first");
exports.startCase = (value) => internal_1.compoundWords(value, (result, word, index) => result + (index ? " " : "") + upper_first_1.upperFirst(word));
//# sourceMappingURL=start-case.js.map