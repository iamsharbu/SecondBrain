const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js', //where to start resolving dependency graph
    output: {
        path: path.join(__dirname, '/dist'), //folder to put bundle.js to
        filename: 'bundle.js' //single file where all js files bundled
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html' //tells webpack to inject bundle.js into this html
        })
    ],
    module: { //pass rules to tell loader on how to form bundles using modules
        rules: [{
            test: [/.js$/],
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', 
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    }
}