// app/api/auth/signup.js
import connectMongo from '../../../lib/mongoose';
import User from '../../../models/User';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';


export default async function handler(req, res) {
    await connectMongo();

    const { username, email, password } = req.body;

    try {
        
        const user = new User({ username, email, password });
        await user.save();
        const payload = { user: user };
        const token = jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_TOKEN, { expiresIn: '1h' });

        res.setHeader('Set-Cookie', cookie.serialize('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600,
            sameSite: 'strict',
            path: '/'
          }));
        res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
