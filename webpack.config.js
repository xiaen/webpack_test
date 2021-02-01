const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dists'),
        filename: 'bundle.js'
    },
    mode: 'production'
};