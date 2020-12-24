import { DocumentContext } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export const createDocumentSheets = (ctx: DocumentContext) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            // eslint-disable-next-line react/jsx-props-no-spreading
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    return sheets;
};
