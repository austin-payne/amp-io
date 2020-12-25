import { GetServerSidePropsContext } from 'next';
import { ISession } from '@auth0/nextjs-auth0/dist/session/session';
import { auth0 } from '../auth0';

export const getSession = async ({
    req,
}: GetServerSidePropsContext): Promise<ISession | undefined> => {
    try {
        const session = await auth0.getSession(req);
        if (session && session.user) {
            return session;
        }
    } catch (error) {
        //
    }
};
