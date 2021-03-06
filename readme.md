# UnderscoreKO

[![npm](https://img.shields.io/npm/v/underscore-ko.svg)](https://github.com/kamranayub/UnderscoreKO) [![npm](https://img.shields.io/npm/dt/underscore-ko.svg)](https://github.com/kamranayub/UnderscoreKO) [![NuGet](https://img.shields.io/nuget/v/UnderscoreKO.svg)](https://github.com/kamranayub/UnderscoreKO) [![NuGet](https://img.shields.io/nuget/dt/UnderscoreKO.svg)](https://github.com/kamranayub/UnderscoreKO) [![Bower](https://img.shields.io/bower/v/underscore-ko.svg)](https://github.com/kamranayub/UnderscoreKO)

## [Underscore.js](http://documentcloud.github.com/underscore/) + [Knockout](http://knockoutjs.com) = Array Happy Fun Time!

This tiny library (< 1KB) adds all the collection and array methods you've come to love in Underscore.js to your Knockout observable arrays. It will not override any existing functionality (if any exists).

Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)

## Install

### Manual

Download `.\build\underscore-ko.min.js` and put it in your project.

### Nuget

Install the [UnderscoreKO](http://nuget.org/packages/UnderscoreKO) Nuget package.

    PM> Install-Package UnderscoreKO

### bower

    bower install underscore-ko
    
### npm ###

    npm install underscore-ko

## TypeScript Declarations

UnderscoreKO ships with built-in TypeScript declarations, see `build\underscore-ko.d.ts`.

## Usage

Use the Underscore methods just as you normally would, but now you don't need to specify the array to use:

```js
var vm = {
    arr: ko.observableArray([1, 2, 3]);
};

vm.arr.each(function (x) {
    // do something
});

// This returns a raw array, not a ko.observableArray
var newArr = vm.arr.union([0, 1]);

// but this will append 0 and 1 to the underlying array and trigger a change notification
vm.arr.union_([0, 1]);
```

In addition, there are several functions you can use that will mutate (change) the underlying array, which are provided as convenient shortcuts.

```js
// Re-structure the observable array [1, 2, 3]
vm.arr.without_(2);
// vm.arr() is now equal to [1, 3]

// Without this, you would need to do:
vm.arr(vm.arr.without(2));
```

## Live Demo ##

View the [live jsFiddle demo](http://jsfiddle.net/kamranayub/exnqe/)

## Documentation ##

See the [Underscore.js](http://underscorejs.org/) documentation for more information on the API. All array and collection methods are supported with the exception of any I felt didn't provide value (`.toArray()` for example).

See `spec.js` for examples of how to use specific functions, but I'm telling you, it's as you'd expect.

### Mutator Methods

These methods change the underlying array *instead* of returning a copy of the array.

* `filter_`, `select_`
* `reject_`
* `invoke_`
* `sortBy_`
* `groupBy_`
* `shuffle_`
* `rest_`, `tail_`
* `compact_`
* `flatten_`
* `without_`
* `union_`
* `intersection_`
* `difference_`
* `uniq_`, `unique_`
* `zip_`
* `unzip_`

## Contributing

See [Contributing](CONTRIBUTING.md)
