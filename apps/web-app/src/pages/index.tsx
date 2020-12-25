import { useAuth } from '@amp-io/auth';
import { Button, Link } from '@amp-io/core-ui';

const IndexPage = () => {
    const auth = useAuth();

    return (
        <>
            <h1>Hello v2</h1>
            <p>{auth.ready && JSON.stringify(auth.user, null, 4)}</p>
            <p>
                {auth.ready && !auth.user && (
                    <Button
                        component={Link}
                        variant="contained"
                        color="primary"
                        href="/api/login"
                        naked
                    >
                        Log In
                    </Button>
                )}
                {auth.ready && auth.user && (
                    <Button
                        component={Link}
                        variant="contained"
                        color="primary"
                        href="/api/logout"
                        naked
                    >
                        Log Out
                    </Button>
                )}
            </p>
            <p>
                {auth.ready && auth.user && (
                    <Button
                        component={Link}
                        variant="contained"
                        color="primary"
                        href="/private"
                        naked
                    >
                        Private Route
                    </Button>
                )}
            </p>
            <p>
                <Button
                    component={Link}
                    variant="contained"
                    color="primary"
                    href="/about"
                    naked
                >
                    About
                </Button>
            </p>
        </>
    );
};

export default IndexPage;
