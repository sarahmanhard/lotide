# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sarahmanhard/lotide`

**Require it:**

`const _ = require('@sarahmanhard/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual.js(Array)`: Compares two arrays and asserts equality.
* `assertEqual.js(...)`: Compares two values and asserts equality.
* `assertObjectEqual.js(...)`: Compares two values and asserts if they are equal.
* `countLetters.js(string)`: Counts the frequency of letters in how often they appear in a string.
* `countOnly.js(array, object)`: Counts the occurrences of specific elements in an array based on a given condition.
* `eqArrays.js(...)`: Compares two arrays and checks if they are equal.
* `findKeys.js(object, callback)`: Searches for the first instance of a specific condition within an object based on a callback function.
* `findKeyByValue.js(object, value)`: Returns the key of the first value that is matched with an inserted value
* `flatten.js(array)`:Takes nested arrays and flattens, to return an array with no nested elements
* `head.js(array)`: Returns the element at the first index of an array that is accepted as an argument 
* `index.js(...)`: The main entry point
* `letterPositions.js(string)`: Retrieves the positions of letters in a string.
* `map.js(...)`: Applies a callback function to each element of an array and modifies it accordingly.
* `middle.js(array)`: Retrieves the middle element(s) of an array.
* `tail.js(array)`: Returns the element at the last index.
* `takeUntil.js(array, callback)`: Retrieves elements from an array until a given condition is met.
* `without.js(array1, array2)`: Removes specified elements from an array.