
// Union | or
// union/or are basically use for when we want value more then one type like (number | string);
// Union is only the concept name for using or operator
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
// printStatusCode(404);
// printStatusCode('404');

// Union Type Errors
// Note: you need to know what your type is when union types are being used to avoid type errors:

// Example
//function printStatusCode(code: string | number) {
//console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'
//}
