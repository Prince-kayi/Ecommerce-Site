const express =require("express")
const cors= require("cors")
const mongoose=require("mongoose")
const back=express();
const Url=require("./routes/UserRouting")

back.use(cors())
back.use(express.json())
mongoose.connect("mongodb+srv://Gamestore:games1234@cluster0.3pqwdtt.mongodb.net/Ecommerce",
() => console.log("Database connected"))


back.use("/kai",Url)
back.listen(1789,()=>console.log("tswe server begin"))
