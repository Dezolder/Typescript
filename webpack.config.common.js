const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./index.ts",
    output: {
        filename: "[name].[contenthash].js",
        assetModuleFilename: 'assets/[name][ext]',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public/assets/favicon.png"),
                    to: path.resolve(__dirname, "dist/assets"),
                },
            ],
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpg|svg|mp3|ttf)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'assets/[name][ext]'
                }
            },
            {
                test: /\.[jt]sx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
