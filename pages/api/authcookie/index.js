import { verifyToken } from '@/lib/verifyToken';
import { parseCookies } from 'nookies';
 // Implement this function to verify JWT

export default async (req, res) => {
  const cookies = parseCookies({ req });
  const token = cookies.auth;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }else{
    return res.status(200).json({ token: token });
  }

 
};
