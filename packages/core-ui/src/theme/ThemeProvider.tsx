import {
    CssBaseline,
    ThemeProvider as MuiThemeProvider,
    ThemeProviderProps as MuiThemeProviderProps,
} from '@material-ui/core';
import { memo } from 'react';
import { defaultTheme } from './theme';

export interface ThemeProviderProps {
    children: React.ReactNode;
    theme?: MuiThemeProviderProps['theme'];
}

export const ThemeProvider = memo(
    ({ children, theme = defaultTheme }: ThemeProviderProps) => (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    )
);
