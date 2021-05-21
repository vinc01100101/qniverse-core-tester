const internalNodeModulesRegExp = /src(?!\/(?!.*js))/;
const externalNodeModulesRegExp = /node_modules(?!\/@zeit(?!.*node_modules))/;

module.exports = {
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // defaultLoaders.babel.options.sourceType = "unambiguous";
        config.module.rules.push({
            test: /\.+(js|jsx)$/,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            ],
            include: [internalNodeModulesRegExp],
            // exclude: [externalNodeModulesRegExp],
        });
        // Important: return the modified config
        return config;
    },
};
