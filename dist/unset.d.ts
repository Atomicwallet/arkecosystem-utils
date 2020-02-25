/**
 * This behaves like lodash.unset with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
export declare const unset: (object: object, path: string | string[]) => boolean;
