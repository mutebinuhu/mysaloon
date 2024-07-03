// middleware/auth.js
import jwt from 'jsonwebtoken';

export const protectRoute = (handler) => async (req, res) => {
    const token = req.headers.authorization
    console.log("headers===============", token)

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_TOKEN);
        req.user = decoded;
        return handler(req, res);
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};
