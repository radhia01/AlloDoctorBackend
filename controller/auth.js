const prisma=require("../prisma")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const generateTokens = require("../utils/generateTokens")
const EXPIRE_TIME=2*60*1000
// signup
const signUp=async(req,res)=>{
    const {firstName,lastName,email,password,phone ,role}=req.body   
    try {
        const existingUser=await prisma.user.findUnique({where:{email}})
        if(existingUser){
            return res.status(409).json({message:"User already exist"})
        }
        console.log(existingUser)
        const hashedPassword=await bcrypt.hash(password,10)
        const user=await prisma.user.create({
            data:{
                firstName,lastName,email,password:hashedPassword,phone,role}
               
        }
    )
        return res.status(201).json({user, message:"user created successfully"})
        
    } catch (error) {
            console.log(error.message)
           return res.status(500).json({message:error.message})
    }
}

// signIn
const signIn=async(req,res)=>{
  
    const {email,password}=req.body     
    try {
       const existingUser = await prisma.user.findUnique({
          where: { email },
          select: {
            id:true,
            firstName:true,
            lastName:true,
            role:true,
            email: true,
            password: true,
            role:true
      },
    }
)

        if(!existingUser){
            return res.status(409).json({message:"User not exist"})
        }
       // compare passwords
       const pwMatchs=await bcrypt.compare(password,existingUser.password)
       if(!pwMatchs){
        return res.status(400).json({message:"password is incorrect"})
       }
      
       // generate tokens
       const {accessToken,refreshToken}=generateTokens(existingUser)
             
          const user={
           id:existingUser.id,
           email:existingUser.email,
           role:existingUser.role,
       }
       console.log(user,accessToken)
              return res.status(200).json({user,
                accessToken,
                refreshToken,
                expiredIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
              })
        
    } catch (error) {
           return res.status(500).json({message:error.message})
    }
}


const refreshToken = async (req, res) => {
  const authToken = req.headers.authorization
  console.log(authToken)
  const token=authToken.split(" ")[1]
  jwt.verify(token, process.env.REFRESH_TOKEN, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }
    try {
        const existingUser = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: { id: true, role: true} 
      });

      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const refreshToken=jwt.sign({id:existingUser.id,role:existingUser.role},process.env.ACCESS_TOKEN,{expiresIn:"4m"})
      const accessToken=jwt.sign({id:existingUser.id,role:existingUser.role},process.env.ACCESS_TOKEN,{expiresIn:"1m"})
       
      return  res.status(200).json({accessToken,refreshToken, expiredIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),})
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
};
const deleteUsers=async(req,res)=>{
            await prisma.user.deleteMany()
}
const logout=(req,res)=>{
    res.clearCookie("accessToken", {
    httpOnly: true,
    secure: false, 
    sameSite: "lax", 
  })

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  })

  return res.status(200).json({ message: "Déconnexion réussie" })
}

module.exports={signIn,signUp,refreshToken,deleteUsers,logout}