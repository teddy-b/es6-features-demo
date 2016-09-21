// Array-like object (arguments) to Array
function f() {
    return Array.from(arguments);
}

f(1, 2, 3);
// [1, 2, 3]


// Any iterable object...
// Set
var s = new Set(["foo", window]);
Array.from(s);
// ["foo", window]


// Map
var m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]


// String
Array.from("foo");
// ["f", "o", "o"]


// Using an arrow function as the map function to manipulate the elements

// Array.from([1, 2, 3]).map(x => x + x);
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]


// Generate a sequence of numbers
Array.from({length: 5}, (v, k) => k);
// [0, 1, 2, 3, 4]
