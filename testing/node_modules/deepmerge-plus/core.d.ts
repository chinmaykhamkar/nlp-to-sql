declare function deepmerge<T1, T2>(x: T1, y: T2, options?: deepmerge.Options): Partial<T1 & T2>;
declare namespace deepmerge {
    var deepmerge: typeof deepmerge;
    var default: typeof deepmerge;
}
declare function deepmerge<T>(x: Partial<T>, y: Partial<T>, options?: deepmerge.Options): Partial<T>;
declare namespace deepmerge {
    var deepmerge: typeof deepmerge;
    var default: typeof deepmerge;
}
declare namespace deepmerge {
    interface ICache {
        key?: any;
        source?: any;
        target?: any;
        destination?: any;
    }
    interface Options {
        clone?: boolean;
        arrayMerge?(destination: any[], source: any[], options?: Options): any[];
        isMergeableObject?(value: any, isMergeableObject: (value: any) => boolean, optionsArgument?: Options, key?: any): void;
        isMergeableObject?(value: any, isMergeableObject: (value: any) => boolean, optionsArgument?: Options, key?: any): boolean;
        /**
         * (val = old || new) mode
         */
        keyValueOrMode?: boolean;
    }
    const isMergeable: (value: any) => boolean;
    const SYMBOL_IS_MERGEABLE: unique symbol;
    const all: <T, T2 = any>(array: Partial<T2 & T>[], optionsArgument?: Options) => T2 & T;
}
export { deepmerge };
export default deepmerge;
declare global {
    interface Window {
        deepmerge<T>(x: Partial<T>, y: Partial<T>, options?: deepmerge.Options): T;
        deepmerge<T1, T2>(x: T1, y: T2, options?: deepmerge.Options): T1 & T2;
    }
}
