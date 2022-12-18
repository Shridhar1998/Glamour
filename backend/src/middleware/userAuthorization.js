require("dotenv").config();

const jwt = require("jsonwebtoken");
const secrectKey = process.env.SECRECTTOKEN;

const userAuthMiddleware = (req,res,next)=> {
    const token = req.headers["authorization"];
    let decode = jwt.decode(token, secrectKey);

    if(decode.role === "user"){
        next();
    }else{
        return res.status(403).send("you are not allowed to do this operation.")
    }
}

module.exports = userAuthMiddleware;