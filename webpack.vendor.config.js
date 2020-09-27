const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        vendor1: ['./src/demo1.js', './src/demo2.js', 'vue'],
        vendor2: ['vue']
    },
    output: {
        path: path.resolve(__dirname, 'dist_dev'),
        // filename: 'dll.[name].js'
        filename: '[name].js',  //不需要经常修改的第三方库不需要加hash
        library: '[name]_[hash]'
    },
    plugins: [
        new CleanWebpackPlugin(),

        new webpack.DllPlugin({
            context: __dirname,
            name: '[name]_[hash]',
            path: path.join(__dirname, 'dist_dev/manifest.json')
        })
    ]
}