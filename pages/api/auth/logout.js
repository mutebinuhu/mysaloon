import { destroyCookie } from 'nookies';

export default async (req, res) => {
  destroyCookie({ res }, 'auth', {
    path: '/',
  });

  destroyCookie({ res }, 'user', {
    path: '/',
  });

  res.status(200).json({ message: 'Logout successful' });
};
