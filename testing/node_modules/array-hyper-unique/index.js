"use strict";
/**
 * Created by user on 2018/5/30/030.
 */
/*
function lazy_unique<T>(...arr: Array<T | T[]>)
{
    if (arr.length > 1)
    {
        return array_unique(arr);
    }

    return array_unique(arr[0]);
}
*/
var lazy_unique;
(function (lazy_unique_1) {
    // @ts-ignore
    const equals = require('deep-eql');
    // @ts-ignore
    function lazy_unique(...arr) {
        if (arr.length > 1) {
            return array_unique(arr);
        }
        return array_unique(arr[0]);
    }
    lazy_unique_1.lazy_unique = lazy_unique;
    function array_unique(arr, options = {}) {
        if (!Array.isArray(arr)) {
            throw new TypeError(`Expected an Array but got ${typeof arr}.`);
        }
        const cb = defaultFilter(options);
        if (options.overwrite) {
            let index = arr.length;
            while (index--) {
                let val = arr[index];
                if (!cb(val, index, arr)) {
                    arr.splice(index, 1);
                }
            }
            return arr;
        }
        // @ts-ignore
        return arr.filter(cb);
    }
    lazy_unique_1.array_unique = array_unique;
    function lazy_unique_overwrite(...arr) {
        if (arr.length > 1) {
            return array_unique_overwrite(arr);
        }
        return array_unique_overwrite(arr[0]);
    }
    lazy_unique_1.lazy_unique_overwrite = lazy_unique_overwrite;
    function array_unique_overwrite(arr, options = {}) {
        let opts = Object.assign({}, options, {
            overwrite: true,
        });
        return array_unique(arr, opts);
    }
    lazy_unique_1.array_unique_overwrite = array_unique_overwrite;
    function defaultFilter(options = {}) {
        const checker = options.checker || defaultChecker;
        const filter = options.filter || null;
        const cb = (val, index, arr) => {
            let i = arr.findIndex(a => checker(a, val, arr, arr));
            return i == index && (!filter || filter(val));
        };
        return cb;
    }
    lazy_unique_1.defaultFilter = defaultFilter;
    function defaultChecker(element, value, arr_new, arr_old) {
        return equals(element, value);
    }
    lazy_unique_1.defaultChecker = defaultChecker;
})(lazy_unique || (lazy_unique = {}));
// @ts-ignore
lazy_unique = lazy_unique.lazy_unique = Object.assign(lazy_unique.lazy_unique, lazy_unique, exports, {
    // @ts-ignore
    equals: require('deep-eql'),
    default: lazy_unique.lazy_unique,
});
// @ts-ignore
exports.default = lazy_unique;
// @ts-ignore
Object.defineProperty(lazy_unique, "__esModule", { value: true });
// @ts-ignore
Object.keys(lazy_unique).forEach((k) => {
    try {
        // @ts-ignore
        lazy_unique[k] = Object.freeze(lazy_unique[k]);
    }
    catch (e) {
    }
});
// @ts-ignore
lazy_unique = Object.freeze(lazy_unique);
module.exports = lazy_unique;
//export = lazy_unique;
//# sourceMappingURL=index.js.map