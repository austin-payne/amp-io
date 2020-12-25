import { GetServerSideProps } from 'next';

type PrivatePageProps = {
    user: unknown;
};

const PrivatePage = ({ user }: PrivatePageProps) => {
    return (
        <>
            <h1>Private Route</h1>
            <p>{JSON.stringify(user, null, 4)}</p>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<PrivatePageProps> = async (
    ctx
) => {
    const { getSession } = await import('@amp-io/auth/src/server');
    const session = await getSession(ctx);

    if (!session) {
        return {
            redirect: {
                statusCode: 301,
                destination: '/',
            },
        };
    }

    return { props: { user: session.user } };
};

export default PrivatePage;
