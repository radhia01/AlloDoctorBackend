const express=require("express")
const router=express.Router()
const {addSpeciality,getSpecialities} = require("../controller/speciality")
const validateUser=require("../middleware/verifyUser")
router.get("/specialities",getSpecialities)
module.exports=router