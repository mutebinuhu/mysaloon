import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { verifyToken } from './lib/verifyToken';


export async function middleware (req) {
  const token = req.cookies.get('auth')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const { valid, payload, error } = await verifyToken(token, process.env.NEXT_PUBLIC_JWT_TOKEN);

  if (!valid) {
    console.error('Token verification failed:', error);
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Add payload to the request if needed
  req.decodedToken = payload;

  return NextResponse.next();
}

export const config = {
  matcher: ['/protected/:path*', '/admin'], // Add paths you want to protect
};
