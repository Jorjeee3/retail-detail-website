const path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
var mode = 'development';
var sourceMap = 'source-map';
module.exports = env => {

    if (env.production !== 'false') {
        mode = 'production';
        sourceMap = 'hidden-source-map';
    }

    return {
        mode: mode,
        devtool: sourceMap,
        optimization: {
            minimize: true
        },
        entry:
            {
                'css/global': './assets/scss/global.scss',
                'css/fonts': './assets/fonts/fonts.scss',
                'css/reset': './assets/reset/reset.scss',
                'css/header': './assets/containers/header.scss',
                'css/latestArticles': './assets/containers/latestArticles.scss',
                'css/footer': './assets/containers/footer.scss',
                'css/mostReadFood': './assets/containers/mostReadFood.scss',
                'css/sidebar': './assets/containers/sidebar.scss',
                'css/spotlight': './assets/containers/spotlight.scss',
                'css/other': './assets/containers/other.scss',
                'css/mostRead': './assets/containers/mostRead.scss',
                'css/retailDetail': './assets/containers/retailDetail.scss',
            },
        output: {
            path: path.resolve(__dirname, 'static'),
            filename: '[name].min.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                {
                    test: /\.(css|sass|scss)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|ico|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            query: {
                                limit: '10000',
                                name: "[hash].[ext]",
                                outputPath: 'images/',
                                publicPath: '../images/',
                            }
                        }
                    ],
                },
                {
                    test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                    use: [{
                        loader: 'url-loader',
                        query: {
                            limit: '10000',
                            name: "[hash].[ext]",
                            outputPath: 'fonts/',
                            publicPath: '../fonts/',
                        }
                    }]
                }
            ],
        },
        plugins: [
            new FixStyleOnlyEntriesPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].min.css',
            }),
        ],
    }
};