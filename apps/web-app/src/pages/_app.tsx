import type { AppProps } from 'next/app';
import { ThemeProvider, Layout } from '@amp-io/core-ui';
import { memo } from 'react';

const App = memo(({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Layout page={<Component {...pageProps} />} />
        </ThemeProvider>
    );
});

export default App;
