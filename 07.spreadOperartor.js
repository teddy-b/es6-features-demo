// For function calls:

myFunction(...iterableObj);

// For array literals:

let arr = [...iterableObj, 4, 5, 6];


// A better apply

function myFunction(x, y, z) { }
var args = [0, 1, 2];
// myFunction.apply(null, args);
myFunction(...args);


// Can be used multiple times

function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);


// A more powerful array literal

var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]


// Copy an array

var arr = [1, 2, 3];
var arr2 = [...arr];    // like arr.slice()
arr2.push(4);           // arr2 becomes [1, 2, 3, 4], arr stays unaffected


// A better push

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Array.prototype.push.apply(arr1, arr2);
arr1.push(...arr2);

