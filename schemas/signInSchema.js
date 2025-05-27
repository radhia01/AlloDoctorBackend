const z=require("zod")
const schema=z.object({
    email:z.string().email(),
    password:z.string().min(8," must have at least  8 caracters "),
})
module.exports=schema;