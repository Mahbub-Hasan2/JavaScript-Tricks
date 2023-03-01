# JavaScript-Tricks
💥JavaScript Tips and Tricks - JavaScript Job Interview Questions🌺

<br> <br>


## Ternary Operator
#### Please explain this code : 

```
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
```

This code first sets the variable **age** to the value **19**.

It then uses an if/else statement to check the value of **age**. **If **age** is greater than or equal to 18, it logs the string "adult" to the console. If **age** is less than 10, it logs the string "child" to the console. Otherwise, it logs the string "young" to the console.

After that, it uses a ternary operator to accomplish the same thing in a more concise way. The ternary operator checks the value of age. If age is greater than or equal to 18, it sets the variable type to the string "adult". If **age** is less than 10, it sets type to the string "child". Otherwise, it sets type to the string "young". Finally, it logs the value of type to the console.

In this case, both the if/else statement and the ternary operator accomplish the same thing, but the ternary operator uses less code and is more concise. However, it can be less readable for more complex conditions, so it's important to consider readability and maintainability when choosing between if/else statements and ternary operators.



Regenerate response
