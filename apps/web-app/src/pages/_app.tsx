import type { AppProps } from 'next/app';
import { ThemeProvider, Layout } from '@amp-io/core-ui';

const App = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Layout page={<Component {...pageProps} />} />
    </ThemeProvider>
);

export default App;
