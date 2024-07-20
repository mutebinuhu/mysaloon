// app/api/auth/login.js
import connectMongo from '../../../lib/mongoose';
import User from '../../../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { serialize,  } from 'cookie';
import { setCookie } from 'nookies';



export default async function handler(req, res) {
    await connectMongo();

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const payload = { user: user };
        const token = jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_TOKEN, { expiresIn: '1h' });
        res.setHeader('Set-Cookie',serialize('auth', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600,
            sameSite: 'strict',
            path: '/'
          }));
        console.log("user cred====", user )
                // Set the user details as a cookie
      setCookie({ res }, 'user', user.username, {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

        res.status(200).json({ message: 'Login successful', token , userdetails:user.username});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
