"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.words = (value) => value.match(/[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g);
//# sourceMappingURL=words.js.map