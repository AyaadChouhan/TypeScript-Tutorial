// TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric

// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:

// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
const enum ConstantVal {
  North,
  East,
  South,
  West,
}
// ConstantVal.West = '2000' // it cannot be reinitialized.
// console.log(ConstantVal.West);

// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:

// Example
const enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
let data: StatusCodes = StatusCodes.Accepted;
// console.log(data)
// logs 404
// console.log(StatusCodes.NotFound);
// logs 200
// console.log(StatusCodes.Success);

// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.

// Example
enum CardinalDirections {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
// logs "North"
// console.log(CardinalDirections.North);
// logs "West"
// console.log(CardinalDirections.West);
