
//=======================================================================
// TypeScript Object Types
// TypeScript has a specific syntax for typing objects.

const car: { type: string; model: string; year: number } = {
  type: "1",
  model: "Corolla",
  year: 2009,
};

// Type Inference
// TypeScript can infer the types of properties based on their values.

let cycle = {
  type: "atlas", //ts impclicit infer the type of cycle.type.
};
cycle.type = "Ford"; // no error
// car.type = 2; // Error: Type 'number' is not assignable to type 'string'.

// Optional Properties
// Optional properties are properties that don't have to be defined in the object definition.

const car2: { type: string; mileage?: number } = {
  // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car2.mileage = 2000;