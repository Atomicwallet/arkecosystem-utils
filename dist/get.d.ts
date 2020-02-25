/**
 * This behaves like lodash.get with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
export declare const get: <T>(object: object, path: string | string[], defaultValue?: T) => T;
