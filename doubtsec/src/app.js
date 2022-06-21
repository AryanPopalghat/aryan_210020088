const express =require("express");
const path= require("path");
const app = express();
const hbs=require("hbs");

require("./db/conn");
const Register = require("./models/registers");
const port = process.env.PORT || 3000;
const static_path=path.join(__dirname, "../public");
const templates_path=path.join(__dirname, "../templates/views");
const partials_path=path.join(__dirname, "../templates/partials");

app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",templates_path);
hbs.registerPartials( partials_path);
app.get("/",(req, res)=>{
  res.render("index")
});
app.get("/Register",(req, res)=>{
    res.render("Register")
})
app.post("/register",(req, res)=>{
  
    try{
   console.log(req.body.name);
   res.send(req.body.name);
   const doubtsec = new Register({
    name : req.body.name,
    ans : req.body.ans,
    number :req.body.number,
    doubt :req.body.doubt,
    email :req.body.email,
    password :req.body.password
   })
   const registered =  doubtsec.save();
   res.status(201).render("index");
    } catch(error){
        res.status(400).send(error);
    }
   
})
app.get("/post",(req, res)=>{
    res.render("post")
})
app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})