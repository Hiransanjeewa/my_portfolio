const express =require("express");
const app=express();

module.exports=function (name) {
    this.print = function () { 
        return "Welcome "+name+", Good to see ya";
    }
}


