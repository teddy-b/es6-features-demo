// Map

var myMap = new Map();
var keyString = "a string",
    keyObj = {},
    keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

myMap.size; // 3

// getting the values
myMap.get(keyString);       // "value associated with 'a string'"
myMap.get(keyObj);          // "value associated with keyObj"
myMap.get(keyFunc);         // "value associated with keyFunc"

myMap.get("a string");      // "value associated with 'a string'"
                            // because keyString === 'a string'
myMap.get({});              // undefined, because keyObj !== {}
myMap.get(function() {});   // undefined, because keyFunc !== function () {}


// Difference between Map and WeakMap

var map = new Map();
var weakmap = new WeakMap();

(function(){
    var a = {x: 12};
    var b = {y: 12};

    map.set(a, 1);      // Leads to memory leak
    weakmap.set(b, 2);
})();

// WeakMap keys cannot be primitive types
map.set(44, 12);

//throws invalid type error
weakmap.set(44, 13);

//doesn't work. throws errors
var map_1 = new WeakMap([[1, 2], [4, 5]]);

// WeakMap doesn’t provide any methods or functions to work with the whole set of keys (size, looping etc.)
console.log(weakmap.size); //undefined

//loop through the keys in an map
for(var i of map) {
    console.log(i);
}

//loop through the keys in an WeakMap doesn't work
for(var i of weakmap) {
    console.log(i);
}

map.clear(); //delete all keys
weakmap.clear(); //but this works
