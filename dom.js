//dom
//interface or api
//document object model--functions to manipulate html elements,styles,
//events--user actions

//html---tree like structure

// console.log(document);

//accessing elements

// let title = document.getElementById("title");
// console.log(title);

// let lis=document.getElementsByClassName("list-items")
// console.log(lis);

// let lis = document.getElementsByTagName("li");
// console.log(lis);

//css selectors

// let title = document.querySelector("#title");
// console.log(title);

// let ul = document.querySelector(".container > ul");
// console.log(ul);

// let lis = document.querySelectorAll(".list-items");
// console.log(lis);

//styles

// let title = document.getElementById("title");
// console.log(title);

//background-color //backgroundColor

// title.style.color="red"
// title.style.backgroundColor="#fff"
// title.style.padding="0.25em"

// let lis = document.querySelectorAll(".list-items");
// console.log(lis);

//converting node-list into proper array
// Array.from(lis).forEach((li) => (li.style.fontWeight = "bolder"));

//attributes--extra information about the elements--behavior

//id class title required type

//manipulate attributes

//get attributes
// let h1=document.querySelector("#title")

// let id=h1.getAttribute("id")
// console.log(id);

// let lis = document.querySelectorAll(".list-items");

// lis.forEach((li) => console.log(li.getAttribute("class")));

//create attributes or update the attribute

// let h1 = document.querySelector("#title");

// h1.setAttribute("class", "align-center");
// h1.setAttribute("title", "this is a title");

//remove the attributes
// let h1 = document.querySelector("#title");

// h1.setAttribute("class", "align-center");
// h1.setAttribute("title", "this is a title");

// h1.removeAttribute("id")
// h1.removeAttribute("class")

//direct access of attributes

// let h1 = document.getElementById("title");
// h1.setAttribute("class", "align-center");
// console.log(h1.id);

// console.log(h1.className);
