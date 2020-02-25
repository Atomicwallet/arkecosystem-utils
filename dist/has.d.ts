/**
 * This behaves like lodash.has with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
export declare const has: (object: object, path: string | string[]) => boolean;
