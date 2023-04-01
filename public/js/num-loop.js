const button = document.querySelector("#counter");
const heading=document.getElementById("heading");
const certNumber= document.createElement('h2')
document.querySelector("#heading").append(certNumber)
const artNumber= document.createElement('h2')
document.querySelector("#heading").appendChild(artNumber)


const sleep= (t) =>{
    return new Promise((resolve)=>{
        return setTimeout(()=>{
            resolve()
        }, t)
    })
}


button.addEventListener("click",async()=>{
  // certNumber.scrollIntoView()
  for (let i = 0; i <= 4; i++){
    await sleep(100)
    certNumber.textContent=`${i} + projects ⚒️`
    
    console.log(i)
  }
  
})

button.addEventListener("click",async()=>{
  // certNumber.scrollIntoView()
  for (let i = 0; i <= 10; i++){
    await sleep(100)
    artNumber.textContent=`${i} + articles 📃`
    
    
    
  }
  
})