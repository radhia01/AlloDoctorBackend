const express=require("express")
const router=express.Router()
const {updateRole} = require("../controller/user")
const validateUser=require("../middleware/verifyUser")
router.patch("/users/role/:id",validateUser,updateRole)

module.exports=router