const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/index.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/index.css'
        }),
        new CleanWebpackPlugin({
            verbose: true,
            cleanOnceBeforeBuildPatterns: [
                '!.gitignore',
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname, "src"),
                    from: "*.html",
                },
            ],
        }),
    ],
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: "css-loader", options: {sourceMap: true}},
                ],
            },
            {
                test: /\.html$/i,
                type: "asset/resource",
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new HtmlMinimizerPlugin(),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        "default",
                        {
                            discardComments: {removeAll: true},
                        },
                    ],
                },
            }),
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
    devServer: {
        compress: true,
        hot: true,
        liveReload: true, // reloads webpage when changes are detected
        // host: '0.0.0.0',
        port: 9000,
        open: true,
        https: true,
        server: 'https',
        headers: {
            'X-Custom-Foo': 'bar',
        },
        client: {
            logging: 'verbose',
            progress: true,
            overlay: true,
        },
        static: {
            directory: path.join(__dirname, 'src'),
        },
    },
    watchOptions: {
        aggregateTimeout: 1000,
        // ignored: '!src',
    },
};