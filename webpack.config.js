// const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        index: "./uview-ui/index.js",
    },
    output: {
		path: __dirname + "/uview-ui-release-build",
        filename: "[name].js",
        libraryExport: "default",
		libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
