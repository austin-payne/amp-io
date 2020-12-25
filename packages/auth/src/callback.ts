import { NextApiRequest, NextApiResponse } from 'next';
import { auth0 } from './auth0';

export const callback = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await auth0.handleCallback(req, res, { redirectTo: '/' });
    } catch (error) {
        res.status(500).end((error as Error)?.message ?? 'unknown error');
    }
};
