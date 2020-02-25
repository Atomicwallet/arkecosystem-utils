/**
 * This behaves like lodash.at with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
export declare const at: <T>(object: object, paths: string[]) => T[];
