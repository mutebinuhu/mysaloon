// utils/auth.js
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export function getUserFromToken(req) {
  if (typeof window === 'undefined') {
    // If we're on the server, get the token from the request cookies
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.auth;
    console.log("token is got here please", token)
    if (!token) {
      return null;
    }
    try {
      const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
      return decoded;
    } catch (error) {
      return null;
    }
  } else {
    // If we're on the client, get the token from the document cookies
    const token = document.cookie;
    console.log("cookie=============================", token);
    //const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
    if (!token) {
      return null;
    }
    try {
      const decoded = jwt.decode(token);
      return decoded;
    } catch (error) {
      return null;
    }
  }
}
