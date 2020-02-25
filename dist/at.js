"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = require("./get");
const map_object_1 = require("./map-object");
/**
 * This behaves like lodash.at with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
exports.at = (object, paths) => Object.values(map_object_1.mapObject(paths, (path) => get_1.get(object, path)));
//# sourceMappingURL=at.js.map