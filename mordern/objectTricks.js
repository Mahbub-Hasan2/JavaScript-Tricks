
var x = 4;
var y = 5;

var z = x * y;

var object = {
    name: "javaScript",
    founder: "Brendan Eich",
    ranking: 1,
    x,
    y,
    z
}

var keys = Object.keys(object);
var values = Object.values(object);
var entries = Object.entries(object);

console.log(entries)