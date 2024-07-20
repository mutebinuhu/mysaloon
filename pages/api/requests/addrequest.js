import dbConnect from '../../../lib/mongoose';
import Request from '../../../models/Request';


const handler = async (req, res) => {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {

                const request = await Request.create(req.body);
                res.status(201).json({ success: true, data: request });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:

            res.status(400).json({ success: false });
            break;
    }
}

export default handler;