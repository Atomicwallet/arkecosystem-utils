"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const has_property_1 = require("./has-property");
const some_1 = require("./some");
exports.hasSomeProperty = (object, props) => some_1.some(props, (prop) => has_property_1.hasProperty(object, prop));
//# sourceMappingURL=has-some-property.js.map