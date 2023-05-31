const express =require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello worl");
    console.log("******")
});
app.listen(3000,()=>console.log("Server is listening ... "));

