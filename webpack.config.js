const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'none',
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
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|gif|png|jpe?g|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name]-[hash:8]-yuanben.[ext]'
                        }
                    }
                ]
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
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '~': path.resolve(__dirname, 'node_modules')
        }
    }
}