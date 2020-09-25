const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'none',
    devtool: 'source-map',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.css$/,
                oneOf: [
                    // 这里匹配 `<style module>`
                    {
                        resourceQuery: /module/,
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: {
                                        // localIdentName: '[path][local][name]'
                                        localIdentName: '[local]__[hash:base64:5]'
                                    },
                                    sourceMap: true,
                                }
                            }
                        ],
                        exclude: [path.resolve(__dirname, 'src/common/font')],
                        // include: []

                    },
                    // 这里匹配普通的 `<style>` 或 `<style scoped>`
                    {
                        use: [
                            'style-loader',
                            'css-loader'
                        ]
                    }
                ]
                // use: [
                //     'style-loader',
                //     {
                //         loader: 'css-loader',
                //         options: {
                //             modules: {
                //                 // localIdentName: '[path][local][name]'
                //                 localIdentName: '[local]__[hash:base64:5]'
                //             }
                //         }
                //     }
                // ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name]-[hash:8]-yuanben.[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: '测试demo',
            filename: 'index.html',
            template: 'src/index.html',
            chunksSortMode: 'none',
            // inject: 'body',
            // env: {
            //     manifest: '/assets/manifest.json?v=0.3.9'
            // },
            // favicon: 'src/favicon.ico',
            // hash: true
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '~': path.resolve(__dirname, 'node_modules')
        }
    }
}