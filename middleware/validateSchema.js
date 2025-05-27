
import { ZodError } from "zod";
export const validateData =
    ( querySchema ) =>
    
    async (req, res, next) => {
        try {
            querySchema.parse(req.body); 
            return next();
     } catch (err) {
         const error = err instanceof ZodError ? err.errors : err;
          const messagesError=error.errors.map((issue)=>
            ({
                message:`${issue.path.join('.')}${issue.message}`
            })
          )
         console.error(error.errors);
         return res.status(400).json(messagesError);
     }
};