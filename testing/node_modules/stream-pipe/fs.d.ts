/// <reference types="node" />
/**
 * Created by user on 2018/4/10/010.
 */
import * as fs from "fs";
import { IOptionsStreamPipe, IPipe } from './index';
export declare type IOptionsFsCreateReadStream = {
    flags?: string;
    encoding?: string;
    fd?: number;
    mode?: number;
    autoClose?: boolean;
    start?: number;
    end?: number;
    highWaterMark?: number;
};
export declare class ReadStream extends fs.ReadStream {
    path: string;
    cwd: string;
    constructor(file: fs.PathLike, ...argv: any[]);
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: IOptionsStreamPipe): IPipe<this & ReadStream & fs.ReadStream, T>;
    static createReadStream(file: fs.PathLike, options?: IOptionsFsCreateReadStream, ...argv: any[]): ReadStream & fs.ReadStream;
}
export declare const createReadStream: typeof ReadStream.createReadStream;
export default createReadStream;
