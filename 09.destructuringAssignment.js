// Array destructuring

var a, b, rest;
[a, b] = [1, 2];
console.log(a);     // 1
console.log(b);     // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a);     // 1
console.log(b);     // 2
console.log(rest);  // [3, 4, 5]


// Default values

var a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7


// Swapping variables

var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1


// Parsing an array returned from a function

function f() {
    return [1, 2];
}

var a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2


// Ignoring some returned values

function f() {
    return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3


// Object destructuring

var o = {p: 42, q: true};
var {p, q} = o;
console.log(p);     // 42
console.log(q);     // true

({a, b} = {a: 1, b: 2});
console.log(a);     // 1
console.log(b);     // 2

// ES7
({a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4});


// Default values

var {a = 10, b = 5} = {a: 3};

console.log(a);     // 3
console.log(b);     // 5



// Setting a function parameter's default value

function drawES6Chart({size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}) {
    console.log(size, cords, radius);
    // do some chart drawing
}

drawES6Chart({
    cords: {x: 18, y: 30},
    radius: 30
});


// Nested object and array destructuring

var metadata = {
    title: "Scratchpad",
    translations: [{
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
    }],
    url: "/en-US/docs/Tools/Scratchpad"
};

var {title: englishTitle, translations: [{title: localeTitle}]} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
