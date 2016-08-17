// underscore-ko - v1.8.31 - 2016-08-17
// https://github.com/kamranayub/UnderscoreKO
// Copyright (c) 2016 Kamran Ayub <http://kamranicus.com>; Licensed MIT */
(function (factory) {
    var define = define;
    if (typeof define === 'function' && define['amd']) {
        // AMD Anonymous module
        define(['knockout', 'underscore'], factory);
    }
    else {
        factory(window['ko'], window['_']);
    }
}(function (ko, _, undefined) {
    /* _ methods that take the list as the first arg (and their aliases) */
    var methods = [
        // Collections
        "each", "forEach",
        "map", "collect",
        "reduce", "inject", "foldl",
        "reduceRight", "foldr",
        "find", "detect",
        "filter", "select", "filter_", "select_",
        "where",
        "findWhere",
        "reject", "reject_",
        "all", "every",
        "any", "some",
        "include", "contains",
        "invoke", "invoke_",
        "pluck",
        "max",
        "min",
        "sortBy", "sortBy_",
        "groupBy", "groupBy_",
        "indexBy",
        "countBy",
        "shuffle", "shuffle_",
        "sample",
        "size",
        "partition",
        // Arrays
        "first", "head", "take",
        "initial",
        "last",
        "rest", "tail", "drop", "rest_", "tail_", "drop_",
        "compact", "compact_",
        "flatten", "flatten_",
        "without", "without_",
        "union", "union_",
        "intersection", "intersection_",
        "difference", "difference_",
        "uniq", "unique", "uniq_", "unique_",
        "zip", "zip_",
        "unzip", "unzip_",
        "object",
        "lastIndexOf",
        "sortedIndex",
        "findIndex",
        "findLastIndex",
        // Misc
        "chain"
    ], 
    // methods that take a ...arrays parameter
    arrayMethods = [
        "union", "union_",
        "intersection", "intersection_",
        "zip", "zip_"
    ];
    // replaces _.property with support for KO observable values
    _.property = function (key) {
        return function (obj) {
            return obj == null ? void 0 : ko.utils.unwrapObservable(ko.utils.unwrapObservable(obj)[key]);
        };
    };
    // replaces _.propertyOf with support for KO observable values
    _.propertyOf = function (obj) {
        return obj == null ? function () { } : function (key) {
            return ko.utils.unwrapObservable(ko.utils.unwrapObservable(obj)[key]);
        };
    };
    // replaces _.isMatch with support for KO observable values
    _.isMatch = function (object, attrs) {
        var keys = _.keys(attrs), length = keys.length;
        if (object == null)
            return !length;
        var obj = Object(ko.utils.unwrapObservable(object));
        for (var i = 0; i < length; i++) {
            var key = keys[i];
            if (ko.utils.unwrapObservable(attrs[key]) !== ko.utils.unwrapObservable(obj[key]) || !(key in obj))
                return false;
        }
        return true;
    };
    _.each(_.union(methods, arrayMethods), function (fn) {
        // Let's be good and safe Javascript citizens!
        if (!ko.observableArray.fn[fn]) {
            ko.observableArray.fn[fn] = function () {
                var args = _.toArray(arguments);
                // Auto-invoke KO arrays
                if (_.include(arrayMethods, fn)) {
                    _.each(args, function (arg, i) {
                        // Check if it contains a fn we know we attach
                        // to KO arrays, just in case someone passes in
                        // something other than a KO array fn
                        if (typeof arg === "function" && arg[fn]) {
                            args[i] = arg();
                        }
                    });
                }
                // Prepend the raw array value
                args.splice(0, 0, this());
                // Mutator method?
                if (fn.substr(fn.length - 1, 1) === "_") {
                    // Mutate the value (leverage KO to handle change notifications)
                    return this(_[fn.substr(0, fn.length - 1)].apply(this, args));
                }
                else {
                    // Call original _ method        
                    return _[fn].apply(this, args);
                }
            };
        }
    });
}));
//# sourceMappingURL=underscore-ko.js.map