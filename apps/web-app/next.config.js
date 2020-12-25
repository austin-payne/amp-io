const path = require('path');

module.exports = {
    webpack: function (config, { defaultLoaders, isServer, webpack }) {
        const resolvedBaseUrl = path.resolve(config.context, '../../');
        config.module.rules = [
            ...config.module.rules,
            // Fix paths to yarn workspaces
            {
                test: /\.(tsx|ts|js|mjs|jsx)$/,
                include: [resolvedBaseUrl],
                use: defaultLoaders.babel,
                exclude: (excludePath) => {
                    return /node_modules/.test(excludePath);
                },
            },
        ];

        // Fix fs when using require on backend
        if (!isServer) {
            config.node = {
                fs: 'empty',
            };
        }

        return config;
    },

    onDemandEntries: {
        // Make sure entries are not getting disposed.
        maxInactiveAge: 1000 * 60 * 60,
    },
};
