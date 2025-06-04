const prisma=require("../prisma")
const addAppointment=async(req,res)=>{  
    const {appointment_date,doctorId}=req.body
    const {id}=req.user
    try {
        const doctor=await prisma.user.findUnique( {where:{id:doctorId}})
        if(!doctor ){
            return res.status(404).json({message:"doctor not found"})
        }
        const appointment=await prisma.appointment.create({data:{
            appointment_date,doctorId,patientId:id
        }})
        return res.status(200).json(appointment)
        
    } catch (error) {
           return res.status(500).json({message:error.message})
    }
}



module.exports={addAppointment}