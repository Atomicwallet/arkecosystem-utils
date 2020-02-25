"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_array_1 = require("../map-array");
const reduce_array_1 = require("../reduce-array");
const words_1 = require("../words");
exports.compoundWords = (value, transformer) => reduce_array_1.reduceArray(map_array_1.mapArray(words_1.words(value), w => w.toLowerCase()), transformer, "");
//# sourceMappingURL=compound-words.js.map