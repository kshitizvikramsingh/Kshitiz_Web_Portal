const path= require("path")
const fs= require('fs');
const ejs=require("ejs")
const request=require("request")
const express= require("express")
const PORT= 80;
const app=express()
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const session=require("express-session")
const Comment=require("./models/comments")
const User=require("./models/users")
const ipData=require("./public/js/ip-json.js")
const weather=require("./public/js/weather.js")
const t0=performance.now()


app.use(session({secret: "notagoodsecret"}))


mongoose.connect('mongodb://127.0.0.1:27017/Users')
    .then(()=>{
        console.log("Mongoose connection estabilished to Users db")
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

app.get("/programming-articles",(req,res)=>{
    res.render("programming-articles.ejs")
})
app.get("/comments",(req,res)=>{
    res.render("comments.ejs")
})
app.get("/transit-gateway",(req,res)=>{
    res.render("articles/transit-gateway")
})
app.get("/route-53",(req,res)=>{
    res.render("articles/route-53")
})
app.get("/ip-locator",(req,res)=>{
    res.render("ip-locator")


})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("/weathers",(req,res)=>{
    let locationName=req.query.location;
    console.log(locationName)
    weather(locationName,(err,data)=>{
        if(err){
            res.send({err})
        }
        else {
            
            res.send(data)
        }
       
    })
    


})
app.get("/data",(req,res)=>{
    //console.log(req.body.ip)
    let ip=req.query.ip
    ipData(ip,(error,data)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(data)
        }
       
    })
    
})

app.post("/feedback",async(req,res)=>{
    let data=req.body;
    let name=req.body.name.toLowerCase()
    let comment=req.body.comment.toLowerCase()
    console.log(name)
    console.log(comment)
    const newComment= new Comment({name,comment})
    await newComment.save().then(
        res.redirect("feedback")
    )
    .catch((err)=>{
        console.log("Error is :"+err)
    })
    
    
    
})
app.post("/delete",async(req,res)=>{
    let dataToDelete=req.body.comment.toLowerCase();
    console.log(dataToDelete)
    await Comment.deleteOne({name: dataToDelete})
    
    res.redirect("/feedback")
    
})
app.get("/login",(req,res)=>{

    res.render("login")
})
app.get("/register",(req,res)=>{

    res.render("register")
})
app.post("/register",async(req,res)=>{
    const {password,username}=req.body;
    const hash=await bcrypt.hash(password,12);
    const user=new User({
     username,
     password: hash
    })
    await user.save();
    req.session.user_id=user._id
    res.send("Usert registerede successfully!")
    
})
app.post("/login",async (req,res)=>{
    console.log(req.body)
    const {username, password}=req.body
    const user=await User.findOne({username})
    console.log("found user!!"+user)
    if(user){
       const validPassword=await bcrypt.compare(password,user.password)
       console.log(validPassword)
       if(validPassword){
        console.log("Password is correct!")
          req.session.user_id=user._id
          console.log("Giving session user id")
          res.render("secret")
       }
    }
    else {
       res.send("Try Again bitch!")
    }
})
app.get("/secret",(req,res)=>{
    if(req.session.user_id){
       res.render("secret");
    }
    else{
       res.redirect("login")
    }
    
 })
app.post("/secret",(req,res)=>{
    req.session.destroy()
    res.redirect("login")
})


app.listen(PORT,()=>{
    console.log(`port is up on ${PORT}`)
})

const t1=performance.now()
let tav=t1-t0
