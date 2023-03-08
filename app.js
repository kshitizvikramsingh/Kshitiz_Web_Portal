const path= require("path")
const ejs=require("ejs")
const express= require("express")
const PORT= 80;
const app=express()

const static_file=path.join(__dirname,'public')
const views_dir=path.join(__dirname,'views')
console.log(views_dir)

app.set('view engine', 'ejs')
app.set('views',views_dir)
app.use(express.static(static_file))

console.time("Server initialization time")

app.get("/",(req,res)=>{
    res.render('home')
})
app.get("/blog",(req,res)=>{
    res.render("blog")
})
app.get("/projects",(req,res)=>{
    res.render("projects")
})
app.get("/certifications",(req,res)=>{
    res.render("certifications")
})
app.get("/about",(req,res)=>{
    
    res.render("about")
})
app.get("/feedback",(req,res)=>{
    res.render("feedback")
})
app.get("/vpc_overview",(req,res)=>{
    res.render("vpc_overview")
})
app.get("/aws_site_to_site",(req,res)=>{
    res.render("aws_site_to_site")
})


app.listen(PORT,()=>{
    console.log(`port is up on ${PORT}`)
})

console.timeEnd("Server initialization time")