//objects--non primitive data type
//object oriented programming
//class---->object

//prototype based language
//object(prototype)--->object

//objects are  collection of properties(attributes) and methods(behaviour)
//car  properties:color,model,price methods:start,stop

//object literals
// let car = {
//   "car name": "BMW",
//   model: "X5",
//   price: 1000000,
// };
//read
//dot operator
// console.log(car.model);
//bracket notation
// console.log(car["car name"]);

//update
// car.price = 2000000;
// console.log(car);

//add
// car.color = "red";
// console.log(car);

//delete
// delete car.color;
// console.log(car);

//object methods
//arrow functions inside objects will point to window object
// let obj = {
//   name: "sai",
//   age: 23,
//   address: "hyd",
//   isAdult: true,
//   address: {
//     city: "hyd",
//     state: "telangana",
//   },
//   greet: function () {
//     console.log("hello " + this.name);
//     console.log(this);
//   },
//   //   greet: () => {
//   //     // console.log("hello " + name);
//   //     console.log("hello " + this.name);
//   //     console.log(this);
//   //   },
// };

// obj.greet();
// console.log(obj.address.city);
// console.log(obj["address"]["city"]);

//pass by value and pass by reference

//primitive data types are passed by value--immutable
// let b = 3;
// function demo(c) {
//   c = 5;
// }
// console.log("before", b);
// demo(b);
// console.log("after", b);

//non primitive data types are passed by reference--mutable
//trying to change in copy of the object will affect the original object
// let obj1 = {
//   name: "sai",
//   age: 23,
// };
// function demo(obj2) {
//   obj2.name = "sai kumar";
// }
// console.log("before", obj1);
// demo(obj1);
// console.log("after", obj1);

//using constructor
// let obj = new Object();
// obj.name = "sai";
// console.log(obj);

//Object-- Constructor function--template to create multiple objects of same kind
//constructor--initializes the properties in an object

//this is not the syntax of javascript
// class Person{
//     String name;
//     int age;
//     Person(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// Person ramesh=new Person("ramesh",25)


// function Person(name,age) {
//     this.name=name;
//     this.age=age;
// }

// let person1=new Person("Tony",25)
// let person2=new Person("Stark",26)
// console.log(person1);
// console.log(person2);


//invoking constructor function with a new keyword a empty object of will be created
// {}
//this---->{}
//this.name
//this.age
//return this


//class

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// let person1=new Person("Tony",25)
// let person2=new Person("Stark",26)

// console.log(person1);
// console.log(person2);

//cloning

// let a={
//     name:"akash",
//     age:12
// }
//copy
// let b=a;
// console.log("a before",a);
// b.name="bhoomi"
// console.log("a after",a);


// console.log(a===b);
// console.log(a==b);

//rest and spread operator

// function details(name,age,...otherDetails){
//     console.log(name);
//     console.log(age);
//     console.log(otherDetails);
// }
// details("akash",22,["html","css"],"bangalore",{canVote:true})

//shallow copy
// let c={...a};
// console.log("a before",a);
// c.name="chethan"
// console.log("a after",a);

// let a={
//     name:"akash",
//     age:12,
//     address:{
//         city:"bengaluru",
//         pin:560061
//     }
// }
// let b={...a}  //shallow copy

// let b=structuredClone(a); //deep copy
// let b=JSON.parse(JSON.stringify(a)) //deep copy
//recursively copy object--deep copy

// b.name="chethan"
// b.address.city="hyderabad"
// console.log("a after",a);


//shallow copy copies on top level retaining same memory location of the nested objects
//deep copy copies on deep level creating entrirely different memory location for nested objects too

//prototypes are objects
// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
// let obj={
//     name:"tony",
//     age:25
// }

// console.log(obj.address);

// let arr=[1,2,3,4,5]
// console.log(arr);
