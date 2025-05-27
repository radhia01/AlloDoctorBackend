const z=require("zod")
const schema=z.object({
    firstName:z.string().min(3," must have at least 3 caracters"),
    lastName:z.string().min(3," must have at least  3 caracters"),
    email:z.string().email(),
    phone:z.string().min(8," must have at least 8 numbers"),
    password:z.string().min(8," must have at least  8 caracters "),
    role:z.enum(["DOCTOR","PATIENT"],{
    errorMap: () => ({ message: " must be one of: DOCTOR, PATIENT" })
  })
})
module.exports=schema;