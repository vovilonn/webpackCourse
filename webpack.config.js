const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"), // source files
    mode: "development", // or production
    entry: {
        main: "./index.js",
        analytics: "./analytics.js",
    }, //входные файлы
    output: {
        filename: "[name].[contenthash].js", // выходной файл
        path: path.resolve(__dirname, "dist"), //директория выходного файла
    },
    resolve: {
        extensions: [".js", ".json"],
        alias: {
            "@models": path.resolve(__dirname, "src/models"),
            "@": path.resolve(__dirname, "src"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"], // style-loader<===<css-loader<===<.css
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["file-loader"],
            },
        ],
    },
};
