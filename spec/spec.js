describe("UnderscoreKO", function () {
  var vm = {
    arr: ko.observableArray([0, 1, 2, 3, 4]),
    objs: ko.observableArray([{a:"a"},{a:"b"},{a:"c"}])
  },
  predicateFns = [
    "find", "detect",
    "filter", "select",
    "reject",
    "all", "every",
    "any", "some",   
    "max",
    "min",
    "sortBy",
    "groupBy"
  ],
  reductionFns = [
    "each", "forEach",
    "map", "collect",
    "reduce", "inject", "foldl",
    "reduceRight", "foldr",
  ],
  noArgFns = [
    "size",
    "first", "head",
    "initial",
    "last",
    "rest", "tail",
    "compact",
    "flatten",
    "difference",
    "uniq"
  ],
  singleArgFns = [
    "include", "contains",
    "sortedIndex",
    "lastIndexOf"
  ],
  arrayArgFns = [
    "union", 
    "intersection", 
    "zip"
  ],
  miscFns = [    
    "invoke",
    "pluck",    
    "shuffle",
    "without",
    "chain"
  ],
  mutators = [
    "filter_", "select_",
    "reject_",
    "invoke_",
    "sortBy_",
    "groupBy_",
    "shuffle_",
    "rest_", "tail_",
    "compact_",
    "flatten_",
    "without_",
    "union_",
    "intersection_",
    "difference_",
    "uniq_", "unique_",
    "zip_"
  ];

  it("supports all 45 underscore methods", function () {
    var count = 0;

    _.union(predicateFns, reductionFns, noArgFns, singleArgFns, arrayArgFns, miscFns).forEach(function (fn) {
      count++;
      expect(vm.arr[fn]).toBeDefined();
    });

    expect(count).toEqual(45);
  });

  it("supports 18 mutator methods", function () {
    var count = 0;

    mutators.forEach(function (fn) {
      count++;
      expect(vm.arr[fn]).toBeDefined();
    });

    expect(count).toEqual(18);
  });

  it("supports all predicate functions", function () {
    predicateFns.forEach(function (fn) {
      var predicate = function (x) {
            return x === 0;
          },
          actual   = _[fn](vm.arr(), predicate),
          expected = vm.arr[fn](predicate);

      expect(expected).toEqual(actual);
    });
  });

  it("supports all reduction functions", function () {
    reductionFns.forEach(function (fn) {
      var reduce = function (x) {
            return x - 1;
          },
          actual   = _[fn](vm.arr(), reduce),
          expected = vm.arr[fn](reduce);

      expect(expected).toEqual(actual);
    });
  });

  it("supports all no argument functions", function () {
    noArgFns.forEach(function (fn) {
      var actual   = _[fn](vm.arr()),
          expected = vm.arr[fn]();

      expect(expected).toEqual(actual);
    });
  });

  it("supports all single argument functions", function () {
    noArgFns.forEach(function (fn) {
      var actual   = _[fn](vm.arr(), 3),
          expected = vm.arr[fn](3);

      expect(expected).toEqual(actual);
    });
  });

  it("supports all array argument functions", function () {
    noArgFns.forEach(function (fn) {
      var actual   = _[fn](vm.arr(), [0, 1, 2, 5]),
          expected = vm.arr[fn]([0, 1, 2, 5]);

      expect(expected).toEqual(actual);
    });
  });

  it("supports invoke", function () {
    expect(vm.arr.invoke("toString")).toEqual(["0", "1", "2", "3", "4"]);
  });

  it("supports pluck", function () {
    expect(vm.objs.pluck("a")).toEqual(["a","b","c"]);
  });

  it("supports shuffle", function () {
    var shuffled = vm.arr.shuffle();

    shuffled.forEach(function (i) {
      expect(vm.arr.include(i)).toEqual(true);
    });
  });

  it("supports without", function () {
    expect(vm.arr.without(0, 1, 2)).toEqual([3, 4]);
  });

  it("supports chaining", function () {
    var result = vm.arr.chain().filter(function (num) {
      return num > 1;
    }).without(4).value();

    expect(result).toEqual([2, 3]);
  });

  it("supports invoking KO arrays", function () {
    var array = ko.observableArray([5, 6, 7]);

    expect(vm.arr.union(array)).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
  });

  describe("it mutates", function () {
    var mutable, changed;

    beforeEach(function () {
      changed = false;
      mutable = ko.observableArray(vm.arr());
      mutable.subscribe(function (val) {
        changed = true;
      });
    });    

    afterEach(function () {
      expect(changed).toEqual(true);
    });

    it("via filter_", function () {
      mutable.filter_(function (num) {
        return num > 1;
      });

      expect(mutable()).toEqual([2, 3, 4]);
    });

    it("via reject_", function () {
      mutable.reject_(function (num) {
        return num > 1;
      });

      expect(mutable()).toEqual([0, 1]);
    });

    it("via invoke_", function () {
      mutable.invoke_("toString");

      expect(mutable()).toEqual(["0", "1", "2", "3", "4"]);
    });

    it("via sortBy_", function () {
      mutable.sortBy_(function (num) {
        return Math.sin(num);
      });

      expect(mutable()).toEqual([4, 0, 3, 1, 2]);
    });

    it("via groupBy_", function () {
      mutable.groupBy_(function (num) {
        return num > 2;
      });

      expect(mutable()).toEqual({ false: [0, 1, 2], true: [3, 4]});
    });

    it("via shuffle_", function () {
      mutable.shuffle_();

      expect(mutable()).toNotEqual(vm.arr());
    });

    it("via rest_", function () {
      mutable.rest_(2);

      expect(mutable()).toEqual([2, 3, 4]);
    });

    it("via compact_", function () {
      mutable.compact_();

      expect(mutable()).toEqual([1, 2, 3, 4]);
    });

    it("via flatten_", function () {
      mutable.flatten_();

      expect(mutable()).toEqual([0, 1, 2, 3, 4]);
    });

    it("via without_", function () {
      mutable.without_(2, 4);

      expect(mutable()).toEqual([0, 1, 3]);
    });

    it("via union_", function () {
      mutable.union_([5, 6, 0]);

      expect(mutable()).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });

    it("via intersection_", function () {
      mutable.intersection_([0, 1], [1, 0]);

      expect(mutable()).toEqual([0, 1]);
    });

    it("via difference_", function () {
      mutable.difference_([0, 1], [1, 0]);

      expect(mutable()).toEqual([2, 3, 4]);
    });

    it("via unique_", function () {
      mutable.unique_(true, function (num) {
        return num > 2;
      });

      expect(mutable()).toEqual([0, 3]);
    });

    it("via zip_", function () {
      mutable.zip_(["a", "b", "c", "d", "e"], [10, 20, 30, 40, 50]);

      expect(mutable()).toEqual([
        [0, "a", 10],
        [1, "b", 20],
        [2, "c", 30],
        [3, "d", 40],
        [4, "e", 50]
      ]);
    });

    it("mutates when using KO arrays", function () {
      var array = ko.observableArray([5, 6, 7]);

      mutable.union_(array);

      expect(mutable()).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    });
  });
});