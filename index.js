const express = require("express")
const mongoose = require("mongoose")
const User = require("./model/userModel")
const { userRoutes } = require("./routes/userRoutes")


const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
  res.send("welcoem home")
})

app.use("/api/v1/users",userRoutes)


mongoose.connect("mongodb://localhost:27017/mybrandDB")
  .then(()=>{
    app.listen(4000,()=>{
      console.log("server is running on port 4000 and succesful cionnect to databse")
    })
  })
  .catch((error)=>console.log("failed to connect to databe",error.message))


