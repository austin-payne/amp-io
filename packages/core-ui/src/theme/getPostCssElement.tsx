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
    const postcss = require('postcss');
    const flexbugs = require('postcss-flexbugs-fixes');
    const presetEnv = require('postcss-preset-env');
    const CleanCSS = require('clean-css');

    const processor = postcss([
        flexbugs() as Plugin,
        presetEnv({
            autoprefixer: {
                flexbox: 'no-2009',
            },
            stage: 3,
            features: {
                'custom-properties': false,
            },
        }) as Plugin,
    ]);
    const cleanCSS = new CleanCSS();

    return async (sheets: ServerStyleSheets) => {
        const css = sheets.toString();
        if (css) {
            const processed = await processor.process(css, {
                from: undefined,
            });
            const cleaned = cleanCSS.minify(processed.css).styles;

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
