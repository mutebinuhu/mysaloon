// app/api/auth/signup.js
import connectMongo from '../../../lib/mongoose';
import User from '../../../models/User';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    await connectMongo();

    const { username, email, password } = req.body;

    try {
        const user = new User({ username, email, password });
        await user.save();
        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_TOKEN, { expiresIn: '1h' });

        res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
