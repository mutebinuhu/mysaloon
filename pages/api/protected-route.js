import { protectRoute } from '../../middleware/auth';

const handler = async (req, res) => {
    res.status(200).json({ message: 'This is a protected route' });
};

export default protectRoute(handler);