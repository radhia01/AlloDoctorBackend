const express=require("express")
const router=express.Router()
const {addSpeciality,getSpecialities} = require("../controller/speciality")
router.get("/specialities",getSpecialities)
router.post("/specialities",addSpeciality)
module.exports=router