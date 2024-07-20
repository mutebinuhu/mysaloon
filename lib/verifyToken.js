import { jwtVerify } from 'jose';

export const verifyToken = async (token, secret) => {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    return { valid: true, payload };
  } catch (err) {
    return { valid: false, error: err.message };
  }
};