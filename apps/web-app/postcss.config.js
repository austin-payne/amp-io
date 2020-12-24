module.exports = {
    plugins:
        // In production, css manually processed in _document.tsx
        process.env.NODE_ENV === 'production'
            ? []
            : [
                  'postcss-flexbugs-fixes',
                  [
                      'postcss-preset-env',
                      {
                          autoprefixer: {
                              flexbox: 'no-2009',
                          },
                          stage: 3,
                          features: {
                              'custom-properties': false,
                          },
                      },
                  ],
              ],
};
