import { Button } from '@amp-io/core-ui';
import Link from 'next/link';

const IndexPage = () => (
    <>
        <h1>Hello v2</h1>
        <p>
            <Link href="/about" passHref>
                <Button variant="contained" color="primary">
                    About
                </Button>
            </Link>
        </p>
    </>
);

export default IndexPage;
