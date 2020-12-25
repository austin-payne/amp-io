import { Button, Link } from '@amp-io/core-ui';

const AboutPage = () => (
    <>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
            <Button
                component={Link}
                variant="contained"
                color="primary"
                href="/"
                naked
            >
                Go home
            </Button>
        </p>
    </>
);

export default AboutPage;
