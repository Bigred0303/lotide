const middle = require("./middle");
const without = require("./without");
const takeUntil = require("./takeUntil");
const tail = require("./tail");
const map = require("./map");
const letterPositions = require("./letterPositions");
const head = require("./head");
const flatten = require("./flatten");
const findKeyByValue = require("./findKeyByValue");
const findKey = require("./findKey");
const eqObjects = require("./eqObjects");
const eqArrays = require("./eqArrays");
const countOnly = require("./countOnly");
const countLetters = require("./countLetters");
const assertObjectsEqual = require("./assertObjectsEqual");
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");

module.exports = {
    head: head,
    middle: middle,
    without: without,
    takeUntil: takeUntil,
    tail: tail,
    map: map,
    letterPositions: letterPositions,
    flatten: flatten,
    findKeyByValue: findKeyByValue,
    findKey:  findKey,
    eqObjects: eqObjects,
    eqArrays: eqArrays,
    countOnly: countOnly,
    countLetters: countLetters,
    assertObjectsEqual: assertObjectsEqual,
    assertEqual: assertEqual,
    assertArraysEqual: assertArraysEqual
}