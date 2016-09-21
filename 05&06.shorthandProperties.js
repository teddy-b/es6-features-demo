// Shorthand property names

var a = "foo",
    b = 42,
    c = {};

var o1 = {
    a: a,
    b: b,
    c: c
};

var o2 = {a, b, c};


// // Computed property names

var prop = "foo";
var o = {
    [prop]: "hey",
    ["b" + "ar"]: "there",
};
