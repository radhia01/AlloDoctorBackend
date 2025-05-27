const prisma=require("../prisma")


const getSpecialities=async(req,res)=>{  
    try {
        const specialities=await prisma.speciality.findMany()
                
       
        return res.status(200).json(specialities)
        
    } catch (error) {
           return res.status(500).json({message:error.message})
    }
}



module.exports={getSpecialities}