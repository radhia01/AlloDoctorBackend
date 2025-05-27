const prisma=require("../prisma")
const getUsers=async(req,res)=>{  
    try {
        const users=await prisma.user.findMany(
            {select:{
            id:true,
              firstName:true,
              lastName:true,
              email:true,
              password:true,
              description:true,
              speciality:true,
              phone:true,
              role:true,
              adress:{
                select:{
                    street :true,
                    city :true,
                    governorate :true,
                

        }}}})
        return res.status(201).json(users)
        
    } catch (error) {
           return res.status(500).json({message:error.message})
    }
}
const getUser=async(req,res)=>{  
    const {id}=req.params
    
    try {
        const user=await prisma.user.findUnique({where:{id:parseInt(id)},
         select:{
              firstName:true,
              lastName:true,
              email:true,
              password:true,
              description:true,
              adress:{
                select:{
                    street :true,
                    number :true,
                    city :true,
                    country :true, 
                    postalCode :true, 
                    governorate :true,
            }
        }}})
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
       
        return res.status(200).json(user)
        
    } catch (error) {
           return res.status(500).json({message:error.message})
    }
}



    const getCurrentUser=async(req,res)=>{  
    const {id}=req.user
    
    
    try {
        const user=await prisma.user.findUnique({where:{id:parseInt(id)},
         select:{
              firstName:true,
              lastName:true,
              email:true,
              role:true
              }})
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
       
        return res.status(200).json(user)
        
    } catch (error) {
           return res.status(500).json({message:error.message})
    }
}

   const updateRole=async(req,res)=>{  
    const {id}=req.params
    const {role}=req.body
     if (!["DOCTOR", "PATIENT"].includes(role)) {
    return res.status(400).json({ error: "Rôle invalide" });
                   }
    
    try {
        const user=await prisma.user.update({where:{id:parseInt(id)},data:{role}})
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
       
         res.json(user);
        
    } catch (error) {
           return res.status(500).json({message:error.message})
    }
}


const addSpecialityToDoctor=async(req,res)=>{  
    const {idSpec,idUser}=req.params
    try {
        const user=await prisma.user.update(
            {
            where:{id:parseInt(idUser)},
            data:{
            specialtyId:parseInt(idSpec)
        }})
       
        return res.status(201).json(user)
        
    } catch (error) {
           return res.status(500).json({message:error.message})
    }
}
   const getDoctors=async(req,res)=>{  
    try {
        const users=await prisma.user.findMany(
            {where:{role:"DOCTOR"},
            select:{
            id:true,
              firstName:true,
              lastName:true,
              email:true,
              password:true,
              description:true,
              speciality:true,
              phone:true,
              role:true,
              adress:{
                select:{
                    street :true,
                    city :true,
                    governorate :true,
                

        }}}})
        return res.status(201).json(users)
        
    } catch (error) {
           return res.status(500).json({message:error.message})
    }
}


module.exports={getUsers,getUser,updateRole,addSpecialityToDoctor,getCurrentUser,getDoctors}