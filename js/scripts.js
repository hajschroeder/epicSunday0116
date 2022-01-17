//This function takes three variables, all strings, and concatinates them while uppercasing the first, lowercasing the second, and displaying the only the character in the 0 position of the third
function testFunc(a, b, c) {
  return a.toUpperCase().concat(" ").concat(b.toLowerCase()).concat(c.charAt(0).toUpperCase());
}
let newVar = "bloo blah blee blah";
newVar = "here we go";
let oldVar = "KYLE IS SMART";
let nextVar = "functions"
console.log(testFunc(newVar, oldVar, nextVar));

//This function takes two numbers and returns the result as a number (displayed in purple text in the dev tools)
const test = calcTwo();
function calcTwo(a,b) {
  return a*b;
}
console.log(calcTwo(21, 2));
console.log(typeof test)

//This function takes two numbers and returns the result as a string (displayed in white text in the dev tools)
const testTwo = calc();
function calc(a, b) {
  let result = a*b;
  return result.toString();
}
console.log(calc(4, 5));
console.log(typeof testTwo);


