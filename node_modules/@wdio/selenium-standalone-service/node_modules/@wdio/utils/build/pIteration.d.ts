/**
 * Implements ES5 [`Array#forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method.<br><br>
 * Executes the provided callback once for each element.<br>
 * Callbacks are run concurrently,
 * and are only invoked for properties of the array that have been initialized (including those initialized with *undefined*), for unassigned ones `callback` is not run.<br>
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @param {Object} [thisArg] - Value to use as *this* when executing the `callback`.
 * @return {Promise} - Returns a Promise with undefined value.
 */
export declare const forEach: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<void>;
/**
 * Same functionality as [`forEach()`](global.html#forEach), but runs only one callback at a time.
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @param {Object} [thisArg] - Value to use as *this* when executing the `callback`.
 * @return {Promise} - Returns a Promise with undefined value.
 */
export declare const forEachSeries: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<void>;
/**
 * Implements ES5 [`Array#map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method.<br><br>
 * Creates a new array with the results of calling the provided callback once for each element.<br>
 * Callbacks are run concurrently,
 * and are only invoked for properties of the array that have been initialized (including those initialized with *undefined*), for unassigned ones`callback` is not run.<br>
 * Resultant *Array* is always the same *length* as the original one.
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @param {Object} [thisArg] - Value to use as *this* when executing the `callback`.
 * @return {Promise} - Returns a Promise with the resultant *Array* as value.
 */
export declare const map: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<any[]>;
/**
 * Same functionality as [`map()`](global.html#map), but runs only one callback at a time.
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @param {Object} [thisArg] - Value to use as *this* when executing the `callback`.
 * @return {Promise} - Returns a Promise with the resultant *Array* as value.
 */
export declare const mapSeries: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<any[]>;
/**
 * Implements ES5 [`Array#find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method.<br><br>
 * Returns the value of the element that satisfies the provided `callback`. The value returned is the one found first.<br>
 * Callbacks are run concurrently, meaning that all the callbacks are going to run even if the returned value is found in one of the first elements of `array`,
 * depending on the async calls you are going to use, consider using instead [`findSeries()`](global.html#findSeries).<br>
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @param {Object} [thisArg] - Value to use as *this* when executing the `callback`.
 * @return {Promise} - Returns a Promise with the element that passed the test as value, otherwise *undefined*.
 */
export declare const find: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<unknown>;
/**
 * Same functionality as [`find()`](global.html#find), but runs only one callback at a time.
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @param {Object} [thisArg] - Value to use as *this* when executing the `callback`.
 * @return {Promise} - Returns a Promise with the element that passed the test as value, otherwise *undefined*.
 */
export declare const findSeries: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<unknown>;
/**
 * Implements ES5 [`Array#findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) method.<br><br>
 * Returns the index of the element that satisfies the provided `callback`. The index returned is the one found first.<br>
 * Callbacks are run concurrently, meaning that all the callbacks are going to run even if the returned index is found in one of the first elements of `array`,
 * depending on the async calls you are going to use, consider using instead [`findSeries()`](global.html#findSeries).<br>
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @param {Object} [thisArg] - Value to use as *this* when executing the `callback`.
 * @return {Promise} - Returns a Promise with the index that passed the test as value, otherwise *-1*.
 */
export declare const findIndex: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<unknown>;
/**
 * Same functionality as [`findIndex()`](global.html#findIndex), but runs only one callback at a time.
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @param {Object} [thisArg] - Value to use as *this* when executing the `callback`.
 * @return {Promise} - Returns a Promise with the index that passed the test, otherwise *-1*.
 */
export declare const findIndexSeries: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<number | undefined>;
/**
 * Implements ES5 [`Array#some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) method.<br><br>
 * Test if some element in `array` passes the test implemented in `callback`.<br>
 * Callbacks are run concurrently, meaning that all the callbacks are going to run even if some of the first elements pass the test,
 * depending on the async calls you are going to use, consider using instead [`someSeries()`](global.html#someSeries).<br>
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @param {Object} [thisArg] - Value to use as *this* when executing the `callback`.
 * @return {Promise} - Returns a Promise with *true* as value if some element passed the test, otherwise *false*.
 */
export declare const some: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<unknown>;
/**
 * Same functionality as [`some()`](global.html#some), but runs only one callback at a time.
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @param {Object} [thisArg] - Value to use as *this* when executing the `callback`.
 * @return {Promise} - Returns a Promise with *true* as value if some element passed the test, otherwise *false*.
 */
export declare const someSeries: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<boolean>;
/**
 * Implements ES5 [`Array#every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) method.<br><br>
 * Test if all elements in `array` pass the test implemented in `callback`.<br>
 * Callbacks are run concurrently, meaning that all the callbacks are going to run even if any of the first elements do not pass the test,
 * depending on the async calls you are going to use, consider using instead [`everySeries()`](global.html#everySeries).<br>
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @param {Object} [thisArg] - Value to use as *this* when executing the `callback`.
 * @return {Promise} - Returns a Promise with *true* as value if all elements passed the test, otherwise *false*.
 */
export declare const every: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<unknown>;
/**
 * Same functionality as [`every()`](global.html#every), but runs only one callback at a time.<br><br>
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @param {Object} [thisArg] - Value to use as *this* when executing the `callback`.
 * @return {Promise} - Returns a Promise with *true* as value if all elements passed the test, otherwise *false*.
 */
export declare const everySeries: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<boolean>;
/**
 * Implements ES5 [`Array#filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method.<br><br>
 * Creates a new array with the elements that passed the test implemented in `callback`.<br>
 * Callbacks are run concurrently.<br>
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @param {Object} [thisArg] - Value to use as *this* when executing the `callback`.
 * @return {Promise} - Returns a Promise with the resultant filtered *Array* as value.
 */
export declare const filter: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<unknown>;
/**
 * Same functionality as [`filter()`](global.html#filter), but runs only one callback at a time.
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts three arguments: `currentValue`, `index` and `array`.
 * @return {Promise} - Returns a Promise with the resultant filtered *Array* as value.
 */
export declare const filterSeries: (array: unknown[], callback: Function, thisArg?: unknown) => Promise<unknown[]>;
/**
 * Implements ES5 [`Array#reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method.<br><br>
 * Applies a `callback` against an accumulator and each element in `array`.
 * @param {Array} array - Array to iterate over.
 * @param {Function} callback - Function to apply each item in `array`. Accepts four arguments: `accumulator`, `currentValue`, `currentIndex` and `array`.
 * @param {Object} [initialValue] - Used as first argument to the first call of `callback`.
 * @return {Promise} - Returns a Promise with the resultant value from the reduction.
 */
export declare const reduce: (array: unknown[], callback: Function, initialValue?: unknown) => Promise<any>;
//# sourceMappingURL=pIteration.d.ts.map