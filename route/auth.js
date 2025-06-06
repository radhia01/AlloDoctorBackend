const express=require("express")
const signupSchema=require("../schemas/signUpSchema")
const signinSchema=require("../schemas/signInSchema")
const router=express.Router()
const {validateData}=require("../middleware/validateSchema")
const {signUp, signIn, refreshToken, deleteUsers, logout} = require("../controller/auth")
router.post("/signup",validateData(signupSchema),signUp)
router.post("/signin",validateData(signinSchema),signIn)
router.post("/refresh",refreshToken)
router.delete("/users",deleteUsers)
router.get("/logout",logout)
module.exports=router