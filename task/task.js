const accordions=document.querySelectorAll(".accordion")
const contentDivs=document.querySelectorAll(".content")
const headers=document.querySelectorAll(".header")


Array.from(headers).forEach(header=>{
    let currentContent=header.nextElementSibling

    contentDivs.forEach(content=>{
        if(currentContent==content){
            header.addEventListener("click",()=>{
                currentContent.style.display="block"
            })
        }
    })
})
// TODO: implement a accordion functionality