// underscore-ko - v1.6.0 - 2014-06-07
// https://github.com/kamranayub/UnderscoreKO
// Copyright (c) 2014 Kamran Ayub (http://kamranicus.com); Licensed MIT */
(function (factory) {
  if (typeof define === 'function' && define['amd']) {
    // AMD Anonymous module
    define(['knockout', 'underscore'], factory);
  } else {
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
    "sortedIndex",
    "shuffle", "shuffle_",
    "sample",
    "size",

    // Arrays
    "first", "head", "take",
    "initial",
    "last",
    "rest", "tail", "drop", "rest_", "tail_", "drop_",
    "compact", "compact_",
    "flatten", "flatten_",
    "without", "without_",
    "partition",
    "union","union_",
    "intersection",
    "difference",
    "uniq", "unique", "uniq_", "unique_",
    "zip", "zip_",
    "object",
    "indexOf",
    "lastIndexOf",
    "sortedIndex",
    "range",

    // Misc
    "chain"
  ],
  arrayMethods = [
    "union", "union_",
    "intersection", "intersection_",
    "difference", "difference_",
    "zip", "zip_"
  ];

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
        } else {
            // Call original _ method        
            return _[fn].apply(this, args);
        }
      };
    }
  });

})
);
