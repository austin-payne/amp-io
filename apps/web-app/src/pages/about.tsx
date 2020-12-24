import Link from 'next/link';
import { Button } from '@amp-io/core-ui';

const AboutPage = () => (
    <>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
            <Link href="/" passHref>
                <Button variant="contained" color="primary">
                    Go home
                </Button>
            </Link>
        </p>
    </>
);

export default AboutPage;
