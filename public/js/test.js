const buttons=document.querySelectorAll(".btn");
const dropDown=document.querySelector("#navbarDropdown")
console.log("script is loaded");

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("mouseenter",()=>{
        buttons[i].classList="btn btn-danger"
    })
    
    buttons[i].addEventListener("mouseout",()=>{
        buttons[i].classList="btn btn-primary"
    })
}

dropDown.addEventListener("mouseenter",()=>{
    display="true"
})
