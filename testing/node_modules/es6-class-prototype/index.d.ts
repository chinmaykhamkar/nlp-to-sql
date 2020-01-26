/**
 * Created by user on 2018/3/16/016.
 */
import { ClassProxyStatic } from 'class-proxy';
declare function classPrototype<T>(target: IClassProxyStatic<T>, all?: boolean): T;
declare namespace classPrototype {
    var default: typeof classPrototype;
}
declare module classPrototype {
    interface IClassProxyStatic<T> extends ClassProxyStatic<T> {
    }
    function classPrototype<T>(target: IClassProxyStatic<T>, all?: boolean): T;
}
import IClassProxyStatic = classPrototype.IClassProxyStatic;
export = classPrototype;
