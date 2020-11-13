// const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        route: "./uview-ui/libs/function/route.js",
        index: "./uview-ui/libs/request/index.js",
    },
    output: {
		path: __dirname + "/uview-ui-release-build",
        filename: "[name].js",
        library: "Rules",
        libraryExport: "default",
        libraryTarget: 'umd'
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
