const express =require("express");
const app=express();


const Userservices=require("./services/Userservices")
app.get("/",(req,res)=>{
   
    var Msg = new Userservices('James');
    const result=Msg.print();
    res.send(result);
    //console.log(result);
});
app.listen(3000,()=>console.log("Server is listening ... "));

