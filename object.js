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

//Object constructor function
//constructor--initializes the properties in an object

function Person() {}
