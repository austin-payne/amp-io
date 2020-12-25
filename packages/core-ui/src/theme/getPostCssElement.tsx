import { ServerStyleSheets } from '@material-ui/core';

const createGetPostCssElement = () => {
    if (process.env.NODE_ENV !== 'production') {
        return async (sheets: ServerStyleSheets) => sheets.getStyleElement();
    }

    /* eslint-disable global-require */
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/no-var-requires */
    const CleanCSS = require('clean-css');

    const cleanCSS = new CleanCSS();

    return async (sheets: ServerStyleSheets) => {
        const css = sheets.toString();
        if (css) {
            const cleaned = cleanCSS.minify(css).styles;

            return (
                <style
                    id="jss-server-side"
                    key="jss-server-side"
                    /* eslint-disable react/no-danger */
                    dangerouslySetInnerHTML={{ __html: cleaned }}
                />
            );
        }
        return sheets.getStyleElement();
    };
};

export const getPostCssElement: (
    sheets: ServerStyleSheets
) => Promise<React.ReactElement> = createGetPostCssElement();
