// middleware/auth.js
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export default function authMiddleware(handler) {
    return async (req, res) => {
        const cookies = cookie.parse(req.headers.cookie || '');
        const token = cookies.auth
        console.log("the token is here", token)

        if (!token) {
            return res.status(401).json({ success: false, error: 'Authentication token is required' });
        }

        try {
            const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_TOKEN);
            req.username = decoded;
            return handler(req, res);
        } catch (error) {
            return res.status(401).json({ success: false, error: 'Invalid authentication token' });
        }
    };
}
