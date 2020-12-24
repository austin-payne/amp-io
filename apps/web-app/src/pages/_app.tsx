import type { AppProps } from 'next/app';
import { ThemeProvider } from '@amp-io/core-ui';

const App = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
    </ThemeProvider>
);

export default App;
