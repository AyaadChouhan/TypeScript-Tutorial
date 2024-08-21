
// TypeScript Functions
// TypeScript has a specific syntax for typing function parameters and return values.

// Return Type...
// The type of the value returned by the function can be explicitly defined.

// Exampe
// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}

// Void Return Type
// The type void can be used to indicate a function doesn't return any value.

// Example
function printHello(): void {
  console.log("Hello!");
}

// Parameters
// Function parameters are typed with a similar syntax as variable declarations.

// Example
function multiply(a: number, b: number) {
  return a * b;
}

// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.

// Example
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}
let objforFunc = {
  dividend: 22,
  divisor: 12,
};
// console.log(divide(objforFunc));

// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

// Example
function add(a: string, b: string, ...rest: number[]) {
  return a + b + " " + rest.reduce((acc, curr) => (acc += curr), 0);
}
// console.log(add("ayaad", "khan", 1, 2, 4, 5));

// Type Alias
// Function types can be specified separately from functions with type aliases.

// These types are written similarly to arrow functions, read more about arrow functions here.

// Example
// type Negate = (val : number , secVal : string ) => string;

// const negateFunction: Negate = (val, secVal) => {
//   return secVal + 'one';
// };

// console.log(negateFunction(10, 'roll'));
// Define the type alias with a string return type
type Negate = (val: number, secVal: string) => any;

// Implement the function according to the type alias
const negateFunction: Negate = (val, secVal) => {
  return `your id is ${val}, and your seat is ${secVal} one`; // Always returns a string
};

// Test the function
// console.log(negateFunction(10, "2nd")); // Outputs: "your id is 10 and your seat is 2nd "
// console.log(negateFunction(35, "3rd")); // Outputs: "your id is 10 and your seat is 3rd "

function getArr(arr: number[]): number[] {
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 1);
  }
  return newArr;
}
// console.log(getArr([1,2,3,4,5]))