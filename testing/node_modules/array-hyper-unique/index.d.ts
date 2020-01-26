/**
 * Created by user on 2018/5/30/030.
 */
declare function lazy_unique<T extends any[]>(arr: T): T;
declare function lazy_unique<T, T1, T2>(a1: T1, a2: T2, ...arr: T[]): Array<T | T1 | T2>;
declare function lazy_unique<T>(...arr: Array<T | T[]>): T | (T | T[])[];
declare module lazy_unique {
    export function lazy_unique<T extends any[]>(arr: T): T;
    export function lazy_unique<T, T1, T2>(a1: T1, a2: T2, ...arr: T[]): Array<T | T1 | T2>;
    export function lazy_unique<T>(...arr: Array<T | T[]>): T | (T | T[])[];
    export function array_unique<T>(arr: T, options?: {
        checker?(element: T[keyof T], array: T[keyof T], arr_new?: T, arr_old?: T): boolean;
        checker?<R>(element: R[keyof R], array: R[keyof R], arr_new?: R, arr_old?: R): boolean;
        overwrite?: boolean;
        filter?(v: T[keyof T]): boolean;
        filter?<R>(v: R[keyof R]): boolean;
    }): T;
    export function lazy_unique_overwrite<T>(...arr: Array<T | T[]>): T | (T | T[])[];
    export function array_unique_overwrite<T>(arr: T, options?: IOptions<T>): T;
    export type IOptions<T> = {
        checker?(element: T[keyof T], array: T[keyof T], arr_new?: T, arr_old?: T): boolean;
        checker?<R>(element: R[keyof R], array: R[keyof R], arr_new?: R, arr_old?: R): boolean;
        overwrite?: boolean;
        filter?(v: T[keyof T]): boolean;
        filter?<R>(v: R[keyof R]): boolean;
    };
    export function defaultFilter<T>(options?: IOptions<T>): <K extends any[]>(val: K[keyof K], index: number, arr: K) => boolean;
    export function defaultChecker<T, R>(element: T, value: R, arr_new?: Array<T | R>, arr_old?: Array<T | R>): boolean;
    export function equals(a1: any, a2: any): boolean;
    export { lazy_unique as default };
}
export default lazy_unique;
export = lazy_unique;
