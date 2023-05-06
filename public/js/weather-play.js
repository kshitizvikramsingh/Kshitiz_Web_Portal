const form=document.querySelector("form")
const p=document.querySelector("p")
const search=document.querySelector(".form-control")

console.log(form)


form.addEventListener("submit",(error)=>{
    error.preventDefault()
    p.textContent=""
    const img=document.createElement("img")
    img.src="/img/spinner.svg"
    p.appendChild(img)

    fetch("/weathers?location="+ search.value).then((res)=>{
        res.json().then((data)=>{
            console.log(data) 
            p.textContent="Location searched for: "+data.location.name +", "+data.location.country+"."
            p.textContent+=" "+"Temperature is: "+data.current.temperature+ " degress Celcius."
        })
    })
})