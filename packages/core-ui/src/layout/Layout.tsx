import { memo } from 'react';
import { Container, createStyles, makeStyles } from '@material-ui/core';
import { AnimateSharedLayout } from 'framer-motion';
import { Header } from '../header';

const useStyles = makeStyles(() => createStyles({}));

export interface LayoutProps {
    page: React.ReactNode;
}

export const Layout = memo(({ page }: LayoutProps) => {
    useStyles();

    return (
        <AnimateSharedLayout>
            <Header />
            <Container maxWidth="lg">{page}</Container>
        </AnimateSharedLayout>
    );
});
