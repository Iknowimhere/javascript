const example2=document.querySelector(".example2 button");
const example3=document.querySelector(".example3 button");
// console.log(example2);

example2.addEventListener("click",()=>{
    alert("hello this is example2");
})

example3.addEventListener("mouseover",()=>{
    example3.parentElement.style.backgroundColor="red";
})

example3.addEventListener("mouseout",()=>{
    example3.parentElement.style.backgroundColor="";
})

