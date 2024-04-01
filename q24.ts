let apple ="Apple";
let uppercaseApple ="APPLE";
let nine = 9;
let eleven = 11;
let fruits =["Apple","strawberry","mango"];
//test for equality and unequality with strings
console.log(apple=="Apple");
console.log(apple!="Apple");
// tests using lowercase case function
console.log(uppercaseApple.toLowerCase()=="Apple");
console.log(uppercaseApple.toLocaleLowerCase()!="Apple");
// numerical tests
console.log(nine==eleven);
console.log(nine!=eleven);
console.log(nine>eleven);
console.log(nine<eleven);
console.log(nine<=eleven);
console.log(nine>=eleven);
//test using and and or operator
console.log(eleven!=nine && eleven>nine);
console.log(eleven>nine ||nine>eleven);
//test wheather an item include in array
console.log(fruits.includes("mango"));
console.log(!fruits.includes("mango"));