const path = require('path');

const serverConfig = {
    target: 'node',
    entry: './src/ondemand-client.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'barchart-ondemand-client-node.js'
    }
};

const clientConfig = {
    entry: './src/ondemand-client.js',
    output: {
        filename: 'barchart-ondemand-client.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'Barchart'
    },
    mode: 'production'
}

module.exports = [clientConfig, serverConfig];