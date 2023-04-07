const path= require("path")
const fs= require('fs');
const ejs=require("ejs")
const express= require("express")
const PORT= 80;
const app=express()
const mongoose=require("mongoose")
const Comment=require("./models/comments")
const ipData=require("./public/js/ip-json.js")
const t0=performance.now()

mongoose.connect('mongodb://127.0.0.1:27017/Comments')
    .then(()=>{
        console.log("Mongoose connection estabilished")
    })
    .catch(()=>{
        console.log("OOPS There is a mongoose error")
    })


    

const static_file=path.join(__dirname,'public')
const views_dir=path.join(__dirname,'views')
console.log(views_dir)

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



app.set('view engine', 'ejs')
app.set('views',views_dir)
app.use(express.static(static_file))



app.get("/test",(req,res)=>{
    res.render("test")
})

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
    
    res.render("about",{tav})
})
app.get("/feedback",async (req,res)=>{
     const comments=await Comment.find({})
    //console.log(comments)
    res.render("feedback",{comments})
})
app.get("/vpc_overview",(req,res)=>{
    res.render("articles/vpc_overview.ejs")
})
app.get("/aws_site_to_site",(req,res)=>{
    res.render("articles/aws_site_to_site.ejs")
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
    res.render("articles/Innovators-DNA.ejs")
})
app.get("/blog",(req,res)=>{
    res.render("blog.ejs")
})
app.get("/aws-direct-connect",(req,res)=>{
    res.render("articles/direct-connect.ejs")
})

app.get("/node-js-article",(req,res)=>{
    res.render("articles/Node-JS.ejs")
})

app.get("/node-articles",(req,res)=>{
    res.render("node-articles.ejs")
})
app.get("/comments",(req,res)=>{
    res.render("comments.ejs")
})
app.get("/transit-gateway",(req,res)=>{
    res.render("articles/transit-gateway")
})

app.get("/ip-locator",(req,res)=>{
    res.render("ip-locator")


})
app.post("/data",(req,res)=>{
    //console.log(req.body.ip)
    const ip=req.body.ip
    ipData(ip,(error,data)=>{
        const ip=data.ip
        const region=data.region
        const country=data.country
        const timezone=data.timezone
        const provider=data.org
        res.render("result",{ip,region,country,timezone,provider})
    })
    
})


app.post("/feedback",async(req,res)=>{
    let data=req.body;
    console.log(data)
    const newComment= new Comment(data)
    await newComment.save()
    res.redirect("/feedback")
    
})

app.listen(PORT,()=>{
    console.log(`port is up on ${PORT}`)
})

const t1=performance.now()
let tav=t1-t0
