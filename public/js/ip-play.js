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

    fetch("/data?ip="+ search.value).then((res)=>{
        res.json().then((data)=>{
            console.log(data) 
            p.textContent="Location searched for: "+data.city +", "+data.country+"."
            p.textContent+=" "+"ISP is: "+data.org+ "."
            p.textContent+=" "+"Region is: "+data.region+ "."
            p.textContent+=" "+"Location coordinates are: "+data.loc
        })
    })
})