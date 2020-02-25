/**
 * This behaves like lodash.set with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
export declare const set: <T>(object: T, path: string | string[], value: unknown) => boolean;
