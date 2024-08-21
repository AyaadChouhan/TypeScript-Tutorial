// TypeScript classes
// TypeScript provides several additional features over JavaScript, including access modifiers, parameter properties, abstract classes, and interfaces.
// Access Modifiers
// TypeScript supports public, private, and protected access modifiers.

// public: Default visibility, accessible from anywhere.
// private: Only accessible within the class.
// protected: Accessible within the class and by derived classes.

// Inheritance
// TypeScript supports single inheritance, allowing you to create a class that extends another class.

// class Person {
//   public name: string;
//   protected id: number;
//   protected country: string;
//   constructor(name: string, id: number, country: string) {
//     this.name = name;
//     this.id = id;
//     this.country = country;
//   }
//   bioData(){
//     return `user name is ${this.name} and his id ${this.id} and he is from ${this.country}`
//     }
//     PrintNameAndFaculty(){
//       return `my name is ${this.name}`
//     }
// };

// class Person2 extends Person {
//  public faculty : string
//   constructor(name : string, faculty: string) {
//     super(name, 1, 'null');
//     this.faculty = faculty;
//   }
//    result(){
//     return super.PrintNameAndFaculty() + ` and i am student of ${this.faculty}`;
//   }
// }

// const user1 = new Person('khan', 1, 'india');
// console.log(user1.result())
// const user2 = new Person2('ali', 'BCA');
// console.log(user2.result())

// Inheritance: Implements
// Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.
// implements means create all propertys and methods in child class in which you use implements keyswioord init
interface rigion {
    country: string;
    state: string;
  }
  class person {
    constructor(public name: string, public id: number) {
      this.name = name;
      this.id = id;
    }
  }
  // Interfaces can be used to define the type a class must follow through the implements keyword.
  class ImplementClass implements person, rigion {
    constructor(public name: string, public id: number) {
      // this.name  = name;
      // this.id = id;
    }
    country = "india";
    state = "jodhpur";
  }
  const useClassImplement = new ImplementClass("khan", 1);
  // console.log(useClassImplement)
  
  // Abstract Classes
  // Abstract classes are classes that cannot be instantiated on their own. They can contain abstract methods that must be implemented by subclasses.
  abstract class user {
    // constructor(public name : string, public id: number){
    //   this.name = name;
    //   this.id = id;
    // }
    public abstract result(): string;
  }
  class user2 extends user {
    public constructor(public name: string, public id: number) {
      // super(name, id);
      super();
    }
    public result(): string {
      return this.name;
    }
  }
  const data1 = new user2("khan", 1);
  // console.log(data1.result())
  