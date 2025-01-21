const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
            },
        },
    },
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.tsx'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                //exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
            {
                test: /\.css$/i, // CSS 파일을 처리하기 위한 규칙 추가
                use: ['style-loader', 'css-loader'], // 'style-loader'와 'css-loader'를 사용
            },
            {
                test: /\.png$/,
                loader: 'file-loader',
                options: {
                    publicPath:'./dist/',
                    name: '[name].[ext]?[hash]'
                }
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin(),
    ],
};