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
// console.log(h1.title);

// console.log(h1.className);

//class--classList
// let h1 = document.getElementById("title");
// h1.className = "align-center";
// console.log(h1);

// h1.classList.add("align-center", "bg-light");
// console.log(h1.classList);

// h1.classList.remove("bg-light", "align-center");
// console.log(h1);

// console.log(h1.classList.contains("align-center"));

// h1.classList.toggle("heading");
// h1.classList.toggle("align-center");

//traversing the dom

// const ul = document.querySelector("ul");
// let res1 = ul.parentElement.parentElement.parentElement.parentElement;
// let res2 = ul.parentNode.parentNode.parentNode.parentNode;
// console.log(res1);
// console.log(res2);

// let res3 = ul.childNodes;
// let res4 = ul.children;
// console.log(res3);
// console.log(res4);

// let li = document.querySelector("ul li");
// console.log(li.nextElementSibling); //element node
// console.log(li.nextSibling); //text node or element node

// console.log(li.previousElementSibling);
// console.log(li.previousSibling);

//innerHtml vs innerText vs textContent
// const ul = document.querySelector("ul");

// console.log(ul.innerText);  //returns only text
// console.log(ul.innerHTML); //returns html part
// console.log(ul.textContent); //returns only text but reserving space and line breaks as it is in code editor (vs code)

//how to modify an element
// const ul = document.querySelector("ul");

// let li1 = document.createElement("li");
// let li2 = document.createElement("li");

// li1.innerText = "Superman";
// li1.textContent = "<i>Superman</i>";
// li1.innerHTML = "<i>Superman</i>";

// li2.innerText = "some movie";
// append and appendChild --difference append can append both elements and text nodes but appendChild only one element node
// ul.appendChild(li1);

// ul.append(li1, li2);
// ul.appendChild("text"); //doesnt work
// ul.appendChild(li1,li2)

// li1.classList.add("list-items");
// li2.classList.add("list-items");

//how to remove an element

// const ul = document.querySelector("ul");
// const li = document.querySelector("ul li");
// ul.remove(); //removes target element
// ul.removeChild(li); //this removes child
