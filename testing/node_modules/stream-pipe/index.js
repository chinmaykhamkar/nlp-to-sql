"use strict";
/**
 * Created by user on 2018/4/10/010.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const fs_1 = require("./fs");
exports.createReadStream = fs_1.createReadStream;
function pipe(srcStream, destStream, options) {
    let _dest = destStream;
    _dest.pipeFrom = srcStream;
    if (srcStream instanceof fs_1.ReadStream) {
        return fs.ReadStream.prototype.pipe.call(srcStream, _dest);
    }
    return srcStream.pipe(_dest);
}
exports.pipe = pipe;
exports.default = pipe;
