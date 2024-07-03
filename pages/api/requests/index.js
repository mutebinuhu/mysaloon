import dbConnect from '../../../lib/mongoose';
import Request from '../../../models/Request';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':

            try {
                const requests = await Request.find({}).select('name phone service prefferedDate prefferedTime status createdAt').sort({createdAt:-1});
                res.status(200).json({ success: true, data: requests });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
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
