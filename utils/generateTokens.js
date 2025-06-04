
const jwt=require("jsonwebtoken")

const generateTokens=(user)=>{

    const accessToken=jwt.sign({id:user.id,role:user.role},process.env.ACCESS_TOKEN,{
        expiresIn:"4m"
    })
       const refreshToken=jwt.sign({id:user.id,role:user.role},process.env.REFRESH_TOKEN,{
        expiresIn:"7d"
    })
    return {accessToken,refreshToken}
}
module.exports=generateTokens;