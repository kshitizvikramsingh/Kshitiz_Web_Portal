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
app.get("/blogs",(req,res)=>{
    res.render("blogs")
})
app.get("/gen-blogs",(req,res)=>{
    res.render("general-blogs.ejs")
})

app.get("/aws-blogs",(req,res)=>{
    res.render("aws-blogs.ejs")
})
app.get("/project-management-blogs",(req,res)=>{
    res.render("project-management-blogs.ejs")
})
app.get("/Innovators-DNA",(req,res)=>{
    res.render("Innovators-DNA.ejs")
})
app.get("/new-blog",(req,res)=>{
    res.render("new-blog.ejs")
})


app.listen(PORT,()=>{
    console.log(`port is up on ${PORT}`)
})

console.timeEnd("Server initialization time")