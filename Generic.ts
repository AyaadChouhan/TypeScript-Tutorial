// TypeScript Basic Generics
// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

// Generics makes it easier to write reusable code.
function result<T>(arr: T[]): T[] {
  arr.shift();
  return arr;
}
// console.log(result<number>([1,2,3,4,5]))
// console.log(result<string>(['AYAAD', 'CHOUHAN']))

// Classes
// Generics can be used to create generalized classes,

class myClass<T> {
  name: string;
  age: number;
  id: T;
  constructor(name: string, age: number, id: T) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
  result() {
    return this.age;
  }
}
const newData = new myClass("khan", 22, 2);
// console.log(newData.result())

// Extends
// Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.

// Example
function createLoggedPair<S extends string | number, T extends string | number>(
  v1: S,
  v2: T
): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}

interface Data<T, Type> {
  data: T;
  id: Type;
}

let newObj2: Data<{ name: string; roll: number }, number | string> = {
  data: {
    name: "334",
    roll: 707,
  },
  id: "ff",
};
// console.log(newObj2);

let newObj: Data<
  { name: string; roll: number; faculty?: string },
  string | number
> = {
  data: {
    name: "334",
    roll: 707,
    faculty: "CS",
  },
  id: 22,
};

interface Generics<T extends Object, U = Boolean> {
  data: T;
  IsError: U;
}

let myobj: Generics<{ userName: string; userScore: number }, Boolean> = {
  data: {
    userName: "adc",
    userScore: 2,
  },
  IsError: true,
};
console.log(myobj);

type newData<T, U> = {
  name: T;
  id: U;
};

let map = new Map<number, string>();
map.set(1, "khan");
console.log(map);
