let html=document.querySelector("html")
let body=document.querySelector("body")
let grandparent=document.querySelector(".grandparent")
let parent=document.querySelector(".parent")
let child=document.querySelector("button")


document.addEventListener("click", ()=> {
    console.log("document clicked");
},true);

html.addEventListener("click", ()=> {
    console.log("html clicked");
},true);

body.addEventListener("click", ()=> {
    console.log("body clicked");
},{capture:true});

grandparent.addEventListener("click", ()=> {
    console.log("grandparent clicked");
},true);

parent.addEventListener("click", ()=> {
    console.log("parent clicked");
},true);

child.addEventListener("click", ()=> {
    console.log("child clicked");
},true);

document.addEventListener("click", ()=> {
    console.log("document clicked");
});

html.addEventListener("click", ()=> {
    console.log("html clicked");
});

body.addEventListener("click", ()=> {
    console.log("body clicked");
});

grandparent.addEventListener("click", ()=> {
    console.log("grandparent clicked");
});

parent.addEventListener("click", ()=> {
    console.log("parent clicked");
});

child.addEventListener("click", ()=> {
    console.log("child clicked");
});