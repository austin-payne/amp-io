import type { AppProps } from 'next/app';
import { AuthProvider } from '@amp-io/auth';
import { ThemeProvider, Layout } from '@amp-io/core-ui';
import { memo } from 'react';

const App = memo(({ Component, pageProps }: AppProps) => {
    return (
        <AuthProvider userRoute="/api/profile">
            <ThemeProvider>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Layout page={<Component {...pageProps} />} />
            </ThemeProvider>
        </AuthProvider>
    );
});

export default App;
