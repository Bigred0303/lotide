const tail = require("../tail");
const assertEqual = require("../assertEqual");




assertEqual(tail([1]).length, 0);
assertEqual(tail([1, 2, 3, 4, 5]).length, 4);
assertEqual(tail([1, 2, 3, 4]).length, 3);
assertEqual(tail([]), 0);