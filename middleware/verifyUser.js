const jwt = require("jsonwebtoken");

const validateUser = (req, res, next) => {
  const authToken = req.headers.authorization;
 
  const token=authToken.split(" ")[1]
  console.log(token)
   if(!token){
      return res.status(401).json({ message: "No token is found" })
   }
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
    req.user = decoded;
    next();
  });
};

module.exports = validateUser;
