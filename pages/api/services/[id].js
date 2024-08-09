// app/api/services/[id]/route.js
import dbConnect from '../../../lib/mongoose';
import Service from '@/models/Service';
import { NextResponse } from 'next/server';

export default async function handler(req, res) {
    const { method } = req;
    const { id } = req.query;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const request = await Service.findById(id);
                if (!request) {
                    return res.status(404).json({ success: false });
                }
                res.status(200).json({ success: true, data: request });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const request = await Service.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                });
                if (!request) {
                    return res.status(404).json({ success: false });
                }
                res.status(200).json({ success: true, data: request });
            } catch (error) {
                console.log("error", error.message)
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedRequest = await Service.deleteOne({ _id: id });
                if (!deletedRequest) {
                    return res.status(404).json({ success: false });
                }
                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:

            res.status(400).json({ success: false });
            break;
    }
}

