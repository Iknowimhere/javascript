// const li1=document.querySelector("ul li:nth-child(1)")
// const li2=document.querySelector("ul li:nth-child(2)")
// const li3=document.querySelector("ul li:nth-child(3)")

// li1.addEventListener("click",(e)=>{
//     e.target.style.backgroundColor="rgb(39, 38, 38)"
//     e.target.style.color="white"
//     e.target.style.border="1px solid white"
// })

// li2.addEventListener("click",(e)=>{
//     e.target.style.backgroundColor="rgb(39, 38, 38)"
//     e.target.style.color="white"
//     e.target.style.border="1px solid white"
// })

// li3.addEventListener("click",(e)=>{
//     e.target.style.backgroundColor="rgb(39, 38, 38)"
//     e.target.style.color="white"
//     e.target.style.border="1px solid white"
// })

//Event delegation-passing the event handler to parent which is going to take care of addeventlisteners on present and future descendants
const ul=document.querySelector("ul")

ul.addEventListener("click",(e)=>{

    if(e.target.matches(".list-items")){
        e.target.style.backgroundColor="rgb(39, 38, 38)"
        e.target.style.color="white"
        e.target.style.border="1px solid white"
    }
})

const li=document.createElement("li")
li.innerText="Spiderman"
ul.appendChild(li)
li.className="list-items"