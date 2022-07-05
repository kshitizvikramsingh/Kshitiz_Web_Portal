const path= require("path")
const ejs=require("ejs")
const express= require("express")

const app=express()

const static_file=path.join(__dirname,'\public')
const views_dir=path.join(__dirname,'views')
console.log(views_dir)

app.set('view engine', 'ejs')
app.set('views',views_dir)
app.use(express.static(static_file))


app.get("/",(req,res)=>{
    res.render('home')
})
app.get("/problems",(req,res)=>{
    res.render("problems")
})
app.get("/homepage",(req,res)=>{
    res.render("homepage")
})
app.listen(3000,()=>{
    console.log("Port is up on 3000!")
})