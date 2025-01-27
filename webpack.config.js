const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin"); // HTML 파일을 후처리하는데 사용한다. (동적으로 생성되는 css, html, js)
const {CleanWebpackPlugin} = require("clean-webpack-plugin"); // 빌드할때마다 output 폴더를 제거
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //bundle된 js에서 css file을 나눠서 build
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin') //bundle된 js에서 css file을 나눠서 build
const TerserPlugin = require("terser-webpack-plugin");
const child_process = require("child_process");
const {GitRevisionPlugin} = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();
const CopyPlugin = require("copy-webpack-plugin");


module.exports = (env, argv) => {
    const mode = argv.mode || 'development';

    return {
        devServer: {
            overlay: true,
            proxy: {
                '/api': {
                    target: 'http://localhost:8000',
                    changeOrigin: true,
                },
            },
            hot: true, // hot loading
        },
        mode: mode,
        entry: {
            bundle: path.resolve(__dirname, 'src/index.tsx'),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                            ie: 11
                                        },
                                        useBuiltIns: 'usage',
                                        corejs: 3
                                    }
                                ],
                                '@babel/preset-react',
                                '@babel/preset-typescript'
                            ],
                        },
                    },
                },
                {
                    test: /\.js?$/,
                    use: ["babel-loader"],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(scss|css)$/i, // CSS 파일을 처리하기 위한 규칙 추가
                    use: ['style-loader', 'css-loader',
                        //'sass-loader'
                    ],
                },
                {
                    test: /\.(jpg|png|svg|gif)$/,
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        limit: 10000, // 10kb
                    }
                }
            ],
        },
        resolve: {
            extensions: ['.js', '.json', '.wasm', '.ts', '.tsx'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, "dist"),
        },
        optimization: {
            minimizer: [
                new CssMinimizerWebpackPlugin(),
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                          drop_console: true // 콘솔 로그를 제거한다.
                        },
                        output: {
                            comments: true, // 주석을 제거하지 않음
                        },
                    },
                }),
            ],
        },
/*        externals: {
            axios: "axios"
        },*/
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                templateParameters: {
                    env: mode === 'development' ? '(development)' : ''
                },
                minify: { // NODE_ENV Mode 에 따라 Production 에서만 적용하게 처리
                    collapseWhitespace: true, //공백 제거 한줄
                    removeComments: true, //주석제거
                }
            }),
            new webpack.BannerPlugin({
                raw: true,
                banner: `
                /**
                /* © 2025 YoonGiBum, Inc. All rights reserved.
                /* Build Date: ${new Date().toLocaleString()}
                /* Commit Version: ${gitRevisionPlugin.version()}
                /* Author: 'YoonGiBum'
                /**
                `,
                stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css", // Customize the output CSS filename
            }),
            new CopyPlugin({
                patterns: [
                    { from: "./node_modules/axios/dist/axios.js", to: "./axios..js" },
                ],
            }),
        ],
    };
}