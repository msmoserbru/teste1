export type { Logger } from './index.js';
/**
 * This implementation of the Logger package is a simple adptation to run it within
 * a browser environment.
 */
declare function getLogger(component: string): Console;
declare namespace getLogger {
    var setLevel: () => void;
    var setLogLevelsConfig: () => void;
    var waitForBuffer: () => void;
    var clearLogger: () => void;
}
export default getLogger;
//# sourceMappingURL=browser.d.ts.map