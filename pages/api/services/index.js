// app/api/services/route.js
import dbConnect from '../../../lib/mongoose';
import Service from '@/models/Service';
import { NextResponse } from 'next/server';
import authMiddleware from '../../../middleware/auth';

const handler = async (req, res) => {
    const { method, body } = req;

    await dbConnect();

    switch (method) {
        case 'GET':

            try {
              const services = await Service.find({});
              return res.status(200).json(services);
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
              const body = await req.body
              console.log("data", body)
              const service = new Service(body);
              await service.save();
              return res.status(200).json(service);
            } catch (error) {
                console.log("err", error.message)
                res.status(400).json({ success: false });
            }
            break;
        default:

            res.status(400).json({ success: false });
            break;
    }
}

export default handler;

