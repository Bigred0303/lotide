# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @bigred0303/lotide`

**Require it:**

`const _ = require('@bigred0303/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(arr1, arr2)`: Uses eqArrays to check if two arrays are deeply equal and outputs the assertion test case
- `assertEqual(actual, expected)`: Checks if two values are strictly equal
- `assertObjectsEqual(object1, object2)`: Uses eqObjects to check if two objects are deeply equal and outputs the assertion test case
- `countLetters(letters)`: Counts the number of letters in a string
- `countOnly(allItems, itemsToCount)`: Takes an array of names and only counts the names passed in the object as the 2nd arguement
- `eqArrays(arr1, arr2)`: Checks if two arrays are deeply equal
- `eqObjects(arr1, arr2)`: Checks if two objects are deeply equal
- `findKey(searchObject, callback)`: Finds a given key in an object by it's key
- `findKeyByValue(searchObject, keyToFind)`: Finds a given key in an object by it's value
- `flatten(arr)`: Flattens a nested array by 1
- `head(arr)`: Gives the first value of an array
- `index`: The file by which all functions are called
- `letterPositions(sentence)`: Gives the position of letters within a string
- `map(array, callback)`: Performs any callback function on an array
- `middle(arr)`: Takes the middle of an array
- `tail(arr)`: Gives an array without the first value
- `takeUntil(arr, callback)`: Returns an array until a value meets the callback function
- `without(source, itemsToRemove)`: Gives an array without the undesired element
