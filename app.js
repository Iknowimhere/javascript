//function declaration
//functional expression
//anonymous function
//arrow function
//higher order function
//callback function
//first class function(function treated just like a variable 
// 1.passing a function as an argument to another function (callback function)
// 2.function returns another function 
// 3.anonoymous function is passed as a value to a variable in a functional expression setup)
//IIFE-immediately invoked function expression



// function add(a,b){
//     return a+b;
// }
// // console.log(add(5,3));
// let res=add(5,3)
// console.log(res);

//default parameters
// function add(a=1,b=2){
//     return a+b;
// }
// console.log(add());

//anonymous function is being passed as an value to a variable
//below setup is called as functional expression
// let a=function(a,b){
//     return a+b;
// }
// let b=a(3,4)
// console.log(b);

//arrow function is also anonymous but arrow syntax instead of function keyword 
// let add=(a,b)=>{
//     return a+b;
// }
// let value=add(4,5)
// console.log(value);

//implicity return the values
// let add=(a,b)=>a+b;
// console.log(add(6,7));

// let exp=a=>a**a;
// console.log(exp(3));

// let demo=_=>console.log("hello");
// demo();


//higher order function-accepts another function as argument and can return another function
// function hof(a,b,task){
//     a=a**a;
//     b=b**b;
//     task(a,b)
// }
// hof(2,3,function(c,d){
//     console.log(c+d);
// })

// function hof(a,b,task){
//     a=a**a;
//     b=b**b;
//     task(a,b)
// }
// hof(2,3,(c,d)=>{
//     console.log(c+d);
// })

//function returns another function--hof 

// function hof(){
//     let a=3;
//     console.log(a);
//     return function(){
//         let b=2;
//         console.log(a+b);
//     }
// }
// hof()()

//callback function is a function which is passed as an argument and it is called later

//iife-function wrapped inside a paranthesis it provides a private scope and it doesn't pollute global namespace

// (function(greet){
//     let superhero=greet+" batman"
//     console.log(superhero);
// })("morning");

// (function(){
//     let superhero="superman"
//     console.log(superhero);
// })();


// //scopes 
// var a=10;  //global scope
// let a=10;  //global scope
// const a=10;  //global scope
// function add(){
//     // var a=12; //local scope
//     // let a=12; //local scope
//     // const a=12; //local scope
//     console.log(a+2);
// }
// add();
// local scoped variables can be accessed inside the function and it shadows the global scoped variables if the variable names are same

//
// console.log("start");
// function hof(){
//     let a=3;
//     console.log(a);
//     return function(){
//         let b=2;
//         console.log(a+b);
//     }
// }
// hof()()

// let a=2;
// let b=3;
// console.log(a+b); //5
// function add(){
//     let c=5
//     console.log(a+b+c); //10
// }
// add()

// console.log(this);
// function add(){
//     console.log(this);
//     return function(){
//         console.log(this);
//     }
// }
// add()()

// console.log(typeof add);

//hoisting in a variable declaration setup 
//varible declaration will be moved to the top of the scope
//var variable will be hoisted with undefined value
//let and const variables will be hoisted but they will not be initialized with any value
//accessing let and const variables before declaration will result in a reference error

//hoisting in a function setup

//function declaration will be moved to the top of the scope
//function declaration will be hoisted with the function definition



// add()
// function add(){
    //     var a=10;
    //     console.log(a);
    // }


//functional expression will not be hoisted with the function definition

    // a()
    // let a=()=>{
    //     console.log("hello");
    // }