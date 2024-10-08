import dbConnect from '../../../lib/mongoose';
import Request from '../../../models/Request';
import authMiddleware from '../../../middleware/auth';
import User from '@/models/User';

const handler = async (req, res) => {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            
            try {
                const requests = await User.find({}).select('username email role').sort({createdAt:-1});
                res.status(200).json({ success: true, data: requests });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const request = await User.create(req.body);
                res.status(201).json({ success: true, data: request });
            } catch (error) {
                res.status(400).json({ success: false , error:error.message});
            }
            break;
        default:

            res.status(400).json({ success: false });
            break;
    }
}

//export default authMiddleware(handler);
export default handler;