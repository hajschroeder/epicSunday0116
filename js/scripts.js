function testFunc(a, b, c) {
  return a.toUpperCase().concat(" ").concat(b).concat(c.charAt(0));
}
let newVar = "kyle is smart";
newVar = "here we go";
let oldVar = "KYLE IS SMART";
let nextVar = "functions"
console.log(testFunc(newVar, oldVar, nextVar));

//This function takes two numbers and returns the result as a string (displayed in white text in the dev tools)
const test = calc();
function calc(a, b) {
  let result = a*b;
  return result.toString();
}
console.log(calc(4, 5));
console.log(typeof test);

//This function takes two numbers and returns the result as a number (displayed in purple text in the dev tools)
const testTwo = calcTwo();
function calcTwo(a,b) {
  return a*b;
}
console.log(calcTwo(21, 2));
console.log(typeof testTwo)