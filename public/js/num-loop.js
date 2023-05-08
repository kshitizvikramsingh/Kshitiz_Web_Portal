const button = document.querySelector("#counter");
const heading=document.getElementById("heading");
const certNumber= document.createElement('h2')
document.querySelector("#heading").append(certNumber)
const artNumber= document.createElement('h2')
document.querySelector("#heading").appendChild(artNumber)

t0= performance.now()
const sleep= (t) =>{
    return new Promise((resolve)=>{
        return setTimeout(()=>{
            resolve()
        }, t)
    })
}


document.addEventListener("DOMContentLoaded",async()=>{
  // certNumber.scrollIntoView()
  for (let i = 0; i <= 4; i++){
    await sleep(250)
    
    certNumber.textContent=`${i} + projects ⚒️`
    
    console.log(i)
  }
  
})

document.addEventListener("DOMContentLoaded",async()=>{
  // certNumber.scrollIntoView()
  for (let i = 0; i <= 15; i++){
    await sleep(200)
    artNumber.textContent=`${i} + articles 📃`
    
    
    
  }
  
})

t1=performance.now()
let tavg=t1-t0
console.log(tavg)
const ta=document.createElement("p");
ta.textContent=tavg;
ta.style.color="white";
document.body.appendChild(ta);
