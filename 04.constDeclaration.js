// constant value

const MY_FAV = 7;

// MY_FAV = 20;    // error
console.log("my favorite number is: " + MY_FAV);    // 7

const MY_FAV = 20;  // error
var MY_FAV = 20;    // error
let MY_FAV = 20;    // error

// block scoping
if (MY_FAV === 7) {
    const MY_FAV = 20;  // does not throw error
    console.log("my favorite number is " + MY_FAV); // 20
    var MY_FAV = 20;    // error
}

console.log("my favorite number is " + MY_FAV); // 7


// Assigning const variable

const A = 1;
// A = 2;  // syntax error

//const FOO;  // error


// const on objects

const MY_OBJECT = {"key": "value"};

// MY_OBJECT = {"OTHER_KEY": "value"}; // error

MY_OBJECT.key = "otherValue"; // does not throw error


// const on arrays

const MY_ARRAY = [];
MY_ARRAY.push("A"); // ["A"]
// MY_ARRAY = ["B"];   // error
