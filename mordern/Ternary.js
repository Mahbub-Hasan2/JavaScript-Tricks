var age = 19;

if (age >= 18) {
    console.log("adult");
}
else if (age < 10) {
    console.log("child");
}
else {
    console.log("young");
}

var type = age >= 18 ? "adult" : age < 10 ? "child" : "young";
console.log(type)

