
const buttons=document.querySelectorAll(".btn");
const dropDown=document.querySelector("#navbarDropdown")
const textBox=document.querySelector("input");
const commentButton=document.querySelector("#comment-button");

console.log("script is loaded");

commentButton.addEventListener("click",()=>{
    let data=textBox.value;
    console.log(data);
    const p=document.createElement("p");
    p.textContent=data;
    p.style.color="white";
    document.body.appendChild(p);
})

