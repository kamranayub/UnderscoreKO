// UnderscoreKO Mashup Library v1.0.0
// (c) Kamran Ayub - http://github.com/kamranayub/UnderscoreKO
// License: MIT (http://www.opensource.org/licenses/mit-license.php)
//
// Adds all 45 Underscore.js collection and array methods to
// KO observable arrays.

(function (ko, _, undefined) {

  /* _ methods that take the list as the first arg (and their aliases) */
  var methods = [
    // Collections
    "each", "forEach",
    "map", "collect",
    "reduce", "inject", "foldl",
    "reduceRight", "foldr",
    "find", "detect",
    "filter", "select", "filter_", "select_",
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
    "sortedIndex",
    "shuffle", "shuffle_",
    "size",

    // Arrays
    "first", "head",
    "initial",
    "last",
    "rest", "tail", "rest_", "tail_",
    "compact", "compact_",
    "flatten", "flatten_",
    "without", "without_",
    "union", "union_",
    "intersection", "intersection_",
    "difference", "difference_",
    "uniq", "unique", "uniq_", "unique_",
    "zip", "zip_",
    "indexOf",
    "lastIndexOf",
  ];

  _.each(methods, function (fn) {
    // Let's be good and safe Javascript citizens!
    if (!ko.observableArray.fn[fn]) {
      ko.observableArray.fn[fn] = function () {
        var args = _.toArray(arguments);

        // Prepend the raw array value
        args.splice(0, 0, this());

        // Mutator method?
        if (fn.substr(fn.length - 1, 1) === "_") {
            fn = fn.substr(0, fn.length - 1);

            // Mutate the value (leverage KO to handle change notifications)
            return this(_[fn].apply(this, args));
        } else {
            // Call original _ method        
            return _[fn].apply(this, args);
        }
      }
    }
  });

})(ko, _);