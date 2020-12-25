import { Button, Link } from '@amp-io/core-ui';

const IndexPage = () => (
    <>
        <h1>Hello v2</h1>
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

export default IndexPage;
