const path = require('path');
const nodeExternals = require('webpack-node-externals'); // For excluding node modules

module.exports = {
    entry: './index.js', // Entry point for your Node.js application
    target: 'node', // Specify that this is for Node.js
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'index.js' // Output filename
    },
    mode: 'development',
    module: {
    rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        options: {
        presets: ['@babel/preset-env'],
            // Optional: Babel plugins for Node-specific features
            // plugins: ['@babel/plugin-transform-runtime']
            }
        }
    }
    ]
    },
    externals: [nodeExternals()], // Exclude node_modules from the bundle
    node: {
        // Provide Node.js built-in globals (e.g., __dirname, __filename)
        __dirname: false,
        __filename: false
    }
};