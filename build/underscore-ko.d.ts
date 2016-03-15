/**
 * Extending KnockoutObservableArrayFunctions with Underscore methods
 */
interface KnockoutObservableArrayFunctions<T> {
    /***************
     * Collections *
     ***************/
    /**
      * Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is
      * bound to the context object, if one is passed. Each invocation of iterator is called with three
      * arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be
      * (value, key, object). Delegates to the native forEach function if it exists.
      * @param iterator Iterator function for each element `list`.
      * @param context 'this' object in `iterator`, optional.
      **/
    each(iterator: _.ListIterator<T, void>, context?: any): _.List<T>;
    /**
    * @see _.each
    **/
    forEach(iterator: _.ListIterator<T, void>, context?: any): _.List<T>;
    /**
    * Produces a new array of values by mapping each value in list through a transformation function
    * (iterator). If the native map method exists, it will be used instead. If list is a JavaScript
    * object, iterator's arguments will be (value, key, object).
    * @param iterator Map iterator function for each element in `list`.
    * @param context `this` object in `iterator`, optional.
    * @return The mapped array result.
    **/
    map<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): TResult[];
    /**
    * @see _.map
    **/
    collect<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): TResult[];
    /**
    * Also known as inject and foldl, reduce boils down a list of values into a single value.
    * Memo is the initial state of the reduction, and each successive step of it should be
    * returned by iterator. The iterator is passed four arguments: the memo, then the value
    * and index (or key) of the iteration, and finally a reference to the entire list.
    * @param iterator Reduce iterator function for each element in `list`.
    * @param memo Initial reduce state.
    * @param context `this` object in `iterator`, optional.
    * @return Reduced object result.
    **/
    reduce<TResult>(iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any): TResult;
    /**
    * @see _.reduce
    **/
    inject<TResult>(iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any): TResult;
    /**
    * @see _.reduce
    **/
    foldl<TResult>(iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any): TResult;
    /**
    * The right-associative version of reduce. Delegates to the JavaScript 1.8 version of
    * reduceRight, if it exists. `foldr` is not as useful in JavaScript as it would be in a
    * language with lazy evaluation.
    * @param iterator Reduce iterator function for each element in `list`.
    * @param memo Initial reduce state.
    * @param context `this` object in `iterator`, optional.
    * @return Reduced object result.
    **/
    reduceRight<TResult>(iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any): TResult;
    /**
    * @see _.reduceRight
    **/
    foldr<TResult>(iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any): TResult;
    /**
    * Looks through each value in the list, returning the first one that passes a truth
    * test (iterator). The function returns as soon as it finds an acceptable element,
    * and doesn't traverse the entire list.
    * @param iterator Search iterator function for each element in `list`.
    * @param context `this` object in `iterator`, optional.
    * @return The first acceptable found element in `list`, if nothing is found undefined/null is returned.
    **/
    find(iterator: _.ListIterator<T, boolean>, context?: any): T;
    /**
    * @see _.find
    **/
    detect(iterator: _.ListIterator<T, boolean>, context?: any): T;
    /**
    * @see _.find
    **/
    detect<U extends {}>(iterator: U): T;
    /**
    * @see _.find
    **/
    detect(iterator: string): T;
    /**
    * Looks through each value in the list, returning an array of all the values that pass a truth
    * test (iterator). Delegates to the native filter method, if it exists.
    * @param iterator Filter iterator function for each element in `list`.
    * @param context `this` object in `iterator`, optional.
    * @return The filtered list of elements.
    **/
    filter(iterator: _.ListIterator<T, boolean>, context?: any): T[];
    /**
    * @see _.filter
    **/
    select(iterator: _.ListIterator<T, boolean>, context?: any): T[];
    /**
    * Looks through each value in the list, returning an array of all the values that contain all
    * of the key-value pairs listed in properties.
    * @param properties The properties to check for on each element within `list`.
    * @return The elements within `list` that contain the required `properties`.
    **/
    where<U extends {}>(properties: U): T[];
    /**
    * Looks through the list and returns the first value that matches all of the key-value pairs listed in properties.
    * @param properties Properties to look for on the elements within `list`.
    * @return The first element in `list` that has all `properties`.
    **/
    findWhere<U extends {}>(properties: U): T;
    /**
    * Returns the values in list without the elements that the truth test (iterator) passes.
    * The opposite of filter.
    * Return all the elements for which a truth test fails.
    * @param iterator Reject iterator function for each element in `list`.
    * @param context `this` object in `iterator`, optional.
    * @return The rejected list of elements.
    **/
    reject(iterator: _.ListIterator<T, boolean>, context?: any): T[];
    /**
    * Returns true if all of the values in the list pass the iterator truth test. Delegates to the
    * native method every, if present.
    * @param iterator Trust test iterator function for each element in `list`.
    * @param context `this` object in `iterator`, optional.
    * @return True if all elements passed the truth test, otherwise false.
    **/
    every(iterator?: _.ListIterator<T, boolean>, context?: any): boolean;
    /**
    * @see _.every
    **/
    all(iterator?: _.ListIterator<T, boolean>, context?: any): boolean;
    /**
    * Returns true if any of the values in the list pass the iterator truth test. Short-circuits and
    * stops traversing the list if a true element is found. Delegates to the native method some, if present.
    * @param iterator Trust test iterator function for each element in `list`.
    * @param context `this` object in `iterator`, optional.
    * @return True if any elements passed the truth test, otherwise false.
    **/
    some(iterator?: _.ListIterator<T, boolean>, context?: any): boolean;
    /**
    * @see _.some
    **/
    any(iterator?: _.ListIterator<T, boolean>, context?: any): boolean;
    /**
    * Returns true if the value is present in the list. Uses indexOf internally,
    * if list is an Array.
    * @param value The value to check for within `list`.
    * @return True if `value` is present in `list`, otherwise false.
    **/
    contains(value: T): boolean;
    /**
    * @see _.contains
    **/
    include(value: T): boolean;
    /**
    * Calls the method named by methodName on each value in the list. Any extra arguments passed to
    * invoke will be forwarded on to the method invocation.
    * @param methodName The method's name to call on each element within `list`.
    * @param arguments Additional arguments to pass to the method `methodName`.
    **/
    invoke<T extends {}>(methodName: string, ...arguments: any[]): any;
    /**
    * A convenient version of what is perhaps the most common use-case for map: extracting a list of
    * property values.
    * @param propertyName The property to look for on each element within `list`.
    * @return The list of elements within `list` that have the property `propertyName`.
    **/
    pluck<T extends {}>(propertyName: string): any[];
    /**
    * Returns the maximum value in list.
    * @return Maximum value in `list`.
    **/
    max(): number;
    /**
    * Returns the maximum value in list. If iterator is passed, it will be used on each value to generate
    * the criterion by which the value is ranked.
    * @param iterator Compares each element in `list` to find the maximum value.
    * @param context `this` object in `iterator`, optional.
    * @return The maximum element within `list`.
    **/
    max(iterator?: _.ListIterator<T, any>, context?: any): T;
    /**
    * Returns the minimum value in list.
    * @return Minimum value in `list`.
    **/
    min(): number;
    /**
    * Returns the minimum value in list. If iterator is passed, it will be used on each value to generate
    * the criterion by which the value is ranked.
    * @param iterator Compares each element in `list` to find the minimum value.
    * @param context `this` object in `iterator`, optional.
    * @return The minimum element within `list`.
    **/
    min(iterator?: _.ListIterator<T, any>, context?: any): T;
    /**
    * Returns a sorted copy of list, ranked in ascending order by the results of running each value
    * through iterator. Iterator may also be the string name of the property to sort by (eg. length).
    * @param iterator Sort iterator for each element within `list`.
    * @param context `this` object in `iterator`, optional.
    * @return A sorted copy of `list`.
    **/
    sortBy<TSort>(iterator?: _.ListIterator<T, TSort>, context?: any): T[];
    /**
    * @see _.sortBy
    * @param iterator Sort iterator for each element within `list`.
    **/
    sortBy(iterator: string, context?: any): T[];
    /**
    * Splits a collection into sets, grouped by the result of running each value through iterator.
    * If iterator is a string instead of a function, groups by the property named by iterator on
    * each of the values.
    * @param iterator Group iterator for each element within `list`, return the key to group the element by.
    * @param context `this` object in `iterator`, optional.
    * @return An object with the group names as properties where each property contains the grouped elements from `list`.
    **/
    groupBy(iterator?: _.ListIterator<T, any>, context?: any): _.Dictionary<T[]>;
    /**
    * @see _.groupBy
    * @param iterator Property on each object to group them by.
    **/
    groupBy(iterator: string, context?: any): _.Dictionary<T[]>;
    /**
    * Given a `list`, and an `iterator` function that returns a key for each element in the list (or a property name),
    * returns an object with an index of each item.  Just like _.groupBy, but for when you know your keys are unique.
    **/
    indexBy(iterator: _.ListIterator<T, any>, context?: any): _.Dictionary<T>;
    /**
    * @see _.indexBy
    * @param iterator Property on each object to index them by.
    **/
    indexBy(iterator: string, context?: any): _.Dictionary<T>;
    /**
    * Sorts a list into groups and returns a count for the number of objects in each group. Similar
    * to groupBy, but instead of returning a list of values, returns a count for the number of values
    * in that group.
    * @param iterator Group iterator for each element within `list`, return the key to group the element by.
    * @param context `this` object in `iterator`, optional.
    * @return An object with the group names as properties where each property contains the number of elements in that group.
    **/
    countBy(iterator?: _.ListIterator<T, any>, context?: any): _.Dictionary<number>;
    /**
    * @see _.countBy
    * @param iterator Function name
    **/
    countBy(iterator: string, context?: any): _.Dictionary<number>;
    /**
    * Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.
    * @return Shuffled copy of `list`.
    **/
    shuffle(): T[];
    /**
    * Produce a random sample from the `list`.  Pass a number to return `n` random elements from the list.  Otherwise a single random item will be returned.
    * @return Random sample of `n` elements in `list`.
    **/
    sample(n: number): T[];
    /**
     * @see _.sample
     */
    sample(): T;
    /**
    * Return the number of values in the list.
    * @return Number of values in `list`.
    **/
    size(): number;
    /**
    * Split array into two arrays:
    * one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
    * @param iterator Filter iterator function for each element in `array`.
    * @param context `this` object in `iterator`, optional.
    * @return Array where Array[0] are the elements in `array` that satisfies the predicate, and Array[1] the elements that did not.
    **/
    partition(iterator: _.ListIterator<T, boolean>, context?: any): T[][];
    /**********
     * Arrays *
     **********/
    /**
      * Returns the first element of an array. Passing n will return the first n elements of the array.
      * @return Returns the first element of `array`.
      **/
    first(): T;
    /**
    * @see _.first
    * @param n Return more than one element from `array`.
    **/
    first(n: number): T[];
    /**
    * @see _.first
    **/
    head(): T;
    /**
    * @see _.first
    **/
    head(n: number): T[];
    /**
    * @see _.first
    **/
    take(): T;
    /**
    * @see _.first
    **/
    take(n: number): T[];
    /**
    * Returns everything but the last entry of the array. Especially useful on the arguments object.
    * Pass n to exclude the last n elements from the result.
    * @param n Leaves this many elements behind, optional.
    * @return Returns everything but the last `n` elements of `array`.
    **/
    initial(n?: number): T[];
    /**
    * Returns the last element of an array. Passing n will return the last n elements of the array.
    * @return Returns the last element of `array`.
    **/
    last(): T;
    /**
    * @see _.last
    * @param n Return more than one element from `array`.
    **/
    last(n: number): T[];
    /**
    * Returns the rest of the elements in an array. Pass an index to return the values of the array
    * from that index onward.
    * @param n The index to start retrieving elements forward from, optional, default = 1.
    * @return Returns the elements of `array` from `index` to the end of `array`.
    **/
    rest(n?: number): T[];
    /**
    * @see _.rest
    **/
    tail(n?: number): T[];
    /**
    * @see _.rest
    **/
    drop(n?: number): T[];
    /**
    * Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "",
    * undefined and NaN are all falsy.
    * @return Copy of `array` without false values.
    **/
    compact(): T[];
    /**
    * Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will
    * only be flattened a single level.
    * @param shallow If true then only flatten one level, optional, default = false.
    * @return `array` flattened.
    **/
    flatten(shallow?: boolean): any[];
    /**
    * Returns a copy of the array with all instances of the values removed.
    * @param values The values to remove from `array`.
    * @return Copy of `array` without `values`.
    **/
    without(...values: T[]): T[];
    /**
    * Computes the union of the passed-in arrays: the list of unique items, in order, that are
    * present in one or more of the arrays.
    * @param arrays Array of arrays to compute the union of.
    * @return The union of elements within `arrays`.
    **/
    union(...arrays: _.List<T>[]): T[];
    /**
    * Computes the list of values that are the intersection of all the arrays. Each value in the result
    * is present in each of the arrays.
    * @param arrays Array of arrays to compute the intersection of.
    * @return The intersection of elements within `arrays`.
    **/
    intersection(...arrays: _.List<T>[]): T[];
    /**
    * Similar to without, but returns the values from array that are not present in the other arrays.
    * @param others The values to keep within `array`.
    * @return Copy of `array` with only `others` values.
    **/
    difference(...others: _.List<T>[]): T[];
    /**
    * Produces a duplicate-free version of the array, using === to test object equality. If you know in
    * advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If
    * you want to compute unique items based on a transformation, pass an iterator function.
    * @param isSorted True if `array` is already sorted, optional, default = false.
    * @param iterator Transform the elements of `array` before comparisons for uniqueness.
    * @param context 'this' object in `iterator`, optional.
    * @return Copy of `array` where all elements are unique.
    **/
    uniq<TSort>(isSorted?: boolean, iterator?: _.ListIterator<T, TSort>, context?: any): T[];
    /**
    * @see _.uniq
    **/
    uniq<TSort>(iterator?: _.ListIterator<T, TSort>, context?: any): T[];
    /**
    * @see _.uniq
    **/
    unique<TSort>(iterator?: _.ListIterator<T, TSort>, context?: any): T[];
    /**
    * @see _.uniq
    **/
    unique<TSort>(isSorted?: boolean, iterator?: _.ListIterator<T, TSort>, context?: any): T[];
    /**
    * Merges together the values of each of the arrays with the values at the corresponding position.
    * Useful when you have separate data sources that are coordinated through matching array indexes.
    * If you're working with a matrix of nested arrays, zip.apply can transpose the matrix in a similar fashion.
    * @param arrays The arrays to merge/zip.
    * @return Zipped version of `arrays`.
    **/
    zip(...arrays: any[][]): any[][];
    /**
    * @see _.zip
    **/
    zip(...arrays: any[]): any[];
    /**
    * The opposite of zip. Given a number of arrays, returns a series of new arrays, the first
    * of which contains all of the first elements in the input arrays, the second of which
    * contains all of the second elements, and so on. Use with apply to pass in an array
    * of arrays
    * @param arrays The arrays to unzip.
    * @return Unzipped version of `arrays`.
    **/
    unzip(...arrays: any[][]): any[][];
    /**
    * Converts arrays into objects. Pass either a single list of [key, value] pairs, or a
    * list of keys, and a list of values.
    * @param keys Key array.
    * @param values Value array.
    * @return An object containing the `keys` as properties and `values` as the property values.
    **/
    object<TResult extends {}>(keys: _.List<string>, values: _.List<any>): TResult;
    /**
    * Converts arrays into objects. Pass either a single list of [key, value] pairs, or a
    * list of keys, and a list of values.
    * @param keyValuePairs Array of [key, value] pairs.
    * @return An object containing the `keys` as properties and `values` as the property values.
    **/
    object<TResult extends {}>(...keyValuePairs: any[][]): TResult;
    /**
    * @see _.object
    **/
    object<TResult extends {}>(values?: any): TResult;
    /**
    * Returns the index of the last occurrence of value in the array, or -1 if value is not present. Uses the
    * native lastIndexOf function if possible. Pass fromIndex to start your search at a given index.
    * @param value The value to search for within `array`.
    * @param from The starting index for the search, optional.
    * @return The index of the last occurrence of `value` within `array`.
    **/
    lastIndexOf(value: T, from?: number): number;
    /**
    * Returns the first index of an element in `array` where the predicate truth test passes
    * @param predicate Predicate function.
    * @param context `this` object in `predicate`, optional.
    * @return Returns the index of an element in `array` where the predicate truth test passes or -1.`
    **/
    findIndex(predicate: _.ListIterator<T, boolean>, context?: any): number;
    /**
    * Returns the last index of an element in `array` where the predicate truth test passes
    * @param predicate Predicate function.
    * @param context `this` object in `predicate`, optional.
    * @return Returns the index of an element in `array` where the predicate truth test passes or -1.`
    **/
    findLastIndex(predicate: _.ListIterator<T, boolean>, context?: any): number;
    /**
    * Uses a binary search to determine the index at which the value should be inserted into the list in order
    * to maintain the list's sorted order. If an iterator is passed, it will be used to compute the sort ranking
    * of each value, including the value you pass.
    * @param value The value to determine its index within `list`.
    * @param iterator Iterator to compute the sort ranking of each value, optional.
    * @return The index where `value` should be inserted into `list`.
    **/
    sortedIndex<TSort>(value: T, iterator?: (x: T) => TSort, context?: any): number;
    /************
     * Mutators *
     ************/
    /**
     * Mutator version of `_.filter`
     */
    filter_(iterator: _.ListIterator<T, boolean>, context?: any): T[];
    /**
     * Mutator version of `_.select`
     */
    select_(iterator: _.ListIterator<T, boolean>, context?: any): T[];
    /**
     * Mutator version of `_.reject`
     */
    reject_(iterator: _.ListIterator<T, boolean>, context?: any): T[];
    /**
     * Mutator version of `_.invoke`
     */
    invoke_(methodName: string, ...arguments: any[]): any;
    /**
     * Mutator version of `_.sortBy`
     */
    sortBy_<TSort>(iterator?: _.ListIterator<T, TSort>, context?: any): T[];
    /**
     * Mutator version of `_.groupBy`
     */
    groupBy_(iterator?: _.ListIterator<T, any>, context?: any): _.Dictionary<T[]>;
    /**
     * Mutator version of `_.groupBy`
     */
    groupBy_(iterator: string, context?: any): _.Dictionary<T[]>;
    /**
     * Mutator version of `_.shuffle`
     */
    shuffle_(): T[];
    /**
     * Mutator version of `_.rest`
     */
    rest_(n?: number): T[];
    /**
     * Mutator version of `_.tail`
     */
    tail_(n?: number): T[];
    /**
     * Mutator version of `_.drop`
     */
    drop_(n?: number): T[];
    /**
     * Mutator version of `_.compact`
     */
    compact_(): T[];
    /**
     * Mutator version of `_.flatten`
     */
    flatten_(shallow?: boolean): any[];
    /**
     * Mutator version of `_.intersection`
     */
    intersection_(...arrays: _.List<T>[]): T[];
    /**
     * Mutator version of `_.difference`
     */
    difference_(...others: _.List<T>[]): T[];
    /**
     * Mutator version of `_.without`
     */
    without_(...values: T[]): T[];
    /**
     * Mutator version of `_.union`
     */
    union_(...arrays: _.List<T>[]): T[];
    /**
     * Mutator version of `_.uniq`
     */
    uniq_<TSort>(isSorted?: boolean, iterator?: _.ListIterator<T, TSort>, context?: any): T[];
    /**
     * Mutator version of `_.unique`
     */
    unique_<TSort>(isSorted?: boolean, iterator?: _.ListIterator<T, TSort>, context?: any): T[];
    /**
     * Mutator version of `_.uniq`
     */
    uniq_<TSort>(iterator?: _.ListIterator<T, TSort>, context?: any): T[];
    /**
     * Mutator version of `_.unique`
     */
    unique_<TSort>(iterator?: _.ListIterator<T, TSort>, context?: any): T[];
    /**
     * Mutator version of `_.zip`
     */
    zip_(...arrays: any[][]): any[][];
    /**
     * Mutator version of `_.zip`
     */
    zip_(...arrays: any[]): any[];
    /**
     * Mutator version of `_.unzip`
     */
    unzip_(...arrays: any[][]): any[][];
    /**
    * Returns a wrapped object. Calling methods on this object will continue to return wrapped objects
    * until value() is used.
    * @param obj Object to chain.
    * @return Wrapped `obj`.
    **/
    chain(): _Chain<T>;
}
interface _Chain<T> {
    /**
    * Wrapped type `any[]`.
    * @see _.each
    **/
    each(iterator: _.ListIterator<T, void>, context?: any): _Chain<T>;
    /**
    * @see _.each
    **/
    each(iterator: _.ObjectIterator<T, void>, context?: any): _Chain<T>;
    /**
    * @see _.each
    **/
    forEach(iterator: _.ListIterator<T, void>, context?: any): _Chain<T>;
    /**
    * @see _.each
    **/
    forEach(iterator: _.ObjectIterator<T, void>, context?: any): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.map
    **/
    map<TArray>(iterator: _.ListIterator<T, TArray[]>, context?: any): _ChainOfArrays<TArray>;
    /**
    * Wrapped type `any[]`.
    * @see _.map
    **/
    map<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): _Chain<TResult>;
    /**
    * Wrapped type `any[]`.
    * @see _.map
    **/
    map<TArray>(iterator: _.ObjectIterator<T, TArray[]>, context?: any): _ChainOfArrays<TArray>;
    /**
    * Wrapped type `any[]`.
    * @see _.map
    **/
    map<TResult>(iterator: _.ObjectIterator<T, TResult>, context?: any): _Chain<TResult>;
    /**
    * @see _.map
    **/
    collect<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): _Chain<TResult>;
    /**
    * @see _.map
    **/
    collect<TResult>(iterator: _.ObjectIterator<T, TResult>, context?: any): _Chain<TResult>;
    /**
    * Wrapped type `any[]`.
    * @see _.reduce
    **/
    reduce<TResult>(iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any): _ChainSingle<TResult>;
    /**
    * @see _.reduce
    **/
    inject<TResult>(iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any): _ChainSingle<TResult>;
    /**
    * @see _.reduce
    **/
    foldl<TResult>(iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any): _ChainSingle<TResult>;
    /**
    * Wrapped type `any[]`.
    * @see _.reduceRight
    **/
    reduceRight<TResult>(iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any): _ChainSingle<TResult>;
    /**
    * @see _.reduceRight
    **/
    foldr<TResult>(iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any): _ChainSingle<TResult>;
    /**
    * Wrapped type `any[]`.
    * @see _.find
    **/
    find<T>(iterator: _.ListIterator<T, boolean> | _.ObjectIterator<T, boolean>, context?: any): _ChainSingle<T>;
    /**
    * @see _.find
    **/
    find<T, U extends {}>(interator: U): _ChainSingle<T>;
    /**
    * @see _.find
    **/
    find<T>(interator: string): _ChainSingle<T>;
    /**
    * @see _.find
    **/
    detect<T>(iterator: _.ListIterator<T, boolean> | _.ObjectIterator<T, boolean>, context?: any): _ChainSingle<T>;
    /**
    * @see _.find
    **/
    detect<T, U extends {}>(interator: U): _ChainSingle<T>;
    /**
    * @see _.find
    **/
    detect<T>(interator: string): _ChainSingle<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.filter
    **/
    filter(iterator: _.ListIterator<T, boolean>, context?: any): _Chain<T>;
    /**
    * @see _.filter
    **/
    select(iterator: _.ListIterator<T, boolean>, context?: any): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.where
    **/
    where<U extends {}>(properties: U): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.findWhere
    **/
    findWhere<U extends {}>(properties: U): _ChainSingle<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.reject
    **/
    reject(iterator: _.ListIterator<T, boolean>, context?: any): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.all
    **/
    all(iterator?: _.ListIterator<T, boolean>, context?: any): _Chain<T>;
    /**
    * @see _.all
    **/
    every(iterator?: _.ListIterator<T, boolean>, context?: any): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.any
    **/
    any(iterator?: _.ListIterator<T, boolean>, context?: any): _Chain<T>;
    /**
    * @see _.any
    **/
    some(iterator?: _.ListIterator<T, boolean>, context?: any): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.contains
    **/
    contains(value: T): _Chain<T>;
    /**
    * Alias for 'contains'.
    * @see contains
    **/
    include(value: T): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.invoke
    **/
    invoke(methodName: string, ...arguments: any[]): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.pluck
    **/
    pluck(propertyName: string): _Chain<any>;
    /**
    * Wrapped type `number[]`.
    * @see _.max
    **/
    max(): _ChainSingle<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.max
    **/
    max(iterator: _.ListIterator<T, number>, context?: any): _ChainSingle<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.max
    **/
    max(iterator?: _.ListIterator<T, any>, context?: any): _ChainSingle<T>;
    /**
    * Wrapped type `number[]`.
    * @see _.min
    **/
    min(): _ChainSingle<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.min
    **/
    min(iterator: _.ListIterator<T, number>, context?: any): _ChainSingle<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.min
    **/
    min(iterator?: _.ListIterator<T, any>, context?: any): _ChainSingle<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.sortBy
    **/
    sortBy(iterator?: _.ListIterator<T, any>, context?: any): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.sortBy
    **/
    sortBy(iterator: string, context?: any): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.groupBy
    **/
    groupBy(iterator?: _.ListIterator<T, any>, context?: any): _ChainOfArrays<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.groupBy
    **/
    groupBy(iterator: string, context?: any): _ChainOfArrays<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.indexBy
    **/
    indexBy(iterator: _.ListIterator<T, any>, context?: any): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.indexBy
    **/
    indexBy(iterator: string, context?: any): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.countBy
    **/
    countBy(iterator?: _.ListIterator<T, any>, context?: any): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.countBy
    **/
    countBy(iterator: string, context?: any): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.shuffle
    **/
    shuffle(): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.sample
    **/
    sample<T>(n: number): _Chain<T>;
    /**
    * @see _.sample
    **/
    sample<T>(): _Chain<T>;
    /**
    * Wrapped type `any`.
    * @see _.toArray
    **/
    toArray(): _Chain<T>;
    /**
    * Wrapped type `any`.
    * @see _.size
    **/
    size(): _ChainSingle<number>;
    /**
     * Wrapped type `any[]`
     * @see _.partition
     */
    partition(iterator?: _.ListIterator<T, any>): _ChainOfArrays<T>;
    /*********
    * Arrays *
    **********/
    /**
    * Wrapped type `any[]`.
    * @see _.first
    **/
    first(): _ChainSingle<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.first
    **/
    first(n: number): _Chain<T>;
    /**
    * @see _.first
    **/
    head(): _Chain<T>;
    /**
    * @see _.first
    **/
    head(n: number): _Chain<T>;
    /**
    * @see _.first
    **/
    take(): _Chain<T>;
    /**
    * @see _.first
    **/
    take(n: number): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.initial
    **/
    initial(n?: number): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.last
    **/
    last(): _ChainSingle<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.last
    **/
    last(n: number): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.rest
    **/
    rest(n?: number): _Chain<T>;
    /**
    * @see _.rest
    **/
    tail(n?: number): _Chain<T>;
    /**
    * @see _.rest
    **/
    drop(n?: number): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.compact
    **/
    compact(): _Chain<T>;
    /**
    * Wrapped type `any`.
    * @see _.flatten
    **/
    flatten(shallow?: boolean): _Chain<any>;
    /**
    * Wrapped type `any[]`.
    * @see _.without
    **/
    without(...values: T[]): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.partition
    **/
    partition(iterator: _.ListIterator<T, boolean>, context?: any): _Chain<T[]>;
    /**
    * Wrapped type `any[][]`.
    * @see _.union
    **/
    union(...arrays: _.List<T>[]): _Chain<T>;
    /**
    * Wrapped type `any[][]`.
    * @see _.intersection
    **/
    intersection(...arrays: _.List<T>[]): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.difference
    **/
    difference(...others: _.List<T>[]): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.uniq
    **/
    uniq(isSorted?: boolean, iterator?: _.ListIterator<T, any>): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.uniq
    **/
    uniq<TSort>(iterator?: _.ListIterator<T, TSort>, context?: any): _Chain<T>;
    /**
    * @see _.uniq
    **/
    unique<TSort>(isSorted?: boolean, iterator?: _.ListIterator<T, TSort>): _Chain<T>;
    /**
    * @see _.uniq
    **/
    unique<TSort>(iterator?: _.ListIterator<T, TSort>, context?: any): _Chain<T>;
    /**
    * Wrapped type `any[][]`.
    * @see _.zip
    **/
    zip(...arrays: any[][]): _Chain<T>;
    /**
    * Wrapped type `any[][]`.
    * @see _.unzip
    **/
    unzip(...arrays: any[][]): _Chain<T>;
    /**
    * Wrapped type `any[][]`.
    * @see _.object
    **/
    object(...keyValuePairs: any[][]): _Chain<T>;
    /**
    * @see _.object
    **/
    object(values?: any): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.indexOf
    **/
    indexOf(value: T, isSorted?: boolean): _ChainSingle<T>;
    /**
    * @see _.indexOf
    **/
    indexOf(value: T, startFrom: number): _ChainSingle<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.lastIndexOf
    **/
    lastIndexOf(value: T, from?: number): _ChainSingle<T>;
    /**
    * @see _.findIndex
    **/
    findIndex<T>(predicate: _.ListIterator<T, boolean>, context?: any): _Chain<T>;
    /**
    * @see _.findLastIndex
    **/
    findLastIndex<T>(predicate: _.ListIterator<T, boolean>, context?: any): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.sortedIndex
    **/
    sortedIndex(value: T, iterator?: (x: T) => any, context?: any): _Chain<T>;
    /**
    * Wrapped type `number`.
    * @see _.range
    **/
    range(stop: number, step?: number): _Chain<T>;
    /**
    * Wrapped type `number`.
    * @see _.range
    **/
    range(): _Chain<T>;
    /**
    * Wrapped type `Function`.
    * @see _.bind
    **/
    bind(object: any, ...arguments: any[]): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.bindAll
    **/
    bindAll(...methodNames: string[]): _Chain<T>;
    /**
    * Wrapped type `Function`.
    * @see _.partial
    **/
    partial(...arguments: any[]): _Chain<T>;
    /**
    * Wrapped type `Function`.
    * @see _.memoize
    **/
    memoize(hashFn?: (n: any) => string): _Chain<T>;
    /**
    * Wrapped type `Function`.
    * @see _.defer
    **/
    defer(...arguments: any[]): _Chain<T>;
    /**
    * Wrapped type `Function`.
    * @see _.delay
    **/
    delay(wait: number, ...arguments: any[]): _Chain<T>;
    /**
    * @see _.delay
    **/
    delay(...arguments: any[]): _Chain<T>;
    /**
    * Wrapped type `Function`.
    * @see _.throttle
    **/
    throttle(wait: number, options?: _.ThrottleSettings): _Chain<T>;
    /**
    * Wrapped type `Function`.
    * @see _.debounce
    **/
    debounce(wait: number, immediate?: boolean): _Chain<T>;
    /**
    * Wrapped type `Function`.
    * @see _.once
    **/
    once(): _Chain<T>;
    /**
    * Wrapped type `number`.
    * @see _.after
    **/
    after(func: Function): _Chain<T>;
    /**
    * Wrapped type `number`.
    * @see _.before
    **/
    before(fn: Function): _Chain<T>;
    /**
    * Wrapped type `Function`.
    * @see _.wrap
    **/
    wrap(wrapper: Function): () => _Chain<T>;
    /**
    * Wrapped type `Function`.
    * @see _.negate
    **/
    negate(): _Chain<T>;
    /**
    * Wrapped type `Function[]`.
    * @see _.compose
    **/
    compose(...functions: Function[]): _Chain<T>;
    /********* *
     * Objects *
    ********** */
    /**
    * Wrapped type `object`.
    * @see _.keys
    **/
    keys(): _Chain<string>;
    /**
    * Wrapped type `object`.
    * @see _.allKeys
    **/
    allKeys(): _Chain<string>;
    /**
    * Wrapped type `object`.
    * @see _.values
    **/
    values(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.pairs
    **/
    pairs(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.invert
    **/
    invert(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.functions
    **/
    functions(): _Chain<T>;
    /**
    * @see _.functions
    **/
    methods(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.extend
    **/
    extend(...sources: any[]): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.pick
    **/
    pick(...keys: any[]): _Chain<T>;
    pick(keys: any[]): _Chain<T>;
    pick(fn: (value: any, key: any, object: any) => any): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.omit
    **/
    omit(...keys: string[]): _Chain<T>;
    omit(keys: string[]): _Chain<T>;
    omit(iteratee: Function): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.defaults
    **/
    defaults(...defaults: any[]): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.clone
    **/
    clone(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.tap
    **/
    tap(interceptor: (...as: any[]) => any): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.has
    **/
    has(key: string): _Chain<T>;
    /**
    * Wrapped type `any[]`.
    * @see _.matches
    **/
    matches<TResult>(): _Chain<T>;
    /**
    * Wrapped type `string`.
    * @see _.property
    **/
    property(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.propertyOf
    **/
    propertyOf(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isEqual
    **/
    isEqual(other: any): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isEmpty
    **/
    isEmpty(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isMatch
    **/
    isMatch(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isElement
    **/
    isElement(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isArray
    **/
    isArray(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isObject
    **/
    isObject(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isArguments
    **/
    isArguments(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isFunction
    **/
    isFunction(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isError
    **/
    isError(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isString
    **/
    isString(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isNumber
    **/
    isNumber(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isFinite
    **/
    isFinite(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isBoolean
    **/
    isBoolean(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isDate
    **/
    isDate(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isRegExp
    **/
    isRegExp(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isNaN
    **/
    isNaN(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isNull
    **/
    isNull(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.isUndefined
    **/
    isUndefined(): _Chain<T>;
    /********* *
     * Utility *
    ********** */
    /**
    * Wrapped type `any`.
    * @see _.identity
    **/
    identity(): _Chain<T>;
    /**
    * Wrapped type `any`.
    * @see _.constant
    **/
    constant(): _Chain<T>;
    /**
    * Wrapped type `any`.
    * @see _.noop
    **/
    noop(): _Chain<T>;
    /**
    * Wrapped type `number`.
    * @see _.times
    **/
    times<TResult>(iterator: (n: number) => TResult, context?: any): _Chain<T>;
    /**
    * Wrapped type `number`.
    * @see _.random
    **/
    random(): _Chain<T>;
    /**
    * Wrapped type `number`.
    * @see _.random
    **/
    random(max: number): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.mixin
    **/
    mixin(): _Chain<T>;
    /**
    * Wrapped type `string|Function|Object`.
    * @see _.iteratee
    **/
    iteratee(context?: any, argCount?: number): _Chain<T>;
    /**
    * Wrapped type `string`.
    * @see _.uniqueId
    **/
    uniqueId(): _Chain<T>;
    /**
    * Wrapped type `string`.
    * @see _.escape
    **/
    escape(): _Chain<T>;
    /**
    * Wrapped type `string`.
    * @see _.unescape
    **/
    unescape(): _Chain<T>;
    /**
    * Wrapped type `object`.
    * @see _.result
    **/
    result(property: string, defaultValue?: any): _Chain<T>;
    /**
    * Wrapped type `string`.
    * @see _.template
    **/
    template(settings?: _.TemplateSettings): (...data: any[]) => _Chain<T>;
    /************* *
    * Array proxy *
    ************** */
    /**
    * Returns a new array comprised of the array on which it is called
    * joined with the array(s) and/or value(s) provided as arguments.
    * @param arr Arrays and/or values to concatenate into a new array. See the discussion below for details.
    * @return A new array comprised of the array on which it is called
    **/
    concat(...arr: Array<T[]>): _Chain<T>;
    /**
    * Join all elements of an array into a string.
    * @param separator Optional. Specifies a string to separate each element of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma.
    * @return The string conversions of all array elements joined into one string.
    **/
    join(separator?: any): _ChainSingle<T>;
    /**
    * Removes the last element from an array and returns that element.
    * @return Returns the popped element.
    **/
    pop(): _ChainSingle<T>;
    /**
    * Adds one or more elements to the end of an array and returns the new length of the array.
    * @param item The elements to add to the end of the array.
    * @return The array with the element added to the end.
    **/
    push(...item: Array<T>): _Chain<T>;
    /**
    * Reverses an array in place. The first array element becomes the last and the last becomes the first.
    * @return The reversed array.
    **/
    reverse(): _Chain<T>;
    /**
    * Removes the first element from an array and returns that element. This method changes the length of the array.
    * @return The shifted element.
    **/
    shift(): _ChainSingle<T>;
    /**
    * Returns a shallow copy of a portion of an array into a new array object.
    * @param start Zero-based index at which to begin extraction.
    * @param end Optional. Zero-based index at which to end extraction. slice extracts up to but not including end.
    * @return A shallow copy of a portion of an array into a new array object.
    **/
    slice(start: number, end?: number): _Chain<T>;
    /**
    * Sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.
    * @param compareFn Optional. Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.
    * @return The sorted array.
    **/
    sort(compareFn: (a: T, b: T) => boolean): _Chain<T>;
    /**
    * Changes the content of an array by removing existing elements and/or adding new elements.
    * @param index Index at which to start changing the array. If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end.
    * @param quantity An integer indicating the number of old array elements to remove. If deleteCount is 0, no elements are removed. In this case, you should specify at least one new element. If deleteCount is greater than the number of elements left in the array starting at index, then all of the elements through the end of the array will be deleted.
    * @param items The element to add to the array. If you don't specify any elements, splice will only remove elements from the array.
    * @return An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
    **/
    splice(index: number, quantity: number, ...items: Array<T>): _Chain<T>;
    /**
    * A string representing the specified array and its elements.
    * @return A string representing the specified array and its elements.
    **/
    toString(): _ChainSingle<T>;
    /**
    * Adds one or more elements to the beginning of an array and returns the new length of the array.
    * @param items The elements to add to the front of the array.
    * @return The array with the element added to the beginning.
    **/
    unshift(...items: Array<T>): _Chain<T>;
    /********** *
     * Chaining *
    *********** */
    /**
    * Wrapped type `any`.
    * @see _.chain
    **/
    chain(): _Chain<T>;
    /**
    * Wrapped type `any`.
    * @see _.value
    **/
    value<TResult>(): T[];
}
interface _ChainSingle<T> {
    value(): T;
}
interface _ChainOfArrays<T> extends _Chain<T[]> {
    flatten(): _Chain<T>;
}
