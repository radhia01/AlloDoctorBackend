const express=require("express")
const router=express.Router()
const validateUser=require("../middleware/verifyUser")
const { addAppointment } = require("../controller/appointment")
router.post("/appointments",validateUser,addAppointment)

module.exports=router