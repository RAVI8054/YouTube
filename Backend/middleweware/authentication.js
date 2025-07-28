import jwt from 'jsonwebtoken';
import User from '../Models/User.model.js';

 export default async function auth(req,res,next) {
    const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ error: 'No token, authorization denied' });
        } else {
            try {
                const decode = jwt.verify(token, "Its_My_Secret_Key");
                // get user detils and remove password
                req.user = await User.findById(decode.userId).select('-password');
                next();
            } catch (err) {
                res.status(401).json({ error: 'Token is not valid' });
            }
        }
    }
