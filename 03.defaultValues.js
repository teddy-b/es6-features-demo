// Default function parameters allow formal parameters to be initialized with default values if no value or undefined is passed

function multiply(a, b = 1) {
    // var b = (typeof b !== 'undefined') ?  b : 1;
    // var b = b || 1;

    return a * b;
}

multiply(5); // 5


// Even if the argument is set explicitly to undefined (though not null) when calling, the value of the argument is the default one

function setBackgroundColor(element, color = 'rosybrown') {
    element.style.backgroundColor = color;
}

setBackgroundColor(someDiv);            // color set to 'rosybrown'
setBackgroundColor(someDiv, undefined); // color set to 'rosybrown' too
setBackgroundColor(someDiv, 'blue');    // color set to 'blue'


// Evaluated at call time
// So a new object is created each time the function is called.

function append(value, array = []) {
    array.push(value);
    return array;
}

append(1); //[1]
append(2); //[2], not [1, 2]

// even applies to functions and variables

function callSomething(thing = something()) {
    return thing;
}

function something(){
    return "sth";
}

callSomething();  //sth


// straight forward handling edge cases

function go() {
    return ":P";
}

function withDefaults(a, b = 5, c = b, d = go(), e = this, f = arguments, g = this.value) {
    return [a, b, c, d, e, f, g];
}

function withoutDefaults(a, b, c, d, e, f, g) {
    switch(arguments.length) {
        case 0:
            a;
        case 1:
            b = 5;
        case 2:
            c = b;
        case 3:
            d = go();
        case 4:
            e = this;
        case 5:
            f = arguments;
        case 6:
            g = this.value;
        default:
    }

    return [a, b, c, d, e, f, g];
}

withDefaults.call({value: "=^_^="});
// [undefined, 5, 5, ":P", {value: "=^_^="}, arguments, "=^_^="]


withoutDefaults.call({value: "=^_^="});
// [undefined, 5, 5, ":P", {value: "=^_^="}, arguments, "=^_^="]


// Default parameters are always executed first, function declarations inside the function body evaluate afterwards

// Doesn't work! Throws ReferenceError.
function f(a = go()) {
    function go() {
        return ":P";
    }
}


// Parameters without defaults after default parameters

function func(x = 1, y) {
    return [x, y];
}

func(); // [1, undefined]
