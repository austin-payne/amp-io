import { createMuiTheme, colors } from '@material-ui/core';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {}
    interface ThemeOptions {}
}

export const defaultTheme = createMuiTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: colors.cyan.A100,
            main: colors.cyan.A400,
            dark: colors.cyan.A700,
        },
        secondary: {
            light: colors.amber.A100,
            main: colors.amber.A200,
            dark: colors.amber.A400,
        },
    },
});
