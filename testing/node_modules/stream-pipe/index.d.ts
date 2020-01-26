/// <reference types="node" />
import { createReadStream } from "./fs";
export { createReadStream };
export declare function pipe<U extends NodeJS.ReadableStream, T extends NodeJS.WritableStream>(srcStream: U, destStream: T, options?: IOptionsStreamPipe): IPipe<U, T>;
export declare type IOptionsStreamPipe = {
    end?: boolean;
};
export declare type IPipe<U extends NodeJS.ReadableStream, T extends NodeJS.WritableStream> = T & {
    pipeFrom: U;
};
export default pipe;
