import { Container, createStyles, makeStyles } from '@material-ui/core';
import { memo } from 'react';
import { Header } from '../header';

const useStyles = makeStyles(() => createStyles({}));

export interface LayoutProps {
    page: React.ReactNode;
}

export const Layout = memo(({ page }: LayoutProps) => {
    useStyles();

    return (
        <>
            <Header />
            <Container maxWidth="lg">{page}</Container>
        </>
    );
});
