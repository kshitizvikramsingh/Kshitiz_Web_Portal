const path= require("path")
const ejs=require("ejs")
const express= require("express")
let port= process.env.PORT;
const app=express()

const static_file=path.join(__dirname,'public')
const views_dir=path.join(__dirname,'views')
console.log(views_dir)

app.set('view engine', 'ejs')
app.set('views',views_dir)
app.use(express.static(static_file))


app.get("/",(req,res)=>{
    res.render('home')
})
app.get("/blog",(req,res)=>{
    res.render("blog")
})
app.get("/projects",(req,res)=>{
    res.render("projects")
})
console.log(app.get(port))
app.listen(port||3000,()=>{
    console.log(`port is up on ${port} or 3000`)
})