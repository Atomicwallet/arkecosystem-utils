"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_map_1 = require("./is-map");
exports.isEmptyMap = (value) => is_map_1.isMap(value) && value.size <= 0;
//# sourceMappingURL=is-empty-map.js.map