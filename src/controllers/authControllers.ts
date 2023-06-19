import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User, { UserModel } from '../models/User';
import extractStringEnvVar from './extractEnv';

export const signup = async (req:Request,res:Response) => {
    try{
        const {username, password } = req.body
        const existingUser = await User.findOne({username})
        if(existingUser) {
            return res.status(409).json({message: "Username already exist"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user:UserModel = await User.create({username, password: hashedPassword})
        
        const token = jwt.sign({id:user._id}, extractStringEnvVar("JWT"))
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({message: "Something wen wrong"})
    }
};

export const login = async (req:Request, res:Response) => {
    try{
        const {username,password} = req.body

        const user: UserModel | null = await User.findOne({username})

        if(!user){
            return res.status(401).json({message:"invalid username"})
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch){
            return res.status(401).json({message : "invalid password"})
        }

        const token = jwt.sign({id:user._id}, extractStringEnvVar("JWT"))

        res.status(200).json({token})
    }catch (error) {
        console.log(error)
        res.status(500).json({message : "something went wrong"})
    }
}

export const getHiddenContent = (req: Request, res: Response) => {
    res.json({message: "this is hidden content"})
}