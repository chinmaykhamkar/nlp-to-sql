declare function sortObject<T>(object: T, options?: sortObject.IOptions & {
    useSource: true;
}): T;
declare namespace sortObject {
    var default: typeof sortObject;
}
declare function sortObject<T>(object: T, options?: sortObject.IOptions & {
    keys: string[];
    onlyKeys: true;
}): Partial<T>;
declare namespace sortObject {
    var default: typeof sortObject;
}
declare function sortObject<T>(object: T, options?: sortObject.IOptions): Partial<T>;
declare namespace sortObject {
    var default: typeof sortObject;
}
declare function sortObject<T>(object: T, sortFn: (a: any, b: any) => any): Partial<T>;
declare namespace sortObject {
    var default: typeof sortObject;
}
declare function sortObject<T>(object: T, sortWith: string[]): Partial<T>;
declare namespace sortObject {
    var default: typeof sortObject;
}
declare module sortObject {
    interface IOptions {
        /**
         * key order
         */
        keys?: string[];
        /**
         * return Object only keys
         * will disable useSource
         */
        onlyKeys?: boolean;
        /**
         * sort callback
         *
         * @param a
         * @param b
         * @returns {any}
         */
        sort?: (a: any, b: any) => any;
        /**
         * return reversed Object
         */
        desc?: boolean;
        allowNotExists?: boolean;
        /**
         * return source Object
         */
        useSource?: boolean;
    }
    const sortObjectKeys: typeof sortObject;
}
export { sortObject };
export default sortObject;
