const User = require("../model/userModel")


const getAllUsers = async(req,res)=>{

  try {
    const allUser = await User.find()

    res.status(200).json({
      success:true,
      data:allUser
    })
  } catch (error) {
    res.status(400)
  }

}

const registerUser = async(req,res)=>{
  try {

    const newUser = await User.create({...req.body})
    // const newUser = await User.create({
    //   username:req.body.username,
    //   email:req.body.email,
    //   password:req.body.password
    // })

    res.status(200).json({
      message:"success",
      data:newUser
    })

  } catch (error) {
    res.status(400)
  }
}


module.exports={
  getAllUsers,
  registerUser
}