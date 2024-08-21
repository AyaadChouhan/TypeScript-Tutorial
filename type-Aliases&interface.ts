// Type Aliases
// Type Aliases allow defining types with a custom name (an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

// without alias..
let dataTypes: { name: string; id: number; roll: number } = {
  name: "ayaad",
  roll: 7,
  id: 1,
};
// console.log(dataTypes)

// using type alias
type User = {
  id: number;
  name: string;
  roll: number;
};
let student: User = {
  id: 22,
  name: "ayaad",
  roll: 7,
};

// another example..
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const Usercar: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};
// console.log(Usercar)

//====================================================
// Interfaces
// The statement "interfaces only apply to object types" refers to the fact that interfaces are designed to describe the structure of objects and cannot be used for other types like primitives, unions, or functions, which is something type aliases can do.
// Example
// interface Rectangle {
//   height: number,
//   width: number
// }

// const rectangle: Rectangle = {
//   height: 20,
//   width: 10
// };

// Extending Interfaces
// Interfaces can extend each other's definition.
interface student {
  name: string;
  roll: number;
}

interface teacher extends student {
  //Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
  faculty: String;
}

const yourData: teacher = {
  name: "ayaad",
  roll: 2,
  faculty: "BCA",
};
// console.log(yourData)