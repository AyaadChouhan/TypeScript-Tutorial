// TypeScript Tuples
// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// they allow each element in the array to be a known type of value.

// define our tuple
// let ourTuple: [number, boolean, string];

// initialize correctly
// ourTuple = [5, false, 'Coding God was here'];

// Readonly Tuple
// A good practice is to make your tuple readonly.

// Tuples only have strongly defined types for the initial values:

// Destructuring Tuples
// Since tuples are arrays we can also destructure them.
let tupleVal: [number, string] = [1, "name"];
let [a, b] = tupleVal;
