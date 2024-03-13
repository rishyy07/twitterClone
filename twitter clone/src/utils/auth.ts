import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const secretKey = "rishyy07"
export const createJwtToken = (user: {
    id: number;
    firstName: string;
    lastName: string | null;
    email: string;
    password: string;
}) => {

    return jwt.sign(user, secretKey, { expiresIn: "24h" })
}
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {                 //behave like a middleware
    let token = req.cookies.token;
    let decode = jwt.verify(token, secretKey);
    console.log(decode)
    if (decode) {
        req.user = decode;
        return next();
    }
    res.send("token invalid");
}