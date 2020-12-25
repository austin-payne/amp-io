import { NextApiRequest, NextApiResponse } from 'next';
import { auth0 } from '../auth0';

export const logout = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await auth0.handleLogout(req, res);
    } catch (error) {
        res.status(500).end((error as Error)?.message ?? 'unknown error');
    }
};
