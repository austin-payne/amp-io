import BaseDocument, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';
import { Children } from 'react';
import { createDocumentSheets, getPostCssElement } from '@amp-io/core-ui';

class Document extends BaseDocument {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheets = createDocumentSheets(ctx);

        const initialProps = await BaseDocument.getInitialProps(ctx);

        const element = await getPostCssElement(sheets);

        return {
            ...initialProps,
            styles: [...Children.toArray(initialProps.styles), element],
        };
    }

    render() {
        return (
            <Html lang="en" style={{ height: '100vh' }}>
                <Head />
                <body style={{ height: '100%' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
