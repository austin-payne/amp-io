import { NextApiRequest, NextApiResponse } from 'next';
import { auth0 } from '../auth0';

export const login = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await auth0.handleLogin(req, res);
    } catch (error) {
        res.status(500).end((error as Error)?.message ?? 'unknown error');
    }
};
