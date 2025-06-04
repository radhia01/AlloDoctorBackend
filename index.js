const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const cookieParser=require("cookie-parser")
dotenv.config()
const app=express()
const port=process.env.port||3002
// middlewares 
app.use(cors({
    origin:["http://localhost:3000","https://allo-doctor-frontend.vercel.app"],
    credentials:true,
    allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(cookieParser())
app.use(express.json())


app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})
app.get("/",(req,res)=>{
    res.send({message:"hello world"})
})
app.use("/auth",require("./route/auth"))
app.use("/",require("./route/user"))
app.use("/",require("./route/role"))
app.use("/",require("./route/speciality"))
app.use("/",require("./route/appointment"))