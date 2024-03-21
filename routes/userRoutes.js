const express = require("express")
const { getAllUsers, registerUser } = require("../controllers/userControllers")

const userRoutes = express.Router()



userRoutes.get("/",getAllUsers)
userRoutes.post("/",registerUser)



module.exports = {
  userRoutes
}