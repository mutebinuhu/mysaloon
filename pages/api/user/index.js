import { verifyToken } from '@/lib/verifyToken';
import { parseCookies } from 'nookies';
 // Implement this function to verify JWT

export default async (req, res) => {
  const cookies = parseCookies({ req });
  const token = cookies.auth;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = await verifyToken(token, process.env.JWT_SECRET); // Implement token verification
    res.status(200).json({ user: decoded });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
