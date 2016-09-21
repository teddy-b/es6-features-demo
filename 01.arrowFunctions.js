// Simple syntax

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]


// Lexical this

// function Person() {
//     var self = this;
//     self.age = 0;
//
//     setInterval(function growUp() {
//         self.age++;
//     }, 1000);
// }

function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++;
    }, 1000);
}

var p = new Person();


// Invoked through call or apply

let adder = {
    base: 1,
    add: function(a) {
        var f = v => v + this.base;
        return f(a);
    },
    addThroughCall: function(a) {
        var f = v => v + this.base;
        var b = {base: 2};
        return f.call(b, a);
    }
};

console.log(adder.add(1));              // This would log to 2
console.log(adder.addThroughCall(1));   // This would log to 2 still


// Single parameter case needs no parentheses around parameter list
let identity = x => x;


// No need for parentheses even for lower-precedence expression body
let square = x => x * x;


// Parenthesize the body to return an object literal expression
let keyMaker = val => ({key: val});


// Newline
// var func = ()
//     => 1; // SyntaxError
let func = () => 1; // 1


// IIFE
(() => console.log("foobar"))(); // foobar
