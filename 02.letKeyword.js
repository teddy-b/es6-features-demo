// block scope local variable

(function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
})();

(function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
})();


// let, unlike var, does not create a property on the global object

var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined


// Redeclaring the same variable within the same function or block scope

if (x) {
    let foo;
    let foo; // SyntaxError
}


// let will hoist the variable to the top of the block.
// However, referencing the variable in the block before the variable declaration results in a ReferenceError.

function do_something() {
    console.log(foo); // ReferenceError
    let foo = 2;
}
