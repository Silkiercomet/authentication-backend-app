import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import extractStringEnvVar from '../controllers/extractEnv';
// it doesnt loads the hidden page
export const authenticateToken = (req:Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]
    console.log(token)
    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }

    jwt.verify(token, extractStringEnvVar("JWT"), (err,user) => {
        if(err){
            return res.status(403).json({message: "Invalid token"})
        }

        req.body.user = user;
        next()
    })
}