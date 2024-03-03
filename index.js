//1.Variables and Math Expressions
var num1 = 10;
var num2 = 5;

var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

//2.Conditionals
var age = 20;
var message = prompt("What is your age?")
if (message >= 18){
    alert("You are an adult");
    console.log("You are an adult");
    
}
else{
    alert("You are a minor")
    console.log("You are a minor");
}
//3.Array Initialization and Manipulation

var fruits = [];
fruits.push("apple", "banana", "orange", "grape", "kiwi");
console.log("Fruits:",fruits);

//4.Looping through Arrays
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//.Pattern Printing with Nested Loops

for (var i = 0; i < 15; i++){
    var row = "";
    for (var j = 0; j < i; j++){
        row +="* "
    }
}
//6.Mathematical Operations with Loops

var sumOfNaturalNumbers = 0;

for (var i = 1; i <= 10; i++) {
    sumOfNaturalNumbers += i;
}
console.log("Sum of first 10 natural numbers:", sumOfNaturalNumbers);

//7.Array Manipulation with Loop


var colors = [];
colors.push("red", "green", "blue", "yellow", "orange");
console.log("Colors:",colors);

//8.Accessing Array Elements

for(var i = 0; i < colors.length; i++){
    console.log(`Color at index ${i}: ${colors[i]}`);
}

//9.Reversing Array Elements

var reservedColors = colors.reverse();
console.log("Reversed Colors:", reversedColors);

