//array methods

// let arr=[1,2,3,4,5]
// let obj={
//     name:"sai",
//     age:23
// }
// console.log(arr.length);

// console.log(typeof arr);  //object
// console.log(arr instanceof Array); //true
// console.log(obj instanceof Array); //false


// console.log(arr);
// let arr=[1,2,3,4,5]

// console.log(arr.pop());  //removes last element
// console.log(arr); //it mutates origianl array


// console.log(arr.push("hello",5,4)); //pushes elements to the last index and returns length of a new array
// console.log(arr);  //mutates original array

// console.log(arr.shift());  //removes first element
// console.log(arr);  //mutates original array

// console.log(arr.unshift(1,2,3,4));//inserts elements to the first index and returns length of a new array
// console.log(arr);//mutates original array


// console.log(arr.slice(0,2));//slices array till 2 position but it is exclusive of 2 element
// console.log(arr.slice(2));

// console.log(arr.slice(undefined,2));

//negetive index
// let arr=[1,2,3,4,5]
// console.log(arr.slice(-4,-2));
// console.log(arr); 
//slice doesnt mutate original array

//splice
// let arr=[1,2,3,4,5]
// console.log(arr.splice(0,3,"hello",5,4)); //removes elements from the specified index and returns deleted elements
// console.log(arr); //mutates original array

//splice can be used to add and remove elements at specified
//@param start --position from where to start
//@param deleteCount --no of elements to be deleted
//@param items --elements to be added

// let arr=[1,2,3,4,5]
// console.log(arr.concat(arr));

//search methods
// let arr=[1,2,"hello",3,4,3,"hello",5,]
// console.log(arr.indexOf("hello")); //2
// console.log(arr.indexOf("hello",3)); //6 
//indexof returns -1 if element is not found
//indeof retuns the position of first occurence of element in the array and search starts from the specified index if search index is not specified it starts from 0

// console.log(arr.lastIndexOf("hello")); //6 

// console.log(arr.toString());

// console.log(arr.join("*")); //joins elements with specified seperator into a string

// console.log(arr.reverse());

// console.log(arr.includes("hello"));  //true

// console.log(arr.includes("hello",3)); //true

// console.log(arr.at(2)); //returns  element at specified index can take negetive index

//sort 
// let arr=[1,2,101,3,301,4,5]
// let names=["zakir","akash","gautham"]
// console.log(names.sort());  //lexicographic sort


// let arr=[1,101,2,201,301,4,5]
//[1,101,2,201,301,4,5]--ist iteration
//[1,2,101,201,301,4,5]--2nd iteration
//[1,2,4,101,201,301,5]--3rd iteration
//[1,2,4,5,101,201,301]--4th iteration
//[1,2,4,5,101,201,301]--5th iteration
//[1,2,4,5,101,201,301]--6th iteration
//[1,2,4,5,101,201,301]--7th iteration
//internal merge sort


//comapre function as callback function
// arr.sort((a,b)=>{
//     // return b-a; //descending order
//     return a-b; //ascending order
// })

// console.log(arr);

//find 

// let products=[
//     {id:1,name:"mobile",price:10000},
//     {id:2,name:"laptop",price:50000},
//     {id:3,name:"headphones",price:1000},
//     {id:4,name:"charger",price:1000},
//     {id:5,name:"earphones",price:1000},
//     {id:6,name:"watch",price:1000},
//     {id:7,name:"watch",price:1000},
//     {id:8,name:"watch",price:1000},
//     {id:9,name:"watch",price:1000},
//     {id:10,name:"watch",price:2000}
// ]

// let result=products.find((item)=>{
//     return item.name==="laptop"
// })
// console.log(result);

//findIndex
//findLast
//findLastIndex

//string methods
//search
//match
//replace


//filter map and reduce
// let cart=[4000,5000,2000,3000,1000]

// let filteredCart=cart.filter((val)=>{
//     return val<5000
// })
// console.log(filteredCart);


// let gstMappedCart=filteredCart.map((val)=>{
//     return val+(val*(18/100))
// })
// console.log(gstMappedCart);

// let total=gstMappedCart.reduce((acc,val)=>{
//     return acc+val
// },-2000)
// console.log(total);

//some and every
// let cart=[4000,5000,2000,3000,1000,6000]

// let result=cart.some((val)=>{
//     return val>5000
// })
// console.log(result);

// let result2=cart.every((val)=>{
//     return val>5000
// })
// console.log(result2);


// let string="hello world";
// console.log(string.split("").reverse().join(""));


//set and map

// let arr=[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]

// let set=new Set(arr);
// console.log(set.size);
// set.add(11)
// console.log(set);
// console.log(set.has(11));
// set.delete(11)
// console.log(set);
// set.clear()
// console.log(set);

// let map=new Map();
// map.set("name","zakir");
// map.set("age",25);
// map.set("gender","male");
// console.log(map);

// console.log(map.get("name"));
// console.log(map.has("name"));
// map.delete("name")
// console.log(map.size);

// console.log(map);
// map.clear()
// console.log(map);






