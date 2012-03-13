# UnderscoreKO #

## [Underscore.js](http://documentcloud.github.com/underscore/) + [Knockout](http://knockoutjs.com) = Array Happy Fun Time! ##

This tiny library adds all the collection and array methods you've come to love in Underscore.js to your Knockout observable arrays. It will not override any existing functionality (if any exists).

## Install ##

### Manual ###

Download `underscore-ko.min.js` and put it in your project.

### Nuget ###

Install the UnderscoreKO Nuget package.

## Usage ##

Use the Underscore methods just as you normally would, but now you don't need to specify the array to use:

```js
var vm = {
    arr: ko.observableArray([1, 2, 3]);
};

vm.arr.each(function (x) {
    // do something
});

var newArr = vm.arr.union([0, 1]);
```

In addition, there are several functions you can use that will mutate (change) the underlying array, which are provided as convenient shortcuts.

```js
vm.arr.without_(2);
// vm.arr() is now equal to [1, 3]

// Without this, you would need to do:
vm.arr(vm.arr.without(2));
```
See the [Underscore.js](http://documentcloud.github.com/underscore/) documentation for more information on the API.

#### Mutator Methods ####

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