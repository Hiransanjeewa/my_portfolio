const express =require("express");
const app=express();
const Userservice=require("/services/UserservicesImpl")

app.get("/",(req,res)=>{
    res.send("Hello world");
    console.log(Userservice.print("Welcome back hiran"))
});
app.listen(3000,()=>console.log("Server is listening ... "));

